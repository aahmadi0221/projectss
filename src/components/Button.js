import styled from 'styled-components';



export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: ${props => props.cart? "var(--mainBlue)" : "var(--mainWhite)"};
border: 0.05rem solid var(--mainBlue);
border-color: ${props => props.cart? "var(--mainBlue)" : "var(--mainBlue)"};
color: ${prop => prop.cart ? "var(--mainWhite)" : "var(--mainBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${prop => prop.cart ? "var(--mainWhite)" : "var(--mainBlue)"};
    color:  ${prop => prop.cart ? "var(--mainBlue)" : "var(--mainWhite)"};
}
&:focus{
    outline: none;
}
`