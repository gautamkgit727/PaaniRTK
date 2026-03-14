import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/services/baseQuery"; // the global baseQuery with token

export const masterDataApi = createApi({
    reducerPath: "masterDataApi",
    baseQuery,
    endpoints: (builder) => ({
        getRoles: builder.query<any[], void>({
            query: () => "api/role/read",
        }),
        getMenuPermissions: builder.query<any[], void>({
            query: () => "api/menu/GetMenu",
        }),
        getMenuUserPermissions: builder.query<any[], number>({
            query: (roleid) => `api/menu/GetMenuRoleId?roleid=${roleid}`,
        }),
        getStates: builder.query<any[], void>({
            query: () => "api/state/read",
        }),
        getDistricts: builder.query<any[], number>({
            query: (stateId) => `api/district/read?Stateid=${stateId}`,
        }),
        getTalukas: builder.query<any[], void>({
            query: () => "api/taluka/read",
        }),
        getVillages: builder.query<any[], void>({
            query: () => "api/village/read",
        }),
        getLookup: builder.query<any[], void>({
            query: () => "api/common/Getlookup",
        }),
        getCrops: builder.query<any[], void>({
            query: () => "api/common/Getcrop",
        }),
        getCenters: builder.query<any[], void>({
            query: () => "api/mstcentre/get",
        }),
        getPlatforms: builder.query<any[], void>({
            query: () => "api/common/GetPlatform",
        }),
        getWebLabels: builder.query<any[], number>({
            query: (id = 0) => `api/common/GetWebLabels?id=${id}`,
        }),
    }),
});

export const {
    useGetRolesQuery,
    useGetMenuPermissionsQuery,
    useGetMenuUserPermissionsQuery,
    useGetStatesQuery,
    useGetDistrictsQuery,
    useGetTalukasQuery,
    useGetVillagesQuery,
    useGetLookupQuery,
    useGetCropsQuery,
    useGetCentersQuery,
    useGetPlatformsQuery,
    useGetWebLabelsQuery,
} = masterDataApi;
