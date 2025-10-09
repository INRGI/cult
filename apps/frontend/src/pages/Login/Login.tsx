import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
`;

const CultistSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;

  img {
    width: 380px;
    max-width: 90%;
    filter: drop-shadow(0 0 25px #7d1aff);
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const QuoteWrapper = styled.div`
  position: relative;
  height: 60px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Quote = styled(motion.div)`
  position: absolute;
  font-style: italic;
  color: #c3a1ff;
  text-shadow: 0 0 10px #7d1aff;
  font-size: 1.1rem;
  text-align: center;
  max-width: 320px;
  width: 100%;
`;

const GoogleButton = styled(motion.button)`
  position: relative;
  margin-top: 60px;
  background: linear-gradient(90deg, #5b00cc, #8c1aff);
  border: none;
  color: #fff;
  padding: 14px 38px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.4s;
  box-shadow: 0 0 30px rgba(125, 26, 255, 0.4);
  font-family: "Cinzel", serif;

  &:before {
    content: "";
    position: absolute;
    top: -120%;
    left: -120%;
    width: 250%;
    height: 250%;
    background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s, transform 0.5s;
    transform: scale(0.6);
  }

  &:hover:before {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background: linear-gradient(90deg, #8e2bff, #b44bff);
    box-shadow: 0 0 40px rgba(140, 30, 255, 0.9);
    transform: translateY(-3px) scale(1.02);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    box-shadow: 0 0 25px rgba(125, 26, 255, 0.5);
    animation: pulse 2s infinite ease-in-out;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

const Login: React.FC = () => {
  const quotes = [
    "Dost thou too seek the Witch’s grace?",
    "The darkness welcomes only the worthy...",
    "Offer thy soul, and power shall be thine.",
    "Death is but the dawn of devotion.",
    "The Witch’s whisper hath guided thee here for a purpose..."
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <CultistSide>
        <img src="./cult_main.png" alt="Cultist" />
        <QuoteWrapper>
          <AnimatePresence mode="wait">
            <Quote
              key={currentQuote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
            >
              “{currentQuote}”
            </Quote>
          </AnimatePresence>
        </QuoteWrapper>
      </CultistSide>

      <GoogleButton
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Join the Cult
      </GoogleButton>
    </Container>
  );
};

export default Login;
