import "./App.css";
import GlassComponent from "./components/GlassComponent/GlassComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
    return (
        <div className="bg--scale">
            <HeaderComponent />
            <GlassComponent />
        </div>
    );
}

export default App;
