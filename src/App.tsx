import "./App.css";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export  function BasicTabs() {
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
        <nav>
          <ul>
          <Box sx={{ width: '60rem',backgroundColor:'white',padding:'1rem',marginTop:'-4rem',marginLeft:'-2rem'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Convert" {...a11yProps(0)} sx={{marginRight:'10rem',marginLeft:'2rem'}}/>
          <Tab label="Send" {...a11yProps(1)} sx={{marginRight:'12rem'}}/>
          <Tab label="Graphics" {...a11yProps(2)} sx={{marginRight:'10rem'}}/>
          <Tab label="Alert" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className="content">
        <div className="box">
          <div className="form">
          <label htmlFor="amount">Amount</label>
          <input type="text" name="amount" />
          </div>
          <div className="form">
          <label htmlFor="amount" style={{marginLeft:'-10rem'}}>Of</label>
          <select name="of" id="of">
            <option value="USA">
              USA - United States of America
            </option>
            <option value="EUR">
              EUR - Europe
            </option>
            <option value="CMR">
              CMR - Cameroon
            </option>
            <option value="NIG">
              NIG - Nigeria
            </option>
          </select>
          </div>
          <div className="form">
          <label htmlFor="amount" style={{marginLeft:'-7rem'}}>Towards</label>
          <select name="towards" id="towards">
            <option value="EUR">
              EUR - Europe
            </option>
            <option value="CMR">
              CMR - Cameroon
            </option>
            <option value="USA">
              USA - United States of America
            </option>
            <option value="NIG">
              NIG - Nigeria
            </option>
          </select>
          </div>
        </div>

        {/* Exchange rates display */}

        <div className="small-container">
          <p>
            We use the mid-market rate for our converter. The rate is given
            for information <br></br>purposes only. You will not benefit from
            this rate when sending money.
            <a>
              Check shipping <br></br>rates.
            </a>
          </p>
          <button>Convert</button>
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
          </ul>
        </nav>
      </div>
    </div>
    <section className="section2">
      <div className="boxes">
        <h3>Recommended by over 400,000 verified customers</h3>
        <div className="images">
          <img src="../public/div.sc-2d1ce559-1.png" alt="boxes" />
          <img src="../public/div.sc-bacd06c8-1.png" alt="" />
          <img src="../public/div.sc-bacd06c8-1 (1).png" alt="" />
        </div>
      </div>
      <div className="last">
        <div className="images">
          <img src="../public/Link.png" alt="" />
          <img src="../public/Link (2).png" alt="" />
          <img src="../public/Link (1).png" alt="" />
        </div>
      </div>
    </section>
</>
  )
}

export default BasicTabs;
