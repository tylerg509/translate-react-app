import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../context/LanguageContext';

import ColorContext from '../context/ColorContext';
import LanguageSelector from '../components/LanguageSelector';

class App extends React.Component {
    render(){
        return(
            <LanguageStore>
                <div className="ui container">
                    <LanguageSelector> </LanguageSelector>
                    <br></br>
                    <ColorContext.Provider value="red">
                            <UserCreate></UserCreate>
                    </ColorContext.Provider>
                </div>
            </LanguageStore>

        );
    }

    
}

export default App;