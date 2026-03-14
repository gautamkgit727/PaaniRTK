import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/services/baseQuery";

export interface User {
  id: number;
  username: string;
  userid: string;
  roleid: number;
  districtid: number;
  talukaid?: number;
  active: boolean;
  createdon: string;
}

export interface UserListResponse {
  result: User[];
  recordCount: number;
}

export interface GetUsersRequest {
  pageNumber: number;
  pageSize: number;
  searchText?: string;
  roleId?: string;
  statusID?: string;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query<UserListResponse, GetUsersRequest>({
      query: (body) => ({
        url: "api/user/read",
        method: "POST",
        body: {
          ...body,
          sortDescending: true,
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
