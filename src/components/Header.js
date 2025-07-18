import React from 'react';
import styled from 'styled-components';
import { UserOutlined, SettingOutlined, HomeOutlined, MenuOutlined } from '@ant-design/icons';
import { Popover, Avatar, Button } from 'antd';

// Cores atualizadas
const darkBlue = '#0A4D68';
const lightBlueText = '#B8D8E8';
const graphiteDark = '#2a2f36';
const graphiteLight = '#31363f';

const HeaderContainer = styled.header`
  background: ${graphiteDark};
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
  color: ${darkBlue};
  font-size: 24px;
  margin-right: 16px;
  &:hover {
    color: ${lightBlueText};
    background: transparent !important;
  }
`;

const Logo = styled.h1`
  font-family: 'Motiva Sans', sans-serif;
  color: ${lightBlueText};
  font-size: 28px; /* Título um pouco maior */
  font-weight: 700;
  margin: 0;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavButton = styled.a`
  color: ${lightBlueText};
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${graphiteLight};
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
  .email { /* Alterado de .group para .email */
    font-size: 12px;
    color: ${lightBlueText};
  }
`;

const user = {
  name: "Antonio Ismael Rodrigues de Melo",
  email: "antonio.ismael@cea.com.br",
  group: "ADM_TECH",
};

const UserContent = (
  <div style={{ padding: '8px', backgroundColor: graphiteLight, color: lightBlueText }}>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Grupo:</strong> {user.group}</p>
  </div>
);

const AppHeader = ({ onMenuClick }) => (
  <HeaderContainer>
    <LogoContainer>
      <MenuButton icon={<MenuOutlined />} onClick={onMenuClick} />
      {/* Subtítulo removido */}
      <Logo>SteamPay</Logo>
    </LogoContainer>
    <NavMenu>
      <NavButton href="#"><HomeOutlined /> Home</NavButton>
      <NavButton href="#"><UserOutlined /> Perfil</NavButton>
      <NavButton href="#"><SettingOutlined /> Configurações</NavButton>
      <Popover content={UserContent} title={user.name} trigger="hover">
        <UserProfile>
          <Avatar size="large" style={{ backgroundColor: darkBlue }}>
            {user.name.charAt(0)}
          </Avatar>
          <UserInfo>
            <div className="name">{user.name}</div>
            {/* Exibindo o email ao invés do grupo */}
            <div className="email">{user.email}</div>
          </UserInfo>
        </UserProfile>
      </Popover>
    </NavMenu>
  </HeaderContainer>
);

export default AppHeader;