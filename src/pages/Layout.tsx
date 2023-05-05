import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Container } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Container centerContent maxW="container.md">
      <Navbar />

      <Box padding={5}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
