export interface IService<T, K> {
  create: (item: K) => Promise<T>;
  delete: (id: string) => Promise<T>;
  edit: (item: K) => Promise<T>;
  get: (id: string) => Promise<T>;
  getMany: () => Promise<T>;
}
