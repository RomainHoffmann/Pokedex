import styled from "styled-components"
import { motion, Transition } from "framer-motion"

const LoaderContainer = styled(motion.div)`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderDot = styled(motion.div)`
  width: 1rem;
  height: 1rem;
  background-color: red;
  border-radius: 50%;
  margin: 0 0.5rem;
`

const loaderContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loaderDotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
}

const loaderDotTransition: Transition = {
  duration: 0.4,
  repeat: Infinity,
  repeatType: "reverse",
}

const Loader = () => {
  return (
    <LoaderContainer>
      {[1, 2, 3].map((_, index) => {
        return (
          <LoaderDot
            key={`loader-${index}`}
            variants={loaderDotVariants}
            initial="initial"
            animate="animate"
            transition={{
              ...loaderDotTransition,
              delay: index * 0.2,
            }}
          ></LoaderDot>
        )
      })}
    </LoaderContainer>
  )
}

export default Loader
