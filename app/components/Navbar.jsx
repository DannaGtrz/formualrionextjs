"use client";
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

const Icons = styled.section`
  display: flex;
  gap: 15px;
  align-items: center;

  svg {
    font-size: 24px;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: #ffcc00;
    }
  }
`;

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          SOPORTE
        </Typography>
        <Icons>
          <NotificationsIcon />
          <CalendarTodayIcon />
          <AccountCircleIcon />
        </Icons>
      </Toolbar>
    </AppBar>
  );
}


