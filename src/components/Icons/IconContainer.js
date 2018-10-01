import styled from 'styled-components';

export default styled.div`
width: ${props => props.width};
height: ${props => props.height};
transition: transform .2s;
display: inline-block;
path {
  fill: ${props => (props.isOpen ? props.theme.menu.primary : props.theme.menu.expanded)};
  transition: fill .2s;
}
&:hover {
  path {
    transition: fill .5s;
    fill: ${props => props.theme.icon.highlighted};
  }
}
`;
