import React, { useState } from "react";
import momentTZ from "moment-timezone";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "antd/dist/antd.css";
import { message } from "antd";
import Zone from "./Zone";
import DateTime from "./DateTime";
import "../Styles/main.css";

//Main page function that renders the reusable DateTime component

function Main() {
  //set state for time zone
  const [timeZoneLists, setTimeZoneLists] = useState([]);
  //inport the timezone names from moment timezone
  const timeZonesList = momentTZ.tz.names();

  const local = momentTZ.tz.guess();


  const onChangeSelect = (e) => {
    if (timeZoneLists.indexOf(e.target.value) === -1) {
      setTimeZoneLists([...timeZoneLists, e.target.value]);
    } else {
      return message.error("Timezone already selected");
    }
  };
  const onDelete = (item) => {
    return () => {
      let timeZoneArr = timeZoneLists;
      const index = timeZoneArr.indexOf(item);
      timeZoneArr.splice(index, 1);
      setTimeZoneLists([...timeZoneArr]);
      return message.success("The timezone clock has been removed");
    };
  };
  return (
    <div className="Main">
      <div className="Wrap">
        <div className="Main">
        <h1>DateTime </h1>
        <p>Pick a Timezone from the Dropdown list below and it will add a Clock!</p>
          <Zone
            timZonesList={timeZonesList}
            onChange={onChangeSelect}
          />
          <div className="Body">
            <PerfectScrollbar className="flex">
              {timeZoneLists.length ? "" : <DateTime timeZone={local} onDelete={onDelete(local)}/>}
              {timeZoneLists.map((item, index) => (
                  <DateTime
                  key={index}
                  timeZone={item}
                  onDelete={onDelete(item)}
                />
              ))}
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
