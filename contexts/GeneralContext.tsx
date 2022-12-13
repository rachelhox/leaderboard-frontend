/* eslint-disable no-undef */
import React from 'react';
import { initialPlayers } from '@utils';

interface GeneralState {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  board: string;
}

const initialState: GeneralState = {
  players: initialPlayers,
  setPlayers: () => {},
  board: '1',
};

export interface Props {
  children: React.ReactNode;
}

const GeneralContext = React.createContext<GeneralState>(initialState);

const GeneralProvider: React.FC<Props> = ({ children }) => {
  const [players, setPlayers] = React.useState(initialState.players);
  const [board, setBoard] = React.useState(initialState.board);

  const generalProviderValue = React.useMemo(
    () => ({ players, setPlayers, board, setBoard }),
    [players, setPlayers, board, setBoard]
  );

  return (
    <GeneralContext.Provider value={generalProviderValue}>
      {children}
    </GeneralContext.Provider>
  );
};

const useGeneralContext = (): GeneralState => React.useContext(GeneralContext);

export { GeneralProvider, useGeneralContext };
