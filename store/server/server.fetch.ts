import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ILogin, IProducts, IRegister, IToken} from '../../type/user';
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
    getProducts: build.query<Response<IProducts>, number>({
      query: body => ({
        url: `product/get?page=${body}`,
      }),
      // providesTags: ['User'],
    }),
  }),
});

export const {
  useSendEmailMutation,
  useRegisterUserMutation,
  useGetUserMutation,
  useLoginMutation,
  useCheckAndRegisterMutation,
  useGetProductsQuery,
} = ServerFetch;
