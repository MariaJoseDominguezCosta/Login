import Header from "../molecules/Header/Header";
import Footer from "../molecules/Footer/Footer";
function Layout({children}) {
    return ( 
        <>
        <Header></Header>
        {children}
        <Footer></Footer>
        </>
     );
}

export default Layout;