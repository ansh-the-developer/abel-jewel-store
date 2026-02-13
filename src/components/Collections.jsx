import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const CollectionItem = ({ img, title, subtitle }) => (
  // REMOVED 'group' prop here to fix the warning
  <Link href="#" _hover={{ textDecoration: 'none' }}>
    <VStack align="start" spacing={4} cursor="pointer" role="group">
      {/* Image Container with Zoom Effect */}
      <Box overflow="hidden" w="100%">
        <Image
          src={img}
          alt={title}
          w="100%"
          h="400px" 
          objectFit="cover"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.05)" }}
        />
      </Box>

      {/* Text Content */}
      <Box>
        <Heading
          as="h3"
          fontFamily="'Playfair Display', serif"
          fontSize="xl"
          fontWeight="400"
          color="abel.dark"
          mb={1}
          _groupHover={{ color: "abel.gold" }}
          transition="color 0.3s ease"
        >
          {title}
        </Heading>
        <Text
          fontFamily="Inter"
          fontSize="xs"
          fontWeight="600"
          letterSpacing="widest"
          textTransform="uppercase"
          color="gray.400"
        >
          {subtitle}
        </Text>
      </Box>
    </VStack>
  </Link>
);

export default function Collections() {
  const { t } = useTranslation();

  const collections = [
    {
      img: "/assets/gallery/c1.avif",
      title: t('collections.item1.title', 'Bridal & Engagement'),
      subtitle: t('collections.item1.sub', 'DISCOVER THE ONE'),
    },
    {
      img: "/assets/gallery/c2.avif",
      title: t('collections.item2.title', 'Heritage Gold'),
      subtitle: t('collections.item2.sub', '24K PURITY'),
    },
    {
      img: "/assets/gallery/c3.avif",
      title: t('collections.item3.title', "Ocean's Grace"),
      subtitle: t('collections.item3.sub', 'SOUTH SEA PEARLS'),
    }
  ];

  return (
    <Box as="section" id="collections" py={20} bg="white">
      <Container maxW="container.xl">
        
        {/* Section Header */}
        <VStack mb={16} spacing={2}>
          <Heading
            as="h2"
            fontFamily="'Playfair Display', serif"
            fontSize={{ base: "3xl", md: "4xl" }}
            color="abel.dark"
            fontWeight="400"
          >
            {t('collections.title', 'The Collections')}
          </Heading>
          <Box w="40px" h="1px" bg="abel.gold" />
        </VStack>

        {/* Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {collections.map((item, index) => (
            <CollectionItem key={index} {...item} />
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
}
