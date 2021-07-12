import React from "react";
// PROJECT
export const projectColumn = [
  {
    field: "id",
    headerName: "Código",
    width: 122,
    editable: true,
  },
  {
    field: "projectName",
    headerName: "Nombre",
    width: 128,
    editable: true,
  },
  {
    field: "client",
    headerName: "Cliente",
    width: 170,
    editable: true,
  },
  {
    field: "createProject",
    headerName: "Fecha de creación",
    width: 194,
    editable: true,
  },
  {
    field: "initDate",
    headerName: "Fecha de inicio",
    width: 173,
    editable: true,
  },
  {
    field: "endDate",
    headerName: "Fecha de fin",
    width: 155,
    editable: true,
  },
  {
    field: "budget",
    headerName: "Presupuesto",
    width: 158,
    editable: true,
  },
  {
    field: "dollars",
    headerName: "Dólares",
    width: 125,
    editable: true,
  },
];

// CLIENT COLUMN
export const clientColumn = [
  {
    field: "id",
    headerName: "Código",
    width: 122,
    editable: true,
  },
  {
    field: "isActive",
    headerName: "Activo",
    width: 120,
    editable: true,
  },
  {
    field: "businessName",
    headerName: "Nombre del negocio",
    width: 208,
    editable: true,
  },
  {
    field: "typeOfId",
    headerName: "Tipo de identificación",
    width: 225,
    editable: true,
  },
  {
    field: "numberId",
    headerName: "Identificación",
    width: 165,
    editable: true,
  },
  {
    field: "firstName",
    headerName: "Nombres",
    width: 145,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Apellidos",
    width: 140,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Teléfono",
    width: 145,
    editable: true,
  },
  {
    field: "description",
    headerName: "Descripción",
    width: 200,
    editable: true,
  },
];

// SUPPLIER COLUMN
export const supplierColumn = [
  {
    field: "id",
    headerName: "Código",
    width: 122,
    editable: true,
  },
  {
    field: "isActive",
    headerName: "Activo",
    width: 120,
    editable: true,
  },
  {
    field: "businessName",
    headerName: "Nombre del negocio",
    width: 225,
    editable: true,
  },
  {
    field: "typeOfId",
    headerName: "Tipo de identificación",
    width: 215,
    editable: true,
  },
  {
    field: "numberId",
    headerName: "Identificación",
    width: 165,
    editable: true,
  },
  {
    field: "firstName",
    headerName: "Nombres",
    width: 135,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Apellidos",
    width: 140,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Teléfono",
    width: 135,
    editable: true,
  },
  {
    field: "description",
    headerName: "Descripción",
    width: 200,
    editable: true,
  },
];

// EXPENSE COLUMN
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
    width: 190,
    editable: true,
  },
  {
    field: "supplier",
    headerName: "Nombre del proveedor",
    width: 220,
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
    headerName: "Description",
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
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        {params.value}
      </a>
    ),
  },
];
