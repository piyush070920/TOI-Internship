import React, { useState } from "react";
import "./AllMenu.css";
import ToiData from "../../../assets/ToiData.json";
import GeneralLink from "../../../Utilities/GeneralLink";
const AllMenu = () => {
  const [allMenuData, setAllMenuData] = useState(
    ToiData?.header?.allMenu?.sections
  ); //array of sections
  console.log("allmenu se ", allMenuData);

  return (
    validateArray(allMenuData) && (
      <div className="all-menu">
        {allMenuData.map(
          (section, sectionIdx) =>
            validateArray(section) && (
              <div key={sectionIdx}>
                {section.map((sectionDiv, sectionDivIdx) => {
                  return (
                    <div key={sectionDivIdx+1}>
                      {sectionDiv?.label && <h4>{sectionDiv.label} &gt;</h4>}
                      {validateArray(sectionDiv.items) &&
                        sectionDiv.items.map(
                          (item, itemIdx) =>
                            item?.label && (
                              <GeneralLink
                                label={item?.label}
                                id={itemIdx}
                                link={item?.link}
                              />
                            )
                        )}
                    </div>
                  );
                })}
              </div>
            )
        )}
      </div>
    )
  );
};

function validateArray(arr) {
  return arr && Array.isArray(arr) && arr.length > 0 ? true : false;
}
export default AllMenu;

