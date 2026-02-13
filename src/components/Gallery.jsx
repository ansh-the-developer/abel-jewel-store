import { Box, Container, Heading, Text, Grid, GridItem, Image, Flex, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <Box as="section" id="gallery" py={20} bg="#F9F8F3"> {/* Creamy BG */}
      <Container maxW="container.xl">
        
        {/* Header Section */}
        <Flex justify="space-between" align="flex-end" mb={12} wrap="wrap" gap={4}>
          <Box maxW="lg">
            <Text
              color="abel.gold"
              fontSize="xs"
              fontWeight="600"
              letterSpacing="widest"
              textTransform="uppercase"
              mb={2}
            >
              {t('gallery.subtitle', 'ATMOSPHERE')}
            </Text>
            <Heading
              as="h2"
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: "3xl", md: "4xl" }}
              color="abel.dark"
              fontWeight="400"
              mb={4}
            >
              {t('gallery.title', 'The Cheonan Gallery')}
            </Heading>
            <Text color="gray.500" fontSize="sm" lineHeight="1.8">
              {t('gallery.desc', 'Step into a space where time slows down. Our showroom is designed to provide a private, serene environment for your most important selections.')}
            </Text>
          </Box>
          
          <Link 
            href="https://instagram.com/abeljewels" 
            isExternal
            fontSize="xs"
            fontWeight="600"
            letterSpacing="widest"
            textTransform="uppercase"
            color="abel.dark"
            _hover={{ color: "abel.gold" }}
          >
            {t('gallery.follow', 'FOLLOW @ABELJEWELS')}
          </Link>
        </Flex>

        {/* Bento Grid Gallery */}
        <Grid
          templateColumns={{ base: "1fr", md: "1.2fr 0.8fr" }}
          gap={4}
          h={{ base: "auto", md: "600px" }}
        >
          {/* Large Left Image */}
          <GridItem colSpan={1} rowSpan={2} h="100%">
            <Image
               loading="lazy" 
                  decoding="async"
              src="/assets/gallery/gallery1.webp"
              alt="Gallery Interior Large"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>

          {/* Right Column (Split Images) */}
          <GridItem colSpan={1} display="flex" gap={4}>
            {/* Top Left Small */}
            <Box flex="1" h="100%">
               <Image
                  loading="lazy" 
                  decoding="async"
                src="/assets/gallery/gallery2.webp"
                alt="Storefront"
                w="100%"
                h="100%" // Matches height of parent
                objectFit="cover"
              />
            </Box>
            {/* Top Right Small */}
            <Box flex="1" h="100%">
               <Image
                  loading="lazy" 
                  decoding="async"
                src="/assets/gallery/gallery3.webp"
                alt="Seating Area"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          {/* Bottom Full Width (Under the two small ones) */}
           <GridItem colSpan={1}>
            <Image
               loading="lazy" 
                  decoding="async"
              src="/assets/gallery/gallery4.webp"
              alt="Jewelry Display"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>
        </Grid>

      </Container>
    </Box>
  );
}
