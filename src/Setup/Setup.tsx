// /Users/goldlabel/GitHub/package/src/Setup/Setup.tsx
import React from 'react';

export type TSetup= React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Setup = ({ 
  variant = 'primary', 
  children, 
  ...rest
}: any) => {
  return (
    <>
      <h1>
        Setup
      </h1>
      <pre>...rest{JSON.stringify(rest, null, 2)}</pre>
    </>
  );
};

export default Setup;
