class App extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoClick = this.onVideoClick.bind(this);
    this.onYouTubeQuerySubmit = this.onYouTubeQuerySubmit.bind(this);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      value: ''
    };
    
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  // onYouTubeQuerySubmit(query) {
  //   var value = {
  //     query: query
  //   };
  //   this.props.search(value, (videos) => {
  //     this.setState({
  //       video: videos[0],
  //       videos: videos
  //     });
  //   });
  // }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div> <input onChange={event => this.setState({ value: event.target.value })} /> 
            Value of the input: {this.state.value}  
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick}/>
          </div>
        </div>
      </div>
    );
  }
}
// comment for commit
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;