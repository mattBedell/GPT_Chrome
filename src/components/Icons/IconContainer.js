import React, { Component } from 'react';

import styled from 'styled-components';



export default styled.div`
width: ${props => props.width};
height: ${props => props.height};
height: 20px;
transition: transform .2s;
display: inline-block;
`;