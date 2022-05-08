import React from 'react';
import classNames from 'classnames';
import Search from './Search';
import Table from './Table';
import Pagination from './Pagination';
import {config} from '../config';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: config.ITEMS_PER_PAGE,
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

    let dataSorted = [];
    let dataUnSorted = [];

    if (this.state.searchField !== '') {
      dataUnSorted = this.state.postFiltered;
    } else {
      dataUnSorted = this.state.posts;
    }

    if (event.target.classList.contains('down')) {

      if (column === 'id') {
        dataSorted = dataUnSorted.sort( (a, b) => +b.id - +a.id );
        this.setState({
          tableIconId: 'up'
        })
      }

      if (column === 'title') {
        dataSorted = dataUnSorted.sort( (a, b) => b[column].localeCompare(a[column]) );
        this.setState({
          tableIconTitle: 'up'
        })
      }

      if (column === 'body') {
        dataSorted = dataUnSorted.sort( (a, b) => b[column].localeCompare(a[column]) );
        this.setState({
          tableIconBody: 'up'
        })
      }

      if (this.state.searchField !== '') {
        this.setState({
          postFiltered: dataSorted
        })
      } else {
        this.setState({
          posts: dataSorted
        })
      }

      return false
    }

    if (event.target.classList.contains('up')) {

      if (column === 'id') {
        dataSorted = dataUnSorted.sort( (a, b) => +a.id - +b.id );
        this.setState({
          tableIconId: 'down'
        })
      }

      if (column === 'title') {
        dataSorted = dataUnSorted.sort( (a, b) => a[column].localeCompare(b[column]) );
        this.setState({
          tableIconTitle: 'down'
        })
      }

      if (column === 'body') {
        dataSorted = dataUnSorted.sort( (a, b) => a[column].localeCompare(b[column]) );
        this.setState({
          tableIconBody: 'down'
        })
      }

      if (this.state.searchField !== '') {
        this.setState({
          postFiltered: dataSorted
        })
      } else {
        this.setState({
          posts: dataSorted
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
    this.getData(config.API_URL);
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
