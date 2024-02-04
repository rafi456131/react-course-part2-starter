import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios, { all } from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface postQuery {
  pageSize: number;
}

const usePosts = (query: postQuery) => {};
//   useInfiniteQuery<Post[], Error>({
//     queryKey: ["posts"],
//     queryFn: ({ pageParam }) =>
//       axios
//         .get(`https://jsonplaceholder.typicode.com/posts`, {
//           params: {
//             _start: 1 * query.pageSize,
//             _limit: query.pageSize,
//           },
//         })
//         .then((res) => {
//           res.data;
//         }),
//     initialPageParam: 1,
//     getNextPageParam: (lastPage, allpages) => lastPage,
//   });

export default usePosts;
