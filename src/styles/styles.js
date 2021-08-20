import styled from "styled-components";

export const AppContainer = styled.section`
  margin: 60px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: auto;
`;

export const ButtonChoiceGroup = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Title1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 78px;
  letter-spacing: 0.2em;
  background: -webkit-linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title2 = styled(Title1)`
  letter-spacing: 0em;
  font-weight: 600;
  font-size: 3rem;
  line-height: 59px;
`;

export const Caption1 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 44px;
  color: #000000;
  margin: 15px;
  text-align: center;
`;

export const Caption2 = styled(Caption1)`
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 44px;
`;

export const Button1 = styled.button`
  font-weight: 600;
  line-height: 29px;
  height: 53px;
  width: 236px;
  border-radius: 15px;
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.125rem;
  padding: 10px;
  color: black;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 4px black;
  box-shadow: 2px 1000px 1px #fff inset;
  cursor: pointer;
  margin: 15px;

  &:hover {
    border: solid 4px transparent;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);

    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #fff inset;
  }
`;

export const ListOfRules = styled.li`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 29px;
  margin-bottom: 15px;
  color: #000000;
`;

export const MarkText = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 9rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2em;
  background: -webkit-linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NameInput = styled.input`
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 15px;
  font-family: Montserrat;
  margin: 10px auto;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  height: 71px;
  width: 483px;
  color: #000000;
  padding: 5px;
  border: solid 4px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);

  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  outline: none;
`;

export const Indicator = styled.p`
  text-align: center;
  margin: 10px 0;
  font-family: Montserrat;
`;

export const Span1 = styled.span`
  background: -webkit-linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

export const ButtonAnswerGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon1 = styled.i`
  margin-left: 5px;
`;
