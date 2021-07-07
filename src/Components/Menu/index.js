import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//?=========================================================
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// ICONS
import RateReviewIcon from "@material-ui/icons/RateReview";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupIcon from "@material-ui/icons/Group";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import { Typography } from "@material-ui/core";

const icons = {
  Proyecto: <RateReviewIcon color="primary" />,
  Cliente: <PersonAddIcon color="primary" />,
  Proveedor: <GroupIcon color="primary" />,
  Gastos: <EuroSymbolIcon color="primary" />,
};

const paths = {
  Proyecto: "/scheme",
  Cliente: "/client",
  Proveedor: "/supplier",
  Gastos: "/expense",
};

const Menu = ({ title }) => {
  const history = useHistory();
  const [drawer, setDrawer] = useState(false);

  const handleRedirect = (path) => history.push(path);

  const list = () => (
    <div style={{ width: 220 }} role="presentation">
      <List>
        {["Proyecto", "Cliente", "Proveedor", "Gastos"].map((text) => (
          <ListItem
            button
            key={text}
            onClick={() => handleRedirect(paths[text])}
          >
            <ListItemIcon>{icons[text]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        {list("left")}
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon onClick={() => setDrawer(!drawer)} />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            style={{ marginLeft: "20px" }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Menu;
