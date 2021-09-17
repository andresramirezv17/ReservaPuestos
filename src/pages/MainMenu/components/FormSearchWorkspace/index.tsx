import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { Button } from '@material-ui/core';
import moment from 'moment';
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { ReserveContext } from 'pages/MainMenu/context/ReserveContext';
import { useStyles } from './styles';

export const FormSearchWorkspace: React.FC = () => {
  const todayDate = new Date();
  const followingDay = new Date(todayDate.getTime() + 86400000);
  const [section, setsection] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(followingDay);
  const [initialdate, setinitialdate] = useState(followingDay);
  const [inHour, setinHour] = useState<Date | null>(
    new Date('2021-09-07T07:00:00'),
  );
  const [EndHour, setEndHour] = useState<Date | null>(
    new Date('2021-09-07T17:00:00'),
  );

  const [floor, setfloor] = useState('');
  const classes = useStyles();

  const {
    data: { building, floors, sections },
    mutations: { changeParameter, obtainFloors, searchWorkplaces },
  } = useContext(ReserveContext);

  useEffect(() => {
    if (floors.floorsResult?.length !== 0) {
      setfloor('Piso 1');
      setsection('Sección A');
    }
  }, [floors]);

  useEffect(() => {
    obtainFloors();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDateChange = (date: Date | null) => {
    const day = moment(date).format('dddd');
    const fecha = moment(date).format('DD/MM/YYYY');
    changeParameter('date', fecha);
    changeParameter('day', day);
    setSelectedDate(date);
  };

  const handleInitHourChange = (date: Date | null) => {
    setinHour(date);
    changeParameter('inithour', moment(date).format('HH:mm'));
  };
  const handleEndHourChange = (date: Date | null) => {
    setEndHour(date);
    changeParameter('endhour', moment(date).format('HH:mm'));
  };

  return (
    <form autoComplete="off" className={classes.root}>
      <TextField
        id="outlined-read-only-input"
        label="Edificio"
        defaultValue={building}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <FormControl
        variant="outlined"
        className={classes.formControl}
        data-testid="floorForm"
      >
        <InputLabel id="demo-simple-select-outlined-label">Piso</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={floor}
          defaultValue="1"
          label="Piso"
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            setfloor(event.target.value as string);
            changeParameter('piso', event.target.value as string);
          }}
        >
          {floors.floorsResult?.map((item, index) => (
            <MenuItem
              data-testid="floorOption"
              key={item.idFloor}
              value={item.name}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        variant="outlined"
        className={classes.formControl}
        data-testid="sectionForm"
      >
        <InputLabel id="demo-simple-select-outlined-label">Sección</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={section}
          label="Sección"
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            setsection(event.target.value as string);
            changeParameter('section', event.target.value as string);
          }}
        >
          {sections.sectionsResult?.map((item, index) => (
            <MenuItem
              data-testid="sectionOption"
              key={item.idSection}
              value={item.name}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.boxDate}>
          <DatePicker
            style={{
              marginLeft: '13px',
            }}
            data-testid="dateSelector"
            value={selectedDate}
            onChange={handleDateChange}
            label="Fecha"
            format="dd/MM/yyyy"
            minDate={initialdate}
          />
          <TimePicker
            value={inHour}
            onChange={handleInitHourChange}
            label="Hora inicio"
            openTo="hours"
            views={['hours']}
            format="HH:mm"
            data-testid="inHour"
          />
          <TimePicker
            label="Hora fin"
            value={EndHour}
            onChange={handleEndHourChange}
            openTo="hours"
            views={['hours']}
            format="HH:mm"
            data-testid="endHour"
          />
        </div>
      </MuiPickersUtilsProvider>
      <Button
        className={classes.btnSearch}
        onClick={() => searchWorkplaces()}
        data-testid="searchW"
      >
        Buscar Puestos
      </Button>
    </form>
  );
};
