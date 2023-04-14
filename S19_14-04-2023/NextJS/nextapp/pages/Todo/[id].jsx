import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function UserDetailsComp(props) {
  const router = useRouter(); //router = {query :{id:1}}
  const id = router.query.id;
  const [user, setUser] = useState({
    id: 0,
    name: "",
    image: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5001/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link href="/Todo/todo">Navigate to Users Page</Link>
      </div>

      <div
        style={{
          textAlign: "center",
          margin: "50px auto",
          boxShadow: "0 0 10px black",
          width: "300px",
          padding: "20px",
        }}
      >
        <img src={user.image} width="300" height="300" />
        <h2>{user.id}</h2>
        <h2>{user.name}</h2>
      </div>
      <br />
    </div>
  );
}

export default UserDetailsComp;
