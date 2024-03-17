import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const ServerFetch = createApi({
  reducerPath: 'serverFetch',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://project-name-oqml.onrender.com',
  }),
  tagTypes: ['Post'],
  endpoints: build => ({
    registerUser: build.mutation<any, any>({
      query: body => ({
        url: 'registr',
        method: 'POST',
        headers: {
          'content-type': ' application/json',
        },
        body: body,
      }),
    }),
  }),
});

export const {useRegisterUserMutation} = ServerFetch;
