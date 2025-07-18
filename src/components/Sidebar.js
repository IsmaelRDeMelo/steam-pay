import React from 'react';
import { Drawer, Menu } from 'antd';
import { QuestionCircleOutlined, BugOutlined, LockOutlined, SolutionOutlined, InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
    background: #171a21;
  }
  .ant-drawer-header {
    background: #171a21;
    border-bottom: 1px solid #3a3f4b;
  }
  .ant-drawer-title, .ant-drawer-close {
    color: #c7d5e0;
  }
`;

const StyledMenu = styled(Menu)`
  background: #171a21;
  border-right: none;
  padding: 16px 0;

  .ant-menu-item {
    color: #c7d5e0;
    font-size: 16px;
    margin: 8px 0 !important;
    
    &:hover {
      color: #fff;
    }
    
    &.ant-menu-item-selected {
      background-color: rgba(102, 192, 244, 0.2) !important;
      color: #66c0f4;
      &::after {
        border-right: 3px solid #66c0f4;
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
      <StyledMenu mode="inline" defaultSelectedKeys={['1']}>
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