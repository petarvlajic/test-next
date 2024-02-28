import type { InferGetStaticPropsType, NextPage } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export async function generateStaticParams() {
  const posts = [
    {
      id: 1,
      slug: "product1",
    },
    {
      id: 2,
      slug: "product2",
    },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface Props {
  params: any;
}

const Page: NextPage<Props> = ({ params }) => {
  const { name } = params;

  return (
    <div>
      <h2>{`${name}`}</h2>
    </div>
  );
};

export default Page;
