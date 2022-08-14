import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

export const publicRouters = [
    { path: "/home", element: <Home />, exact: true },
    { path: "/about", element: <About />, exact: true },
    { path: "/contact", element: <Contact />, exact: true },
    { path: "*", element: <Home />, exact: true },
];
