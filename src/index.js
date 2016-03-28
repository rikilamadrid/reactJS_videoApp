import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //if it is a file we created we need to provided the path
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_YOUTUBE_KEY = 'AIzaSyBG-UhTwvJozubvOvWhbXAbybDs0dYlUVw';


// Create a new component. This component should
// produce some HTML:
class App extends Component { //const is a variable that doesn't change and the fat arrow means function
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('berniesanders');
    }

    videoSearch(term) {
        YTSearch({key: API_YOUTUBE_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div> // this is JSX (what looks like html in javascript)
        );
    }
}


// Take this component's generated HTML and put it
// on the page (in the DOM):
ReactDOM.render(<App />, document.querySelector('.container'));
