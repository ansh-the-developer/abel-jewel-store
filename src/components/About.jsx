import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

// Custom Gold Dot Icon for the list
const GoldDot = () => (
  <Box
    as="span"
    w="6px"
    h="6px"
    borderRadius="full"
    bg="abel.gold"
    display="inline-block"
    mr={3}
    mb="2px"
  />
);

export default function About() {
  const { t } = useTranslation();

  return (
    <Box as="section" id="about" py={20} bg="white">
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={16}
        >
          {/* LEFT CONTENT */}
          <Box flex="1" maxW="lg">
            <Text
              color="gray.400"
              fontSize="xs"
              fontWeight="600"
              letterSpacing="widest"
              textTransform="uppercase"
              mb={4}
            >
              {t("about.subtitle", "THE ABEL EXPERIENCE")}
            </Text>

            <Heading
              as="h2"
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="400"
              color="abel.dark"
              lineHeight="1.2"
              mb={6}
            >
              {t("about.title", "A Modern Sanctuary for Fine Gold.")}
            </Heading>

            <Text color="gray.600" lineHeight="1.8" mb={8}>
              {t(
                "about.desc",
                'Our gallery in Chungcheongnam-do is designed with a minimalist aesthetic, allowing the natural brilliance of our gems and precious metals to take center stage. From our signature "Abel Blue" diamond logo to our warm, inviting showroom.',
              )}
            </Text>

            <List spacing={4}>
              <ListItem
                display="flex"
                alignItems="center"
                color="abel.dark"
                fontWeight="500"
              >
                <GoldDot />
                {t("about.point1", "Certified Premium Diamonds")}
              </ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                color="abel.dark"
                fontWeight="500"
              >
                <GoldDot />
                {t("about.point2", "18k & 24k Fine Gold Selection")}
              </ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                color="abel.dark"
                fontWeight="500"
              >
                <GoldDot />
                {t("about.point3", "Bespoke Jewelry Consultation")}
              </ListItem>
            </List>
          </Box>

          {/* RIGHT IMAGES (Staggered Layout) */}
          <Box flex="1" position="relative" w="full">
            <Flex gap={6} align="flex-start">
              
              {/* Image 1 (Higher) */}
              <Box flex="1" mt={0}>
                <Image
                  loading="lazy" 
                  decoding="async"
                  src="/assets/about 1.avif"
                  alt="Pearl Necklace"
                  w="100%"
                  h="auto"
                  objectFit="cover"
                  shadow="lg"
                />
              </Box>

              {/* Image 2 (Lower - Offset by margin) */}
              <Box flex="1" mt={16}>
                <Image
                  loading="lazy" 
                  decoding="async"
                  src="/assets/about 2.avif"
                  alt="Gold Necklace"
                  w="100%"
                  h="auto"
                  objectFit="cover"
                  shadow="lg"
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
