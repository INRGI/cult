import React from "react";
import {
  BackgroundWrapper,
  Mist,
  Particles,
  Pentagram,
} from "./WitchBackground.styled";

const WitchBackground: React.FC = () => {
  return (
    <BackgroundWrapper>
      <Mist />
      <Particles />
      <Pentagram size={500} top="10%" left="20%" delay={0} />
      <Pentagram size={400} top="60%" left="70%" delay={10} />
      <Pentagram size={300} top="30%" left="80%" delay={25} />
      <Pentagram size={600} top="50%" left="40%" delay={40} />
    </BackgroundWrapper>
  );
};

export default WitchBackground;
