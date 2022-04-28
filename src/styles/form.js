import styled from "styled-components";

export const ContainerForm = styled.div`
  height: 99.5vh;
  background: #d3cce3;
  background: -webkit-linear-gradient(to top, #e9e4f0, #d3cce3);
  background: linear-gradient(to bottom, #e9e4f0, #d3cce3);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) and (max-width: 799px) and (orientation: landscape) {
    height: 110vh;
  }
`;

export const Form = styled.form`
  background: #e9e4f0;
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  @media (min-width: 320px) and (max-width: 479px) {
    width: 90%;
  }
  @media (min-width: 480px) and (max-width: 599px) {
    width: 90%;
  }
  @media (min-width: 600px) and (max-width: 799px) {
    width: 65%;
  }
  @media (min-width: 800px) and (max-width: 1023px) {
    width: 50%;
  }
  @media (min-width: 1440px) {
    width: 40%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 479px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
