import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TabNavigation from "./Tabs/tabNavigation";
import CurrencyConverter from "./currencyConverter";
import Footer from "./footer";

export function App() {
  //State used for tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
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
              marginLeft: "-23rem",
              borderRadius: "10px",
              border: "solid 2px black",
            }}
          >
            <TabNavigation value={value} handleChange={handleChange} />
            <CurrencyConverter value={value} />
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;
