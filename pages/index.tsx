import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Layout from "@/components/Layouts";
import PreviewPost from "@/components/templates/Home/PreviewPost/index";
import SkeletonBlog from "@/components/elements/SkeletonBlog";
import { posts } from "@/utils/getAllPosts";


export default function Home({ latestArticles }) {
  const [latestPosts, setLatestPosts] = useState([]);
  console.log('latestArticles :>> ', JSON.parse(latestArticles));
  /**
   * After mounted then go to catch later
   */
  useEffect(() => {
    const getLatest = posts
      .sort((a, b) => {
        return (
          new Date(b.module.meta.date).getTime() -
          new Date(a.module.meta.date).getTime()
        );
      })
      .slice(0, 6);

    setLatestPosts(getLatest);
  }, []);

  if (!latestPosts.length)
    return (
      <Layout type='home'>
        <section>
          <div className='pt-16 pb-8'>
            <h2 className='antialiased text-brand-red text-red-shadow text-sm'>
              最新更新
            </h2>
          </div>
          <div className='blue h-72'>
          </div>
        </section>
      </Layout>
    );

  return (
    <Layout type='home'>
      <section>
        <div className='pt-16 pb-8'>
          <h2 className='antialiased text-brand-red text-red-shadow text-sm'>
            最新更新
          </h2>
        </div>

        {/* Blog posts */}
        {latestPosts.map((post, i) => (
          <PreviewPost key={i} post={post} />
        ))}
      </section>
      {/* Do pagination for next 6 or 8 */}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const paths = require.context("../articles", true, /\.mdx$/);
  let articles = [];

  for (const key of paths.keys()) {
    let [language, name] = key.substr(2).split("/");
    if (language.includes(".mdx")) continue; // filter not subfolder, example articles/index.mdx
    const { meta } = await import(`../articles/${language}/${name}`);

    name = name.replace(".mdx", "");

    const result = {
      ...meta,
      module: require.context("../articles", true, /\.mdx$/)(key),
    };

    articles = [...articles, result];
  }

  const sortLatests = (a, b) =>
    new Date(b.date).getTime() -
    new Date(a.date).getTime();

  const sortedPosts = articles.sort(sortLatests).slice(0, 6);;

  return {
    props: {
      latestArticles: JSON.stringify(sortedPosts),
    },
    revalidate: 10,
  };
};
