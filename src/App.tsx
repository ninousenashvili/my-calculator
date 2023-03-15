import { useEffect, useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/defaultTemes";
import { Helmet } from "react-helmet";
import DolarIcon from "./images/icon-dollar.svg";

// interface theme extends DefaultTheme {
//   background: string;
// }

// const defaultTheme: theme = {
//   background: "#C5E4E7",
// };

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
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="App">
        Bill:
        <Input
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
          dir="rtl"
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
        <Input
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
    </ThemeProvider>
  );
}

const Input = styled.input`
  all: unset;
  border-radius: 5px;
  padding-right: 17px;
  background-image: url(${DolarIcon});
  background-color: ${(props) => props.theme.inputBackground};
  background-position: left 19px center;
  height: 49px;
  background-repeat: no-repeat;
  text-align: right;
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${({ theme }) => theme.colors.cyan.dark};

  &::placeholder {
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${({ theme }) => theme.colors.cyan.dark};
    opacity: 35%;
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.cyan.strong};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export default App;
