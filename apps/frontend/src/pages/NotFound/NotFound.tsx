import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 10px;
  overflow: hidden;
  z-index: 1;
`;

const Cultist = styled(motion.img)`
  width: 200px;
  max-width: 90%;
  filter: drop-shadow(0 0 30px #7d1aff);
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Title = styled(motion.h1)`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  color: #e0caff;
  text-shadow: 0 0 25px #7d1aff;
  letter-spacing: 2px;
  text-align: center;
`;

const ReturnButton = styled(motion.button)`
  margin: 0;
  background: linear-gradient(90deg, #5b00cc, #8c1aff);
  border: none;
  color: #fff;
  padding: 14px 38px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.4s;
  font-weight: bold;
  box-shadow: 0 0 30px rgba(125, 26, 255, 0.4);
  font-family: "Cinzel", serif;

  &:hover {
    background: linear-gradient(90deg, #8e2bff, #b44bff);
    box-shadow: 0 0 40px rgba(140, 30, 255, 0.9);
    transform: translateY(-3px) scale(1.02);
  }
`;

const NotFound: React.FC = () => {
  return (
    <Container>
      <Cultist
        src="./cult_main.png"
        alt="Cultist"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <Title
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        404
      </Title>

      <ReturnButton
        onClick={() => (window.location.href = "/")}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Return to Sanctum
      </ReturnButton>
    </Container>
  );
};

export default NotFound;
