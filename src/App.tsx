import { useEffect, useState } from "react";
import GlobalStyle from "./components/GlobalStyles";
import { Theme } from "./themes/dafaultTemes";

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [tip, setTip] = useState(0);
  const countTip = () => {
    setTip(0.05);
  };

  const tipAmount = ((bill * tip) / people).toFixed(2);
  const tolalPerPerson = ((bill * (1 + tip)) / people).toFixed(2);

  const showTip = !(tipAmount === "NaN" || tipAmount === "infinity");
  const showTotalPerPerson = !(
    tolalPerPerson === "NaN" || tolalPerPerson === "infinity"
  );

  const [peopleError, setPeopleError] = useState(" ");

  useEffect(() => {
    if (people === 0) {
      setPeopleError(`Number of people can't be zero`);
    } else {
      setPeopleError(" ");
    }
  }, [people]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        Bill amount
        <input
          placeholder="bill"
          type="number"
          value={bill}
          min={0}
          onKeyDown={(e) => {
            if (e.key === ".") {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            setBill(e.target.valueAsNumber);
          }}
        />
        <div>
          <button onClick={countTip}>5 %</button>
          <button
            onClick={() => {
              setTip(0.1);
            }}
          >
            10 %
          </button>
          <button
            onClick={() => {
              setTip(0.15);
            }}
          >
            15 %
          </button>
          <button
            onClick={() => {
              setTip(0.5);
            }}
          >
            50 %
          </button>
        </div>
        Number of people
        <input
          placeholder="number of people"
          type="number"
          value={people}
          min={0}
          onChange={(e) => {
            setPeople(e.target.valueAsNumber);
          }}
        />
        <div className="errorMessage">{peopleError}</div>
        <div> tip amount / person {showTip ? tipAmount : "0.00"}</div>
        <div>
          total amount / person {showTotalPerPerson ? tolalPerPerson : "0.00"}
        </div>
      </div>
    </>
  );
}

export default App;
