import { useState, useEffect } from 'react';
import { useGeneralContext, useSocketContext } from '@contexts';

export const useAddPlayerHook = () => {
  const { players, setPlayers, board } = useGeneralContext();
  const { socket } = useSocketContext();
  const [newPlayer, setNewPlayer] = useState([
    { name: '', scores: 0, image: '' },
  ]);
  const [count, setCount] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    const validation = newPlayer.every((player) => player.name);
    if (validation) {
      setCanSubmit(true);
    } else if (canSubmit) {
      setCanSubmit(false);
    }
  }, [newPlayer]);

  useEffect(() => {
    if (socket) {
      socket.on('updated_players', ({ data }: any) => {
        setPlayers(data);
      });
    }
    return () => {
      socket.off('updated_players');
    };
  }, []);

  const handleInputChange = (event: any, index: number) => {
    const { name, value } = event.target;
    const updatedPlayers = newPlayer.map((item, i) => {
      if (i === index) return { ...item, [name]: value };
      return item;
    });
    setNewPlayer(updatedPlayers);
  };

  const handlePlayerAvatar = (index: number) => {
    try {
      setCount((prev) => prev + 1);
      const updatedPlayerImage = newPlayer.map((item, i) => {
        if (i === index)
          return {
            ...item,
            image:
              item.name !== ''
                ? `${process.env.NEXT_PUBLIC_AVATAR_URL}/${item.name}`
                : `${process.env.NEXT_PUBLIC_AVATAR_URL}/${count}`,
          };
        return item;
      });
      setNewPlayer(updatedPlayerImage);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const addMorePlayer = (event: any) => {
    event.preventDefault();
    setNewPlayer((prev) => [...prev, { name: '', scores: 0, image: '' }]);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const submittedPlayer = newPlayer.map((player) => {
      if (player.image === '')
        return {
          ...player,
          image: `${process.env.NEXT_PUBLIC_AVATAR_URL}/${player.name}`,
        };
      return player;
    });
    setPlayers((prev) => [...prev, ...submittedPlayer]);
    socket.emit('add_player_to_leaderboard', {
      board,
      data: [...players, ...submittedPlayer],
    });
    setNewPlayer([{ name: '', scores: 0, image: '' }]);
  };

  return {
    newPlayer,
    setNewPlayer,
    handleInputChange,
    handlePlayerAvatar,
    addMorePlayer,
    canSubmit,
    handleSubmit,
  };
};
