interface PostsType {
  link: string;
  module: {
    meta: {
      title: string;
      description: string;
      date: string;
      readTime: number;
    }
  }
}

const importAll = (r) => {
  return r.keys().map(fileName => {
    let [title, name] = fileName.substr(2).split("/");

    // filter not subfolder, example index.mdx in root then return;
    if(title.includes(".mdx")) return;

    name = name.replace(".mdx", "");

    return {
      link: `${title}/${name}`,
      module: r(fileName)
    }
  }).filter(obj => obj !== undefined);

}

export const posts: Array<PostsType> = importAll(require.context("articles", true, /\.mdx$/));
