import { Box, Heading, Text, Button, Stack, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      loading="lazy"
      decoding="async"
      as="section"
      id="home"
      position="relative"
      h="100vh"
      w="100%"
      bg="white"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url('/assets/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.3,
        zIndex: 0,
      }}
    >
      <Container
        maxW="container.lg"
        zIndex="1"
        position="relative"
        textAlign="center"
        pt={20}
      >
        {/* Top Gold Tagline */}
        <Text
          color="abel.gold"
          fontFamily="Inter"
          fontSize="xs"
          fontWeight="600"
          letterSpacing="0.2em"
          textTransform="uppercase"
          mb={4}
        >
          {t("hero.subtitle", "JEWELRY · DIAMOND · FINE GOLD · PEARL")}
        </Text>

        {/* Main Headline with Custom Font Sizes */}
        <Heading
          as="h1"
          fontFamily="'Playfair Display', serif" // .serif
          fontWeight="400"
          color="abel.dark"
          // Mobile: .text-5xl (3rem)
          // Desktop: .md:text-7xl (4.5rem)
          fontSize={{ base: "3rem", md: "4.5rem" }}
          lineHeight="1"
          mb="1.5rem" // .mb-6
        >
          {t("hero.title", "Timeless Elegance")} <br />
          {t("hero.title2", "in Every Detail.")}
        </Heading>

        {/* Description Text */}
        <Text
          color="gray.600"
          fontSize={{ base: "md", md: "lg" }}
          maxW="2xl"
          mx="auto"
          mb={10}
          lineHeight="1.8"
        >
          {t(
            "hero.desc",
            "Experience a curated selection of fine gold and exquisite diamonds in our Cheonan-si gallery. Where modern minimalism meets classic craftsmanship.",
          )}
        </Text>

        {/* Buttons */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify="center"
          align="center"
        >
          {/* Primary Button */}
          <Button
            as="a"
            href="#collections"
            bg="black"
            color="white"
            h="50px"
            px={8}
            fontSize="xs"
            fontWeight="600"
            letterSpacing="wider"
            textTransform="uppercase"
            borderRadius="none"
            _hover={{ bg: "gray.800" }}
          >
            {t("hero.cta", "View Collections")}
          </Button>

          {/* Secondary Button */}
          <Button
            as="a"
            href="#contact"
            variant="outline"
            borderColor="black"
            color="black"
            h="50px"
            px={8}
            fontSize="xs"
            fontWeight="600"
            letterSpacing="wider"
            textTransform="uppercase"
            borderRadius="none"
            _hover={{ bg: "black", color: "white" }}
          >
            {t("hero.visit", "Visit Store")}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
