import React from "react";
import { URL_IMAGES, token } from "../../config/api";

export const expenseColumn = [
    {
        field: "id",
        headerName: "Código",
        width: 122,
        editable: true,
    },
    {
        field: "project",
        headerName: "Nombre Proyecto",
        width: 250,
        editable: true,
    },
    {
        field: "supplier",
        headerName: "Nombre del proveedor",
        width: 250,
        editable: true,
    },
    {
        field: "orderId",
        headerName: "Número de factura",
        width: 200,
        editable: true,
    },
    {
        field: "expenseDate",
        headerName: "Fecha del gasto",
        width: 180,
        editable: true,
    },
    {
        field: "description",
        headerName: "Descripción",
        width: 200,
        editable: true,
    },
    {
        field: "typeOfPayment",
        headerName: "Método de pago",
        width: 200,
        editable: true,
    },
    {
        field: "expenseCatalog",
        headerName: "Cuenta",
        width: 200,
        editable: true,
    },
    {
        field: "totalExpense",
        headerName: "Valor total",
        width: 160,
        editable: true,
    },
    {
        field: "orderFile",
        headerName: "Documento",
        width: 400,
        editable: false,
        renderCell: (params) => (
            <a
                href={`${URL_IMAGES}/${params.value}?token=${token}`}
                target="_blank"
                rel="noreferrer"
            >
                {params.value}
            </a>
        ),
    },
];
