import { Gender } from "@/enums/gender";

export interface IUser {
  id: number;
  name: string;
  image: string;
}

export interface IUserFull {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  avatar: string;
  phoneNumber: string;
  dateOfBirth: string;
}

export interface IAuthResponse {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  avatar: string;
  phoneNumber: string;
  dateOfBirth: string;
  role: string;
}

export type ProfileResponseType = {
  id: string;
  username: string; //email
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  avatar: null | string;
  phoneNumber: string;
  dateOfBirth: string;
};

export type SignUpRequest = {
  email: string;
  address: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  dateOfBirth: string;
};
