import React from 'react';
import { ReserveWorkSpace } from '.';
import { ReserveProvider } from '../../context/ReserveContext';
import { render } from '@testing-library/react';

describe('ReserveWorkspace test', () => {
  it('should match with snapshot', () => {
    const { container } = render(
      <ReserveProvider>
        <ReserveWorkSpace />
      </ReserveProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
