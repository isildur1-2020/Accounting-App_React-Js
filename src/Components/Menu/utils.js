// ICONS
import RateReviewIcon from "@material-ui/icons/RateReview";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupIcon from "@material-ui/icons/Group";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EditIcon from "@material-ui/icons/Edit";

export const entities = [
  "Proyecto",
  "Cliente",
  "Proveedor",
  "Gastos",
  "Catalogo",
  "Usuario",
];

export const paths = {
  Proyecto: "/scheme",
  Cliente: "/client",
  Proveedor: "/supplier",
  Gastos: "/expense",
  Catalogo: "/catalog",
  Usuario: "/signup",
  Edit: "/edit",
};

export const icons = {
  Proyecto: <RateReviewIcon color="primary" />,
  Cliente: <PersonAddIcon color="primary" />,
  Proveedor: <GroupIcon color="primary" />,
  Gastos: <EuroSymbolIcon color="primary" />,
  Catalogo: <AccountBalanceIcon color="primary" />,
  Usuario: <GroupAddIcon color="primary" />,
  Edit: <EditIcon color="primary" />,
};
