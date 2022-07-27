import { useHistory } from "react-router-dom";
import { Container, ContainerHeader } from "./styles";

import { CgProfile } from "react-icons/cg";
import { Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
  const history = useHistory();
  const { user } = useSelector((state) => state.user);

  const infoButton = [
    { children: "Info", navi: "profile" },
    { children: "Pedidos", navi: "order" },
    { children: "Sair", navi: "/" },
  ];

  const handleClickNav = (parm) => {
    if (parm !== "") {
      if (parm === "/") {
        localStorage.clear();
        history.push(`${parm}`);
      } else {
        history.push(`/${parm}`);
      }
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ContainerHeader>
      <Container>
        <h3
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          <strong>Smart</strong>Event
        </h3>

        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            img: { width: "100px" },
          }}
        >
          <Grid sx={{ button: { width: "fit-content" } }}>
            <Grid>
              <IconButton
                aria-label="menu"
                onClick={handleClick}
                sx={{
                  fontSize: "35px",
                  color: "var(--secundary-1)",
                }}
              >
                <CgProfile />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                  textAlign: "center",
                }}
              >
                <h4>{user.username}</h4>
                <hr />
                {infoButton.map((item, index) => (
                  <MenuItem
                    id={index}
                    sx={{
                      color: "var(--white)",
                      backgroundColor: "var(--primary-1)",
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                    onClick={() => handleClickNav(item.navi)}
                  >
                    {item.children}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </ContainerHeader>
  );
}
export default Header;
