import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Container,
  CultistSide,
  Quote,
  QuoteWrapper,
} from "./Login.styled";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login: React.FC = () => {
  const quotes = [
    "Dost thou too seek the Witch’s grace?",
    "The darkness welcomes only the worthy...",
    "Offer thy soul, and power shall be thine.",
    "Death is but the dawn of devotion.",
    "The Witch’s whisper hath guided thee here for a purpose...",
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const { login, user } = useAuth();
  const navigate = useNavigate();

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  
  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      const token = credentialResponse.credential;
      const res = await axios.post("http://localhost:3000/api/auth/google", { token });

      login(res.data.token, res.data.user);
      navigate("/");
    } catch (error: any) {
      console.error("Access denied: only EPC Network members can log in.");
    }
  };

  const handleGoogleError = () => {
    console.error("Google login failed");
  };

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

      <div style={{ marginTop: "40px" }}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          theme="filled_black"
          shape="pill"
          size="large"
          text="signin_with"
        />
      </div>
    </Container>
  );
};

export default Login;
