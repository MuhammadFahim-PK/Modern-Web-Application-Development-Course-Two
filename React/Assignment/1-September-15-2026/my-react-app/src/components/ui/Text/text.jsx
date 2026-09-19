import "./Text.css";

/*
  USAGE
  // 1) variant class (from textStyles in theme.js)
  <Text title="Welcome" as="h2" className={textStyles.textHeading} />

  // 2) theme constants as props (colors, fontSizes, fontWeights, fontFamilies,
  //    fontStyles, textAlign from theme.js). They become inline styles and
  //    override the variant class.
  <Text
    title="Custom text"
    color={colors.primary}
    fontSize={fontSizes.xl}
    fontWeight={fontWeights.semibold}
    fontFamily={fontFamilies.serif}
    fontStyle={fontStyles.italic}
    textAlign={textAlign.center}
  />

  as = the HTML tag: "p" (default), "h1"-"h6", "span", "label"...
  Use real heading tags for headings so screen readers and search engines
  can read the page outline. Extra props (id, aria-*, data-*) go to the tag.
*/

function Text({
  title,
  children,
  as: Tag = "p",
  className = "text-body",
  color,
  fontSize,
  fontWeight,
  textAlign,
  fontFamily,
  fontStyle,
  style,
  ...rest
}) {
  // undefined values are ignored by React, so only the props you pass are applied
  const inlineStyle = {
    color,
    fontSize,
    fontWeight,
    textAlign,
    fontFamily,
    fontStyle,
    ...style,
  };

  return (
    <Tag className={`text ${className}`} style={inlineStyle} {...rest}>
      {title ?? children}
    </Tag>
  );
}

export default Text;
