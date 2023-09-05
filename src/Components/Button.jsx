import React from "react";

const Button = ({ name, onClick, color }) => {
  const getButtonClasses = () => {
    let buttonClasses =
      "text-sm inline-block rounded bg-primary px-2 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white";

    if (color === "blue") {
      buttonClasses += " bg-indigo-800";
    } else if (color === "red") {
      buttonClasses += " bg-red-500";
    } else if (color === "green") {
      buttonClasses += " bg-green-500";
    } else {
      buttonClasses += " bg-indigo-800";
    }

    // Add more color cases as needed  675867464352

    return buttonClasses;
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${getButtonClasses()} shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
    >
      {name}
    </button>
  );
};

export default Button;
