export interface ICategory {
  id: number;
  imageUrl: string;
  parent: string;
  children: string[];
}

export interface IBreadcrumb {
  path: string;
  title: string;
}
