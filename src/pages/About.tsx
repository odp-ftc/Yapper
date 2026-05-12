
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="md">
      <VStack gap={4} align="stretch">
        <Heading size="lg" color="white">
          About Yapper ＼(ﾟｰﾟ＼)
        </Heading>
        <Text color="gray.400">
          Are you tired of not being able to yap 
          with your chaps without other social media cap?
          Yapper is a dapper alternative messaging site.
        </Text>
        <Button asChild>
            <Link to="/">Return to Home Page</Link>
        </Button>
      </VStack>
    </Box>
  );
}