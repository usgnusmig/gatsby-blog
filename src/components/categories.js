import * as React from 'react';
import styled from 'styled-components'

const CategoryStyle = styled.div`
  display:flex;
  flex-direction: row;
  gap: 2rem;

  font-size: 1.2rem;
  font-weight: bold;

  list-style: none;
`;

const Categories = ({ children }) => {


  return (
    <CategoryStyle>
    <li>All</li>
    {children}
    </CategoryStyle>
  )
}

export default Categories;