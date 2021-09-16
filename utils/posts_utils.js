import fs from "fs";
import path from "path";
import matter from "gray-matter";

// FIX CURRENT DIRECTORY OF FILES
const postsDirectory = path.join(process.cwd(), "posts");

// GET DATA FROM FILE PASSING BY ARGUMMENT
const getPostData = (postFile) => {
  // to get specific file by path name
  const filePath = path.join(postsDirectory, postFile);

  const fileData = fs.readFileSync(filePath);
  const { data, content } = matter(fileData);

  //   TO GET FILE NAME WITHOUT EXTENSION
  const slug = postsFile.replace(/\.md$/, "");

  return {
    content,
    ...data,
    slug,
  };
};

export const getAllPosts = () => {
  const postsFile = fs.readdirSync(postsDirectory);
  const postsData = postsFile.map((postfile) => {
    return getPostData(postfile);
  });
  const sortedPosts = postsData.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => {
    return post.isFeatured;
  });
  return featuredPosts;
};
