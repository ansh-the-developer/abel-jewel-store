import { Suspense, lazy } from 'react';
import { Box, Spinner, Center } from '@chakra-ui/react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load non-critical sections
const About = lazy(() => import("./components/About"));
const Collections = lazy(() => import("./components/Collections"));
const Gallery = lazy(() => import("./components/Gallery"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <Hero /> {/* Hero stays standard import for speed */}
      
      <Suspense fallback={
        <Center h="50vh"><Spinner color="abel.gold" /></Center>
      }>
        <About />
        <Collections />
        <Gallery />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
