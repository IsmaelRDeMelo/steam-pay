import React from 'react';
import styled from 'styled-components';
import { UserOutlined, SettingOutlined, HomeOutlined, MenuOutlined } from '@ant-design/icons';
import { Popover, Avatar, Button } from 'antd';

const HeaderContainer = styled.header`
  background: #171a21;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled(Button)`
  background: transparent;
  border: none;
  color: #66c0f4;
  font-size: 24px;
  margin-right: 16px;
  &:hover {
    color: #fff;
    background: transparent !important;
  }
`;

const Logo = styled.h1`
  font-family: 'Motiva Sans', sans-serif;
  color: #66c0f4;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  span {
    font-weight: 400;
    font-size: 14px;
    color: #c7d5e0;
    display: block;
    margin-top: -5px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavButton = styled.a`
  color: #c7d5e0;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(102, 192, 244, 0.2);
    color: #fff;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserInfo = styled.div`
  margin-left: 12px;
  text-align: right;
  .name {
    color: #fff;
    font-weight: 500;
  }
  .group {
    font-size: 12px;
    color: #66c0f4;
  }
`;

const user = {
  name: "Antonio Ismael Rodrigues de Melo",
  email: "antonio.ismael@cea.com.br",
  group: "ADM_TECH",
};

const UserContent = (
  <div style={{ padding: '8px' }}>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Grupo:</strong> {user.group}</p>
  </div>
);

const AppHeader = ({ onMenuClick }) => (
  <HeaderContainer>
    <LogoContainer>
      <MenuButton icon={<MenuOutlined />} onClick={onMenuClick} />
      <Logo>
        SteamPay
        <span>uma plataforma feita por associados, para associados</span>
      </Logo>
    </LogoContainer>
    <NavMenu>
      <NavButton href="#"><HomeOutlined /> Home</NavButton>
      <NavButton href="#"><UserOutlined /> Perfil</NavButton>
      <NavButton href="#"><SettingOutlined /> Configurações</NavButton>
      <Popover content={UserContent} title={user.name} trigger="hover">
        <UserProfile>
          <Avatar size="large" style={{ backgroundColor: '#66c0f4' }}>
            {user.name.charAt(0)}
          </Avatar>
          <UserInfo>
            <div className="name">{user.name}</div>
            <div className="group">{user.group}</div>
          </UserInfo>
        </UserProfile>
      </Popover>
    </NavMenu>
  </HeaderContainer>
);

export default AppHeader;