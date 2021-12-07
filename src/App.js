import logo from './logo.svg';
import './App.css';
import MainContent from "./components/mainContent/MainContent";
import Content from "./components/mainContent/Content";
import CardMedia from "@mui/material/CardMedia";
import Timeline from "./components/mainContent/timeline/Timeline";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
    return (

        <div className='container-fluid'>
            <MainContent/>
            {/*<Timeline/>*/}


        </div>


    );
}

export default App;
