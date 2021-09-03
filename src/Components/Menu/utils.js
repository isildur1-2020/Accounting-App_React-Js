// ICONS
import RateReviewIcon from "@material-ui/icons/RateReview";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupIcon from "@material-ui/icons/Group";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PaymentIcon from "@material-ui/icons/Payment";
import EditIcon from "@material-ui/icons/Edit";

export const entities = [
    "Proyecto",
    "Proyecto Consulta",
    "Cliente",
    "Cliente Consulta",
    "Proveedor",
    "Proveedor Consulta",
    "Gastos",
    "Gastos Consulta",
    "Catalogo",
    "Catalogo Consulta",
    "Ingreso",
    "Ingreso Consulta",
    "Usuario",
];

export const paths = {
    Proyecto: "/scheme",
    "Proyecto Consulta": "/scheme-report",
    Cliente: "/client",
    "Cliente Consulta": "/client-report",
    Proveedor: "/supplier",
    "Proveedor Consulta": "/supplier-report",
    Gastos: "/expense",
    "Gastos Consulta": "/expense-report",
    Catalogo: "/catalog",
    "Catalogo Consulta": "/catalog-report",
    Ingreso: "/earning",
    "Ingreso Consulta": "/earning-report",
    Usuario: "/signup",
    Edit: "/edit",
};

export const icons = {
    Proyecto: <RateReviewIcon color="primary" />,
    Cliente: <PersonAddIcon color="primary" />,
    Proveedor: <GroupIcon color="primary" />,
    Gastos: <EuroSymbolIcon color="primary" />,
    Catalogo: <AccountBalanceIcon color="primary" />,
    Ingreso: <PaymentIcon color="primary" />,
    Usuario: <GroupAddIcon color="primary" />,
    Edit: <EditIcon color="primary" />,
};
