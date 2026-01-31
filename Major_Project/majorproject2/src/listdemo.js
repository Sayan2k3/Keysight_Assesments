import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
  const item = props.item; // array type
  return (
    <li>{item}</li>
  );
}

function NameList(props) {
  const myLists = props.myLists; // array type

  const listItems = myLists.map((str) => {
    return <ListItem key={str} item={str} />;   // returning 
  });

  return (
    <div>
      <h2>Below is the list of names:</h2>
      <ol>{listItems}</ol>
    </div>
  );
}

const myLists = ["Ravi", "viran", "Rajeev", "Arun", "Kavita"];

ReactDOM.render(<NameList myLists={myLists} />,document.getElementById("root"));
