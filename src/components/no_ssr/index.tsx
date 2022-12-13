import dynamic from 'next/dynamic';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line react/jsx-no-useless-fragment
const NoSSRWrapper = ({ children }: Props) => <>{children}</>;
export default dynamic(() => Promise.resolve(NoSSRWrapper), {
  ssr: false,
});
