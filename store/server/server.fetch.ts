import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IRegister, IToken} from '../../type/user';
import {IReqCode, Response} from '../../type/fetch';

export const ServerFetch = createApi({
  reducerPath: 'serverFetch',
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://project-name-oqml.onrender.com',
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    registerUser: build.mutation<Response, IRegister>({
      query: body => ({
        url: 'auth/register',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
    }),
    Login: build.mutation({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
      invalidatesTags: ['User'],
    }),
    sendEmail: build.mutation<Response, IToken>({
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
    checkAndRegister: build.mutation<Response, IReqCode>({
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
    getUser: build.mutation<Response, IToken>({
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
  }),
});

export const {
  useSendEmailMutation,
  useRegisterUserMutation,
  useGetUserMutation,
  useLoginMutation,
  useCheckAndRegisterMutation,
} = ServerFetch;
