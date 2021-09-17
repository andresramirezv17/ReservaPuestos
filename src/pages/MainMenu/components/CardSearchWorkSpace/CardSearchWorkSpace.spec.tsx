import React from 'react';
import { CardSearchWorkSpace, cardSearchProps } from '.';
import { render, fireEvent } from '@testing-library/react';
import { ReserveContext } from '../../context/ReserveContext';
import { WorkspacesSearched } from 'pages/MainMenu/context/models/WorkspacesSearched';
import { Floors } from 'pages/MainMenu/context/models/Floors';
import { Sections } from 'pages/MainMenu/context/models/Sections';

describe('CardSearchWorkSpace test', () => {
  let props: cardSearchProps;
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
    searchWorkplaces = jest.fn();
    obtainFloors = jest.fn();
    obtainSections = jest.fn();
    changeParameter = jest.fn();
    props = {
      showModal: jest.fn(),
    };
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
  });

  it('it should match snapshot', () => {
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
        <CardSearchWorkSpace {...props} />
      </ReserveContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should call showmodal when button is clicked', () => {
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
        <CardSearchWorkSpace {...props} />
      </ReserveContext.Provider>,
    );
    const button = getByTestId('reserveBtn');
    fireEvent.click(button);
    expect(props.showModal).toHaveBeenCalled();
  });
});
