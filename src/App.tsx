import { useEffect, useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/defaultTemes";
import { Helmet } from "react-helmet";
import { Input } from "./components/Intup";
import Label from "./components/Label";
import Results from "./components/Results";
import Tip from "./components/Tip";
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

  const alright =
    bill !== undefined && people !== undefined && tip !== undefined;
  const tipAmount = alright ? ((bill * tip) / people).toFixed(2) : undefined;
  const totalPerPerson = alright
    ? ((bill * (1 + tip)) / people).toFixed(2)
    : undefined;
  const showTip = alright && !(tipAmount === "NaN" || tipAmount === "Infinity");
  const showTotal =
    alright && !(totalPerPerson === "NaN" || totalPerPerson === "Infinity");

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
          <InputContainer>
            <Label>Bill</Label>
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

            <Tip setTip={setTip} tip={tip} />
            <Label>people</Label>
            <InputWithMargin
              iconType="person"
              placeholder="0"
              type="number"
              value={people}
              min={0}
              onChange={(e) => {
                if (e.target.value.length < 9)
                  setPeople(e.target.valueAsNumber);
              }}
            />
          </InputContainer>
          {/* <div className="errorMessage">{peopleError}</div> */}
          <Results
            showTip={showTip}
            tipAmount={tipAmount}
            totalPerPerson={totalPerPerson}
            showTotal={showTotal}
          />
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
const InputContainer = styled.div`
  padding: 0 8px;
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  padding: 24px;
`;

const Img = styled.img`
  padding: 50px 40px;
`;

const InputWithMargin = styled(Input)`
  margin-bottom: 32px;
`;

export default App;
