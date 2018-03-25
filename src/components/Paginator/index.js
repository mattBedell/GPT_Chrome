import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const PaginatorContainer = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-top: 5px;
`;

const PageNum = styled.div`
  margin: 5px;
  color: ${props => props.isActive ? props.theme.iconPrimary : 'inheret'};
`;

class Paginator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: 1,
      currentPage: 1,
    }

    this.pageThruRef = this.pageThruRef.bind(this);
    this.pages = 1;
  }

  pageThruRef(el) {
    if(!el) return;
    const { top } = el.getBoundingClientRect();
    if(!this.anchorTop) {
      this.anchorTop = top;
      this.setState({
        anchorTop: top,
      });

    } else if (top === this.anchorTop) {
      this.pages += 1;
    }

    this.setState({
      pages: this.pages,
    });

  }

  handleNumClick(e, pageNum) {
    this.setState({
      currentPage: pageNum,
    });
  }

  render() {
    const pageArr = [];
    for (let i = 0; i < this.state.pages; i++) {
      pageArr.push(i+1);
    }
    return (
      <div>
        <div>
          {this.props.render(this.state, this.pageThruRef)}
        </div>
        <PaginatorContainer>
          {pageArr.map(page => <PageNum
          key={`pagenum-${page}`}
          isActive={page === this.state.currentPage}
          onClick={e => this.handleNumClick(e, page)}
          >{page}</PageNum>)}
        </PaginatorContainer>
      </div>
    );
  }


}

export default Paginator;