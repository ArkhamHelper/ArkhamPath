export interface IBaseFakeRepository<TModel extends { id: string | number }> {
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
  TModel extends { id: string | number },
> implements IBaseFakeRepository<TModel> {
  private models: TModel[] = [];

  async findOneById(id: string | number): Promise<TModel | undefined> {
    return this.models.find((m) => m.id === id);
  }

  async save(model: TModel): Promise<TModel> {
    const foundModelIndex = this.models.findIndex((m) => m.id === model.id);

    if (foundModelIndex) {
      this.models[foundModelIndex] = model;
    } else {
      this.models.push(model);
    }

    return model;
  }

  set(models: TModel[]): void {
    this.models.push(...models);
  }

  wasSaved(model: TModel): boolean {
    return this.models.some((m) => m.id === model.id);
  }

  getAll(): TModel[] {
    return this.models;
  }

  getAllBy(checkCondition: (model: TModel) => boolean): TModel[] {
    return this.models.filter(checkCondition);
  }
}
