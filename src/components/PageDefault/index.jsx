import Header from "../Header";
import Footer from "../Footer";
import styled, {css} from "styled-components";

const Main = styled.main`

background-color: var(--black);
  color: var(--white);
  background-color: var(--black);
  flex: 1;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({paddingAll}) => css`
    padding: ${paddingAll};
  `}
`;

export default function Default({ children, paddingAll }){
  return (
    <>
      <Header/>
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer/>
    </>
  )
}