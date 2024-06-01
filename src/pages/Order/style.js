import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #141414;
  .container-home {
    max-width: 600px;
    margin: 0 auto;
    height: auto;
    background-color: #181818;
    padding: 14px;
    border-radius: 20px;
    margin-top: -40px;

    .icon {
      color: #ffc107;
      font-size: 50px;
    }

    .header-order {
      color: #fff;
      border-bottom: 1px solid #e3e3e322;
      padding-bottom: 10px;

      p {
        font-size: 14px;
        line-height: 1em;
      }

      h1 {
        font-weight: 600;
      }
    }

    .body-order {
      margin-top: 10px;
      border-radius: 5px;
      background-color: #202020;
      padding: 12px 0px;
      margin-bottom: 10px;

      .detalhes {
        padding: 0 10px 10px 10px;

        .infos-detalhes {
          p{
            color: #fff;
            font-size: 13px;
            border-bottom: 1px solid #4f4f4f;
            padding: 2px 0;
          }
        }

        h1 {
          color: #d4d4d4;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 15px;
        }
      }

      .input-pix {
        display: flex;
        gap: 2px;
        margin-top: 8px;

        input {
          width: 85%;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          height: 30px;
        }

        button {
          width: 15%;
          font-size: 15px;
          color: #fff;
          font-weight: 700;
          background-color: #198754;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }

      .campos {
        padding: 10px;

        .qrCode {
          color: #fff;
          text-align: center;
          padding: 20px 0;

          h1 {
            font-weight: 500;
            font-size: 23px;
          }

          p {
            font-size: 14px;
          }
        }
      }
      .timer {
        color: #fff;
        text-align: center;
        border-bottom: 1px solid #fff;
        padding: 0 10px;
        padding-bottom: 15px;

        h1 span {
          font-weight: 600;
          font-size: 20px;
        }

        .process-bar {
          margin-top: 5px;
          width: 100%;
          height: 18px;
          background-color: #dc3545;
          border-radius: 6px;
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

  .line-3 {
    margin-top: 20px;
    background-color: #6e6e6e;
    height: 1px;
  }
`;
