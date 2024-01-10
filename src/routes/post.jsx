
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Note from "../components/Note";
import { useParams } from "react-router-dom";

export default function Post() {
  const location = useLocation();
  const { id } = useParams();
  const posts = location.state.data || [];

  const [post, setData] = useState();
  useEffect(() => {
    const selectedPost = posts?.find(function (person) {
      return person.id == id;
    });
    setData(selectedPost);
  }, [id, posts]);
  return (
    <div>
      <Note id={post?.id} title={post?.name} content={post?.description} />
    </div>
  );
}
