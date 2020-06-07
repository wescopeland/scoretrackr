import React from 'react';
import { useParams } from 'react-router-dom';

import { GameBar } from 'client/components/GameBar';

export const GamePage = () => {
  const { friendlyId } = useParams();

  return (
    <>
      <GameBar />
      <p>GamePage works!</p>
    </>
  );
};
