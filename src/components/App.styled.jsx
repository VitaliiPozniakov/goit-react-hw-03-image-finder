import styled from "@emotion/styled";

// export const App = styled.div`
// display: grid;
// grid-template-columns: 1fr;
// grid-gap: 16px;
// padding-bottom: 24px;
// `;

export const BtnLoadMore = styled.button`
display: block;
margin: 10px auto 0;

padding: 2px 5px;
color: color: #ffffffff;
background-color: #3f51b5;
font-weight: 500;
font-size: 14px;
line-height: 1.88;
letter-spacing: 0.06em;
border: none;
border-radius: 4px;
border: 1px solid rgba(238, 238, 238, 1);
box-shadow: 0px 4px 4px $button-shadow;
width: 250px;
height: 40px;

transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
  background-color: #1e90ff;
  color: #ffffffff;
}
// &:active {
//   background-color: #1e90ff;
//   color: grey;
}

`;