import React, { useEffect, useState } from "react";
import SearchHotel from "./SearchHotel";
import HotelData from "./HotelData";
import CartItems from "../CartItems/CartItems";
import { InputComp, Button, CheckBox } from "../../Components";
import DataList from "./DataList";
import { SortDataList } from "../../Components";
import { CgMenuGridR } from "react-icons/cg";
import MultiRangeSlider from "multi-range-slider-react";

const Hotel = () => {
  const { items, requestSort } = SortDataList(HotelData);
  const [dataList, setdataList] = useState([]);
  const [minPrice, set_minPrice] = useState(0);
  const [maxPrice, set_maxPrice] = useState(500);
  const [starRatting, setstarRatting] = useState([
    {
      name: "5.0",
      value: 5,
    },
    {
      name: "4.0",
      value: 4,
    },
    {
      name: "3.0",
      value: 3,
    },
    {
      name: "2.0",
      value: 2,
    },
    {
      name: "1.0",
      value: 1,
    },
  ]);
  const [starRatingFilter, setstarRatingFilter] = useState(5);
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

  const handleInput = (e) => {
    set_minPrice(e.minValue);
    set_maxPrice(e.maxValue);
  };
  const [searchkey, setsearchkey] = useState("");
  const applyFilter = () => {
    let updatedList = items;

    if (searchkey) {
      updatedList = updatedList.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchkey.toLocaleLowerCase())
      );
    }

    if (selectedCheckboxes.length) {
      updatedList = updatedList.filter((item) =>
        selectedCheckboxes.includes(item.rating.toString())
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
  }, [searchkey, , items, minPrice, maxPrice, selectedCheckboxes]);
  return (
    <div>
      <SearchHotel />
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="w-2/12 px-2">
            <div className="w-full">
              <CartItems />
              <div>
                <div className="flex flex-col w-full mt-3 bg-white rounded-md shadow-md">
                  <div className="flex items-center px-3 text-sm font-bold text-white bg-orange-600">
                    SELECT (AED) PRICE RANGE
                  </div>
                  <div className="p-3">
                    <div className="flex justify-center space-x-3 font-bold text-gray-700">
                      <div className="text-center">{minPrice}</div>
                      <div>-</div>
                      <div className="text-center">{maxPrice}</div>
                    </div>

                    <MultiRangeSlider
                      label="false"
                      ruler="false"
                      barLeftColor="red"
                      barInnerColor="blue"
                      barRightColor="green"
                      thumbLeftColor="lime"
                      thumbRightColor="lime"
                      min={0}
                      max={500}
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
              <div>
                <div className="flex flex-col w-full mt-3 bg-white rounded-md shadow-md">
                  <ul className="">
                    <div className="flex items-center px-3 text-sm font-bold text-white bg-orange-600">
                      <CgMenuGridR />
                      RATTING
                    </div>
                    {starRatting.map((item, index) => (
                      <div
                        className="flex items-center justify-between mr-5"
                        key={index}
                      >
                        <div className="flex items-center">
                          <div>
                            <CheckBox
                              id={item.value}
                              label={item.name}
                              checked={item.checked}
                              onChange={handleCheckboxChange}
                            />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <svg
                                aria-hidden="true"
                                className={`w-5 h-5 ${
                                  item.name >= 1
                                    ? "text-yellow-400"
                                    : "text-gray-300 dark:text-gray-500"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>First star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                aria-hidden="true"
                                className={`w-5 h-5 ${
                                  item.name >= 2
                                    ? "text-yellow-400"
                                    : "text-gray-300 dark:text-gray-500"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>Second star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                aria-hidden="true"
                                className={`w-5 h-5 ${
                                  item.name >= 3
                                    ? "text-yellow-400"
                                    : "text-gray-300 dark:text-gray-500"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>Third star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                aria-hidden="true"
                                className={`w-5 h-5 ${
                                  item.name >= 4
                                    ? "text-yellow-400"
                                    : "text-gray-300 dark:text-gray-500"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>Fourth star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                aria-hidden="true"
                                className={`w-5 h-5 ${
                                  item.name >= 5
                                    ? "text-yellow-400"
                                    : "text-gray-300 dark:text-gray-500"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>Fifth star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="px-1 border-2 border-orange-500 rounded-sm cursor-default text-md">
                          {
                            HotelData.filter(
                              (hotel) => hotel.rating === item.value
                            ).length
                          }
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
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
            {/* list */}
          </div>
          <div className="w-2/12 px-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
