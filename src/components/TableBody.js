import React from 'react';
import classNames from 'classnames';

class TableBody extends React.Component {

  render() {

    let items = [];
    let from = ((this.props.pageNum - 1) * this.props.itemsPerPage + 1) - 1;
    let to = (from + this.props.itemsPerPage);
    for (let i = from; i < to; i++) {
      let current = this.props.posts[i];
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

    return (
      <tbody>
        {items}
      </tbody>
    );
  }
}

export default TableBody;
