import { useEffect, useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/defaultTemes";
import { Helmet } from "react-helmet";
import { Input } from "./components/Intup";
import logo from "./images/logo.svg";

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
      <Container>
        <Img src={logo}></Img>

        <CalculatorContainer>
          <Text>Bill</Text>
          <InputWithMargin
            iconType="bill"
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
              if (e.target.value.length < 7) setBill(e.target.valueAsNumber);
            }}
            dir="rtl"
          />
          <Text>Select Tip %</Text>
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
          <Text>people</Text>
          <Input
            iconType="person"
            placeholder="0"
            type="number"
            value={people}
            min={0}
            onChange={(e) => {
              if (e.target.value.length < 9) setPeople(e.target.valueAsNumber);
            }}
          />
          <div className="errorMessage">{peopleError}</div>
          <div> tip amount / person {showTip ? tipAmount : "0.00"}</div>
          <div>
            total amount / person {showTotalPerPerson ? tolalPerPerson : "0.00"}
          </div>
        </CalculatorContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: Center;
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  padding: 32px;
`;

const Img = styled.img`
  padding: 50px 40px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.cyan.darkGrayish};
  font-size: 16px;
  margin-bottom: 6px;
`;

const InputWithMargin = styled(Input)`
  margin-bottom: 32px;
`;

export default App;
