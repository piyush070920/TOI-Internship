import React, { useEffect, useState } from "react";
import "./header.css";
import LinkText from "../../Utilities/LinkText";
const SubMenu = ({ subMenuData, setIsHovered }) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    if (subMenuData && Object.keys(subMenuData).length !== 0) {
      //some data
      if (
        (subMenuData?.type === "multiList" ||
          subMenuData?.type === "multiList2") &&
        subMenuData?.data
      ) {
        setData(subMenuData.data);
        setType("multiList");
      } else {
        setData(subMenuData);
        setType("simpleList");
      }
    }

    return () => {
      // console.log("return from submenu");
      setData([]);
      setType(null);
    };
  }, []);

  if (data && Array.isArray(data)) {
    if (type === "simpleList") {
      // console.log("simple data", data);
      return (
        <div
          className="sub-menu"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            <ul className="grid-list">
              {data?.map(
                (item, idx) =>
                  item?.link &&
                  item?.label && (
                    <li key={idx} className="grid-list-item">
                      <LinkText text={item.label} link={item.link} />
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      );
    } else if (type === "multiList") {
      // console.log("multilist", data);
      return (
        <div
          className="sub-menu"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {data?.map((category, idx) => (
            <div key={idx} className="min-w-max max-w-full">
              {/* Render top-level category label */}
              {category?.label && (
                <div className="font-bold text-xs">{category.label}</div>
              )}
              <ul className="grid-list">
                {category?.data?.map(
                  (city, cityIdx) =>
                    city?.link &&
                    city?.label && (
                      <li key={cityIdx} className="grid-list-item">
                        <LinkText text={city.label} link={city.link} />{" "}
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      // console.log("nolist", data);
    }
  }
  return <></>;
};

export default SubMenu;
