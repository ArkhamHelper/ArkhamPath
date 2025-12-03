import { isEqual } from 'lodash';

export interface IBaseFakeRepository<
  TModel extends { id: string | number; [key: string]: any },
> {
  /**
   * @description Стандартные функции repository
   */

  save(model: TModel): Promise<TModel>;
  findOneById(id: string | number): Promise<TModel | undefined>;

  /**
   * @description Функции для тестирования
   */

  set(models: TModel[]): void;
  wasSaved(model: TModel): boolean;

  /**
   * @description Функции для fakeRepository
   */

  getAll(): TModel[];
  getAllBy(checkCondition: (model: TModel) => boolean): TModel[];
}

export class BaseFakeRepository<
  TModel extends { id: string | number; [key: string]: any },
> implements IBaseFakeRepository<TModel> {
  private models: TModel[] = [];

  async findOneById(id: string | number): Promise<TModel | undefined> {
    return this.models.find((m) => m.id === id);
  }

  async save(model: TModel): Promise<TModel> {
    const foundModelIndex = this.models.findIndex((m) => m.id === model.id);

    if (foundModelIndex > 0) {
      this.models[foundModelIndex] = model;
    } else {
      model.id = this.nextId();
      this.models.push(model);
    }

    return model;
  }

  set(models: TModel[]): void {
    this.models.push(...models);
  }

  wasSaved(model: TModel): boolean {
    const found = this.models.find((m) => +m.id === +model.id);
    const errors: string[] = [];

    if (!found) {
      throw new Error(`Объект с id ${model.id} не найден`);
    }

    const missingFields = Object.keys(model).filter((key) => !(key in found));
    const mismatchedFields = Object.keys(model).filter(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      (key) => key !== 'id' && key in found && !isEqual(found[key], model[key]),
    );

    if (missingFields.length) {
      errors.push(
        `Найден объект, но у него не хватает полей: ${missingFields.join(', ')}`,
      );
    }

    if (mismatchedFields.length) {
      errors.push(
        `У объекта не совпадают значения полей: ${mismatchedFields.join(', ')}`,
      );
    }

    if (missingFields.length || mismatchedFields.length) {
      errors.push(
        `Максимально похожий объект: ${JSON.stringify(found, null, 2)}`,
      );
      throw new Error(errors.join('\n'));
    }

    return true;
  }

  getAll(): TModel[] {
    return this.models;
  }

  getAllBy(checkCondition: (model: TModel) => boolean): TModel[] {
    return this.models.filter(checkCondition);
  }

  private nextId(): string | number {
    const maxId = this.models.reduce(
      (maxId, model) => Math.max(maxId, +model.id),
      0,
    );

    return maxId + 1;
  }
}
