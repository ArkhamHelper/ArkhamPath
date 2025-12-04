import { isEqual, cloneDeep } from 'lodash';
import type { IBaseRepository } from '../interface/base.repository';

export interface IBaseFakeRepository<
  TModel extends { id: string | number; [key: string]: any },
> extends IBaseRepository<TModel> {
  /**
   * @description Функции для тестирования
   */

  set(models: TModel[]): void;
  wasSaved(model: TModel): boolean;
  wasDeleted(id: string | number): boolean;

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
    return this.models.find((m) => +m.id === +id);
  }

  async save(model: TModel): Promise<TModel> {
    const foundModelIndex = this.models.findIndex((m) => +m.id === +model.id);

    if (foundModelIndex >= 0) {
      this.models[foundModelIndex] = model;
    } else {
      model.id = this.nextId();
      this.models.push(model);
    }

    return model;
  }

  async delete(id: string | number): Promise<void> {
    this.models = this.models.filter((m) => +m.id !== +id);
  }

  set(models: TModel[]): void {
    this.models = cloneDeep(models);
  }

  wasSaved(model: TModel): boolean {
    const found = this.models.find((m) => +m.id === +model.id);
    const errors: string[] = [];

    if (!found) {
      throw new Error(`Объект с id ${model.id} не найден`);
    }

    const missingFields = Object.keys(model).filter((key) => !(key in found));
    const mismatchedFields = Object.keys(model).filter(
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

  wasDeleted(id: string | number): boolean {
    const found = this.models.find((m) => +m.id === +id);

    return !found;
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
