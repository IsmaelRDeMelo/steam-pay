import React from 'react';
import styled from 'styled-components';

// Cores atualizadas
const darkBlue = '#0A4D68';
const graphiteDark = '#2a2f36';
const footerText = '#8f98a0';

const FooterContainer = styled.footer`
  background: ${graphiteDark};
  color: ${footerText};
  padding: 24px;
  text-align: center;
  font-size: 14px;
  border-top: 1px solid #31363f;
`;

const FooterLink = styled.a`
  color: ${darkBlue};
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const AppFooter = () => (
  <FooterContainer>
    <p>© {new Date().getFullYear()} SteamPay. Todos os direitos reservados.</p>
    <p>"SteamPay, uma plataforma feita por associados, para associados"</p>
    <div>
      <FooterLink href="#">Política de Privacidade</FooterLink> | 
      <FooterLink href="#">Termos de Serviço</FooterLink> | 
      <FooterLink href="#">Suporte</FooterLink>
    </div>
  </FooterContainer>
);

export default AppFooter;