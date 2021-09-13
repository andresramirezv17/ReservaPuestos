import React from 'react';
import { LandingContainer } from '.';
import { SessionProvider } from '../../../../context/SessionContext';
import { render } from '@testing-library/react';

describe('LandingContainer Test', () => {
  let onContinue: jest.Mock;
  beforeEach(() => {
    onContinue = jest.fn();
  });
  it('should match with snapshot', () => {
    const { container } = render(
      <SessionProvider>
        <LandingContainer />
      </SessionProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
