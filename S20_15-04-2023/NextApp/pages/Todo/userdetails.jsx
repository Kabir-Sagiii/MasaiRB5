import React from "react";
import Link from "next/link";

function UserDetails(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "green" }}>User Details</h2>
      <br />

      <Link href="/Todo/todo">Navigate to Users Page</Link>
    </div>
  );
}

export default UserDetails;
