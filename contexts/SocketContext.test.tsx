/* eslint-disable no-undef */
import { renderHook, cleanup } from '@testing-library/react';
import { SocketProvider, useSocketContext } from '.';
import { Props } from './GeneralContext';
import { socket } from './SocketContext';

global.fetch = jest.fn().mockResolvedValue({ json: () => ({}) });

describe('context: SocketContext', () => {
  it('matches socket instance with SocketContext', async () => {
    const wrapper: React.FC<Props> = ({ children }) => (
      <SocketProvider>{children}</SocketProvider>
    );
    const { result } = renderHook(() => useSocketContext(), {
      wrapper,
    });
    expect(result.current.socket).toStrictEqual(socket);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
