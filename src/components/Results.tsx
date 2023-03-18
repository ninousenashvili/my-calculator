import styled from "styled-components";
import { Bill, BillName, PerPerson } from "./Bill";
import ResetButton from "./ResetButton";

interface Props {
  showTip: boolean;
  tipAmount: string | undefined;
  showTotal: boolean;
  totalPerPerson: string | undefined;
}

export default function Results(props: Props) {
  const { showTip, tipAmount, showTotal, totalPerPerson } = props;
  return (
    <ResultContainer>
      <BillContainer style={{ marginBottom: 25 }}>
        <div>
          <BillName>tip amount</BillName>
          <PerPerson>/ person</PerPerson>
        </div>
        <Bill>{showTip ? tipAmount : "$0.00"}</Bill>
      </BillContainer>
      <BillContainer>
        <div>
          <BillName>total amount</BillName>
          <PerPerson>/ person</PerPerson>
        </div>
        <Bill> {showTotal ? totalPerPerson : "$0.00"}</Bill>
      </BillContainer>
      <ResetButton>Reset</ResetButton>
    </ResultContainer>
  );
}

const ResultContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cyan.dark};
  width: 100%;
  border-radius: 15px;
  padding: 39px 22px 24px 24px;
`;
const BillContainer = styled.div`
  display: Flex;
  justify-content: space-between;
  align-items: Center;
`;
