import { IUser } from "./user";

export interface IReviewItem {
  id: number;
  customer: IUser;
  rating: number;
  createAt: string;
  variant: string;
  content: string;
  images: string[];
}

export interface IReview {
  pageNum: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  sortDir: string;
  sortField: string;
  ratingStars: number[];
  data: IReviewItem[];
}
