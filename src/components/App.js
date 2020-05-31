import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { 
        videos: [], 
        selectedVideo: null
    };

    onSearchTermSubmit = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        });

        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video) => {
        console.log('from the App!', video);
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchTermSubmit} />
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
        );
    }
}

export default App;