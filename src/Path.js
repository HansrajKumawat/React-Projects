import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import App from "./App"
import Aboutnav from "./Aboutnav"
import Classnav from "./Classnav"
import Teachers from "./Teachers"
import Gallery from "./Gallery"
import Pagesdetials from "./Pagesdetials"
import Pagesblog from "./Pagesblog"
import Contact from "./Contact"
export default function Path(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App></App>}></Route>
                <Route path="/about" element={<Aboutnav></Aboutnav>}></Route>
                <Route path="/class" element={<Classnav></Classnav>}></Route>
                <Route path="/teachers" element={<Teachers></Teachers>}></Route>
                <Route path="/gallery" element={< Gallery></Gallery>}></Route>
                <Route path="/pagess" element={<Pagesblog></Pagesblog>}></Route>
                <Route path="/pages" element={<Pagesdetials></Pagesdetials>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>






            </Routes>
        </Router>
    )
}