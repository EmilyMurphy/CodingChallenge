import React from "react";
import "../Styles/Zone.css";
//Dropdown in header for timezones from moment time zone
function Zone(props) {
  const { timZonesList, onChange } = props;
  return (
    <div className="Zone">
      <div className="select-time">
        <select onChange={onChange}>
          {timZonesList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Zone;
