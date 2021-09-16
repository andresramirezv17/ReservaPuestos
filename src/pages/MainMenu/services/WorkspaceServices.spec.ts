import nock from 'nock';

import { matches } from 'lodash';
import { act } from '@testing-library/react';
import { UserWorkspace } from '../context/models/UserWorkspace';
import { WorkspacesSearched } from '../context/models/WorkspacesSearched';
import { Floors } from '../context/models/Floors';
import { Sections } from '../context/models/Sections';
import * as workspaceServices from './WorkspaceServices';
import { UserReserve } from '../context/models/UserReserve';

import * as floorfixure from '../../../tests/fixtures/floors.fixture';
import * as sectionfixure from '../../../tests/fixtures/sections.fixtures';

describe('workspace services test', () => {
  let workspace: UserWorkspace;
  let Floors: Floors;
  let Sections: Sections;
  let workspaceSearched: WorkspacesSearched;
  let reserve: UserReserve;

  beforeEach(() => {
    workspace = {
      id: 1,
      building: 'Torre Central',
      date: '10/09/2021',
      floor: 'Piso 1',
      section: 'Sección A',
      workplace: 'P1A1',
      initialHour: '7:00',
      endHour: '15:00',
      isChekin: true,
    };
    Floors = {
      id: 1,
      floorsResult: floorfixure.getList(),
    };
    Sections = {
      id: 1,
      sectionsResult: sectionfixure.getList(),
    };
    workspaceSearched = {
      id: 1,
      workplace: 'P2D1',
      available: true,
      building: 'Torre Central',
      floor: 'Piso 1',
      section: 'Sección A',
      initialHour: '7:00',
      endHour: '5:00',
    };
  });
  it('should fetch workspaces', async () => {
    nock('http://localhost').get('/userreserves').reply(200, workspace);
    const data = await workspaceServices.getReserves();
    expect(data).toEqual(workspace);
  });
  it('should fetch floors', async () => {
    const promise = Promise.resolve();
    nock('http://localhost').get('/floors').reply(200, Floors);
    const data = await workspaceServices.getFloors();
    expect(data).toEqual(Floors);
    await act(() => promise);
  });
  it('should fetch sections', async () => {
    const promise = Promise.resolve();
    nock('http://localhost').get('/sections').reply(200, Sections);
    const data = await workspaceServices.getSections();
    expect(data).toEqual(Sections);
    await act(() => promise);
  });
  it('should fetch workspacesSearched', async () => {
    nock('http://localhost').get('/workspaces').reply(200, workspaceSearched);
    const data = await workspaceServices.getSearchedWorkplaces();
    expect(data).toEqual(workspaceSearched);
  });
  it('should checkin workspace', async () => {
    nock('http://localhost').post('/userreserves', matches(reserve)).reply(201);
    const value = await workspaceServices.doReserve(reserve);
    expect(value).toBeTruthy();
  });
  it('should delete workspace', async () => {
    nock('http://localhost').delete('/userreserves/1').reply(200);
    const value = await workspaceServices.endReserve(1);
    expect(value).toBeTruthy();
  });
  it('should do checkin', async () => {
    nock('http://localhost').put('/userreserves/1').reply(200);
    const value = await workspaceServices.checkinReserve(1, workspace, true);
    expect(value).toBeTruthy();
  });
  it('should do not checkin', async () => {
    nock('http://localhost').put('/userreserves/1').replyWithError('');
    const value = await workspaceServices.checkinReserve(1, workspace, true);
    expect(value).toEqual('Error');
  });
  it('should update workspace state', async () => {
    nock('http://localhost').put('/workspaces/1').reply(200);
    const value = await workspaceServices.updateWorkSpace(
      1,
      workspaceSearched,
      true,
    );
    expect(value).toBeTruthy();
  });
  it('should not update workspace state', async () => {
    nock('http://localhost').put('/workspaces/1').replyWithError('Error');
    const value = await workspaceServices.updateWorkSpace(
      0,
      workspaceSearched,
      true,
    );
    expect(value).toEqual('Error');
  });
});
