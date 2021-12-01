import { Text, useColorModeValue, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  //const footPrintImg = `/images/footprint${useColorModeValue("", "-dark")}.png`;
  const footPrintImg = `/asistencia.png`;

  return (
    <LogoBox>
      <Image
        src={footPrintImg}
        style={{ marginRight: 5 }}
        width={8}
        height={8}
        alt="logo"
      />
      <Text
        color={useColorModeValue("gray.800", "whiteAlpha.900")}
        fontFamily="sans-serif"
        fontWeight="bold"
        ml={3}
      >
        Asistencias App
      </Text>
    </LogoBox>
  );
};

export default Logo;
