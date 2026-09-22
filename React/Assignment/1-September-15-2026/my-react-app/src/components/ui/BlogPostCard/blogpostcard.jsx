import { useState } from "react";
import Button from "../Button/button";
import { btnStyles } from "../../../constant/theme";
import "./BlogPostCard.css";

/*
  USAGE
  <BlogPostCard
    title="Why I Started Journaling"
    shortDescription="A few lines on how a 5-minute habit stuck."
    fullPost="The long version of the post goes here..."
    date="2026-09-18"                       // string, Date, or timestamp. Optional: defaults to today.
    readTime={4}                            // optional: minutes. Auto-estimated from fullPost when left out.
    className={blogCardStyles.blogCardShadow}   // optional, default = "blog-card-default"
  />

  "date" is not fixed: pass a new value (for example new Date() when a post is
  created) and the card re-renders with it. Leaving it out shows today's date.
  Leave `fullPost` out to show only the short description, with no toggle.
*/

const WORDS_PER_MINUTE = 200;

function BlogPostCard({
  title,
  shortDescription,
  fullPost,
  date,
  readTime,
  className = "blog-card-default",
  headingTag: Heading = "h3",
}) {
  const [expanded, setExpanded] = useState(false);

  const postDate = date ? new Date(date) : new Date();
  const formattedDate = postDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // readTime prop wins; otherwise estimate from the word count (min. 1 minute)
  const minutes =
    readTime ??
    Math.max(
      1,
      Math.ceil(
        (fullPost || "").trim().split(/\s+/).filter(Boolean).length /
          WORDS_PER_MINUTE,
      ),
    );

  return (
    <article className={`blog-card ${className}`}>
      <Heading className="blog-card-title">{title}</Heading>

      <p className="blog-card-meta">
        <time dateTime={postDate.toISOString()}>{formattedDate}</time>
        <span className="blog-card-dot" aria-hidden="true">
          •
        </span>
        <span>{minutes} min read</span>
      </p>

      <p className="blog-card-description">{shortDescription}</p>

      {expanded && fullPost && (
        <p className="blog-card-full">{fullPost}</p>
      )}

      {fullPost && (
        <Button
          type="button"
          className={btnStyles.btnLink}
          title={expanded ? "Show less" : "Read more"}
          onClick={() => setExpanded((expanded) => !expanded)}
          aria-expanded={expanded}
        />
      )}
    </article>
  );
}

export default BlogPostCard;
