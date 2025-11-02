import React, { useRef, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import {
  Avatar,
  Email,
  Info,
  Level,
  MenuItem,
  MenuItems,
  MenuWrapper,
  Name,
  ProfileHeader,
} from "./ProfileModal.styled";

type ProfileMenuProps = {
  onClose: () => void;
};

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ onClose }) => {
  const { user, logout } = useAuth();
  const ref = useRef<HTMLDivElement>(null);

  const avatarUrl = user?.avatar || "/magic_circle.png";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <MenuWrapper
      ref={ref}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <ProfileHeader>
        <Avatar src={avatarUrl} alt="avatar" />
        <Info>
          <Name>{user?.name || "Unknown Cultist"}</Name>
          <Email>{user?.email}</Email>
          <Level>Level {user?.level ?? 1}</Level>
        </Info>
      </ProfileHeader>

      <MenuItems>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Achievements</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem
          style={{
            color: "#ff4d4d",
            borderTop: "1px solid rgba(255,0,0,0.15)",
            marginTop: 4,
          }}
          onClick={logout}
        >
          Sign Out
        </MenuItem>
      </MenuItems>
    </MenuWrapper>
  );
};

export default ProfileMenu;
