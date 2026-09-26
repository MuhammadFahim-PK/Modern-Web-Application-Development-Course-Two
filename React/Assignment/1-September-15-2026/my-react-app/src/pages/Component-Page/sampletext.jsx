import Text from "../../components/ui/Text/text"
import {
    textStyles,
    colors,
    fontFamilies,
    fontSizes,
    fontStyles,
    fontWeights,
    textAlign,
} from "../../constant/theme";

function SampleText() {
    return (
        <section aria-labelledby="demo-text" className="section">
            <Text
                as="h2"
                id="demo-text"
                title="Text"
                className={textStyles.textSubheading}
            />
            <div style={{ display: "grid", justifyItems: "center", gap: 12 }}>
                <Text as="h3" title="Heading text" className={textStyles.textHeading} />
                <Text as="h3" title="Subheading text" className={textStyles.textSubheading} />
                <Text title="Body text" className={textStyles.textBody} />
                <Text title="Caption text" className={textStyles.textCaption} />
                <Text title="Muted text" className={textStyles.textMuted} />
                <Text title="Highlight text" className={textStyles.textHighlight} />
                <Text title="Gradient text" className={textStyles.textGradient} fontSize={fontSizes.xl} fontWeight={fontWeights.bold} />
                <Text title="Underline text" className={textStyles.textUnderline} />
                <Text
                    title="Truncate text: this sentence is far too long for the box it sits in"
                    className={textStyles.textTruncate}
                    style={{ maxWidth: 240 }}
                />
                <Text title="Danger text" className={textStyles.textDanger} />
                <Text title="Success text" className={textStyles.textSuccess} />
                <Text
                    title="Custom text from theme constants"
                    color={colors.primary}
                    fontSize={fontSizes.xl}
                    fontWeight={fontWeights.semibold}
                    fontFamily={fontFamilies.serif}
                    fontStyle={fontStyles.italic}
                    textAlign={textAlign.center}
                />
            </div>
        </section>
    );
}

export default SampleText;
