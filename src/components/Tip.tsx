import react from "react";
import styled from "styled-components";
import Label from "./Label";

interface Props {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number | undefined;
}
export default function Tip(props: Props) {
  const { setTip, tip } = props;
  return (
    <>
      <Label>Select Tip %</Label>
      <ButtonContainer>
        {[5, 10, 15, 25, 50].map((percentage) => (
          <TipButton
            isActive={tip === percentage / 100}
            onClick={() => {
              setTip(percentage / 100);
            }}
          >
            {percentage} %
          </TipButton>
        ))}
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const TipButton = styled.button<TipButtonProps>`
  all: unset;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.cyan.strong : theme.colors.cyan.dark};
  height: 48px;
  width: calc(50%-8px);
  border-radius: 5px;
  text-align: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.cyan.dark : theme.colors.white};
  font-size: 24px;
`;

interface TipButtonProps {
  isActive: boolean;
}
