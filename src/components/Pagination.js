import React from 'react';
import classNames from 'classnames';

class Pagination extends React.Component {


  render() {

    let pageAll = null;
    if (this.props.searchField !== '') {
      pageAll = Math.ceil(this.props.postFiltered.length / this.props.itemsPerPage);
    } else {
      pageAll = Math.ceil(this.props.posts.length / this.props.itemsPerPage);
    }

    console.log('pageAll', pageAll);
    console.log('this.props.postFiltered.length', this.props.postFiltered.length);
    console.log('pageAll', pageAll);

    let pagePrevNum = (this.props.pageNum > 1) ? this.props.pageNum-1 : 1;
    let pageNextNum = (pageAll > this.props.pageNum) ? this.props.pageNum+1 : pageAll;

    let paginationPages = [];
    for (let i=1; i <= pageAll; i++) {
      paginationPages.push(
        <button key={i} onClick={ () => this.props.handleClickPage(i) } className={classNames('pagination__page',
          {active: (i === this.props.pageNum)}
        )}>{i}</button>
      );
    }

    return (
      <div className="pagination">
        <button onClick={ () => this.props.handleClickPage(pagePrevNum) } className="pagination__btn pagination__btn_prev">Назад</button>
        <div className="pagination__pages">
          {paginationPages}
        </div>
        <button onClick={ () => this.props.handleClickPage(pageNextNum) } className="pagination__btn pagination__btn_next">Далее</button>
      </div>
    );
  }
}

export default Pagination;
