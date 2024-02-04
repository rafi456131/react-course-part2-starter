import React from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  const { data, error, fetchNextPage, isFetchingNextPage } = usePosts({
    pageSize,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        className="form-select mb-3"
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
      >
        <option value=""></option>
        <option value="1">user1</option>
        <option value="2">user2</option>
        <option value="3">user3</option>
      </select> */}
      {console.log(data?.pages)}
      <ul className="list-group"></ul>
      <button
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 "
        onClick={() => fetchNextPage()}
      >
        LoadMore
      </button>
      {/* 
      <button
        className="btn btn-primary my-3 ms-2"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button> */}
    </>
  );
};

export default PostList;
