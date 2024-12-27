"use client";
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rightAligned: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1, 
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          SOPORTE
        </Typography>
        <div className={classes.rightAligned}>
          <NotificationsIcon />
          <CalendarTodayIcon />
          <AccountCircleIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
}

