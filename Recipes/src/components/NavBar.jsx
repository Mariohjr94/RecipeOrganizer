import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BookIcon from '@mui/icons-material/Book';
import { useTheme } from "@mui/material/styles";

const Navbar = () => {

    const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.secondary.main, // Use secondary.main for backgroundxq
        color: theme.palette.secondary.contrastText, // Use secondary.contrastText for text
        boxShadow: "none", // Optional: Remove shadow for a flat look
      }}
    >
      <Toolbar>
        {/* Menu Icon for mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          //sx={{ mr: 2 }}
        >
          <BookIcon />
        </IconButton>

        {/* Logo or Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, }}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", fontWeight: "700" }}
        >
          Cookbooks
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
