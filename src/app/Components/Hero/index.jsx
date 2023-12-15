import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as React from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";

export function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          bgcolor: "white",
          color: "black",
          fontWeight: "bold",
          fontSize: "22px",
          // color: "rgb(252, 114, 255)",
        }}
        style={{
          maxWidth: "120px",
          maxHeight: "40px",
          minWidth: "120px",
          minHeight: "40px",
          borderRadius: "50px",
        }}
      >
        ETH <ExpandMoreIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>WETH</MenuItem>
        <MenuItem onClick={handleClose}>USDT</MenuItem>
        <MenuItem onClick={handleClose}>DAI</MenuItem>
      </Menu>
    </div>
  );
}
export function BasicMenu2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          bgcolor: "rgb(252, 114, 255)",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          // color: "rgb(252, 114, 255)",
        }}
        style={{
          maxWidth: "180px",
          maxHeight: "40px",
          minWidth: "180px",
          minHeight: "40px",
          borderRadius: "50px",
        }}
      >
        Select Token <ExpandMoreIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>WETH</MenuItem>
        <MenuItem onClick={handleClose}>USDT</MenuItem>
        <MenuItem onClick={handleClose}>DAI</MenuItem>
      </Menu>
    </div>
  );
}
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const mobile = useMediaQuery("(max-width:600px)");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          borderRadius={5}
          sx={{
            marginTop: mobile ? 4 : 12,
            padding: 4,
            height: mobile ? "80vh" : 400,
            width: mobile ? "100%" : 550,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(250,43,57,0.12)",
          }}
        >
          <Box
            display="flex"
            sx={{ width: "100%" }}
            justifyContent={"space-between"}
            mt={-2}
          >
            <Box>
              <Button
                type="submit"
                sx={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Swap
              </Button>
              <Button
                type="submit"
                sx={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                buy
              </Button>
            </Box>
            <SettingsIcon />
          </Box>
          <Box
            component="form"
            borderRadius={5}
            sx={{
              height: mobile ? "25vh" : 150,
              width: mobile ? "100%" : 530,
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
            bgcolor="#f5f5f5"
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              id="standard-basic"
              label="YOU PAY"
              variant="standard"
              defaultValue={0}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  fontSize: 18,
                },
              }}
            />

            <BasicMenu />
          </Box>
          <Box
            position={"absolute"}
            top={"48%"}
            padding={"5px"}
            bgcolor={"white"}
            borderRadius={2}
          >
            <Box
              position={"relative"}
              padding={"5px"}
              bgcolor="#f5f5f5"
              borderRadius={2}
            >
              <SwapVertIcon />
            </Box>
          </Box>
          <Box
            component="form"
            borderRadius={5}
            sx={{
              mt: 1,
              height: mobile ? "25vh" : 150,
              width: mobile ? "100%" : 530,
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
            bgcolor="#f5f5f5"
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              id="standard-basic"
              label="YOU RECEIVE"
              variant="standard"
              defaultValue={0}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  fontSize: 18,
                },
              }}
            />
            <BasicMenu2 />
          </Box>
          <Button
            type="submit"
            fullWidth
            // variant="contained"
            sx={{
              mt: 1,
              bgcolor: "rgb(255, 239, 255)",
              color: "rgb(252, 114, 255)",
              fontSize: "15px",
              fontWeight: "bold",
            }}
            style={{
              maxWidth: "530px",
              maxHeight: "60px",
              minWidth: mobile ? "100%" : "530px",
              minHeight: "60px",
              borderRadius: "15px",
            }}
          >
            Connect Wallet
          </Button>
        </Box>

        {/* <Box
        borderRadius={5}
          sx={{
            marginTop: 8,
            padding:4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:"#E0F4FF"
          }}
        >
    
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 ,width: "350px" , height:"100px" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            /> <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div></Box>
            <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> </Box>
        
            <Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 15,  }}
            >
              Connect Wallet
            </Button>  
            </Box>
          </Box> */}
      </Container>
    </ThemeProvider>
  );
}
