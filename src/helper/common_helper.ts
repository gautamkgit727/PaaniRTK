import { masterDataApi } from "@/features/masterData/masterDataApi";

/**
 * Get role name by ID
 * @param roleId Role ID
 * @param getState Redux store getState function
 * @returns localized role name or '--'
 */
export const getRoleNameById = (roleId: number, getState: any) => {
    // Access RTK Query cached data
    const roles = masterDataApi.endpoints.getRoles.select()(getState)?.data;

    console.log("Roles Data:", roles); // Debugging line

    if (!roles || roles.length === 0) return "--";

    const role = roles.find((r: any) => r.id === roleId);
    if (!role) return "--";

    return role.rolename;
};
