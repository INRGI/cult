import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
    width: 400px;
    max-width: 90%;
    filter: drop-shadow(0 0 25px #7d1aff);
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const Quote = styled(motion.div)`
  margin-top: 20px;
  font-style: italic;
  color: #c3a1ff;
  text-shadow: 0 0 10px #7d1aff;
  font-size: 1.1rem;
  text-align: center;
  max-width: 300px;
`;

const LoginBox = styled(motion.div)`
  
  background: rgba(20, 0, 40, 0.6);
  border: 1px solid rgba(125, 26, 255, 0.4);
  box-shadow: 0 0 30px rgba(125, 26, 255, 0.4);
  border-radius: 16px;
  padding: 40px;
  max-width: 400px;
  text-align: center;
  z-index: 3;
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 2rem;
  color: #e0caff;
  letter-spacing: 1px;
`;

const GoogleButton = styled.button`
  background: linear-gradient(90deg, #7d1aff, #4e009b);
  border: none;
  color: #fff;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: 0.3s;
  box-shadow: 0 0 15px rgba(125, 26, 255, 0.5);

  &:hover {
    background: linear-gradient(90deg, #8e2bff, #5f00c3);
    box-shadow: 0 0 25px rgba(125, 26, 255, 0.8);
    transform: translateY(-2px);
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
        <img
          src="./cult_main.png"
          alt="Cultist"
        />
        <Quote
          key={currentQuote}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
        >
          “{currentQuote}”
        </Quote>
      </CultistSide>

      <LoginBox
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Join the Cult</Title>
        <GoogleButton>Sign in with Google</GoogleButton>
      </LoginBox>
    </Container>
  );
};

export default Login;
