import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ILogin, IRegister, IToken} from '../../type/user';
import { RegisterResponse } from '../../type/fetch';

export const ServerFetch = createApi({
  reducerPath: 'serverFetch',
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://project-name-oqml.onrender.com',
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    registerUser: build.mutation<RegisterResponse, IRegister>({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
      invalidatesTags: ['User'],
    }),
    Login: build.mutation<RegisterResponse, ILogin>({
      query: (body: IRegister) => ({
        url: 'auth/login',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
      invalidatesTags: ['User'],
    }),
    sendEmail: build.query({
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
    checkAndRegister: build.mutation({
      query: (body: IRegister) => ({
        url: 'auth/checkandregister',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
      // invalidatesTags: ['User'],
    }),
    getUser: build.mutation<RegisterResponse, IToken>({
      query: (body) => ({
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

export const {useRegisterUserMutation, useGetUserMutation, useLoginMutation} =
  ServerFetch;
