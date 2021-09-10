import nock from 'nock';
import { UserWorkspace } from '../context/models/UserWorkspace';
import { WorkspacesSearched } from '../context/models/WorkspacesSearched';
import { Floors } from '../context/models/Floors';
import { Sections } from '../context/models/Sections';
import * as workspaceServices from './WorkspaceServices';
import * as workspacefixture from '../../../tests/fixtures/workspace.fixture';

describe('workspace services test', () => {
  let workspace: UserWorkspace;

  beforeEach(() => {
    workspace = {
      id: 1,
      reserves: workspacefixture.getList(),
    };
  });
  it('should fetch workspaces', async () => {
    nock('http://localhost').get('/userreserves').reply(200, workspace);
    const data = await workspaceServices.getReserves();
    expect(data).toEqual(workspace);
  });
});
