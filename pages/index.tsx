import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import PreviewPost from "@/components/PreviewPost/index";

import { posts } from "@/utils/getAllPosts";

export default function Home() {
  const [latestPosts, setLatestPosts] = useState([]);
  console.log("posts :>> ", posts);
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

  return (
    <Layout type='home'>
      <Container>
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
      </Container>
    </Layout>
  );
}
