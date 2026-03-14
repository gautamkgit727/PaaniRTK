// All routes centralized here
export const ROUTES = {
    // Public
    login: "/login",
    landing: "/",

    // Dashboard
    dashboard: "/dashboard",

    // User Module
    users: {
        list: "/users",
        create: "/users/create",
        edit: (id = ":id") => `/users/edit/${id}`,
    },

    // Role Module
    roles: {
        list: "/roles",
        create: "/roles/create",
        edit: (id = ":id") => `/roles/edit/${id}`,
    },

    // State & District
    states: "/states",
    districts: "/districts",
};
