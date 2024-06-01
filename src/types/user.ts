import { Gender } from "@/enums/gender";

export interface IUser {
  id: number;
  name: string;
  image: string;
}

export interface IAuthResponse {
  _id: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  gender: Gender;
  dateOfBirth: string;
  avatar: string;
  email: string;
  __v: number;
  access_token: string;
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
