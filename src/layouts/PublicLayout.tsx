import React from "react";
import { Container } from "@mui/material";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            {children}
        </Container>
    );
};

export default PublicLayout;
