# Leaderboard

A web app displaying real-time leaderboard, powered by SocketIO.

## Features

### Real-time updates on players’ status

Powered by socket.io with context API, updates show up real-time across browsers connected to socket.

#### Functionalities

- Add Player(s)
<p align="center">
<img src="https://media.giphy.com/media/e7R8wQ1k8KA4Feml40/giphy.gif" width="550" />
</p>

## Context API

### General Context:

Managing players:

```typescript
interface GeneralState {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}
```

Leaderboard number for reference to [socket server](https://github.com/rachelhox/leaderboard-backend):

```typescript
interface GeneralState {
  board: string;
}
```

### Socket Context:

Global `socket` variable to manage socket events in this app:

```typescript
interface SocketContextState {
  socket: any;
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
