export interface IBaseRepository<TModel> {
  save(model: TModel): Promise<TModel>;
  findOneById(id: string | number): Promise<TModel | undefined>;
}
