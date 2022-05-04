import React from 'react';
import classNames from 'classnames';

class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        {
          this.props.posts.map(item => (
            <tr key = {0 + item.userId + item.id} >
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))
        }
      </tbody>
    );
  }
}

export default TableBody;
