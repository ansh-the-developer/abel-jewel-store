import { Box, Container, Flex, Heading, Text, Stack, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Box as="section" id="contact" pt={20} bg="white" position="relative">
      <Container maxW="container.xl" pb={20}>
        
        {/* Main Heading */}
        <Flex justify={{ base: 'center', lg: 'flex-start' }} ml={{ lg: "400px" }} mb={12}>
            <Heading
              as="h2"
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: "3xl", md: "4xl" }}
              color="abel.dark"
              fontWeight="400"
            >
              {t('contact.title', "Let's find your")} <Box as="span" fontStyle="italic">{t('contact.match', 'perfect match.')}</Box>
            </Heading>
        </Flex>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={10} align="flex-start">
          
          {/* LEFT CARD (Visit Info) */}
          <Box 
            w={{ base: "100%", lg: "350px" }} 
            bg="white" 
            p={8} 
            border="1px solid" 
            borderColor="gray.100"
            shadow="sm"
          >
            <Heading fontSize="xl" fontFamily="'Playfair Display', serif" mb={6} color="abel.dark">
              {t('contact.visit', 'Visit Our Gallery')}
            </Heading>

            <Stack spacing={1} mb={8} color="gray.600" fontSize="sm">
              <Text fontWeight="600" color="abel.dark">Abel Jewelry (Rm 107)</Text>
              <Text>22 Buldang 33-gil, Cheonan-si</Text>
              <Text>Chungcheongnam-do, South Korea</Text>
              <Text>Postal Code: 31156</Text>
            </Stack>

            <Box borderTop="1px solid" borderColor="gray.100" pt={6}>
               <Text fontSize="xs" fontWeight="bold" color="gray.400" mb={2}>HOURS</Text>
               <Stack spacing={0} color="gray.600" fontSize="sm">
                 <Text>Open: 10:00 AM</Text>
                 <Text>Close: 08:00 PM</Text>
               </Stack>
            </Box>
          </Box>

          {/* RIGHT SECTION (Contact + Map) */}
          <Box flex="1" w="full">
            
            {/* Contact Details Row */}
            <Flex gap={16} mb={8} wrap="wrap">
              <Box>
                <Text fontSize="xs" fontWeight="bold" color="gray.400" mb={2}>GENERAL INQUIRIES</Text>
                <Text fontSize="2xl" fontFamily="'Playfair Display', serif" color="abel.dark">+82 10 8272 4284</Text>
                <Text fontSize="sm" color="gray.500" mt={1}>Store Direct: 041-555-6009</Text>
              </Box>

              <Box maxW="sm">
                 <Text fontSize="xs" fontWeight="bold" color="gray.400" mb={2}>PRIVATE VIEWING</Text>
                 <Text fontSize="sm" color="gray.500" lineHeight="1.6">
                   {t('contact.private_desc', 'We offer private consultations for engagement and custom designs. Please call to schedule an appointment.')}
                 </Text>
              </Box>
            </Flex>

            {/* GOOGLE MAP EMBED - EXACT ADDRESS MARKER */}
            <Box 
              bg="gray.100" 
              h="300px" 
              w="100%" 
              overflow="hidden"
              position="relative"
            >
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                title="Abel Jewelry Store Location"
                // Updated query to exact address with Hangul to ensure accuracy
                src="https://maps.google.com/maps?q=South+Korea,+Chungcheongnam-do,+Cheonan-si,+Buldang+33-gil,+22+%EC%95%84%EB%B2%A8+107%ED%98%B8&t=&z=17&ie=UTF8&iwloc=&output=embed"
                style={{ filter: " opacity(0.9)" }} 
              ></iframe>
            </Box>

          </Box>
        </Flex>
      </Container>

      {/* COPYRIGHT BAR */}
      <Box borderTop="1px solid" borderColor="gray.100" py={8} textAlign="center">
        <Text fontSize="10px" fontWeight="600" letterSpacing="widest" color="gray.400" textTransform="uppercase">
          © 2026 ABEL JEWELS. ALL RIGHTS RESERVED. MADE BY CYBER ALLIANCE INDIA
        </Text>
      </Box>

      {/* FLOATING WHATSAPP BUTTON */}
      <Link 
        href="https://wa.me/821082724284" 
        isExternal
        position="fixed"
        bottom={8}
        right={8}
        bg="white"
        shadow="lg"
        py={3}
        px={6}
        borderRadius="full"
        display="flex"
        alignItems="center"
        gap={3}
        zIndex={100}
        _hover={{ transform: "translateY(-2px)", shadow: "xl", textDecoration: 'none' }}
        transition="all 0.2s"
      >
        <Text fontSize="xs" fontWeight="bold" letterSpacing="widest" color="gray.500" textTransform="uppercase">
          {t('contact.chat', 'Speak with a Consultant')}
        </Text>
        <Box bg="abel.gold" w={8} h={8} borderRadius="full" display="flex" alignItems="center" justifyContent="center">
           <Box w={3} h={3} bg="white" borderRadius="full" /> 
        </Box>
      </Link>

    </Box>
  );
}
