import React, { useEffect, useState } from "react";
import SearchActivity from "./SearchActivity";
import { Button, CheckBox, InputComp } from "../../Components";
import { fetchActivityList } from "../../Reducers/activitySlice";
import { useDispatch, useSelector } from "react-redux";
import { BaseUrl } from "../../Reducers/Api";
import { SortDataList } from "../../Components";
import CartItems from "../CartItems/CartItems";
import axios from "axios";
import DataList from "./DataList";
const Activity = () => {
  const dispatch = useDispatch();
  const activityList = useSelector((state) => state.allactivity.data);
  const isLoading = useSelector((state) => state.allactivity.isLoading);

  useEffect(() => {
    dispatch(
      fetchActivityList({
        attractionId: 1,
        agencyId: 0,
        agencyUserId: 0,
        currencyCode: "AED",
        platformId: 1,
      })
    );

    getGroup();
  }, [dispatch]);
  const [activitygroup, setactivitygroup] = useState([]);
  const getGroup = async () => {
    await axios
      .post(BaseUrl + "getattractiongrouplist", { attractionId: 1 })
      .then((res) => {
        setactivitygroup(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("This is a test commit   3476458769789047686");
        console.log("This is a test commit 2 3457645787689786094");
      });
  };
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (e) => {
    const checkboxId = e.target.id;
    const isChecked = e.target.checked;

    setSelectedCheckboxes((prevCheckboxes) => {
      if (isChecked) {
        return [...prevCheckboxes, checkboxId];
      } else {
        return prevCheckboxes.filter((id) => id !== checkboxId);
      }
    });
  };

  const { items, requestSort } = SortDataList(activityList);
  const [searchkey, setsearchkey] = useState("");
  const [dataList, setdataList] = useState([]);
  const applyFilter = () => {
    let updatedList = items;

    if (searchkey) {
      updatedList = updatedList.filter((item) =>
        item.attName.toLocaleLowerCase().includes(searchkey.toLocaleLowerCase())
      );
    }

    if (selectedCheckboxes.length) {
      updatedList = updatedList.filter((item) =>
        selectedCheckboxes.includes(item.attGroup.toString())
      );
    }

    setdataList(updatedList);
  };

  useEffect(() => {
    applyFilter();
  }, [searchkey, selectedCheckboxes, items]);

  return (
    <div>
      <SearchActivity />
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="w-2/12 px-2">
            <div className="w-full">
              <CartItems />
              {activitygroup && (
                <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  {activitygroup.map((item, index) => (
                    <CheckBox
                      key={index}
                      id={item.attractionGroupId}
                      label={item.grpName}
                      checked={item.checked}
                      onChange={handleCheckboxChange}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="w-8/12 px-2">
            <div className="flex items-center justify-end h-16 px-10 bg-white rounded-md shadow-md">
              <InputComp
                type="text"
                id="search"
                placeholder="search"
                onChange={(e) => setsearchkey(e.target.value)}
              />
            </div>
            <DataList dataList={dataList} />
          </div>
          <div className="w-2/12 px-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
