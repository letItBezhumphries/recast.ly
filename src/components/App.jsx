class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: 'cat videos',

      videos: [],

      currentVideo: {
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: '',
              width: 120,
              height: 90
            },
          },
        }
      }

    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick() {
    this.setState({
      currentVideo: video 
    });
  }

  componentDidMount() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: this.state.searchInput, max: 5}, (videos) => {
      this.setState({ 
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div> <Search /> </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onVideoClick={currentVideo => this.setState({currentVideo})}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

