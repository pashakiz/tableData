import React from 'react';
import classNames from 'classnames';
import Search from './Search';
import Table from './Table';
import Pagination from './Pagination';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        dataIsLoaded: false
    };
  }

  getData(url) {
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        posts: json,
        dataIsLoaded: true
      });
    });
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.getData(url);
  }

  render() {
    return (
      <div className="app-table">
        <div className="row">
          <div className="col-10 offset-1">
            <div className="row">
              <div className="col-7">
                <Search/>
              </div>
            </div>
            <Table posts={this.state.posts}/>
            <Pagination/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
