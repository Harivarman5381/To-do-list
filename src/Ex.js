import React from "react";
import ItemsList from "./ItemsList";
const Ex = ({items,handleCheck,handleDelete}) => {
 
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>your list is empty</p>
      )}
    </main>
  );
};

export default Ex;
