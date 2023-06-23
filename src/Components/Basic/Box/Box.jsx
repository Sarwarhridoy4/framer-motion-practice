import { motion } from "framer-motion";

const Box = () => {
  return (
    <motion.div className='p-4 grid grid-cols-12 gap-8'>
      <div className='col-span-full md:col-span-6 lg:col-span-4'>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            repeatCount: "Infinity",
          }}
          className='w-24 h-24 bg-orange-600'
        >
          Hey! Look
        </motion.div>
      </div>
      <div className='col-span-full md:col-span-6 lg:col-span-4'>
        <motion.div
          animate={{
            x: 0,
            backgroundColor: "#000",
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
            position: "fixed",
            transitionEnd: {
              display: "none",
            },
          }}
          className='w-24 h-24 bg-orange-600'
        >
          Box-1
        </motion.div>
      </div>
      <div className='col-span-full md:col-span-4'>
        <motion.div animate={{ x: 100 }} className='w-24 h-24 bg-orange-600'>
          Box-1
        </motion.div>
      </div>
      <div className='col-span-full md:col-span-4'>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className='w-24 h-24 bg-orange-600'
        >
          Check me!
        </motion.div>
      </div>
      <div className='col-span-full md:col-span-4'>
        <motion.div
          animate={{ x: 100 }}
          whileTap={{ scale: 1.1 }}
          className='w-24 h-24 bg-orange-600'
        >
          Tap Me
        </motion.div>
      </div>
      <div className='col-span-full md:col-span-4'>
        <motion.div
          animate={{ x: 100 }}
          whileHover={{ scale: 1.2 }}
          className='w-24 h-24 bg-orange-600'
        >
          Hover Me!
        </motion.div>
      </div>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      />
    </motion.div>
  );
};

export default Box;
