import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";
import { ProfileMenu } from "../ProfileModal/ProfileModal";
import {
  AvatarButton,
  AvatarImage,
  HeaderContainer,
  LogoText,
} from "./Header.styled";

const Header: React.FC = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const avatarUrl = user?.avatar || "/magic_circle.png";

  return (
    <HeaderContainer>
      <LogoText>CULT</LogoText>

      <AvatarButton onClick={() => setOpen(!open)}>
        <AvatarImage src={avatarUrl} alt="avatar" />
        <AnimatePresence>
          {open && <ProfileMenu onClose={() => setOpen(false)} />}
        </AnimatePresence>
      </AvatarButton>
    </HeaderContainer>
  );
};

export default Header;
