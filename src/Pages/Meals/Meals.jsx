import React, { useEffect, useState } from "react";
import SearchMeals from "./SearchMeals";
import CartItems from "../CartItems/CartItems";
import { InputComp, CheckBox } from "../../Components";
import DataList from "./DataList";
import MealsData from "./MealsData";
import { SortDataList } from "../../Components";
import { CgMenuGridR } from "react-icons/cg";
import MultiRangeSlider from "multi-range-slider-react";
const Meals = () => {
  const { items, requestSort } = SortDataList(MealsData);
  const [dataList, setdataList] = useState([]);
  const [minPrice, set_minPrice] = useState(0);
  const [maxPrice, set_maxPrice] = useState(500);
  const [searchkey, setsearchkey] = useState("");
  const mealsType = [
    { name: "Standard", value: "Standard" },
    { name: "Delux", value: "Delux" },
    { name: "Luxury", value: "Luxury" },
    { name: "Premium", value: "Premium" },
  ];
  const handleInput = (e) => {
    set_minPrice(e.minValue);
    set_maxPrice(e.maxValue);
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
  const applyFilter = () => {
    let updatedList = items;

    if (searchkey) {
      updatedList = updatedList.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchkey.toLocaleLowerCase())
      );
    }

    if (selectedCheckboxes.length) {
      updatedList = updatedList.filter((item) =>
        selectedCheckboxes.includes(item.standerdType)
      );
    }

    const minPriceFilter = minPrice;
    const maxPriceFilter = maxPrice;

    updatedList = updatedList.filter(
      (item) => item.price >= minPriceFilter && item.price <= maxPriceFilter
    );

    setdataList(updatedList);
  };

  useEffect(() => {
    applyFilter();
  }, [searchkey, items, minPrice, maxPrice, selectedCheckboxes]);
  return (
    <div>
      <SearchMeals />
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="w-2/12 px-2">
            <div className="w-full">
              <CartItems />
              <div>
                <div className="flex flex-col w-full mt-3 bg-white rounded-md shadow-md">
                  <div className="text-sm font-bold text-center text-white bg-orange-600">
                    SELECT (AED) PRICE RANGE
                  </div>
                  <div className="flex justify-center space-x-3 font-bold text-gray-700">
                    <div className="text-center">{minPrice}</div>
                    <div>-</div>
                    <div className="text-center">{maxPrice}</div>
                  </div>
                  <div className="p-1">
                    <MultiRangeSlider
                      label="false"
                      ruler="false"
                      barLeftColor="red"
                      barInnerColor="blue"
                      barRightColor="green"
                      thumbLeftColor="lime"
                      thumbRightColor="lime"
                      min={0}
                      max={100}
                      step={1}
                      minValue={minPrice}
                      maxValue={maxPrice}
                      onInput={(e) => {
                        handleInput(e);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full mt-3 bg-white rounded-md shadow-md">
                <ul className="">
                  <div className="flex items-center px-3 text-sm font-bold text-white bg-orange-600">
                    <CgMenuGridR /> MEAL TYPE
                  </div>
                  {mealsType.map((item, index) => (
                    <CheckBox
                      key={index}
                      id={item.value}
                      label={item.name}
                      checked={item.checked}
                      onChange={handleCheckboxChange}
                    />
                  ))}
                </ul>
              </div>
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

export default Meals;
