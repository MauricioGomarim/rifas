import { styled }  from "styled-components"


export const Container = styled.button`
    color: #fff;
    background-color: #198754;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 30px;
    border-radius: 5px;
    margin: 20px auto 0 auto;

    &:disabled {
        opacity: 0.5;
    }
`