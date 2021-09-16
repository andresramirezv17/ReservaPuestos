import React from 'react';
import { FormSearchWorkspace } from '.';
import { render, fireEvent } from '@testing-library/react';
import { ReserveContext } from '../../context/ReserveContext';
import { WorkspacesSearched } from 'pages/MainMenu/context/models/WorkspacesSearched';
import { Floors } from 'pages/MainMenu/context/models/Floors';
import { Sections } from 'pages/MainMenu/context/models/Sections';

describe('FormSearch test', () => {
  let handleSearch: jest.Mock;
  let searchWorkplaces: jest.Mock;
  let obtainFloors: jest.Mock;
  let obtainSections: jest.Mock;
  let changeParameter: jest.Mock;
  let workplaces: WorkspacesSearched[],
    building: string,
    floor: string,
    section: string,
    fecha: string,
    initHour: string,
    endHour: string,
    day: string;
  let floors: Floors, sections: Sections;
  beforeEach(() => {
    handleSearch = jest.fn();
    searchWorkplaces = jest.fn();
    obtainFloors = jest.fn();
    obtainSections = jest.fn();
    changeParameter = jest.fn();
    workplaces = [
      {
        id: 1,
        workplace: 'P2D1',
        available: true,
        building: 'Torre Central',
        floor: 'Piso 1',
        section: 'Sección A',
        initialHour: '7:00',
        endHour: '5:00',
      },
    ];
    floors = {
      id: 1,
      floorsResult: [
        {
          idFloor: 1,
          idBuilding: 1,
          name: 'Piso 1',
        },
      ],
    };
    sections = {
      id: 1,
      sectionsResult: [
        {
          idSection: 1,
          idFloor: 1,
          name: 'Sección A',
        },
      ],
    };
  });
  it('should match with snapshot', () => {
    const { container } = render(
      <ReserveContext.Provider
        value={{
          mutations: {
            searchWorkplaces,
            obtainFloors,
            obtainSections,
            changeParameter,
          },
          data: {
            workplaces,
            floors,
            sections,
            building,
            floor,
            section,
            fecha,
            initHour,
            endHour,
            day,
          },
        }}
      >
        <FormSearchWorkspace />
      </ReserveContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should call handleSearch when button is clicked', () => {
    const { getByTestId } = render(
      <ReserveContext.Provider
        value={{
          mutations: {
            searchWorkplaces,
            obtainFloors,
            obtainSections,
            changeParameter,
          },
          data: {
            workplaces,
            floors,
            sections,
            building,
            floor,
            section,
            fecha,
            initHour,
            endHour,
            day,
          },
        }}
      >
        <FormSearchWorkspace />
      </ReserveContext.Provider>,
    );
    const button = getByTestId('searchW');
    fireEvent.click(button);
    expect(searchWorkplaces).toBeCalledTimes(1);
  });
  it('should call changeparameters when form is changed', () => {
    const { getByTestId } = render(
      <ReserveContext.Provider
        value={{
          mutations: {
            searchWorkplaces,
            obtainFloors,
            obtainSections,
            changeParameter,
          },
          data: {
            workplaces,
            floors,
            sections,
            building,
            floor,
            section,
            fecha,
            initHour,
            endHour,
            day,
          },
        }}
      >
        <FormSearchWorkspace />
      </ReserveContext.Provider>,
    );
    const button = getByTestId('section');
    fireEvent.click(button);
    expect(changeParameter).toHaveBeenCalledTimes(0);
  });
});
