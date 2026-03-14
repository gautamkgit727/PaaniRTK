
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from "@/routes/PublicRoutes";
import PrivateRoutes from "@/routes/PrivateRoutes";
import { useSelector } from "react-redux";
import { ROUTES } from "./routes/routes";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    if (window.location.pathname === ROUTES.login) {
      window.location.href = ROUTES.dashboard;
    }
  }

  // console.log("App Authenticated:", isAuthenticated);
  return (

    <>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </>

  );
}

export default App;



/* import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from "@/routes/PublicRoutes";
import PrivateRoutes from "@/routes/PrivateRoutes";

function App() {
  return (
    <Routes>
      
<Route path="/*" element={<PublicRoutes />} />


<Route path="/dashboard/*" element={<PrivateRoutes />} />

//fallback
<Route path="*" element={<Navigate to="/login" replace />} />
    </Routes >
  );
}

export default App; */
