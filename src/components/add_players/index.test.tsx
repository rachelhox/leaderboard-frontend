import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import AddPlayer from '.';

// ==================================
// unit tests
// ==================================
describe('component: AddPlayer', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <AddPlayer />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
