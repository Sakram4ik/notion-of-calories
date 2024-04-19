import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IRegister, IToken} from '../../type/user';

export const ServerFetch = createApi({
  reducerPath: 'serverFetch',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://project-name-oqml.onrender.com',
  }),
  tagTypes: ['Post'],
  endpoints: build => ({
    registerUser: build.mutation({
      query: (body: IRegister) => ({
        url: 'auth/register',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
    }),
    getUser: build.mutation({
      query: (body: IToken) => ({
        url: 'user/get',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
    }),
  }),
});

export const {useRegisterUserMutation, useGetUserMutation} = ServerFetch;
