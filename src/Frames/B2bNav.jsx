import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const B2bNav = () => {
  const location = useLocation();
  const [pathName, setpathName] = useState();
  useEffect(() => {
    const pathname = location.pathname;
    const parts = pathname.split("/");
    const desiredPart = parts[1]; // "allbookings"
    console.log(desiredPart);
    setpathName(desiredPart);
  }, [location.pathname, pathName]);

  return (
    <div className="p-1 bg-blue-100 shadow-md">
      <div className="flex flex-row-reverse justify-between px-0 sm:px-10">
        <div>
          <ul className="flex">
            <li>
              <Link to="activity">
                <div className={pathName === "activity" ? "bg-blue-800 " : ""}>
                  Avtivity
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default B2bNav;
