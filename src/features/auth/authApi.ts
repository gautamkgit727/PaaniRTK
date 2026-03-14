import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string; hashed: string }>({
      query: (body) => ({
        url: 'api/user/login',
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
