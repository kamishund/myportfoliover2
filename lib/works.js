
export async function getAllWorks() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_ENDPOINT_ROOT}wp-json/wp/v2/work`)
  );
  const posts = await res.json();
  return posts;
}

// export async function getAllPostIds() {
//   const res = await fetch(
//     new URL(`${process.env.NEXT_PUBLIC_ENDPOINT_ROOT}products/`)
//   );
//   const posts = await res.json();
//   return posts.map((post) => {
//     return {
//       params: {
//         id: String(post.id),
//       },
//     };
//   });
// }

// export async function getPostData(id) {
//   const res = await fetch(
//     new URL(`${process.env.NEXT_PUBLIC_ENDPOINT_ROOT}products/${id}/`)
//   );
//   const post = await res.json();
//   // return {
//   //   post,
//   // };
//   return post;
// }