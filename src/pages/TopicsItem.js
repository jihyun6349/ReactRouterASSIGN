import React from "react";
import { useParams } from "react-router-dom";

function TopicsItem() {
  const { contact } = useParams();

  return <div>{contact}</div>;
}

export default TopicsItem;