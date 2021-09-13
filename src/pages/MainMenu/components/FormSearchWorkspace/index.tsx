import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
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
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { ReserveContext } from 'pages/MainMenu/context/ReserveContext';
import { useStyles } from './styles';
import { CardSearchWorkSpace } from '../CardSearchWorkSpace';

export const FormSearchWorkspace: React.FC = () => {
  const [origenError, setorigenError] = useState('');
  const [section, setsection] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).add(1, 'days'),
  );
  const [initialdate, setinitialdate] = useState(
    moment(new Date()).add(1, 'days'),
  );
  const [inHour, setinHour] = useState(new Date('2021-09-07T07:00:00'));
  const [EndHour, setEndHour] = useState(new Date('2021-09-07T19:00:00'));

  const [floor, setfloor] = useState('');
  const classes = useStyles();

  const handleDateChange = (date: Date | null) => {
    const fecha = date;
  };

  const {
    data: { building, floors, sections },
    mutations: {
      changeParameter,
      obtainFloors,
      obtainSections,
      searchWorkplaces,
    },
  } = useContext(ReserveContext);

  const handleSearch = () => {
    searchWorkplaces();
  };

  useEffect(() => {
    obtainFloors();
    setTimeout(() => {
      obtainSections();
    }, 500);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Piso</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={floor}
          label="Piso"
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            setfloor(event.target.value as string);
            changeParameter('piso', event.target.value as string);
          }}
        >
          {floors.floorsResult?.map((item, index) => (
            <MenuItem key={index} value={item.idFloor}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
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
            <MenuItem key={index} value={item.idSection}>
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
            value={selectedDate}
            onChange={handleDateChange}
            label="Fecha"
            format="dd/MM/yyyy"
            minDate={initialdate}
          />
          <TimePicker
            value={inHour}
            onChange={handleDateChange}
            label="Hora inicio"
            openTo="hours"
            views={['hours']}
          />
          <TimePicker
            label="Hora fin"
            value={EndHour}
            onChange={handleDateChange}
            openTo="hours"
            views={['hours']}
          />
        </div>
      </MuiPickersUtilsProvider>
      <Button className={classes.btnSearch} onClick={handleSearch}>
        Buscar Puestos
      </Button>
    </form>
  );
};
