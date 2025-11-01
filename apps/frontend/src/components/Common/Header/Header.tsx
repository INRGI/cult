import React, { useState } from "react";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";
import { ProfileMenu } from "../ProfileModal/ProfileModal";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  height: 64px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  backdrop-filter: blur(6px);
  z-index: 100;
`;

const LogoText = styled.h1`
  font-size: clamp(20px, 5vw, 28px);
  letter-spacing: 4px;
  color: #e30000;
  font-family: "Cinzel Decorative", serif;
  text-transform: uppercase;
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
  cursor: default;
`;

const AvatarButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
`;

const AvatarImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(255, 0, 0, 0.6);
  transition: all 0.3s ease;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
  }
`;

const Header: React.FC = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const avatarUrl = user?.avatar || "/magic_circle.png";

  return (
    <HeaderContainer>
      <LogoText>CULT</LogoText>

      <AvatarButton onClick={() => setOpen(!open)}>
        <AvatarImage src={avatarUrl} alt="avatar" />
        <AnimatePresence>{open && <ProfileMenu onClose={() => setOpen(false)} />}</AnimatePresence>
      </AvatarButton>
    </HeaderContainer>
  );
};

export default Header;
