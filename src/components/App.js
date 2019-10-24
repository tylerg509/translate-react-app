import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from '../components/LanguageSelector';

class App extends React.Component {
    state = {language: 'english'}

    onLanguageChange = language => {
        this.setState({language})
    }

    render(){
        return(

            <div className="ui container">
            <LanguageSelector onLanguageChange={this.onLanguageChange}> </LanguageSelector>
                <br></br>
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate></UserCreate>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }

    
}

export default App;