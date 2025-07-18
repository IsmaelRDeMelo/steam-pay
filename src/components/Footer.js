import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #171a21;
  color: #8f98a0;
  padding: 24px;
  text-align: center;
  font-size: 14px;
  border-top: 1px solid #3a3f4b;
`;

const FooterLink = styled.a`
  color: #66c0f4;
  text-decoration: none;
  margin: 0 10px;

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