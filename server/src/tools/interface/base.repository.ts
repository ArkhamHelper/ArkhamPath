export interface IBaseRepository<TModel> {
  save(model: TModel): Promise<TModel>;
  delete(id: string | number): Promise<void>;
  findOneById(id: string | number): Promise<TModel | undefined>;
}
