import React from "react";
import { useParams } from "react-router-dom";

// const User = ({match}) => {
//   return (
//     <>
//       <h1>User {match.params.name}</h1>
//     </>
//   );
// };
const User = () => {
    const name= useParams();
  return (
    <>
      <h1> {name.fname} {name.lname} page</h1>
    </>
  );
};
export default User;
