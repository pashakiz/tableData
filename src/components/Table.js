import React from 'react';
import classNames from 'classnames';
import TableBody from './TableBody';

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  render() {
    let col1Icon = '';
    let col2Icon = '';
    let col3Icon = '';

    if (this.props.tableIconId === 'down')
      col1Icon = this.state.iconDown;
    if (this.props.tableIconId === 'up')
      col1Icon = this.state.iconUp;

    if (this.props.tableIconTitle === 'down')
      col2Icon = this.state.iconDown;
    if (this.props.tableIconTitle === 'up')
      col2Icon = this.state.iconUp;

    if (this.props.tableIconBody === 'down')
      col3Icon = this.state.iconDown;
    if (this.props.tableIconBody === 'up')
      col3Icon = this.state.iconUp;

    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className={'table__th ' + this.props.tableIconId}  onClick={ (event) => this.props.handleClickSort(event, 'id') }>
                ID
                <span className="table__th-icon">
                  {col1Icon}
                </span>
              </th>
              <th className={'table__th ' + this.props.tableIconTitle} onClick={ (event) => this.props.handleClickSort(event, 'title') }>
                Заголовок
                <span className="table__th-icon">
                  {col2Icon}
                </span>
              </th>
              <th className={'table__th ' + this.props.tableIconBody} onClick={ (event) => this.props.handleClickSort(event, 'body') }>
                Описание
                <span className="table__th-icon">
                  {col3Icon}
                </span>
              </th>
            </tr>
          </thead>
          <TableBody
            posts={this.props.posts}
            itemsPerPage = {this.props.itemsPerPage}
            pageNum = {this.props.pageNum}
            searchField = {this.props.searchField}
            postFiltered = {this.props.postFiltered}
          />
        </table>
      </div>
    );
  }
}

export default Table;
