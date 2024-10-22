import "./App.css";

function App() {
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
              <li>Convert</li>
              <li>Send</li>
              <li>Graphics</li>
              <li>Alert</li>
            </ul>
          </nav>
        </div>

        <div className="content">
          <div className="box">
            <label htmlFor="amount">Amount</label>
            <input type="text" name="amount" />
            <label htmlFor="amount">Of</label>
            <select name="of" id="of">
              <option value="USA">
                <span>USA</span> - United States of America
              </option>
              <option value="EUR">
                <span>EUR</span> - Europe
              </option>
              <option value="CMR">
                <span>CMR</span> - Cameroon
              </option>
              <option value="NIG">
                <span>NIG</span> - Nigeria
              </option>
            </select>
            <label htmlFor="amount">Towards</label>
            <select name="towards" id="towards">
              <option value="EUR">
                <span>EUR</span> - Europe
              </option>
              <option value="CMR">
                <span>CMR</span> - Cameroon
              </option>
              <option value="USA">
                <span>USA</span> - United States of America
              </option>
              <option value="NIG">
                <span>NIG</span> - Nigeria
              </option>
            </select>
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
  );
}

export default App;
