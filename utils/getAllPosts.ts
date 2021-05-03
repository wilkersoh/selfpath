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

export const posts = importAll(require.context("articles", true, /\.mdx$/));
