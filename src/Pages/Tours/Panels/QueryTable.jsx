import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ClientCommunication from "./CenterPanel/ClientCommunication";
import Quatation from "./CenterPanel/Quatation";
import SupplierCommunication from "./CenterPanel/SupplierCommunication";
import QueryLog from "./CenterPanel/QueryLog";
const QueryTable = ({ queryDetail }) => {
  const [activeTab, setActiveTab] = useState("clientCommunication");
  const data = [
    {
      label: "Client Communication",
      value: "clientCommunication",
      desc: <ClientCommunication queryDetail={queryDetail} />,
    },
    {
      label: "Quotation",
      value: "quotation",
      desc: <Quatation queryDetail={queryDetail} />,
    },
    {
      label: "Supplier Communication",
      value: "supplierCommunication",
      desc: <SupplierCommunication queryDetail={queryDetail} />,
    },
    {
      label: "Query Log",
      value: "queryLog",
      desc: <QueryLog queryDetail={queryDetail} />,
    },
  ];
  return (
    <div className="p-3 ">
      <Tabs value={activeTab}>
        <TabsHeader
          className="z-0 p-0 bg-transparent border-b rounded-none border-blue-gray-50"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-blue-500" : ""}
            >
              <div className="text-md">{label}</div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default QueryTable;
