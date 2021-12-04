import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Content from "./components/mainContent/Content";

function App() {
    return (

        <div className='container-fluid'>
            <Header/>

            <header id='content-page' className="page-header header container-fluid bg-dark">
                <Content/>

            </header>
        </div>


    );
}

export default App;
