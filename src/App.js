import React, { useState } from 'react';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Sidebar from './components/Sidebar';
import GameGrid from './components/GameGrid';
import './App.css';

const { Content } = Layout;

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Layout className="app-layout">
      <AppHeader onMenuClick={toggleSidebar} />
      <Layout className="main-content">
        <Sidebar visible={sidebarVisible} onClose={toggleSidebar} />
        <Content className={`content-area ${sidebarVisible ? 'sidebar-open' : ''}`}>
          <GameGrid />
        </Content>
      </Layout>
      <AppFooter />
    </Layout>
  );
}

export default App;