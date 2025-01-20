import React from "react";

const Edition = ({ data }) => {
  // console.log(data.length, "from the edition");
  return (
    data &&
    Array.isArray(data) &&
    data.length > 0 && (
      <div>
        <span>Edition</span>
        <select name="edition" id="edition">
          {data.map(
            (item) =>
              item?.label &&
              item?.id && (
                <option
                  key={item.id}
                  value={item.label}
                  selected={item?.selected}
                >
                  {item.label}
                </option>
              )
          )}
        </select>
      </div>
    )
  );
};

export default Edition;
