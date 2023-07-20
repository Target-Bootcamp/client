import React, { useState } from "react";
import generateHours from "../../functions/generateHours";
import styles from "./style.module.css";

export default function InputHours() {
  const [start, setstart] = useState();
  const [finish, setfinish] = useState();
  let hours = generateHours();

  const filteredTimes = hours.filter((time) => {
    if (!start) return true;
    const hour = +time.split(":")[0];
    const minute = +time.split(":")[1];
    return (
      hour > +start.split(":")[0] ||
      (hour === +start.split(":")[0] && minute > +start.split(":")[1])
    );
  });

  // console.log(filteredTimes);

  function ChangeNumber(e) {
    setstart(e.target.value);
    console.log(start);
  }

  function HoursLimit(e) {
    setfinish(e.target.value);
  }

  return (
    <div className={styles.fader}>
      <div className={`${styles.container}`}>
        <label> שעת התחלה</label>
        <select
          onChange={(e) => ChangeNumber(e)}
          name="hours1"
        >
          {hours.map((item, i) => {
            return <option className={styles.item}>{item}</option>;
          })}
        </select>
      </div>
      <div className={`${styles.container}`}>
        <label>שעת סיום</label>
        <select
          onChange={(e) => HoursLimit(e)}
          name="hours1"
        >
          {filteredTimes.map((item, i) => {
            return <option className={styles.item}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

{
  /* <div className={styles.container}>
        <div className={styles.study}>שעות לימוד</div>
        <div className="w210">
          <label> שעת התחלה</label>
          <select
            onChange={(e) => ChangeNumber(e)}
            name="hours1"
            className={styles.abc}
          >
            {hours.map((item, i) => {
              return <option className={styles.item}>{item}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="w210">
        <label>שעת סיום</label>
        <select
          onChange={(e) => HoursLimit(e)}
          name="hours1"
          className={styles.abc}
        >
          {filteredTimes.map((item, i) => {
            return <option className={styles.item}>{item}</option>;
          })}
        </select>
      </div> */
}
