import React, {useReducer, useState} from 'react'
import './App.css';
import NavBar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import constructorReducer, {initialState, setCurrentSelector} from "./state/constructorReducer";


const App: React.FC = () => {

    const [state, dispatch] = useReducer(constructorReducer, initialState);


    const onSelectorClick = (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(setCurrentSelector(e.currentTarget.id))
       // dispatch(blabalAC())
    }

    const onImgSelectorClick = (e: React.MouseEvent<HTMLDivElement>) => {

    }

    return (
        <div className="App">

            <Header/>
            <Main
                onImgSelectorClick={onImgSelectorClick}
                currentImgId={currentImg}
                onSelectorClick={onSelectorClick}
                selectorId={state.currentSelector?.id}
                data={state.selectorData}
            />
            <NavBar/>

        </div>
    );
}

export default App;
