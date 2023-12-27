import styled from "styled-components";
import { motion } from "framer-motion";

export default function FramerMotion() {
  const buttonVar = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const customModalStyles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "400px",
      height: "250px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      // boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };
  return (
    <>
      <div>안녕하세요 Hello World</div>
      <MotionButton
        initial={{ opacity: 0.5 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ opacity: 1 }}
      >
        ddd
      </MotionButton>
      <Motion whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        ㅋㅋㅋㅋㅋ
      </Motion>
      <Motion
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        Motion Drag
      </Motion>
      <Motion initial={{ x: 100 }}>초기 이동</Motion>
      <Container initial="hidden" animate="visible" variants={container}>
        <Motion variants={item}>1</Motion>
        <Motion variants={item}>2</Motion>
        <Motion variants={item}>3</Motion>
        <Motion variants={item}>4</Motion>
      </Container>
    </>
  );
}

const MotionButton = styled(motion.button)`
  margin: auto;
  margin-top: 50px;
  width: 100px;
  height: 100px;
  background-color: blue;
`;

const Motion = styled(motion.div)`
  margin: auto;
  margin-top: 50px;
  width: 100px;
  height: 100px;
  background-color: skyblue;
`;

const Container = styled(motion.div)`
  display: flex;
  gap: 20px;
`;

const AnimationBox = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 100px;
  height: 100px;
  background-color: beige;
  animation: animations;
`;
