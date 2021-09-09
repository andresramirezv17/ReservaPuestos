import React, { createContext, useEffect, useState } from 'react';
import { UserWorkspace } from './models/UserWorkspace';
import * as WorkspaceService from '../services/WorkspaceServices';

export interface WorkSpaceState {
  workSpace?: UserWorkspace;
  varpueba?: boolean;
}

export const useStateContainer = (initialState: WorkSpaceState) => {
  const [workspaceUser, setworkspaceUser] = useState(
    initialState.workSpace || {},
  );
  const [prueba, setprueba] = useState(initialState.varpueba || true);

  useEffect(() => {
    WorkspaceService.getReserves(1).then((reserves) =>
      setworkspaceUser(reserves),
    );
  }, []);

  return { workspaceUser, prueba };
};

export const WorkspaceContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export interface WorkspaceProvider {
  initialState?: WorkSpaceState;
}

export const UserWorkspaceProvider: React.FC<WorkspaceProvider> = ({
  children,
  initialState = {},
}) => {
  const contextValue = useStateContainer(initialState);
  return (
    <WorkspaceContext.Provider value={contextValue}>
      {children}
    </WorkspaceContext.Provider>
  );
};
