"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import TableComponent from "./component";
import Delivery_personDialog from "../_components/dialogD";
export default function delivery_personsPage() {
  const [warehouses, setwarehouses] = useState([
    {
      id: " ",
      name: " ",
      pincode: " ",
      updatedat: "2024-11-21T08:20:18.205Z",
      createdat: "2024-11-21T08:20 :18.205Z",
    },
  ]);

  async function getData() {
    const data = await axios.get("http://localhost:3000/api/warehouses");

    setwarehouses(data.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className=" bg-slate-800-50 overflow-x-hidden overflow-y-scroll   no-scrollbar max-h-[640px] w-full text-gray-300 p-6">
        {warehouses.map((item) => {
          return (
            <div
              key={item.id}
              className=" my-4 w-full  flex flex-col p-6  border border-gray-200 rounded-xl shadow bg-amber-50 hover:bg-amber-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className=" flex items-center justify-center py-1 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-950 dark:text-white flex items-center justify-start gap-1">
                  {item.name}
                  <p className="font-thin text-sm text-gray-500">
                    (id:{item.id})
                  </p>
                </h5>
              </div>
              <TableComponent title={item.name} />
            </div>
          );
        })}
        <div className="flex justify-end items-center  ">
          <div className="">
            <Delivery_personDialog />
          </div>
        </div>
      </div>
    </>
  );
}
