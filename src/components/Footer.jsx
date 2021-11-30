import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" mt={100} opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Williams Galeano. All Rights Reserved.
    </Box>
  );
};

export default Footer;
