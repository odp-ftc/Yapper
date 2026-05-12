import { Box, Container, HStack, Link, Text, VStack } from "@chakra-ui/react";
import {
  Link as RouterLink,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

function Layout() {
  return (
    <Box bg="gray.900" minH="100vh" py={8}>
      <Container maxW="650px">
        <VStack gap={5} align="stretch">
          <HStack justify="space-between">
            <Text fontWeight="bold" color="white">
              Yapper
            </Text>
            <HStack gap={4}>
              <Link asChild color="gray.200">
                <RouterLink to="/">Home</RouterLink>
              </Link>
              <Link asChild color="gray.200">
                <RouterLink to="/feed">Feed</RouterLink>
              </Link>
              <Link asChild color="gray.200">
                <RouterLink to="/about">About</RouterLink>
              </Link>
            </HStack>
          </HStack>

          <Outlet />
        </VStack>
      </Container>
    </Box>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}