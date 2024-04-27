import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

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

export interface RegisterResponse {
  data?: any;
  error?: {data:IError};
}
export interface IError {
  status: string;
  message: string;
}
