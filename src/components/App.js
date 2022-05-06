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
      iconUp: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
        </svg>
      ),
      iconDown: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      ),
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

  handleClickSort = (event, column) => {
    let iconWrap = event.target.children;
    console.log('sorting');
    console.log('event', event.target.classList.contains('down'));
    console.log('iconWrap', iconWrap);
    console.log('column', column);

    if (event.target.classList.contains('down')) {
      //TODO: change icon, change class (down>up)
    }

    if (column === 'id') {
      this.setState({
        posts: this.state.posts.sort( (a, b) => b.id - a.id )
      })
    }
    if (column === 'title' || column === 'body') {
      this.setState({
        posts: this.state.posts.sort( (a, b) => b[column].localeCompare(a[column]) )
      })
    }
    //console.log('sorting', this.state.posts.sort( (a, b) => b[column].localeCompare(a[column])));
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.getData(url);
  }

  render() {
    return (
      <div className="app-table">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col col-lg-7">
                <Search/>
              </div>
            </div>
            <Table
              posts = {this.state.posts}
              itemsPerPage = {this.state.itemsPerPage}
              pageNum = {this.state.pageNum}
              handleClickSort = {this.handleClickSort}
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
