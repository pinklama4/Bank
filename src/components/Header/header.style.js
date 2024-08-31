import styled from "styled-components";

export const HeaderSection = styled.header`
  padding: 50px 10px;
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 34px;
  border: 1px solid var(--grey-15);
  border-radius: 100px;
  background: var(--grey-11);
`;


export const HeaderNavbar = styled.div`
  display: flex;
  gap: 26px;
  align-items: center;
`;

export const HeaderEntrance = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  a:nth-of-type(2) {
    padding: 12px 24px;
    border-radius: 82px;
    background: var(--green-60);

    color: var(--grey-11);
  }
`;