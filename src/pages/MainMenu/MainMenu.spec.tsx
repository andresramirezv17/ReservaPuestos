import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MainMenu } from '.';

describe('MainMenu test', () => {
  it('should match with snapshot', () => {
    const { container } = render(<MainMenu />);
    expect(container).toMatchSnapshot();
  });
});
