import React from 'react';
import renderer from 'react-test-renderer';
import { wait } from '@tests/utils';
import Home from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: () => <div id="Layout" />,
  LeaderboardTable: () => <div id="LeaderboardTable" />,
  AddPlayer: () => <div id="AddPlayer" />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home', () => {
  it('matches snapshot', async () => {
    let component: any;
    renderer.act(() => {
      component = renderer.create(<Home />);
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
