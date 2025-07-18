import React from 'react';
import styled from 'styled-components';

// Cores atualizadas
const darkBlue = '#0A4D68';
const graphiteLight = '#31363f';
const lightBlueText = '#B8D8E8';

const CardWrapper = styled.div`
  background: ${graphiteLight};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(10, 77, 104, 0.5);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 4px solid ${darkBlue};
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  color: ${lightBlueText};
  margin: 0 0 16px 0;
  font-size: 18px;
  font-family: 'Motiva Sans', sans-serif;
`;

const AccessButton = styled.button`
  background: ${darkBlue};
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #0d6a8f;
    box-shadow: 0 0 10px rgba(10, 77, 104, 0.7);
  }
`;

const GameCard = ({ title, image }) => (
  <CardWrapper>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <AccessButton>Acessar</AccessButton>
    </CardContent>
  </CardWrapper>
);

export default GameCard;