import { Routes, Route } from "react-router-dom";
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "@/features/dashboard/pages/Dashboard";
import { ROUTES as PfRoutes } from "./routes";
import UserList from "@/features/users/pages/UserList";

const PrivateRoutes = () => {
    return (
        <AdminLayout>
            <Routes>
                {/* Dashboard */}
                <Route
                    path={PfRoutes.dashboard} // "/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* Users */}
                <Route
                    path={PfRoutes.users.list} // "/users"
                    element={
                        <ProtectedRoute>
                            <UserList />
                        </ProtectedRoute>
                    }
                />

                {/* fallback inside private */}
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </AdminLayout>
    );
};

export default PrivateRoutes;
