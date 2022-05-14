//import Head from "next/document";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <Navbar/>
            <Hero/>
            <main>{children}</main>
            <Footer/>
        </>
    )
  }
  