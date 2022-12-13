/* eslint-disable no-undef */
import { renderHook, act, cleanup } from '@testing-library/react';
import { initialPlayers } from '@utils';
import { GeneralProvider, useGeneralContext } from '.';
import { Props } from './GeneralContext';

global.fetch = jest.fn().mockResolvedValue({ json: () => ({}) });

describe('context: GeneralContext', () => {
  it('changes players when setPlayers is called', async () => {
    const wrapper: React.FC<Props> = ({ children }) => (
      <GeneralProvider>{children}</GeneralProvider>
    );
    const { result } = renderHook(() => useGeneralContext(), {
      wrapper,
    });
    expect(result.current.players).toStrictEqual(initialPlayers);
    await act(async () => {
      await result.current.setPlayers([
        { name: 'Ron', scores: 100, image: 'image_src' },
      ]);
    });
    expect(result.current.players).toStrictEqual([
      { name: 'Ron', scores: 100, image: 'image_src' },
    ]);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
