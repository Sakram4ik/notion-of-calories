import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const ServerFetch = createApi({
  reducerPath: 'serverFetch',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000/',
  }),
  tagTypes: ['Post'],
  endpoints: build => ({
    registerUser: build.mutation<any, any>({
      query: body => ({
        url: 'registr',
        method: ' POST',
        body: body,
      }),
    }),
  }),
});

export const {useRegisterUserMutation} = ServerFetch;
