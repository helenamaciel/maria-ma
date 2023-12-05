import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/BodyComponent";
import HomeScreen from "../screens/HomeScreen";
import ContatoScreen from "../screens/ContatoScreen";

function RootRouter() {
    return (<BrowserRouter>
        <Routes>
            <Route element={<Body />} path="/">
                <Route element={<HomeScreen />} path="/" />
                <Route element={<ContatoScreen />} path="/contato" />
            </Route>
        </Routes>
    </BrowserRouter>)
}

export default RootRouter;