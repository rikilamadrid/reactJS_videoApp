import React, { Component } from 'react'; // inside the curly braces is a property from React and store it as that variable.
//under here there is a fucntional component
//which means its using a funciotn:

// const SearchBar = () => {
//     return <input />;
// };


//and under we have a class component which means
// is an obejects with methods:

class SearchBar extends Component { //when you extends and add Components you get a lot of functionalities included in there
    constructor(props) {
        super(props);

        this.state = { term: '' }; // this refers to SearchBar here
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
