import { useState } from "react";
import Text from "../../components/ui/Text/text";
import Input from "../../components/ui/Input/input";
import Button from "../../components/ui/Button/button";
import BlogPostCard from "../../components/ui/BlogPostCard/blogpostcard";
import {
  btnStyles,
  inputStyles,
  textStyles,
  blogCardStyles,
} from "../../constant/theme";
import "./BlogPosts.css";

function BlogPosts() {
  const [posts, setPosts] = useState([
    {
      title: "Wake Up for Fajr, Then What",
      shortDescription: "A few small changes that made the early alarm stick.",
      fullPost:
        "The alarm was never the problem, staying up was. Moving my phone " +
        "charger out of the bedroom fixed more than any Fajr app did.",
      date: "2026-09-10",
      likes: 4,
      dislikes: 0,
      reaction: null,
    },
    {
      title: "Have Breakfast Before You Check Your Phone",
      shortDescription: "One rule that quietly fixed my mornings.",
      fullPost:
        "I used to reach for my phone before I even sat up. Now breakfast " +
        "comes first, and the first hour of the day feels like mine again.",
      date: "2026-09-18",
      likes: 1,
      dislikes: 1,
      reaction: null,
    },
  ]);

  const [blogTitle, setBlogTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullPost, setFullPost] = useState("");

  const addBlogPost = () => {
    if (blogTitle.trim() === "" || shortDescription.trim() === "") {
      return alert("Add Value");
    }

    let obj = {
      title: blogTitle.trim(),
      shortDescription: shortDescription.trim(),
      fullPost: fullPost.trim(),
      date: new Date(), // current date: today, at the moment the post is added
      likes: 0,
      dislikes: 0,
      reaction: null,
    };
    setPosts([obj, ...posts]);
    setBlogTitle("");
    setShortDescription("");
    setFullPost("");
  };

  // toggling: clicking Like again removes it; switching from Dislike moves the count over
  const handleLike = (index) => {
    setPosts((posts) =>
      posts.map((post, i) => {
        if (i !== index) return post;
        if (post.reaction === "like") {
          return { ...post, reaction: null, likes: post.likes - 1 };
        }
        return {
          ...post,
          reaction: "like",
          likes: post.likes + 1,
          dislikes: post.reaction === "dislike" ? post.dislikes - 1 : post.dislikes,
        };
      }),
    );
  };

  const handleDislike = (index) => {
    setPosts((posts) =>
      posts.map((post, i) => {
        if (i !== index) return post;
        if (post.reaction === "dislike") {
          return { ...post, reaction: null, dislikes: post.dislikes - 1 };
        }
        return {
          ...post,
          reaction: "dislike",
          dislikes: post.dislikes + 1,
          likes: post.reaction === "like" ? post.likes - 1 : post.likes,
        };
      }),
    );
  };

  // updatedFields = { title, shortDescription, fullPost }, already validated by the card
  const handleEditPost = (index, updatedFields) => {
    setPosts((posts) =>
      posts.map((post, i) => (i === index ? { ...post, ...updatedFields } : post)),
    );
  };

  const handleDeletePost = (index) => {
    setPosts((posts) => posts.filter((_, i) => i !== index));
  };

  return (
    <section id="demo-blog" className="section">
      <Text title={"Blog"} as="h2" className={textStyles.textHeading} />

      <div className="blog-posts-form">
        <Input
          label="Blog title"
          placeholder="Blog title"
          className={inputStyles.inputDefault}
          onChange={(e) => setBlogTitle(e.target.value)}
          value={blogTitle}
        />
        <Input
          label="Short description"
          placeholder="Short description"
          className={inputStyles.inputDefault}
          onChange={(e) => setShortDescription(e.target.value)}
          value={shortDescription}
        />
        <Input
          label="Full post"
          placeholder="Full post"
          className={inputStyles.inputDefault}
          multiline
          rows={5}
          onChange={(e) => setFullPost(e.target.value)}
          value={fullPost}
        />
        <Button
          title={"Add"}
          className={btnStyles.btnFilled}
          onClick={addBlogPost}
        />
      </div>

      <div className="blog-posts-list">
        {posts.map((data, ind) => {
          return (
            <BlogPostCard
              key={ind}
              title={data.title}
              shortDescription={data.shortDescription}
              fullPost={data.fullPost}
              date={data.date}
              likes={data.likes}
              dislikes={data.dislikes}
              reaction={data.reaction}
              onLike={() => handleLike(ind)}
              onDislike={() => handleDislike(ind)}
              onEdit={(updatedFields) => handleEditPost(ind, updatedFields)}
              onDelete={() => handleDeletePost(ind)}
              className={blogCardStyles.blogCardShadow}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BlogPosts;
