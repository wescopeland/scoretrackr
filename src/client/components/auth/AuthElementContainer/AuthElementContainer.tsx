import React from 'react';

interface AuthElementContainerProps {
  children: React.ReactNode;
  marginTop: number;
}

export const AuthElementContainer = ({
  children,
  marginTop
}: AuthElementContainerProps) => {
  return (
    <div className={`row mt-${marginTop}`}>
      <div className="col">{children}</div>
    </div>
  );
};
