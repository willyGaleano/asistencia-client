import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  useColorModeValue,
  Heading,
  useToast,
  Image,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";
import QrReader from "react-qr-reader";
import { BioSection, BioYear } from "../components/bio";
import Section from "../components/Section";
import { asistenciaAPI } from "../services/api/asistenciaAPI";

const ReaderQRCode = () => {
  const [showScan, setShowScan] = useState(false);
  const [evento, setEvento] = useState(null);
  const toast = useToast();

  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = async (result) => {
    if (result) {
      const respAsistencia = result.split("#");
      const body = {
        userAppId: respAsistencia[0],
        asistenciaId: respAsistencia[1],
      };
      console.log("respAsistencia: ", body);
      setShowScan(false);

      try {
        const resp = await asistenciaAPI.marcarAsistencia(
          body.asistenciaId,
          body
        );
        console.log(resp);
        if (resp.succeeded) {
          setEvento(resp.data);
          toast({
            title: "Asistencia registrada",
            description: "Se registró correctamente su asistencia.",
            position: "top-right",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else
          toast({
            title: "Atención!",
            description: resp.message,
            position: "top-right",
            status: "info",
            duration: 6000,
            isClosable: true,
          });
      } catch (error) {
        toast({
          title: "API ERROR",
          description: error.message,
          position: "top-right",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
        console.log(error.message);
      }
    } else {
      console.log(result);
    }
  };

  return (
    <>
      <Box w="100%" color="white">
        <Box
          borderRadius="lg"
          my={3}
          mb={10}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
        >
          Registre sus asistencia al evento scaneando su código QR
        </Box>
        <Button
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          style={{ marginBottom: 30 }}
          onClick={() => setShowScan(!showScan)}
        >
          {!showScan ? "Abrir Scan" : "Cerrar Scan"}
        </Button>
        {showScan ? (
          <QrReader
            delay={500}
            style={{ width: "100%" }}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
          />
        ) : (
          <Stack>
            <Skeleton startColor="#63B3ED" endColor="#2A4365" height="20px" />
            <Skeleton startColor="#63B3ED" endColor="#2A4365" height="20px" />
            <Skeleton startColor="#63B3ED" endColor="#2A4365" height="20px" />
            <Skeleton startColor="#63B3ED" endColor="#2A4365" height="20px" />
            <Skeleton startColor="#63B3ED" endColor="#2A4365" height="20px" />
          </Stack>
        )}
      </Box>
      {evento !== null ? (
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Asistencia registrada
          </Heading>
          <BioSection>
            <BioYear>Evento</BioYear>
            {evento.nombreCharla}
          </BioSection>
          <BioSection>
            <BioYear>Ingreso</BioYear>
            {evento.fechaIni}
          </BioSection>
          <BioSection>
            <BioYear>Desc.</BioYear>
            {evento.descripcion}
          </BioSection>
          <BioSection>
            <BioYear>Duración</BioYear>
            {evento.duracion}
          </BioSection>
          <Image
            src={evento.urlImage}
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Section>
      ) : (
        <></>
      )}
    </>
  );
};

export default ReaderQRCode;
