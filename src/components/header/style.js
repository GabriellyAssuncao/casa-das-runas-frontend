import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 80px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 121px;
    background-color: #1c1c1c;
`

export const LogoTipo = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    width: 460px;

    img {
        height: 100%;
    }
`

export const Navigation = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 630px;

    li {
        font-size: 24px;
        color: white;
    }
`
