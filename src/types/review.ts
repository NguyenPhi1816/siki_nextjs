import { IUserFull } from "./user";

export interface IReviewItem {
  id: number;
  content: string;
  rating: number;
  customer: IUserFull;
  variant: string;
  create_at: string;
  updated_at: string;
}

export interface IReview {
  pageNum: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  data: IReviewItem[];
}

export type SaveReviewRequest = {
  token: string;
  productId: number;
  content: string;
  ratingStar: number;
};
