import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";

let resp;
function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <h1>
            Centralised Network For Doctors And Treatment Prediction Using
            Blockchain And Machine Learning
          </h1>
          <form>
            <div className="Divv">
              <div>
                <label>
                  Previous Disease :
                  <input type="text" name="PD" />
                </label>
              </div>
              <div>
                <label>
                  Ongoing Treatment : <input type="text" name="OT" />
                </label>
              </div>
              <div>
                <label>
                  Current Heart rate : <input type="char" name="CHR" />
                </label>
              </div>
              <div>
                <label>
                  Sugar Level : <input type="char" name="Sl" />
                </label>
              </div>
              <div>
                <label>
                  Other Remarks : <input type="text" name="Sl" />
                </label>
              </div>
              <div>
                <label>
                  Gender : <input type="char" />
                </label>
              </div>
              <div className="button_submit">
                <button onClick={tokenGen()}>
                  <input type="submit" />{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </EthProvider>
  );
}

function tokenGen() {
  resp = resp + 1;
}

export default App;
