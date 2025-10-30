import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";

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
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 16px;
`;

const ProfileModal = styled(motion.div)`
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 20px;
  padding: 28px 24px;
  color: #fff;
  width: 100%;
  max-width: 380px;
  text-align: center;
  box-shadow: 0 0 25px rgba(255, 0, 0, 0.25);

  @media (max-width: 400px) {
    padding: 22px 18px;
    border-radius: 16px;
  }
`;

const ProfileAvatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 2px solid rgba(255, 0, 0, 0.6);
  margin-bottom: 12px;
  object-fit: cover;

  @media (max-width: 400px) {
    width: 70px;
    height: 70px;
  }
`;

const ProfileName = styled.h2`
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 600;
  margin-bottom: 4px;
`;

const ProfileEmail = styled.p`
  font-size: 14px;
  opacity: 0.75;
  margin-bottom: 18px;
  word-break: break-all;
`;

const LogoutButton = styled.button`
  background: #e30000;
  border: none;
  color: white;
  padding: 10px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: background 0.3s ease;
  width: 100%;

  &:hover {
    background: #b00000;
  }

  @media (max-width: 400px) {
    padding: 9px 18px;
  }
`;

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const avatarUrl = user?.avatar || "/magic_circle.png";

  return (
    <>
      <HeaderContainer>
        <LogoText>CULT</LogoText>

        <AvatarButton onClick={() => setOpen(true)}>
          <AvatarImage src={avatarUrl} alt="avatar" />
        </AvatarButton>
      </HeaderContainer>

      <AnimatePresence>
        {open && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <ProfileModal
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ProfileAvatar src={avatarUrl} alt="avatar" />
              <ProfileName>{user?.name || "Unknown Cultist"}</ProfileName>
              <ProfileEmail>{user?.email}</ProfileEmail>
              <LogoutButton onClick={logout}>Sign Out</LogoutButton>
            </ProfileModal>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
