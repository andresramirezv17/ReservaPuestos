import React from 'react';
import { WorkSpaces } from '.';
import { UserWorkspaceProvider } from '../../context/WorkspaceContext';
import { render, fireEvent } from '@testing-library/react';

describe('Workspace User test', () => {
  it('should match with snapshot', () => {
    const { container } = render(
      <UserWorkspaceProvider>
        <WorkSpaces />
      </UserWorkspaceProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
