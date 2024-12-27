"use client";
import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@mui/icons-material/Face';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import styled from 'styled-components';

const Section = styled.section`
  background: ${(props) => props.$background || "blue"}; 
  height: 100vh;
  width: 250px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #2c3e50;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.02);
  }

  svg {
    margin-right: 10px;
  }
`;

export default function Sidebar() {
  return (
    <Section>
      <div sx={{ width: 250 }} role="presentation">
        <img src="/image/imagen.png" alt="Logo" style={{ marginBottom: '20px' }} />
        <StyledButton>
          <DashboardIcon />
          Dashboard
        </StyledButton>
        <StyledButton>
          <FaceIcon />
          Prospectos
        </StyledButton>
        <StyledButton>
          <InsertDriveFileIcon />
          Presupuestos
        </StyledButton>
      </div>
    </Section>
  );
}
