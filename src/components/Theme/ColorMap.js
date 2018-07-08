import React from 'react';

import styled, { withTheme } from 'styled-components';
import { readableColor } from 'polished';

const CatagoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;
const CatagoryTitle = styled.h1`
  color: ${props => readableColor(props.theme.global.bodyBg)};
  padding: 15px 0px 0px 20px;
`;

const CatagoryValue = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${props => props.color};
  margin: 5px;
  padding: 10px;
  margin-left: 20px;

  h4 {
    color: ${props => readableColor(props.color)}
  }
`;

const ColorMap = props => {
  return (
    <>
      {Object.keys(props.theme).map(catagory => {
        return (
          <div key={catagory}>
            <CatagoryTitle>{catagory.toUpperCase()}</CatagoryTitle>
            <CatagoryContainer>
              {Object.keys(props.theme[catagory]).map(key => {
                return (
                  <CatagoryValue key={`${catagory}-${key}`} color={props.theme[catagory][key]}>
                    <h4>{key}</h4>
                    <h4>{props.theme[catagory][key]}</h4>
                  </CatagoryValue>
                )
              })}
            </CatagoryContainer>
          </div>
        )
      })}
    </>
  )
}

export default withTheme(ColorMap);