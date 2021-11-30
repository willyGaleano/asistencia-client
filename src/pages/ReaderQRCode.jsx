import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  useColorModeValue,
  Heading,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import QrReader from "react-qr-reader";
import { BioSection, BioYear } from "../components/bio";
import Section from "../components/Section";

const ReaderQRCode = () => {
  const [value, setValue] = useState("");
  const [showScan, setShowScan] = useState(false);
  const toast = useToast();

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = (result) => {
    if (result) {
      setValue(result);
      setShowScan(false);
      if (
        result ===
        "5bb085a1-2315-43a5-b140-8c488cb290f4#238e7ec9-2c8e-4c25-9247-ca20df809cd2"
      )
        toast({
          title: "Asistencia registrada.",
          description: "Se registró correctamente su asistencia.",
          position: "top-right",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
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
          style={{ marginBottom: 10 }}
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
          <></>
        )}
      </Box>
      {!showScan ? (
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Asistencia registrada
          </Heading>
          <BioSection>
            <BioYear>Evento</BioYear>
            Charla 15
          </BioSection>
          <BioSection>
            <BioYear>Ingreso</BioYear>
            11/11/2021
          </BioSection>
          <BioSection>
            <BioYear>Desc.</BioYear>
            Completed the Master&apos;s Program in the Graduate School of
            Information Science at Nara Institute of Science and Technology
            (奈良先端科学技術大学院大学情報科学研究科修士課程) Completed the
            Master&apos;s Program in the Graduate School of Information Science
            at Nara Institute of Science and Technology
            (奈良先端科学技術大学院大学情報科学研究科修士課程)
          </BioSection>
          <BioSection>
            <BioYear>Duración</BioYear>
            3h
          </BioSection>
          <Image
            src="https://willynetaccount.blob.core.windows.net/imagescharlascontainer/appcharlas/charlas/b20495eb-07e7-4c2d-ba29-5c1f62cbb0ce_loqe4rft.c0r.jpg"
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
