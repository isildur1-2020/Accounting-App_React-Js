import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
// COLUMNS
import {
  projectColumn,
  clientColumn,
  supplierColumn,
  expenseColumn,
} from "./column";
// HOOKS
import { useProject } from "../../../hooks/useProject";
import { useClient } from "../../../hooks/useClient";
import { useSupplier } from "../../../hooks/useSupplier";
import { useExpense } from "../../../hooks/useExpense";

const Table = ({ option, selectedRows, handleSelectedRows }) => {
  // STATE
  const [newProjects, setNewProjects] = useState([]);
  const [newExpenses, setNewExpenses] = useState([]);

  const [projectReduce, setProjectReduce] = useState({});
  const [clientReduce, setClientReduce] = useState({});
  const [supplierReduce, setSupplierReduce] = useState({});
  const [expenseReduce, setExpenseReduce] = useState({});

  const { projectsFound } = useProject();
  const { clientsFound } = useClient();
  const { suppliersFound } = useSupplier();
  const { expensesFound } = useExpense();

  const data = {
    // MODIFICADO (PROJECTS)
    project: newProjects,
    client: clientsFound,
    supplier: suppliersFound,
    // MODIFICADO (EXPENSES)
    expense: newExpenses,
  };

  const columns = {
    project: projectColumn,
    client: clientColumn,
    supplier: supplierColumn,
    expense: expenseColumn,
  };

  //========================================================================

  useEffect(() => {
    // INDEXAMOS LOS PROYECTOS POR EL ID
    const indexedProjects = projectsFound.reduce(
      (acc, el) => ({
        ...acc,
        [el.id]: el,
      }),
      {}
    );

    setProjectReduce(indexedProjects);

    // CREAMOS LOS NUEVOS PROYECTOS CON INFORMACIÓN COMPLETA
    const newProjects = projectsFound.map((el) => ({
      ...el,
      client: `${clientReduce[el.id]?.firstName} ${
        clientReduce[el.id]?.lastName
      }`,
      createProject: moment.unix(el.createProject).format("DD-MM-YYYY"),
      initDate: moment.unix(el.initDate).format("DD-MM-YYYY"),
      endDate: moment.unix(el.endDate).format("DD-MM-YYYY"),
    }));

    setNewProjects(newProjects);
  }, [projectsFound]);
  //========================================================================

  useEffect(() => {
    // INDEXAMOS LOS CLIENTES POR EL ID
    const indexedClients = clientsFound.reduce(
      (acc, el) => ({
        ...acc,
        [el.id]: el,
      }),
      {}
    );

    setClientReduce(indexedClients);
  }, [clientsFound]);
  //========================================================================

  useEffect(() => {
    // INDEXAMOS LOS PROVEEDORES POR EL ID
    const indexedSuppliers = suppliersFound.reduce(
      (acc, el) => ({
        ...acc,
        [el.id]: el,
      }),
      {}
    );
    console.log(indexedSuppliers);
    setSupplierReduce(indexedSuppliers);
  }, [suppliersFound]);

  //========================================================================

  useEffect(() => {
    // INDEXAMOS LOS PROVEEDORES POR EL ID
    // const indexedExpenses = expensesFound.reduce(
    //   (acc, el) => ({
    //     ...acc,
    //     [el.id]: el,
    //   }),
    //   {}
    // );

    // CREAMOS LOS NUEVOS GASTOS CON INFORMACIÓN COMPLETA
    const newExpenses = expensesFound.map((el) => ({
      ...el,
      project: projectReduce[el.id]?.projectName,
      supplier: supplierReduce[el.id]?.businessName,
      expenseDate: moment.unix(el.expenseDate).format("DD-MM-YYYY"),
    }));

    setNewExpenses(newExpenses);
  }, [expensesFound]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      {option && (
        <DataGrid
          rows={data[option] ?? []}
          columns={columns[option] ?? []}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          // SELECTED ROWS
          selectionModel={selectedRows}
          onSelectionModelChange={handleSelectedRows}
        />
      )}
    </div>
  );
};

export default Table;
