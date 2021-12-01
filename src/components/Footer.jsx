import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" mt={5} opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} WillyNet All Rights Reserved.
    </Box>
  );
};

export default Footer;
