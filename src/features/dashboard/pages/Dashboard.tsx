import React from "react";
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Avatar,
} from "@mui/material";
import { deepPurple, green, blue, orange } from "@mui/material/colors";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            {/* Top Tiles */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                        <Avatar sx={{ bgcolor: deepPurple[500], mr: 2 }}>
                            <PeopleIcon />
                        </Avatar>
                        <CardContent>
                            <Typography variant="h6">Users</Typography>
                            <Typography variant="h5">1,245</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                        <Avatar sx={{ bgcolor: green[500], mr: 2 }}>
                            <ShoppingCartIcon />
                        </Avatar>
                        <CardContent>
                            <Typography variant="h6">Orders</Typography>
                            <Typography variant="h5">532</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                        <Avatar sx={{ bgcolor: blue[500], mr: 2 }}>
                            <TrendingUpIcon />
                        </Avatar>
                        <CardContent>
                            <Typography variant="h6">Growth</Typography>
                            <Typography variant="h5">+24%</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                        <Avatar sx={{ bgcolor: orange[500], mr: 2 }}>
                            <AttachMoneyIcon />
                        </Avatar>
                        <CardContent>
                            <Typography variant="h6">Revenue</Typography>
                            <Typography variant="h5">$12,340</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Placeholder Chart Section */}
            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Sales Overview
                        </Typography>
                        <Box
                            sx={{
                                height: 250,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px dashed #ccc",
                                borderRadius: 2,
                                bgcolor: "#fafafa",
                            }}
                        >
                            <Typography color="text.secondary">
                                Chart Placeholder (e.g., Recharts / Chart.js)
                            </Typography>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Recent Activity
                        </Typography>
                        <Box>
                            <Typography>- User John signed up</Typography>
                            <Typography>- Order #1023 placed</Typography>
                            <Typography>- Payment of $220 received</Typography>
                            <Typography>- New comment on blog</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
