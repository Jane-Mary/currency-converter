import React from "react";
import CustomTabPanel from "./Tabs/customTabPanel";
import "./App.css";

const CurrencyConverter: React.FC<{ value: number }> = ({ value }) => {
  //State used for binding
  const [inputValue, setInputValue] = React.useState("");
  const [convert, setConvert] = React.useState<number | null>(null);

  // Handle input change
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value === "" ? "" :String(value));
  };

  // Handle multiplication
  const handleMultiply = () => {
    if (typeof inputValue === "number") {
      setConvert(inputValue * 1.06);
    }
  };

  //State used for result binding
  const [result, setResult] = React.useState("USD");
  const handleResultChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setResult(event.target.value);
  };

  const [answer, setAnswer] = React.useState("EUR");
  const handleAnswerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <>
      <CustomTabPanel value={value} index={0}>
        <div className="content">
          <div className="box">
          <div className="form">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="0"
              value={inputValue === "" ? "" : inputValue}
              onChange={handleClick}
            />
          </div>
          <div className="form">
            <label htmlFor="of">Of</label>
            <select
              name="of"
              id="of"
              value={result}
              onChange={handleResultChange}
            >
              <option value="USD">USA - United States of America</option>
              <option value="EUR">EUR - Europe</option>
              <option value="XAF">CMR - Cameroon</option>
              <option value="NAIRA">NIG - Nigeria</option>
            </select>
          </div>
          <div className="switch">
            <span className="material-icons">swap_horiz</span>
          </div>
          <div className="form">
            <label htmlFor="towards">Towards</label>
            <select
              name="towards"
              id="towards"
              value={answer}
              onChange={handleAnswerChange}
            >
              <option value="EUR">EUR - Europe</option>
              <option value="XAF">CMR - Cameroon</option>
              <option value="USD">USA - United States of America</option>
              <option value="NAIRA">NIG - Nigeria</option>
            </select>
          </div>
        </div>
        <div className="display">
          <p style={{ color: "black" }}>
            {inputValue} {result} =
            <span style={{ fontSize: "xx-large", color: "#472E72" }}>
              {answer}
            </span>
          </p>
          <p style={{ color: "black" }}>1EUR = 1,06527 USD</p>
          <p>
            Result is {convert} {answer}
          </p>
        </div>

        <div className="small-container">
          <p>
            <span className="material-icons">info</span>
            We use the mid-market rate for our converter. The rate is given for
            information <br></br>purposes only. You will not benefit from this
            rate when sending money.Check shipping rates
          </p>
          <button onClick={handleMultiply}>Convert</button>
        </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        This the content of the send page
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        This the content of the Graphics page
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        This the content of the alert page
      </CustomTabPanel>
    </>
  );
};

export default CurrencyConverter;
