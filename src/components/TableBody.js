import React from 'react';
import classNames from 'classnames';

class TableBody extends React.Component {

  render() {

    //this.props.searchField
    //this.props.postFiltered

    let data = [];
    let items = [];
    if (this.props.searchField !== '') {
      data = this.props.postFiltered;
    } else {
      data = this.props.posts;
    }

    if (data.length) {
      let from = ((this.props.pageNum - 1) * this.props.itemsPerPage + 1) - 1;
      let to = (from + this.props.itemsPerPage);
      for (let i = from; i < to; i++) {
        let current = data[i];
        if (current) {
          items.push(
            <tr key = {0 + current.userId + current.id}>
              <td>{current.id}</td>
              <td>{current.title}</td>
              <td>{current.body}</td>
            </tr>
          );
        }
      }
    } else {
      items = (
        <tr key="0">
          <td colspan="3">По вашему запросу ничего не найдено :(</td>
        </tr>
      );
    }



    return (
      <tbody>
        {items}
      </tbody>
    );
  }
}

export default TableBody;
