import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #141414;
  height: 100vh;

  .hidden {
  }

  .container-home {
    max-width: 600px;
    margin: 0 auto;
    height: 100%;
    background-color: #181818;
    padding: 14px;
    border-radius: 20px;
    margin-top: -40px;

    .title {
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      font-size: 14.4px;
      margin-top: 10px;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }
      span {
        background-color: #101010;
        padding: 6px 10px;
        border-radius: 5px;
      }
    }

    .numeros {
      display: flex;
      border-radius: 10px;
      gap: 10px;
      padding: 10px 10px;
      background-color: #202020;
      -webkit-box-shadow: 0 4px 3px rgba(0, 0, 0, 0.08);
      margin-top: 10px;
      button {
        background-color: #157347;
        padding: 5px 10px; 
        border-radius: 5px;
        font-size: 13px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        border: none;
        font-family: 'Montserrat',sans-serif;
      }
    }

    .info-sorteio {
      color: #fff;
      font-size: 14.4px;

      p {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 5px;
      }
      span {
        background-color: #8c8c8c;
        padding: 6px 10px;
        border-radius: 5px;
      }
    }

    .social {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      margin-top: 5px;

      svg {
        width: 100%;
        height: 100%;
        color: #fff;
      }

      .facebook,
      .telegram,
      .twitter,
      .telegram,
      .whatsapp {
        padding: 5px;
        border-radius: 5px;
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.5s ease;
      }

      .facebook {
        background-color: #3b5998;
      }
      .telegram {
        background-color: #1da1f2;
      }
      .twitter {
        background-color: #08c;
      }

      .whatsapp {
        background-color: #4dc247;
      }

      .social > div:hover {
        filter: brightness(0.7);
      }
    }

    .promocao-numeros {
      margin-top: 6px;
      h1 {
        color: #fff;
      padding-right: 5px;
      font-weight: 600;
      font-size: 20.5px;
      margin: 0;

      span {
        font-size: 14px;
        font-weight: 400;
      }
      }

      #numeros {
        a {
          background-color: #5c636a;
          display: flex;
          justify-content: center;
          gap: 5px;
          color: #fff;
          padding: 6px;
          border-radius: 6px;
          margin-top: 8px;
        }
      }
    }

    .card-banner {
      font-family: Montserrat, sans-serif;
      color: #fff;
      position: relative;
      -webkit-box-shadow: 0 4px 3px rgba(0, 0, 0, 0.08);
      background-color: #202020;
      border-radius: 10px;
      padding: 4px;
      padding-bottom: 20px;
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
      position: relative;
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
