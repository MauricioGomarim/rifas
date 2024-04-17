import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #141414;

  .container-home {
    max-width: 600px;
    margin: 0 auto;
    height: 100%;
    background-color: #181818;
    padding: 10px;
    border-radius: 20px;
    margin-top: -40px;

    .card-banner {
      font-family: Montserrat, sans-serif;
      color: #fff;

      .desc {
        h1 {
          font-size: 16px;
          padding-left: 4px;
          padding-bottom: 2px;
        }

        p {
          font-size: 12.8px;
          padding-left: 4px;
        }

        .animate-button {
          animation: blink 2s ease infinite;
          background-color: #196b45;
          padding: 5px 10px;
          border-radius: 7px;
          font-size: 11.2px;
          font-weight: 600;
          margin-top: 5px;
          display: flex;
          max-width: fit-content;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      }
      img {
        width: 100%;
        max-height: 324px;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        margin-top: 15px;
      }

      .title {
        display: flex;
        align-items: center;
        font-size: 14.4px;
        span {
          color: #fff;
          padding-right: 5px;
          font-weight: 600;
          font-size: 1.3em;
          margin: 0;
        }
      }
    }

    .card {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      color: #fff;
      padding: 0 5px;
      margin-top: 20px;

      -webkit-box-shadow: 0 4px 3px rgba(0, 0, 0, 0.08);
      background-color: #181818;
      border-radius: 10px;
      padding: 4px;
      padding-bottom: 20px;
      img {
        height: 90px;
        width: 90px;
        border-radius: 10px;
        object-fit: cover;
        margin-right: 10px;
      }

      .desc {
        h1 {
          margin-bottom: 1px;
          font-weight: 500;
          font-size: 1em;
        }

        p {
          font-size: 12px;
          color: #c9c9c9;
        }

        span {
          background-color: rgb(33, 37, 41);
          padding: 5px 10px;
          border-radius: 7px;
          font-size: 11.2px;
          font-weight: 600;
          margin-top: 5px;
          display: flex;
          max-width: fit-content;
        }
      }
    }
  }

  .line {
    background-color: #101010;
    padding: 10px;
  }

  .line2 {
    background-color: #131313;
    padding: 10px;
  }
`;
