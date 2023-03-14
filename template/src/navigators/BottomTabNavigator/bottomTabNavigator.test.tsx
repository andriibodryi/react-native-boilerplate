import { render } from '@testing-library/react-native';

import { BottomTabNavigator } from './BottomTabNavigator';

describe('BottomTabNavigator component', () => {
  it('renders correctly', () => {
    const component = render(<BottomTabNavigator />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
