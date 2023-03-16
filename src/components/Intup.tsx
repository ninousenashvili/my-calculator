import styled from "styled-components";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

interface Props {
  iconType?: "bill" | "person";
}

const icon = (props: Props) => {
  switch (props.iconType) {
    case "bill":
      return dollarIcon;
    case "person":
      return personIcon;
    default:
      return "";
  }
};

export const Input = styled.input<Props>`
  all: unset;
  border-radius: 5px;
  padding-right: 17px;
  background-image: url (${icon});
  background-color: ${(props) => props.theme.inputBackground};
  background-position: left 19px center;
  height: 49px;
  background-repeat: no-repeat;
  text-align: right;
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${({ theme }) => theme.colors.cyan.dark};
  width: calc(100%-19px);

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
