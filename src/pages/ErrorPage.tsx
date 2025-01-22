import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <>
      <NavBar />
      <Box padding={3}>
        <Heading>Opps</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Page doesn't exist"
            : "An unexpected error occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
