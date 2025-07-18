import React from 'react';
import styled from 'styled-components';
import GameCard from './GameCard';
import positexImg from '../assets/positex.jpg';
import cortexImg from '../assets/cortex.jpg';
import paydvImg from '../assets/paydv.jpg';

const GridContainer = styled.div`
  display: grid;
  /* Alterado para sempre ter 2 colunas */
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;
  /* Adicionado para centralizar o grid em telas maiores */
  max-width: 900px;
  margin: 0 auto;
`;

const gamesData = [
  { id: 1, title: 'Positex -- C&A Pay', image: positexImg },
  { id: 2, title: 'Cortex -- C&A Pay', image: cortexImg },
  { id: 3, title: 'PayDV -- C&A Pay', image: paydvImg },
  { id: 4, title: 'Positex -- C&A Pay', image: positexImg },
  { id: 5, title: 'Cortex -- C&A Pay', image: cortexImg },
  { id: 6, title: 'PayDV -- C&A Pay', image: paydvImg },
  { id: 7, title: 'Positex -- C&A Pay', image: positexImg },
  { id: 8, title: 'Cortex -- C&A Pay', image: cortexImg },
];

const GameGrid = () => (
  <GridContainer>
    {gamesData.map(game => (
      <GameCard key={game.id} title={game.title} image={game.image} />
    ))}
  </GridContainer>
);

export default GameGrid;