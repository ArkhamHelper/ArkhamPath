export interface IBaseRepository<TModel> {
  findOneById(id: string | number): Promise<TModel | undefined>;
  save(model: TModel): Promise<TModel>;
  delete(id: string | number): Promise<void>;
}
