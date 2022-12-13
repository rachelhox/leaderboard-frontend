import React from 'react';
import { io } from 'socket.io-client';

export const socket = io(process.env.NEXT_PUBLIC_WS_URL);

export interface SocketContextState {
  socket: any;
}

const initialState: SocketContextState = {
  socket,
};

export const SocketContext =
  React.createContext<SocketContextState>(initialState);

export interface Props {
  children: React.ReactNode;
}

const SocketProvider: React.FC<Props> = ({ children }) => {
  const socketProviderValue = React.useMemo(() => ({ socket }), [socket]);

  return (
    <SocketContext.Provider value={socketProviderValue}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocketContext = (): SocketContextState =>
  React.useContext(SocketContext);

export { SocketProvider, useSocketContext };
