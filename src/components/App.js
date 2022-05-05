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
        dataIsLoaded: false,
        pageNum: window.location.hash ? +window.location.hash.split('#')[1].split('page')[1] : 1,
        pageAll: null
    };
  }

  getData(url) {
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        dataIsLoaded: true,
        posts: json,
        pageAll: json.length / 10 //10 items per page
      });
    });
  }

  handleClickPage = (pageNum) => {
    window.location.hash = '#page' + pageNum;
    this.setState({
      pageNum: pageNum
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
            this page num: {this.state.pageNum}
            <Pagination urlParam={this.state.urlParam}
                        pageNum={this.state.pageNum}
                        pageAll={this.state.pageAll}
                        handleClickPage = {this.handleClickPage}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
