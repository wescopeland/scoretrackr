import React from 'react';
import { useParams } from 'react-router-dom';

export const GamePage = () => {
  const { friendlyId } = useParams();

  return (
    <div>
      <p>GamePage works!</p>
    </div>
  );
};
