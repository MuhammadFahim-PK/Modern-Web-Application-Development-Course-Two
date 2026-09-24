import { useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiThumbsUp,
  FiThumbsDown,
  FiCheck,
  FiX,
} from "react-icons/fi";
import Button from "../Button/button";
import Input from "../Input/input";
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
    likes={3}                               // optional, default 0
    dislikes={0}                            // optional, default 0
    reaction={null}                         // "like" | "dislike" | null — which one THIS viewer picked
    onLike={() => ...}                      // called when Like is clicked (toggle logic lives in the parent)
    onDislike={() => ...}
    onEdit={(updatedFields) => ...}         // called with { title, shortDescription, fullPost } after Save passes validation
    onDelete={() => ...}                    // called after the delete confirmation is accepted
    className={blogCardStyles.blogCardShadow}   // optional, default = "blog-card-default"
  />

  "date" is not fixed: pass a new value (for example new Date() when a post is
  created) and the card re-renders with it. Leaving it out shows today's date.
  Leave `fullPost` out to show only the short description, with no toggle.
  Leave `onEdit` / `onDelete` / `onLike` / `onDislike` out to hide that action.
*/

const WORDS_PER_MINUTE = 200;

function BlogPostCard({
  title,
  shortDescription,
  fullPost,
  date,
  readTime,
  likes = 0,
  dislikes = 0,
  reaction = null,
  onLike,
  onDislike,
  onEdit,
  onDelete,
  className = "blog-card-default",
  headingTag: Heading = "h3",
}) {
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // draft fields, only used while isEditing is true
  const [draftTitle, setDraftTitle] = useState(title);
  const [draftShortDescription, setDraftShortDescription] = useState(shortDescription);
  const [draftFullPost, setDraftFullPost] = useState(fullPost || "");

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

  const startEditing = () => {
    // always start from the current saved values, not a stale draft
    setDraftTitle(title);
    setDraftShortDescription(shortDescription);
    setDraftFullPost(fullPost || "");
    setIsEditing(true);
  };

  const cancelEditing = () => setIsEditing(false);

  const saveEditing = () => {
    if (draftTitle.trim() === "" || draftShortDescription.trim() === "") {
      alert("Add Value");
      return;
    }

    if (onEdit) {
      onEdit({
        title: draftTitle.trim(),
        shortDescription: draftShortDescription.trim(),
        fullPost: draftFullPost.trim(),
      });
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Delete this post? This cannot be undone.")) {
      if (onDelete) onDelete();
    }
  };

  if (isEditing) {
    return (
      <article className={`blog-card ${className}`}>
        <Input
          label="Edit blog title"
          value={draftTitle}
          onChange={(e) => setDraftTitle(e.target.value)}
        />
        <Input
          label="Edit short description"
          value={draftShortDescription}
          onChange={(e) => setDraftShortDescription(e.target.value)}
        />
        <Input
          label="Edit full post"
          multiline
          rows={5}
          value={draftFullPost}
          onChange={(e) => setDraftFullPost(e.target.value)}
        />

        <div className="blog-card-actions">
          <Button
            title="Save"
            icon={<FiCheck />}
            className={btnStyles.btnSave}
            onClick={saveEditing}
          />
          <Button
            title="Cancel"
            icon={<FiX />}
            className={btnStyles.btnCancel}
            onClick={cancelEditing}
          />
        </div>
      </article>
    );
  }

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

      {expanded && fullPost && <p className="blog-card-full">{fullPost}</p>}

      {fullPost && (
        <Button
          className={btnStyles.btnLink}
          title={expanded ? "Show less" : "Read more"}
          onClick={() => setExpanded((expanded) => !expanded)}
          aria-expanded={expanded}
        />
      )}

      {(onLike || onDislike || onEdit || onDelete) && (
        <div className="blog-card-actions">
          {onLike && (
            <Button
              title={`Like (${likes})`}
              icon={<FiThumbsUp />}
              className={
                reaction === "like" ? btnStyles.btnLikeActive : btnStyles.btnLike
              }
              onClick={onLike}
              aria-pressed={reaction === "like"}
            />
          )}

          {onDislike && (
            <Button
              title={`Dislike (${dislikes})`}
              icon={<FiThumbsDown />}
              className={
                reaction === "dislike"
                  ? btnStyles.btnDislikeActive
                  : btnStyles.btnDislike
              }
              onClick={onDislike}
              aria-pressed={reaction === "dislike"}
            />
          )}

          {onEdit && (
            <Button
              title="Edit"
              icon={<FiEdit2 />}
              className={btnStyles.btnEdit}
              onClick={startEditing}
            />
          )}

          {onDelete && (
            <Button
              title="Delete"
              icon={<FiTrash2 />}
              className={btnStyles.btnDelete}
              onClick={handleDelete}
            />
          )}
        </div>
      )}
    </article>
  );
}

export default BlogPostCard;
