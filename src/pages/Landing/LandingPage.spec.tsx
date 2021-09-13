import React from 'react';
import { LandingPage } from './index';
import { render } from '@testing-library/react';
import { SessionProvider } from '../../context/SessionContext';

const defaultProps: any = {
  history: {
    replace: jest.fn(),
  },
};

describe('Landing test', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <SessionProvider>
        <LandingPage {...defaultProps} />
      </SessionProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
