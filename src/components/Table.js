import React from 'react';
import classNames from 'classnames';
import TableBody from './TableBody';

class Table extends React.Component {

  render() {
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="table__th down" onClick={ (event) => this.props.handleClickSort(event, 'id') }>
                ID
                <span className="table__th-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
              </th>
              <th className="table__th down" onClick={ (event) => this.props.handleClickSort(event, 'title') }>
                Заголовок
                <span className="table__th-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
              </th>
              <th className="table__th down" onClick={ (event) => this.props.handleClickSort(event, 'body') }>
                Описание
                <span className="table__th-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
              </th>
            </tr>
          </thead>
          <TableBody
            posts={this.props.posts}
            itemsPerPage = {this.props.itemsPerPage}
            pageNum = {this.props.pageNum}
          />
        </table>
      </div>
    );
  }
}

export default Table;
