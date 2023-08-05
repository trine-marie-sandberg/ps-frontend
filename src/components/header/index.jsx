import { NavBar } from "../navbar"
import { Head, IconWrap, LogInOutIcon } from "./style"

export default function Header() {

    return(
        <Head>
            <NavBar />
            <IconWrap>
              <LogInOutIcon className="fa-solid fa-lock"></LogInOutIcon>
              <p>Login</p>
            </IconWrap>
        </Head>
    )
}