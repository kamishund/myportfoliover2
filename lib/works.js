
export async function getAllWorks() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_ENDPOINT_ROOT}wp-json/wp/v2/work/`),
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
        Accept: "application/json; charset=UTF-8",
      },
    }
  );
  const posts = await res.json();
  return posts;
}


export async function getAllWorksIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_ENDPOINT_ROOT}wp-json/wp/v2/work/`),
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
        Accept: "application/json; charset=UTF-8",
      },
    }

  );
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getWorksData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_ENDPOINT_ROOT}wp-json/wp/v2/work/${id}`),
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
        Accept: "application/json; charset=UTF-8",
      },
    }
  );
  const post = await res.json();
  return post;
}

