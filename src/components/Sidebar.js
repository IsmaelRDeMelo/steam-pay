import React from 'react';
import { Drawer, Menu } from 'antd';
import { QuestionCircleOutlined, BugOutlined, LockOutlined, SolutionOutlined, InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

// Cores atualizadas
const darkBlue = '#0A4D68';
const lightBlueText = '#B8D8E8';
const graphiteDark = '#2a2f36';
const graphiteLight = '#31363f';

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
    background: ${graphiteDark};
  }
  .ant-drawer-header {
    background: ${graphiteDark};
    border-bottom: 1px solid ${graphiteLight};
  }
  .ant-drawer-title, .ant-drawer-close {
    color: ${lightBlueText};
  }
`;

const StyledMenu = styled(Menu)`
  background: ${graphiteDark};
  border-right: none;
  padding: 16px 0;

  .ant-menu-item {
    color: ${lightBlueText};
    font-size: 16px;
    margin: 8px 0 !important;
    
    .ant-menu-item-icon {
      color: ${darkBlue};
    }

    &:hover {
      color: #fff;
      background-color: ${graphiteLight} !important;
    }
    
    &.ant-menu-item-selected {
      background-color: ${graphiteLight} !important;
      color: #fff;
      font-weight: bold;
      &::after {
        border-right: 3px solid ${darkBlue};
      }
    }
  }
`;

const Sidebar = ({ visible, onClose }) => {
  return (
    <StyledDrawer
      title="Menu SteamPay"
      placement="left"
      onClose={onClose}
      open={visible}
      width={280}
    >
      <StyledMenu mode="inline">
        <Menu.Item key="1" icon={<InfoCircleOutlined />}>
          O que é o SteamPay?
        </Menu.Item>
        <Menu.Item key="2" icon={<QuestionCircleOutlined />}>
          Perguntas Frequentes
        </Menu.Item>
        <Menu.Item key="3" icon={<LockOutlined />}>
          Por que não posso ter acesso a tudo?
        </Menu.Item>
        <Menu.Item key="4" icon={<SolutionOutlined />}>
          Como solicitar acesso
        </Menu.Item>
        <Menu.Item key="5" icon={<BugOutlined />}>
          Reportar um bug
        </Menu.Item>
      </StyledMenu>
    </StyledDrawer>
  );
};

export default Sidebar;