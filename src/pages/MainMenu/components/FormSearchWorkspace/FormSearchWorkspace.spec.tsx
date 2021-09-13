import React from 'react';
import { FormSearchWorkspace } from '.';
import { render, fireEvent } from '@testing-library/react';
import { ReserveProvider } from '../../context/ReserveContext';

describe('FormSearch test', () => {
  it('should match with snapshot', () => {
    const { container } = render(
      <ReserveProvider>
        <FormSearchWorkspace />
      </ReserveProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
