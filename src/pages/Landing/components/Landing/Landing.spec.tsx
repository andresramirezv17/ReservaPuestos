import React from 'react';
import { Landing, LandingProps } from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Landing test', () => {
  let onContinue: jest.Mock;
  beforeEach(() => {
    onContinue = jest.fn();
  });
  it('should match snapshot', () => {
    const { container } = render(<Landing onContinue={onContinue} />);
    expect(container).toMatchSnapshot();
  });
  it('Should click continue wihtout parameters filled ', async () => {
    const { findByTestId } = render(<Landing onContinue={onContinue} />);
    const continueButton = await findByTestId('continue');
    fireEvent.click(continueButton);

    expect(onContinue).not.toBeCalled();
  });
  it('Should click to continue with parameters filled', async () => {
    const { findByTestId } = render(<Landing onContinue={onContinue} />);
    const userInput = await findByTestId('input-username');
    const passInput = await findByTestId('password-username');
    const continueButton = await findByTestId('continue');

    fireEvent.change(userInput, {
      target: { value: 'andres' },
    });
    fireEvent.change(passInput, {
      target: { value: '1234' },
    });

    fireEvent.click(continueButton);

    expect(onContinue).toBeCalled();
  });
});
