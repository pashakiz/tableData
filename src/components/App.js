import React from 'react';
import classNames from 'classnames';
import Search from './Search';
import Table from './Table';
import Pagination from './Pagination';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 10,
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
        pageAll: json.length / this.state.itemsPerPage
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
            <Table
              posts = {this.state.posts}
              itemsPerPage = {this.state.itemsPerPage}
              pageNum = {this.state.pageNum}
            />
            <Pagination
              urlParam = {this.state.urlParam}
              pageNum = {this.state.pageNum}
              pageAll = {this.state.pageAll}
              handleClickPage = {this.handleClickPage}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
