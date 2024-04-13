import { useState } from "react";
import DatePicker from "react-datepicker";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";
import "react-datepicker/dist/react-datepicker.css";

const Drivercal = () => {
  const [startDate, setStartDate] = useState(null);
  // let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1940, getYear(new Date()));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const [driverNumber, setDriverNumber] = useState("");
  const [conductorNumber, setConductorNumber] = useState("");
  const datePickerhandler = () => {
if(startDate == null) {
    alert("Please Select Date")
}
else{
    const numDate = startDate.getDate();
    const converMonth = startDate.getMonth();
    const numMonth = converMonth + 1;
    const numYear = startDate.getFullYear();

    const combinedDOb = `${numDate}${numMonth}${numYear}`;
    const getDobTotal = (giveDob) =>
      Array.from(String(giveDob), (num) => Number(num)).reduce(
        (acc, num) => acc + num,
        0
      );

      setDriverNumber(getDobTotal(getDobTotal(numDate)));
      setConductorNumber(getDobTotal(getDobTotal(combinedDOb)));

    } 
  };
  return (
    <>
      <div className="flex-container boxShadow">
        <h3 className="heading-title">
          Driver (मूलांक) and Conductor (भाग्यांक) Number <br/> Calculator in Numerology

        </h3>
        <div className="flex-inner">
          <p>Enter Date of Birth</p>

<DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat="dd-MMMM-yyyy"
      placeholderText="DD-MMMM-yyyy"
    />
          <button type="button" id="btn" onClick={datePickerhandler}>
            Click
          </button>
        </div>
<div className="tbleWrapper">
    { driverNumber && conductorNumber ? (
        <>
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                Your Date of Birth is :
                <span id="displayDob" className="big_bold">
                {startDate && startDate.toDateString()}
                </span>
              </td>
            </tr>

            <tr>
              <td>Driver no. (मूलांक) is</td>
              <td id="driver_No" className="big_bold">
              {driverNumber}
              </td>
            </tr>
            <tr>
              <td>Conductor No. (भाग्यांक) is</td>
              <td id="conduct_No" className="big_bold">
              {conductorNumber}
              </td>
            </tr>
          </tbody>
        </table>
        </>
        ): (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Drivercal;
