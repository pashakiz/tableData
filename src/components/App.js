import React from 'react';
import classNames from 'classnames';
import Search from './Search';
import Table from './Table';
import Pagination from './Pagination';

export default class App extends React.Component {

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
                <Table/>
                <Pagination/>
              </div>
            </div>
          </div>
        );
    }
}
