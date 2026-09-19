import "./UserCard.css";

/*
  USAGE
  <UserCard
    image={avatarImg}                       // optional, initials are shown when missing
    name="Sara Ahmed"
    role="Product Designer"                 // optional
    email="sara@example.com"                // optional, becomes a mailto: link
    phone="+1 555 0100"                     // optional, becomes a tel: link
    city="Lisbon"                           // optional
    age={28}                                // optional
    details={[{ label: "Company", value: "Northwind" }]}   // optional extra rows
    className={userCardStyles.userCardShadow}              // optional, default = "user-card-default"
  />

  Only the rows you pass are shown.
  imageAlt is empty by default because the name is already next to the photo.
  headingTag = the tag used for the name: "h3" (default), "h2", "h4"...
*/

function UserCard({
  image,
  imageAlt = "",
  name,
  role,
  email,
  phone,
  city,
  age,
  details = [],
  className = "user-card-default",
  headingTag: Heading = "h3",
}) {
  // first letters of the first two words, used when there is no photo
  const initials = (name || "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  // every row that has a value; the phone link keeps only digits and "+"
  const rows = [
    email && { label: "Email", value: email, href: `mailto:${email}` },
    phone && {
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/[^\d+]/g, "")}`,
    },
    city && { label: "City", value: city },
    age != null && { label: "Age", value: age },
    ...details,
  ].filter(Boolean);

  return (
    <article className={`user-card ${className}`}>
      {image ? (
        <img
          className="user-card-image"
          src={image}
          alt={imageAlt}
          width="96"
          height="96"
          loading="lazy"
        />
      ) : (
        <span className="user-card-initials" aria-hidden="true">
          {initials}
        </span>
      )}

      <div className="user-card-body">
        <Heading className="user-card-name">{name}</Heading>

        {role && <p className="user-card-role">{role}</p>}

        {rows.length > 0 && (
          <dl className="user-card-details">
            {rows.map((row) => (
              <div key={row.label} className="user-card-row">
                <dt className="user-card-label">{row.label}</dt>
                <dd className="user-card-value">
                  {row.href ? <a href={row.href}>{row.value}</a> : row.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}

export default UserCard;
