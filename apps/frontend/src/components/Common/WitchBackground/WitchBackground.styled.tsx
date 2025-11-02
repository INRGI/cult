import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: -1;
  background: radial-gradient(ellipse at center, #0b0013 0%, #000 100%);
`;

export const Mist = styled.div`
  position: absolute;
  width: 300%;
  height: 300%;
  top: -100%;
  left: -100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(90, 0, 140, 0.25),
    transparent 70%
  );
  animation: swirl 40s infinite linear;
  filter: blur(120px);
  opacity: 0.5;

  @keyframes swirl {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.2);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
`;

export const Particles = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(125, 26, 255, 0.1) 1px,
    transparent 1px
  );
  background-size: 100px 100px;
  animation: moveParticles 60s linear infinite;

  @keyframes moveParticles {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 1000px 1000px;
    }
  }
`;

export const Pentagram = styled.div<{
  size: number;
  top: string;
  left: string;
  delay?: number;
}>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  background: url("./magic_circle.png") no-repeat center / contain;
  opacity: 0.15;
  animation: rotate 60s linear infinite;
  animation-delay: ${({ delay }) => delay || 0}s;
  filter: drop-shadow(0 0 25px #7d1aff) brightness(1.5);

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
