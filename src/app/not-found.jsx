import React from "react";
import link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h1 className="notFoundCont">not-found</h1>
      <Link href={"/"}>Go Home</Link>
    </div>
  );
};

export default NotFound;
