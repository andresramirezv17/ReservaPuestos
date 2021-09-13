import nock from 'nock';
import { UserWorkspace } from '../context/models/UserWorkspace';
import { WorkspacesSearched } from '../context/models/WorkspacesSearched';
import { Floors } from '../context/models/Floors';
import { Sections } from '../context/models/Sections';
import * as workspaceServices from './WorkspaceServices';
import * as workspacefixture from '../../../tests/fixtures/workspace.fixture';
import * as floorfixure from '../../../tests/fixtures/floors.fixture';
import * as sectionfixure from '../../../tests/fixtures/sections.fixtures';
import * as workspaceSearchedFixture from '../../../tests/fixtures/workspaceSearched.fixtures';

describe('workspace services test', () => {
  let workspace: UserWorkspace;
  let Floors: Floors;
  let Sections: Sections;
  let workspaceSearched: WorkspacesSearched;

  beforeEach(() => {
    workspace = {
      id: 1,
      reserves: workspacefixture.getList(),
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
      workplaces: workspaceSearchedFixture.getList(),
    };
  });
  it('should fetch workspaces', async () => {
    nock('http://localhost').get('/userreserves').reply(200, workspace);
    const data = await workspaceServices.getReserves();
    expect(data).toEqual(workspace);
  });
  it('should fetch floors', async () => {
    nock('http://localhost').get('/floors').reply(200, Floors);
    const data = await workspaceServices.getFloors();
    expect(data).toEqual(Floors);
  });
  it('should fetch sections', async () => {
    nock('http://localhost').get('/sections').reply(200, Sections);
    const data = await workspaceServices.getSections();
    expect(data).toEqual(Sections);
  });
  it('should fetch workspacesSearched', async () => {
    nock('http://localhost').get('/workspaces').reply(200, workspaceSearched);
    const data = await workspaceServices.getSearchedWorkplaces();
    expect(data).toEqual(workspaceSearched);
  });
});
