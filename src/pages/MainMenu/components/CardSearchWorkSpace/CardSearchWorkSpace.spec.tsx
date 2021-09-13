import React from 'react';
import { CardSearchWorkSpace } from '.';
import { render, fireEvent } from '@testing-library/react';
import { ReserveProvider } from '../../context/ReserveContext';

describe('CardSearchWorkSpace test', () => {
  it('it should match snapshot', () => {
    const { container } = render(
      <ReserveProvider>
        <CardSearchWorkSpace />
      </ReserveProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
