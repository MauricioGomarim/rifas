import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .text-campo {

    display: inline-block;
    align-items: center;
    gap: 5px;

 
    
    .number {
        background-color: #198754;
        padding: 5px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        border-radius: 5px;
        height: 20px;
        width: 20px;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 1em;

        display: inline-block;
        vertical-align: -.17em;
        margin-right: 8px;
    }

    .title {
        color: #fff;
        font-size: 15px;
        vertical-align: bottom;
    }


  }



`;
