import React from "react";
import styles from "./style.module.css";

function InputDate({ style = {}, startDate, endDate, setStartDate, setEndDate, ...props }) {
  const today = new Date();
  const todayFormatted = today.toISOString().substr(0, 10);

  const localStartDate = startDate || todayFormatted;
  const localEndDate = endDate || todayFormatted;

  const lastYear = new Date();
  lastYear.setFullYear(today.getFullYear() - 1);
  const lastYearFormatted = lastYear.toISOString().substr(0, 10);

  return (
    <div className={styles.wrapper} style={style} {...props}>
      <div className={`date ${styles.dateBox}`}>
        <label className={styles.text}>תאריך התחלה</label>
        <input
          type="date"
          name="start-date"
          value={localStartDate}
          min={lastYearFormatted}

          onChange={(e) => {
            setStartDate(e.target.value);
            if (localEndDate && new Date(e.target.value) > new Date(localEndDate)) {
              setEndDate(e.target.value);
            }
          }}
        />
      </div>
      <div className={`date ${styles.dateBox}`}>
        <label className={styles.text}>תאריך סיום</label>
        <input
          type="date"
          name="end-date"
          min={localStartDate}
          value={localEndDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputDate;





