import React from 'react'
import Search from './Search'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character/')

        .then(response => response.json())
        .then(responseData => {
            this.setState( {
                items: responseData.results
            });
        })
        .catch(reject => {
            alert("Fetching and Parsing error");
        })
    }
    

    render() {

        let items = this.state.items;
        console.log(items);
       

        return ( 
            <div>
            <Search search= {items} />
            </div>
 
        );
    }
}

export default App;
