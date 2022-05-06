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
      tableIconId: 'down',
      tableIconTitle: 'down',
      tableIconBody: 'down',
      searchField: '',
      postFiltered: [],
    };
  }

  getData(url) {
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        dataIsLoaded: true,
        posts: json,
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

    if (event.target.classList.contains('down')) {
      console.log('sort:down>up');

      if (column === 'id') {
        this.setState({
          tableIconId: 'up',
          posts: this.state.posts.sort( (a, b) => b.id - a.id )
        })
      }

      if (column === 'title') {
        this.setState({
          tableIconTitle: 'up',
          posts: this.state.posts.sort( (a, b) => b[column].localeCompare(a[column]) )
        })
      }

      if (column === 'body') {
        this.setState({
          tableIconBody: 'up',
          posts: this.state.posts.sort( (a, b) => b[column].localeCompare(a[column]) )
        })
      }

      return false
    }

    if (event.target.classList.contains('up')) {
      console.log('sort:up>down');

      if (column === 'id') {
        this.setState({
          tableIconId: 'down',
          posts: this.state.posts.sort( (a, b) => a.id - b.id )
        })
      }

      if (column === 'title') {
        this.setState({
          tableIconTitle: 'down',
          posts: this.state.posts.sort( (a, b) => a[column].localeCompare(b[column]) )
        })
      }

      if (column === 'body') {
        this.setState({
          tableIconBody: 'down',
          posts: this.state.posts.sort( (a, b) => a[column].localeCompare(b[column]) )
        })
      }

      return false
    }

  }

  handleChangeSearch = (event) => {
    let searh = event.target.value.toLowerCase();

    this.setState({
      searchField: searh,
      postFiltered: this.state.posts.filter(row => row.id.toString().includes(searh)
                                                || row.title.toLowerCase().includes(searh)
                                                || row.body.toLowerCase().includes(searh))
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
          <div className="col col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col col-lg-7">
                <Search searchField={this.state.searchField}
                        handleChangeSearch = {this.handleChangeSearch}
                />
              </div>
            </div>
            <Table
              posts = {this.state.posts}
              itemsPerPage = {this.state.itemsPerPage}
              pageNum = {this.state.pageNum}
              tableIconId = {this.state.tableIconId}
              tableIconTitle = {this.state.tableIconTitle}
              tableIconBody = {this.state.tableIconBody}
              handleClickSort = {this.handleClickSort}
              searchField = {this.state.searchField}
              postFiltered = {this.state.postFiltered}
            />
            <Pagination
              urlParam = {this.state.urlParam}
              pageNum = {this.state.pageNum}
              handleClickPage = {this.handleClickPage}
              posts = {this.state.posts}
              postFiltered = {this.state.postFiltered}
              itemsPerPage = {this.state.itemsPerPage}
              searchField = {this.state.searchField}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
