import { useEffect, useState } from "react";
import Link from "next/link";

// function Todo(props) {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5001/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, []);
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Users Page</h2>
//       {users.length > 0 ? (
//         <div>
//           {users.map((user) => {
//             return (
//               <div
//                 key={user.id}
//                 style={{
//                   display: "flex",
//                   width: "300px",
//                   margin: "30px auto",
//                   justifyContent: "space-evenly",
//                 }}
//               >
//                 <span>{user.name}</span>
//                 <span>-----------{">"}</span>
//                 <Link href={`/Todo/${user.id}`}>
//                   <button>Details</button>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <h2>No Users Information</h2>
//       )}

//       {/* <Link href="/Todo/userdetails">Navigate to UserDetails Page</Link> */}
//     </div>
//   );
// }

function Todo({ data }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Users Page</h2>
      {data.length > 0 ? (
        <div>
          {data.map((user) => {
            return (
              <div
                key={user.id}
                style={{
                  display: "flex",
                  width: "300px",
                  margin: "30px auto",
                  justifyContent: "space-evenly",
                }}
              >
                <span>{user.name}</span>
                <span>-----------{">"}</span>
                <Link href={`/Todo/${user.id}`}>
                  <button>Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Users Information</h2>
      )}

      {/* <Link href="/Todo/userdetails">Navigate to UserDetails Page</Link> */}
    </div>
  );
}

// export async function getServerSideProps() {
//   var res = await fetch("http://localhost:5001/posts");
//   var data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export async function getStaticProps() {
  var res = await fetch("http://localhost:5001/posts");
  var data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Todo;
