import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import ListItem from './ListItem';

describe('ListItem', () => {
  it('should render list item correctly', () => {
    const tree = renderer.create(<ListItem label="list item title" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should contain "double tap to activate" accessibility hint by default', () => {
    const { queryByA11yHint } = render(<ListItem label="list item title" />);

    const payAContactButton = queryByA11yHint(/double tap to activate/i);

    expect(payAContactButton).toBeTruthy();
  });

  it('should not contain "double tap to activate" accessibility hint for descriptive list preset', () => {
    const { queryByA11yHint } = render(
      <ListItem label="list item title" preset="descriptiveList" />,
    );

    const payAContactButton = queryByA11yHint(/double tap to activate/i);

    expect(payAContactButton).toBeFalsy();
  });
});
