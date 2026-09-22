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
    },
    {
      title: "Have Breakfast Before You Check Your Phone",
      shortDescription: "One rule that quietly fixed my mornings.",
      fullPost:
        "I used to reach for my phone before I even sat up. Now breakfast " +
        "comes first, and the first hour of the day feels like mine again.",
      date: "2026-09-18",
    },
  ]);

  const [blogTitle, setBlogTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullPost, setFullPost] = useState("");

  const addBlogPost = () => {
    if (blogTitle == "" || shortDescription == "") return alert("Add Value");

    let obj = {
      title: blogTitle,
      shortDescription: shortDescription,
      fullPost: fullPost,
      date: new Date(), // current date: today, at the moment the post is added
    };
    setPosts([obj, ...posts]);
    setBlogTitle("");
    setShortDescription("");
    setFullPost("");
  };

  return (
    <div>
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
              className={blogCardStyles.blogCardShadow}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogPosts;
