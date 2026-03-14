// import { AppBar, Box, Toolbar, Typography, Container, Button } from "@mui/material";
import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Navbar from "./components/Navbar";

const drawerWidth = 220;
const collapsedWidth = 70;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Box sx={{ display: "flex" }}>
            {/* Navbar with Drawer, controlled by AdminLayout */}
            <Navbar expanded={expanded} setExpanded={setExpanded} />

            {/* Main content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    transition: "margin-left 0.3s",
                    ml: {
                        sm: expanded ? `${drawerWidth}px` : `${collapsedWidth}px`,
                    },
                }}
            >
                {/* Push content below AppBar */}
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default AdminLayout;




/* return (
    <div>
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">Admin Panel After Login</Typography>
                <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
        <Container sx={{ mt: 3 }}>{children}</Container>
    </div>
); */

