export interface APIResponse {
  data: Datum[];
  meta: Meta;
}

export interface APIData {
  id: number;
  attributes: CardItem;
}

export interface CardItem {
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  isNew: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  type: string;
  img: Img;
  img2: Img;
}

export interface Img {
  data: Data;
}

export interface Data {
  id: number;
  attributes: ImgAttributes;
}

export interface ImgAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: null;
  height: null;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
