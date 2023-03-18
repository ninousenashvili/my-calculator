import styled from "styled-components";

export const BillName = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 24px;
`;
export const PerPerson = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
`;

export const Bill = styled.p`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.cyan.strong};
`;
