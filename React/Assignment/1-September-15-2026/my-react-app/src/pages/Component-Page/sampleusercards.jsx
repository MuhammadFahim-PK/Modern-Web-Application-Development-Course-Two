import Text from "../../components/ui/Text/text"
import UserCard from "../../components/ui/Cards/User/usercard"
import avatarImg from "../../assets/images/avatar-placeholder.svg"
import { textStyles, userCardStyles } from "../../constant/theme";

function SampleUserCards() {
    return (
        <section aria-labelledby="demo-user-cards" className="section">
            <Text
                as="h2"
                id="demo-user-cards"
                title="User Cards"
                className={textStyles.textSubheading}
            />
            <div className="buttons-box">
                <UserCard
                    className={userCardStyles.userCardDefault}
                    image={avatarImg}
                    name="Sara Ahmed"
                    role="Product Designer"
                    email="sara.ahmed@example.com"
                    phone="+1 555 0100"
                    city="Lisbon"
                    age={28}
                />

                <UserCard
                    className={userCardStyles.userCardOutline}
                    name="Daniel Carter"
                    role="Frontend Developer"
                    email="daniel.carter@example.com"
                    phone="+1 555 0101"
                    city="Denver"
                    age={34}
                />

                <UserCard
                    className={userCardStyles.userCardShadow}
                    image={avatarImg}
                    name="Mei Tanaka"
                    role="Data Analyst"
                    email="mei.tanaka@example.com"
                    phone="+1 555 0102"
                    city="Osaka"
                    age={31}
                />

                <UserCard
                    className={userCardStyles.userCardDark}
                    image={avatarImg}
                    name="Omar Hassan"
                    role="Project Manager"
                    email="omar.hassan@example.com"
                    phone="+1 555 0103"
                    city="Cairo"
                    age={39}
                />

                <UserCard
                    className={userCardStyles.userCardHorizontal}
                    image={avatarImg}
                    name="Lena Fischer"
                    role="Support Lead"
                    email="lena.fischer@example.com"
                    phone="+1 555 0104"
                    city="Berlin"
                    age={42}
                    details={[{ label: "Company", value: "Northwind" }]}
                />
            </div>
        </section>
    );
}

export default SampleUserCards;
