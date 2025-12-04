// /Users/goldlabel/GitHub/npm-core/src/components/Setup.tsx
import React from 'react';

export type TSetup= React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Setup = ({ 
  variant = 'primary', 
  children, 
  ...rest,
}: any) => {
  return (
    <>
    pre
      <pre>...rest{JSON.stringify(rest, null, 2)}</pre>
    </>
  );
};

export default Setup;
