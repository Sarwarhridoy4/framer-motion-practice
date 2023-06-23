import React from "react";
import Box from "./Components/Basic/Box/Box";
import TextScrool from "./Components/Basic/Box/TextScrool/TextScrool";
import { motion, useScroll } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-10 bg-red-500 transform origin-left">
      <Box />
      <TextScrool/>
    </motion.div>
  );
};

export default App;
