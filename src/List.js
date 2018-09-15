import React from 'react';

const List = ({ listItem }) => (
  <ul>
    {
        listItem && listItem.map((item, index) => <li key={index}>{item}</li>)
    } 
  </ul>
  );

export default List;