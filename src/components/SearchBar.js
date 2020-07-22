import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    // We need an arrow function below to fix the 'this' binding issue with js.
    // Without arrow function, 'this' will be undefined inside the function

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value = {this.state.term}
                            onChange={(event)=> this.setState({ term: event.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;