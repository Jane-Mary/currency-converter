import "./App.css";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// Functions for the tabs
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function App() {
  //State used for tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  //State used for binding
  const [inputValue, setInputValue] = React.useState<number | ''>('');
  const [convert, setConvert] = React.useState<number | null>(null);

  // Step 2: Handle input change
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value === '' ? '' : Number(value));
  };

  // Step 3: Handle multiplication
  const handleMultiply = (): void => {
    if (typeof inputValue === 'number') {
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
      <section className="section1">
        <div className="text">
          <h1>PayUnit Currency Converter</h1>
          <p>Welcome to the world's most popular money tool.</p>
        </div>
      </section>
      <div className="container">
        <div className="navbar">
          <Box
            sx={{
              width: "63rem",
              backgroundColor: "white",
              padding: "1rem",
              marginTop: "-4rem",
              marginLeft: "-25rem",
              borderRadius: "10px",
              border: "solid 2px black",
            }}
          >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Convert"
                  {...a11yProps(0)}
                  sx={{ marginRight: "10rem", marginLeft: "2rem" }}
                />
                <Tab
                  label="Send"
                  {...a11yProps(1)}
                  sx={{ marginRight: "12rem" }}
                />
                <Tab
                  label="Graphics"
                  {...a11yProps(2)}
                  sx={{ marginRight: "10rem" }}
                />
                <Tab label="Alert" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="content">
                <div className="box">
                  <div className="form">
                    <label htmlFor="amount">Amount</label>
                    <input
                      type="number"
                      name="amount"
                      placeholder="0"
                      value={inputValue === '' ? '' : inputValue}
                      onChange={handleClick}
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="amount" style={{ marginLeft: "-10rem" }}>
                      Of
                    </label>
                    <select
                      name="of"
                      id="of"
                      value={result}
                      onChange={handleResultChange}
                    >
                      <option value="USD">
                        USA - United States of America
                      </option>
                      <option value="EURO">EUR - Europe</option>
                      <option value="XAF">CMR - Cameroon</option>
                      <option value="NAIRA">NIG - Nigeria</option>
                    </select>
                  </div>
                  <div className="switch">
                    <span className="material-icons">swap_horiz</span>
                  </div>
                  <div className="form">
                    <label htmlFor="amount" style={{ marginLeft: "-7rem" }}>
                      Towards{" "}
                    </label>
                    <select
                      name="towards"
                      id="towards"
                      value={answer}
                      onChange={handleAnswerChange}
                    >
                      <option value="EURO">EUR - Europe</option>
                      <option value="XAF">CMR - Cameroon</option>
                      <option value="USD">
                        USA - United States of America
                      </option>
                      <option value="NAIRA">NIG - Nigeria</option>
                    </select>
                  </div>
                </div>

                {/* Exchange rates display */}
                <div className="display">
                  <p style={{ color: "black" }}>
                    {inputValue} {result} = 
                    <span style={{ fontSize: "xx-large", color: "#472E72" }}>
                      {answer}
                    </span>
                  </p>
                  <p style={{ color: "black" }}>1EUR = 1,06527 USD</p>
                  <p>Result is {convert} {answer}</p>
                </div>

                <div className="small-container">
                  <p>
                    <span className="material-icons">info</span>
                    We use the mid-market rate for our converter. The rate is
                    given for information <br></br>purposes only. You will not
                    benefit from this rate when sending money.Check shipping
                    rates
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
          </Box>
        </div>
      </div>
      <section className="section2">
        <div className="boxes">
          <h3>Recommended by over 400,000 verified customers</h3>
          <div className="images">
            <img src="/div.sc-2d1ce559-1.png" alt="boxes" />
            <img src="/div.sc-bacd06c8-1.png" alt="" />
            <img src="/div.sc-bacd06c8-1 (1).png" alt="" />
          </div>
        </div>
        <div className="last">
          <div className="images">
            <img src="/Link.png" alt="" />
            <img src="/Link (2).png" alt="" />
            <img src="/Link (1).png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
