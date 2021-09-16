import React from 'react';
import { WorkSpaces } from '.';
import {
  UserWorkspaceProvider,
  WorkspaceContext,
} from '../../context/WorkspaceContext';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { UserWorkspace } from 'pages/MainMenu/context/models/UserWorkspace';
import { CardWorkSpaces } from '../../components/CardWorkSpaces';

describe('Workspace User test', () => {
  afterEach(cleanup);
  let getWorkSpaces: jest.Mock;
  let showModalInfo: jest.Mock;
  let workspaceUser: UserWorkspace[];

  beforeAll(() => {
    getWorkSpaces = jest.fn();
    showModalInfo = jest.fn();
    workspaceUser = [
      {
        id: 1,
        building: 'Torre Central',
        date: '10/09/2021',
        floor: 'Piso 1',
        section: 'Sección A',
        workplace: 'P1A1',
        initialHour: '7:00',
        endHour: '15:00',
        isChekin: false,
      },
    ];
  });
  it('should match with snapshot', () => {
    const { container } = render(
      <WorkspaceContext.Provider value={{ getWorkSpaces, workspaceUser }}>
        <WorkSpaces />
      </WorkspaceContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should call show modal when the click on the child is clicked', () => {
    const { getByTestId } = render(
      <WorkspaceContext.Provider value={{ getWorkSpaces, workspaceUser }}>
        <WorkSpaces />
      </WorkspaceContext.Provider>,
    );
    const button = getByTestId('docheckin');
    fireEvent.click(button);
    expect(showModalInfo).toHaveBeenCalledTimes(0);
  });
});
