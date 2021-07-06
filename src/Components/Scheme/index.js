import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// ICONS
import RateReviewIcon from "@material-ui/icons/RateReview";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupIcon from "@material-ui/icons/Group";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import { Typography } from "@material-ui/core";

const icons = {
  Proyecto: <RateReviewIcon />,
  Cliente: <PersonAddIcon />,
  Proveedor: <GroupIcon />,
  Gastos: <EuroSymbolIcon />,
};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const list = () => (
    <div
      style={{width: 250}}
      role="presentation"
    >
      <Typography variant="h5">Crear</Typography>
      <List>
        {["Proyecto", "Cliente", "Proveedor", "Gastos"].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>{icons[text]}</ListItemIcon>
            <ListItemText
              primary={<Link to={`/${text.toLowerCase()}`}>{text}</Link>}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Button onClick={() => setDrawer(true)}>left</Button>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        {list("left")}
      </Drawer>
    </>
  );
}
