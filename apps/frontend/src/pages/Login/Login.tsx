import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Container,
  CultistSide,
  GoogleButton,
  Quote,
  QuoteWrapper,
} from "./Login.styled";

const Login: React.FC = () => {
  const quotes = [
    "Dost thou too seek the Witch’s grace?",
    "The darkness welcomes only the worthy...",
    "Offer thy soul, and power shall be thine.",
    "Death is but the dawn of devotion.",
    "The Witch’s whisper hath guided thee here for a purpose...",
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
