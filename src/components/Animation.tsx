import styled from "styled-components";

const Animation = () => {
  return (
    <Container>
      <KeyframeContainer>
        <KeyframeBox />
        <KeyframeBox />
        <KeyframeBox />
        <KeyframeBox />
      </KeyframeContainer>
      <TransitionBox />
    </Container>
  );
};

export default Animation;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const KeyframeContainer = styled.div`
  padding: 30px;
  background-color: ${(props) => props.theme.colors.blue1};
  display: flex;
  gap: 30px;

  @keyframes sideIn {
    from {
      transform: translateY(30%);
      /* scale: 2; */
      opacity: 0;
    }
    to {
      transform: translateX(0);
      /* scale: 1; */
      opacity: 1;
    }
  }

  div {
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
    &:nth-child(4) {
      animation-delay: 0.9s;
    }
  }
`;

const KeyframeBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.blue3};
  opacity: 0;

  animation: sideIn 1s ease-in-out forwards;
`;

const TransitionBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.blue2};
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue4};
    /* transform: rotate(45deg); */
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;
