import Header from "../components/header";
import Footer from "../components/footer";
import { Main, Wrapper } from "./style";

export default function Layout({children}) {
    return(
        <Wrapper>
        <Header/>
        <Main>
            {children}
        </Main>
        <Footer/>
        </Wrapper>
    )
}