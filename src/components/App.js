import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'


class App extends React.Component {
 
    state = { images:[] }

    onSearchSubmit = async (term) => {
        response = await unsplash.get('/search/photos',
                    {
                        params: { query:term } 
                    });

         this.setState({ images:response.data.results});           
    }


    render(){
        return (
            <div className= " ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                 Found : {this.state.images.length} images
             </div>
        )
    };
}

export default App;

/*
API KEY: O6evVgtmCbiymnjl2jFIhyy4uaKLg4xHywq9OFEDBMA
Secret Key:U4BL0JOv3dx27kmsgj1A5NmwiTIX0XbLVHPKgccq6F0

*/