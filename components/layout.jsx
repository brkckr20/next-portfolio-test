import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {

    const { theme } = useSelector(s => s.theme);

    return (
        <div className={`float-left w-full ${theme}`}>
            <Navbar />
            {
                <main className="pl-0 lg:pl-[450px]">{children}</main>
            }
        </div>
    )
}

export default Layout