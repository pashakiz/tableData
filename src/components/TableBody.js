import React from 'react';

class TableBody extends React.Component {

  //this.props.dataIsLoaded
  //this.props.error

  render() {


    let errorMessage = 'По вашему запросу ничего не найдено :(';

    if (this.props.error)
      errorMessage = 'Ошибка: ' + this.props.error.message;

    let rows = [];

    if (this.props.dataCurrent.length) {

      let from = ((this.props.pageNum - 1) * this.props.itemsPerPage + 1) - 1;
      let to = (from + this.props.itemsPerPage);

      for (let i = from; i < to; i++) {
        let current = this.props.dataCurrent[i];
        if (current) {
          rows.push(
            <tr key = {0 + current.userId + current.id}>
              <td>{current.id}</td>
              <td>{current.title}</td>
              <td>{current.body}</td>
            </tr>
          );
        }
      }
    } else {
      rows = (
        <tr key="0">
          <td colSpan="3">{errorMessage}</td>
        </tr>
      );
    }

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
}

export default TableBody;
