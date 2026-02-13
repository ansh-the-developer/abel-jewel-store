import {
  Box,
  Flex,
  Link,
  Button,
  Image,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ ROBUST LANGUAGE TOGGLE
  const isKorean = i18n.language.startsWith('ko'); // Check if current language is Korean
  
  const toggleLanguage = () => {
    const newLang = isKorean ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  const NavLink = ({ href, children, mobile }) => (
    <Link
      href={href}
      fontFamily="Inter"
      fontSize={mobile ? "lg" : "xs"}
      fontWeight="500"
      letterSpacing="widest"
      textTransform="uppercase"
      color="abel.gray"
      _hover={{ color: "abel.gold", textDecoration: 'none' }}
      onClick={mobile ? onClose : undefined}
      py={mobile ? 4 : 0}
      borderBottom={mobile ? "1px solid" : "none"}
      borderColor="gray.100"
      width={mobile ? "100%" : "auto"}
      textAlign={mobile ? "center" : "left"}
    >
      {children}
    </Link>
  );

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg={scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      borderBottom={scrolled ? "1px solid" : "none"}
      borderColor="gray.100"
      transition="all 0.3s ease"
      py={4}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          
          {/* LOGO */}
          <Link href="/" _hover={{ opacity: 0.8 }}>
            <Image 
               loading="lazy" 
                  decoding="async"
              src="/assets/logo.webp" 
              alt="Abel Jewelry" 
              h="40px" 
              objectFit="contain" 
            />
          </Link>

          {/* DESKTOP MENU */}
          <Flex display={{ base: 'none', md: 'flex' }} gap={10} align="center">
            <NavLink href="#about">{t('navbar.about')}</NavLink>
            <NavLink href="#collections">{t('navbar.collections')}</NavLink>
            <NavLink href="#gallery">{t('navbar.gallery')}</NavLink>
            <NavLink href="#contact">{t('navbar.contact')}</NavLink>
          </Flex>

          {/* ACTIONS */}
          <Flex align="center" gap={6}>
            
            {/* Language Switcher */}
            <Button
              variant="unstyled"
              fontSize="xs"
              fontWeight="bold"
              color="abel.dark"
              onClick={toggleLanguage}
              minW="auto"
              h="auto"
              _hover={{ color: "abel.gold" }}
            >
              {/* If Korean, show 'EN' option. If English, show 'KR' option */}
              {isKorean ? 'EN' : 'KR'}
            </Button>

            {/* Inquire Button (Desktop) */}
            <Link
              href="#contact"
              display={{ base: 'none', md: 'block' }}
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="widest"
              textTransform="uppercase"
              color="abel.dark"
              borderBottom="1px solid"
              borderColor="abel.dark"
              pb="2px"
              _hover={{ color: "abel.gold", borderColor: "abel.gold", textDecoration: 'none' }}
            >
              {t('navbar.inquire')}
            </Link>

            {/* Mobile Burger */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open navigation menu" 
              icon={<HamburgerIcon boxSize={6} />}
              variant="ghost"
              onClick={onOpen}
              color="abel.dark"
            />
          </Flex>
        </Flex>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton mt={2} />
          <DrawerBody display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Stack spacing={6} w="100%" align="center">
              <NavLink href="#about" mobile>{t('navbar.about')}</NavLink>
              <NavLink href="#collections" mobile>{t('navbar.collections')}</NavLink>
              <NavLink href="#gallery" mobile>{t('navbar.gallery')}</NavLink>
              <NavLink href="#contact" mobile>{t('navbar.contact')}</NavLink>
              
              <Button 
                variant="outline" 
                borderColor="abel.dark" 
                borderRadius="none"
                w="full"
                mt={4}
                onClick={onClose}
                as="a"
                href="#contact"
              >
                {t('navbar.inquire')}
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
