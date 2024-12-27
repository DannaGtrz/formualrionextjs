"use client";

import React, { useState } from 'react';
import Select from 'react-select';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Container = styled.section`
  margin: 0 auto;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const tipoPresupuesto = [
  { value: 'presupuesto1', label: 'Presupuesto 1' },
  { value: 'presupuesto2', label: 'Presupuesto 2' },
  { value: 'presupuesto3', label: 'Presupuesto 3' }
];

const timeEntrega = [
  { value: '1 semana', label: '1 Semana' },
  { value: '2 semanas', label: '2 Semanas' },
  { value: '1 mes', label: '1 Mes' }
];

export default function Formulario() {
  const [selectedTipoPresupuesto, setSelectedTipoPresupuesto] = useState(null);
  const [selectedTimeEntrega, setSelectedTimeEntrega] = useState(null);

  const handleTipoPresupuestoChange = (selectedOption) => {
    setSelectedTipoPresupuesto(selectedOption);
  };

  const handleTimeEntregaChange = (selectedOption) => {
    setSelectedTimeEntrega(selectedOption);
  };

  return (
    <Container>
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="folio"
            label="Folio"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vigencia"
            label="Vigencia"
            type="date"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="correo"
            label="Correo"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="telefono"
            label="Teléfono"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select
            className="basic-single"
            classNamePrefix="select"
            value={selectedTipoPresupuesto} 
            onChange={handleTipoPresupuestoChange}  
            isClearable={true}  
            isSearchable={true}  
            name="tipo"
            options={tipoPresupuesto}  
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select
            className="basic-single"
            classNamePrefix="select"
            value={selectedTimeEntrega} 
            onChange={handleTimeEntregaChange}  
            isClearable={true}  
            isSearchable={true}  
            name="tiempo"
            options={timeEntrega}  
          />
        </Grid>
        <Grid item xs={12} >
        <TextField
          id="outlined-full-width"
          label="Observaciones"
          style={{ margin: 8 }}
          placeholder="Selecciona el tipo de presupuesto"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </Grid>
      </Grid>
      <Button variant="outlined">
            Enviar
          </Button>
    </form>
    </Container>
  );
}
