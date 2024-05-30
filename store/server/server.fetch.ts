import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IGetProductUser, ILogin, IProducts, IRegister, IToken} from '../../type/user';
import {IReqCode, Response} from '../../type/fetch';

export const ServerFetch = createApi({
  reducerPath: 'serverFetch',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://project-name-oqml.onrender.com',
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    registerUser: build.mutation<Response<IToken>, IRegister>({
      query: body => ({
        url: 'auth/register',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
    }),
    login: build.mutation<Response<IToken>, ILogin>({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
      // invalidatesTags: ['User'],
    }),
    sendEmail: build.mutation<Response<any>, IToken>({
      query: (body: IToken) => ({
        url: 'auth/sendemail',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
      // providesTags: ['User'],
    }),
    checkAndRegister: build.mutation<Response<any>, IReqCode>({
      query: body => ({
        url: 'auth/checkandregister',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
      // invalidatesTags: ['User'],
    }),
    getUser: build.mutation<Response<any>, IToken>({
      query: body => ({
        url: 'user/get',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
      // providesTags: ['User'],
    }),
    getProducts: build.query<Response<IProducts[]>, number>({
      query: body => ({
        url: `product/get?page=${body}`,
      }),
      // providesTags: ['User'],
    }),
    getProductsUser: build.query<Response<IGetProductUser>, string>({
      query: body => ({
        url: `user/getProductsUser?token=${body}`,
      }),
      // providesTags: ['User'],
    }),
    getProduct: build.query<Response<IProducts>, string>({
      query: body => ({
        url: `product/getProduct?id=${body}`,
      }),
      // providesTags: ['User'],
    }),
    addProduct: build.mutation<Response<string>, any>({
      query: body => ({
        url: 'product/addproduct',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
      // providesTags: ['User'],
    }),
  }),
});

export const {
  useGetProductsUserQuery,
  useAddProductMutation,
  useGetProductQuery,
  useSendEmailMutation,
  useRegisterUserMutation,
  useGetUserMutation,
  useLoginMutation,
  useCheckAndRegisterMutation,
  useGetProductsQuery,
} = ServerFetch;
