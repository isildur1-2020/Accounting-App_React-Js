// MATERIAL UI
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
//=========================================================
// ICONS
import MenuIcon from "@material-ui/icons/Menu";
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

const Content = ({
  handleRedirect,
  drawer,
  setDrawer,
  title,
  handleLogout,
}) => {
  const nav = () => (
    <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
      <div style={{ width: 220 }} role="presentation">
        <List>
          {["Proyecto", "Cliente", "Proveedor", "Gastos"].map((text) => (
            <ListItem
              button
              onClick={() => handleRedirect(paths[text])}
              key={text}
            >
              <ListItemIcon>{icons[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );

  return (
    <>
      {nav()}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setDrawer(!drawer)}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className="horizontal-separate">
            <Typography
              variant="h6"
              color="inherit"
              style={{ marginLeft: "20px" }}
            >
              {title}
            </Typography>
            <Button onClick={handleLogout} variant="outlined">
              Cerrar Sesión
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Content;
