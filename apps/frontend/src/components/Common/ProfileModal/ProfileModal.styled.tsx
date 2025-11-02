import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MenuWrapper = styled(motion.div)`
  position: absolute;
  top: 60px;
  right: 0;
  background: rgba(20, 20, 20, 0.85);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  width: 240px;
  overflow: hidden;
  z-index: 200;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  border-bottom: 1px solid rgba(255, 0, 0, 0.15);
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(255, 0, 0, 0.5);
  object-fit: cover;
`;

export const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Name = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Email = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Level = styled.div`
  font-size: 13px;
  color: #e30000;
  font-weight: 500;
  margin-top: 2px;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0;
`;

export const MenuItem = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.85);
  padding: 10px 16px;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.1);
    color: #fff;
  }
`;
