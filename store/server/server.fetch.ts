import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IRegistr} from '../../type/user';

export const ServerFetch = createApi({
  reducerPath: 'serverFetch',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://project-name-oqml.onrender.com',
  }),
  tagTypes: ['Post'],
  endpoints: build => ({
    registerUser: build.mutation({
      query: (body: IRegistr) => ({
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
