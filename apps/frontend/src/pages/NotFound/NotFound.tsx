import React from "react";
import { Container, Cultist, ReturnButton, Title } from "./NotFound.styled";

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
