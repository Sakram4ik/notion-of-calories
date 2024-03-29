import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IRegistr} from '../../type/user';
interface RegisterResponse {
  data: any;
  error: any;
  isLoading: any;
}
export const ServerFetch = createApi({
  reducerPath: 'serverFetch',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://project-name-oqml.onrender.com',
  }),
  tagTypes: ['Post'],
  endpoints: build => ({
    registerUser: build.mutation<RegisterResponse, IRegistr>({
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
