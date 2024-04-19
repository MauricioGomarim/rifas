import { styled } from "styled-components";

export const Container = styled.header`
  background-color: #101010;
  padding: 16px 10px;
  .container {
    max-width: 576px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    img {
      max-width: 185px;
      height: 32.72px;
    }

    .icons {
      display: flex;
      align-items: center;
      gap: 10px;

      .cart {
        stroke-width: 0.05;
        stroke: #fff;
      }

      svg {
        color: #fff;
      }
    }
  }
`;
