import React from 'react';
export type MyErrorType = {
  code: number;
  message: string;
};
export interface UserError {
  error: MyErrorType;
}
export interface UserError {
  data: MyErrorType;
}
export interface IReqCode {
  code: string;
  token: string;
}
export interface Response<T> {
  data?: T;
  error?: IError;
}
export interface IError {
  status: string;
  error: string;
}
export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Product: {id: string};
};
export interface IUserInfo {
  id: string;
  email: string;
  name: string;
  password: string;
  lunchId: string[];
  breakfastId: string[];
  dinnerId: string[];
  lunchCalories: number;
  dinnerCalories: number;
  breakfastCalories: number;
  lunchDay: string;
  breakfastDay: string;
  dinnerDay: string;
}
export type ContextProviderProps = {
  children: React.ReactNode;
};

export interface IUseContextUser {
  userInfo: IUserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo | null>>;
}
