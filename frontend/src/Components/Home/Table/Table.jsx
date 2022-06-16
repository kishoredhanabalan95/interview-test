import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import ItemService from '../../Shared/MockService';

const Table = () => {
  const itemService = new ItemService();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    let mounted = true;
    itemService.retrieveItems()
      .then(items => {
        if(mounted) {
          setUserList(items.response)
        }
      })
    return () => mounted = false;
  }, []);

  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Summary</th>
          <th>Year</th>
          <th>Country</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          userList.map((user) =>
            <tr key={user.link.toString()}>
              <td>{ user.link }</td>
              <td>{ user.name }</td>
              <td>{ user.summary }</td>
              <td>{ user.year }</td>
              <td>{ user.country }</td>
              <td>{ user.price }</td>
              <td>{ user.description }</td>
            </tr>
          )
        }
      </MDBTableBody>
    </MDBTable>
  );
}

export default Table;