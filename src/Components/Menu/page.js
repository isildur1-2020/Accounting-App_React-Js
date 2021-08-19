// MATERIAL UI - ICONS
import { IconButton, Typography, Drawer } from "@material-ui/core";
import { AppBar, Toolbar, Button, Divider } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import EditExchangeRate from "../EditExchangeRate/index";
// UTILS
import { entities, paths, icons } from "./utils";

const Content = ({
    title,
    drawer,
    setDrawer,
    handleLogout,
    exchangeRate,
    handleRedirect,
}) => {
    const Nav = () => (
        <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
            <div style={{ width: 220 }} role="presentation">
                <List>
                    {entities.map((text) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() => handleRedirect(paths[text])}
                        >
                            <ListItemIcon>{icons[text]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    <Divider />
                    <ListItem button onClick={() => handleRedirect(paths.Edit)}>
                        <ListItemIcon>{icons.Edit}</ListItemIcon>
                        <ListItemText primary="Editar" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );

    return (
        <>
            {Nav()}
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawer(!drawer)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div
                        className="horizontal-separate"
                        style={{ alignItems: "flex-end" }}
                    >
                        <Typography
                            variant="h6"
                            color="inherit"
                            style={{ marginLeft: "20px" }}
                        >
                            {title}
                        </Typography>
                        <span
                            className="horizontal-separate"
                            style={{ width: 330, alignItems: "center" }}
                        >
                            Tasa de cambio: {exchangeRate}
                            <EditExchangeRate />
                        </span>
                        <Button
                            variant="outlined"
                            style={{ color: "#fff", borderColor: "#fff" }}
                            onClick={handleLogout}
                        >
                            Cerrar Sesión
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Content;
