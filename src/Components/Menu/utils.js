// ICONS
import EditIcon from "@material-ui/icons/Edit";
import LockIcon from "@material-ui/icons/Lock";
import GroupIcon from "@material-ui/icons/Group";
import PaymentIcon from "@material-ui/icons/Payment";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import RateReviewIcon from "@material-ui/icons/RateReview";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

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
    "Crear Usuario",
    "Cambiar Contraseña",
    "Eliminar Usuario",
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
    "Crear Usuario": "/signup",
    "Cambiar Contraseña": "/change-password",
    "Eliminar Usuario": "/delete-user",
    Edit: "/edit",
};

export const icons = {
    Proyecto: <RateReviewIcon color="primary" />,
    Cliente: <PersonAddIcon color="primary" />,
    Proveedor: <GroupIcon color="primary" />,
    Gastos: <EuroSymbolIcon color="primary" />,
    Catalogo: <AccountBalanceIcon color="primary" />,
    Ingreso: <PaymentIcon color="primary" />,
    "Crear Usuario": <GroupAddIcon color="primary" />,
    "Cambiar Contraseña": <LockIcon color="primary" />,
    "Eliminar Usuario": <DeleteSweepIcon color="primary" />,
    Edit: <EditIcon color="primary" />,
};
