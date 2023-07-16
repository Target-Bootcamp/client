import React, { useState } from "react";
import styles from "./style.module.css";

function InputDate({ style = {}, ...props }) {
  const today = new Date().toISOString().substr(0, 10);

  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  const formattedNextDay = nextDay.toISOString().substr(0, 10);

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(formattedNextDay);

  return (
    <div className={styles.name} style={style} {...props}>
      <div className={styles.start}>
        <label className={styles.text}>תאריך התחלה</label>
        <input
          type="date"
          name="start-date"
          value={startDate}
          min={today}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className={styles.end}>
        <label className={styles.text}>תאריך סיום</label>
        <input
          type="date"
          name="end-date"
          min={formattedNextDay}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputDate;



