import type { NextPage } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export async function generateStaticParams() {
  const posts = [
    {
      id: 1,
      slug: ["product1"],
    },
    {
      id: 2,
      slug: ["product2"],
    },
    {
      id: 3,
      slug: ["product", "test2"],
    },
  ];
  console.log("ee");

  return posts.map((post) => ({
    name: post.slug,
  }));
}

interface Props {
  params: any;
}

const Page: NextPage<Props> = ({ params }) => {
  const { name } = params;
  console.log(name);
  return (
    <div>
      <h2>{`${name}`}</h2>
    </div>
  );
};

export default Page;
