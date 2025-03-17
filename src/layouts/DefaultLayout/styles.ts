import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin: 3rem;
    padding: 2rem;
    height: calc(100vh - 6rem);
  }

  @media (max-width: 768px) {
    margin: 2rem;
    padding: 0.5rem;
    height: calc(100vh - 4rem);
  }

  @media (max-width: 480px) {
    margin: 1rem;
    padding: 1rem;
    height: calc(100vh - 2rem);
  }
`;
