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
export interface Response {
  data?: any;
  error?: {data: IError};
}
export interface IError {
  status: string;
  message: string;
}
