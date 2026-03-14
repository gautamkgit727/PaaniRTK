import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Divider,
    Tooltip,
    Switch,
} from "@mui/material";
import {
    Menu as MenuIcon,
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Security as SecurityIcon,
    LocationCity as LocationCityIcon,
    Map as MapIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ROUTES } from "@/routes/routes";
import { logout } from "@/features/auth/authSlice";

const drawerWidth = 220;
const collapsedWidth = 70;

type NavbarProps = {
    expanded: boolean;
    setExpanded: (val: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ expanded, setExpanded }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate(ROUTES.login);
    };

    const menuItems = [
        { text: "Dashboard", path: ROUTES.dashboard, icon: <DashboardIcon /> },
        { text: "Users", path: ROUTES.users.list, icon: <PeopleIcon /> },
        { text: "Roles", path: ROUTES.roles.list, icon: <SecurityIcon /> },
        { text: "States", path: ROUTES.states, icon: <LocationCityIcon /> },
        { text: "Districts", path: ROUTES.districts, icon: <MapIcon /> },
    ];

    const drawer = (
        <Box
            sx={{
                width: expanded ? drawerWidth : collapsedWidth,
                transition: "width 0.3s",
                overflowX: "hidden",
            }}
            // Hover expand (only when not pinned)
            onMouseEnter={() => !expanded && setExpanded(true)}
            onMouseLeave={() => !expanded && setExpanded(false)}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: expanded ? "space-between" : "center",
                    p: 2,
                }}
            >
                {expanded && (
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Paani
                    </Typography>
                )}
                {/* Toggle pin/unpin */}
                <Switch
                    checked={expanded}
                    onChange={(e) => setExpanded(e.target.checked)}
                    size="small"
                />
            </Box>
            <Divider />
            <List>
                {menuItems.map((item) => {
                    const active = location.pathname.startsWith(item.path);
                    return (
                        <Tooltip
                            key={item.text}
                            title={!expanded ? item.text : ""}
                            placement="right"
                        >
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate(item.path)}
                                    selected={active}
                                    sx={{
                                        "&.Mui-selected": {
                                            backgroundColor: "primary.main",
                                            color: "#fff",
                                            "& .MuiListItemIcon-root": { color: "#fff" },
                                        },
                                        "&:hover": {
                                            backgroundColor: "primary.light",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    {expanded && <ListItemText primary={item.text} />}
                                </ListItemButton>
                            </ListItem>
                        </Tooltip>
                    );
                })}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout}>
                        <ListItemIcon><LogoutIcon /></ListItemIcon>
                        {expanded && <ListItemText primary="Logout" />}
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {/* Top AppBar */}
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }} // show only on mobile
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Paani Foundation
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Box component="nav">
                {/* Mobile drawer */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>

                {/* Desktop drawer */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: expanded ? drawerWidth : collapsedWidth,
                            transition: "width 0.3s",
                            my: 8, // to offset AppBar height
                            backgroundColor: 'rgb(255 202 6)',
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
};

export default Navbar;
