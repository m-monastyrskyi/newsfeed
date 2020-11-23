import React from 'react'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import IsoHomepage from './pages/IsoHomepage'
import { Switch, Route } from 'react-router-dom'

function App(){
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Homepage}/>
                <Route exact path={'/iso'} component={IsoHomepage}/>
            </Switch>
        </>
    )
}

export default App
