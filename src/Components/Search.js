import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.search
        };
    }
    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
  
      this.search(value);
    };
  
    search = query => {
      const url = `https://rickandmortyapi.com/api/character/?name=${query}`;
      const token = {};
      this.token = token;
  
      fetch(url)
        .then(results => results.json())
        .then(data => {
          if (this.token === token) {
            this.setState({ items: data.results });
          }
        });
    };
  
    componentDidMount() {
      this.search("");
    }
  
    render() {
      return (
        <form>
          <input
            type="search"
            onChange={this.onChange}
          />
          <input type = "button" value="Search" class="btn"  />
          
          <ul className="grid"> 

          {this.state.items && this.state.items.map(item => {
              return (
                <section className="card">
                 <li key={item.id} >
                <img className="card-image" src={item.image} alt={`${item.name} Thumbnail`} />
                  <h3 className="card-text">{item.name }</h3>
                  <h4>Status: {item.status} </h4>
                  <h4>Species: {item.species}</h4>
                  </li>
                </section>
          )}
          )}
          </ul>
        </form>
      );
    }
  }
export default Search;
