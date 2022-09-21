import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/services/auth.service";
import logo from "./logo.png";

const pages = [
  { auth: false, name: "Doc" },
  { auth: false, name: "Blog" },
  { auth: true, name: "Dashboard" },
];
const settings = ["Account", "Dashboard", "Logout"];

const AppBarComponent = ({ isAuthenticated, user }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    switch (page) {
      case "Blog":
        window.open('https://doc.libromarko.xyz', '_blank');
        break;
        case "Doc":
          window.open('https://doc.libromarko.xyz/blog', '_blank');
          break;
      case "Dashboard":
        navigate("/dashboard", { replace: true });
        break;
      default:
        break;
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    switch (setting) {
      case "Logout":
        dispatch(logout());
        break;
      case "Account":
        navigate("/account", { replace: true });
        break;
      case "Dashboard":
        navigate("/dashboard", { replace: true });
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  const navigateLogin = () => {
    return navigate("/login", { replace: true });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="libromarko" className="App-logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            libromarko
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) =>
                isAuthenticated === page.auth ? (
                  <MenuItem
                    key={page}
                    onClick={() => handleCloseNavMenu(page.name)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ) : null
              )}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              isAuthenticated === page.auth ? (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page.name)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ) : null
            )}
          </Box>
          {isAuthenticated ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user.email}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Button onClick={navigateLogin} color="inherit">
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
