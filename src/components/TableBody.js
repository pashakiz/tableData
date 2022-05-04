import React from 'react';
import classNames from 'classnames';

export default class TableBody extends React.Component {

    render() {
      let row = [];
      for (let i=0; i<10; i++) {
        row.push(
        <tr>
          <td>some{i}</td>
          <td>some{i}</td>
          <td>some{i}</td>
        </tr>
        );

      }
        return (
          <tbody>
            <tr>
              <td>1</td>
              <td>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</td>
              <td>quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>qui est esse</td>
              <td>est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla</td>
            </tr>
            {row}
          </tbody>
        );
    }
}
