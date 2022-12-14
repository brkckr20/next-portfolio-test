import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div className="float-left w-full">
            <Navbar />
            {
                <main className="pl-[450px]">{children}</main>
            }
        </div>
    )
}

export default Layout