/* eslint-disable no-undef */
import * as React from 'react';
import { useGeneralContext, useSocketContext } from '@contexts';

export const useLeaderBoardHook = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Player>('scores');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { players, setPlayers, board } = useGeneralContext();
  const { socket } = useSocketContext();
  const [isConnected, setIsConnected] = React.useState(socket.connected);

  React.useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        setIsConnected(true);
      });

      socket.emit('join_board', board);
      socket.on('remaining_players', ({ data }: any) => {
        setPlayers(data);
      });
    }
    return () => {
      socket.off('connect');
      socket.off('join_baord');
      socket.off('disconnect');
    };
  }, []);

  // ws connected state management for the socket health signal
  React.useEffect(() => {
    if (socket.connected === true) {
      setIsConnected(true);
    }
  }, [socket]);

  const handleDeletePlayers = (event: React.MouseEvent<unknown>) => {
    event.preventDefault();
    const filteredPlayers = players.filter(
      (player) => !selected.filter((n) => n === player.name).length
    );
    setPlayers(filteredPlayers);
    socket.emit('remove_player_from_leaderboard', {
      board,
      data: filteredPlayers,
    });
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Player
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = players.map((player) => player.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - players.length) : 0;

  return {
    selected,
    handleDeletePlayers,
    isConnected,
    order,
    orderBy,
    handleSelectAllClick,
    handleRequestSort,
    players,
    page,
    rowsPerPage,
    isSelected,
    handleClick,
    emptyRows,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
