import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAccount } from "wagmi";
import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
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

const Mobtop = () => {
  const { address } = useAccount();
  const { openAccountModal } = useAccountModal();
  const { openConnectModal } = useConnectModal();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <a
          href="https://www.ramestta.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={30} src="/ramestta2.svg" />
        </a>
        {/* <Typography ml={2} variant="h6" color="inherit" noWrap>
          Swap
        </Typography/> */}
        <BasicMenu />
        <Box sx={{ flex: 1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            {/* <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            /> */}
          </Search>
        </Box>
        {!address ? (
          <Button
            onClick={openConnectModal}
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1 }}
          >
            Connect
          </Button>
        ) : (
          <Button
            onClick={openAccountModal}
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1 }}
          >
            Disconnect
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Mobtop;
