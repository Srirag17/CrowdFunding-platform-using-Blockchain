import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";
import NextLink from "next/link";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color={useColorModeValue("teal.800", "white")}
          as="h2"
          size="lg"
        >
          <Box
            as={"span"}
            color={useColorModeValue("teal.400", "teal.300")}
            position={"relative"}
            zIndex={10}
            _after={{
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              w: "full",
              h: "30%",
              bg: useColorModeValue("teal.100", "teal.900"),
              zIndex: -1,
            }}
          >
            <NextLink href="/">🤝FundFiesta</NextLink>
          </Box>
        </Heading>
        <Stack direction={"row"} spacing={6}>
          <NextLink href="/">Home</NextLink>
          <Link
            href={
              "https://github.com/Srirag17"
            }
            isExternal
          >
            Github
          </Link>
          <Link href={"mailto:sriraggummadavelly@gmail.com"} isExternal>
            Contact
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>🌐  while 💩 by Srirag Gummadavelly , SaiNived Mekala & Abhinav Narsipura</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Website"} href={""}>
              {" "}
              <FaGlobe />
            </SocialButton>
            <SocialButton
              label={"Twitter"}
              href={""}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Github"} href={"https://github.com/Srirag17"}>
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/in/gummadavellysrirag/"}
            >
              <FaLinkedin/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}