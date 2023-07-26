import React, { useState } from "react";
import { InputComp, Button } from "../../Components";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
const AllBooking = () => {
  const [rowData, setrowData] = useState([]);
  const columnDefs = [
    { headerName: "Ref Number", field: "workCategory" },
    { headerName: "Invoice", field: "openingBalance" },
    { headerName: "Hotels", field: "openingBalance" },
    { headerName: "Activity", field: "openingBalance" },
    { headerName: "Tours", field: "openingBalance" },
    { headerName: "Visa", field: "openingBalance" },
  ];
  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
  };
  return (
    <div>
      <div className="flex flex-col items-center bg-blue-200 sm:flex-row sm:justify-end">
        <div className="flex flex-wrap space-x-3 text-white align-middle sm:px-14">
          <div className="mb-3">
            <InputComp type="date" id="date" placeholder="From" label="From" />
          </div>
          <div className="mb-3">
            <InputComp type="date" id="date" placeholder="To" label="To" />
          </div>
          <div className="mb-3">
            <InputComp
              type="number"
              id="refNum"
              placeholder="Reference Number"
              label="Reference Number"
            />
          </div>
          {/* <div className="mb-3">
            <InputComp type="number" id="adult" placeholder="Adult" />
          </div> */}
          <div className="mb-3 mt-7">
            <Button name="Get Report" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="ag-theme-alpine" style={{ height: 600 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pagination={true}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default AllBooking;
