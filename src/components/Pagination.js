import React from 'react';
import classNames from 'classnames';

class Pagination extends React.Component {


  render() {

    let pageAll = Math.ceil(this.props.dataCurrent.length / this.props.itemsPerPage);
    let pagePrevNum = (this.props.pageNum > 1) ? this.props.pageNum-1 : 1;
    let pageNextNum = (pageAll > this.props.pageNum) ? this.props.pageNum+1 : pageAll;

    let paginationPages = [];
    for (let i = 1; i <= pageAll; i++) {
      paginationPages.push(
        <button key={i} onClick={ () => this.props.handleClickPage(i) } className={classNames('pagination__page',
          {active: (i === this.props.pageNum)}
        )}>{i}</button>
      );
    }

    return (
      <div className="pagination">
        <button onClick={ () => this.props.handleClickPage(pagePrevNum) } className={classNames('pagination__btn pagination__btn_prev',
          {'d-none': (paginationPages.length <= 1)}
        )}>Назад</button>
        <div className="pagination__pages">
          {paginationPages}
        </div>
        <button onClick={ () => this.props.handleClickPage(pageNextNum) } className={classNames('pagination__btn pagination__btn_next',
          {'d-none': (paginationPages.length <= 1)}
        )}>Далее</button>
      </div>
    );
  }
}

export default Pagination;
