import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'c4GpuGoBsD170hRFFDGrVS1ZZlMGnWTo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "3jVT4U5bilspG"
    };
    // this.search("homer");
  }

  search = (query) => {
    giphy({ GIPHY_API_KEY }).search({
      q: query,
      rating: 'g'
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
