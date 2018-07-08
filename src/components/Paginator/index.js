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
  color: ${props => props.isActive ? props.theme.icon.primary : 'inheret'};
  cursor: pointer;
  user-select: none;
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
    this.positions = new Set();
  }

  pageThruRef(el) {
    if(!el) return;
    const { left, width } = el.getBoundingClientRect();
    this.positions.add(left);
    if (!this.offset) {
      this.offset = width;
    }

    this.setState({
      pages: this.positions.size,
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
          {this.props.render({ref: this.pageThruRef, offset: this.offset, currentPage: this.state.currentPage})}
        </div>
        {this.props.pageLinks ?
          <PaginatorContainer>
            {pageArr.map(page => <PageNum
            key={`pagenum-${page}`}
            isActive={page === this.state.currentPage}
            onClick={e => this.handleNumClick(e, page)}
            >{page}</PageNum>)}
          </PaginatorContainer>
          : []}
      </div>
    );
  }
}

Paginator.propTypes = {
  render: PropTypes.func.isRequired,
}

Paginator.defaultProps = {
  pageLinks: false,
}

export default Paginator;
