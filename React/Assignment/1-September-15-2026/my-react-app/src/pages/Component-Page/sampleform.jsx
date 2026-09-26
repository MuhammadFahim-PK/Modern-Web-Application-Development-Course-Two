import { useState } from "react"
import Input from "../../components/ui/Input/input"
import Select from "../../components/ui/Select/select"
import Text from "../../components/ui/Text/text"
import {
    inputStyles,
    selectStyles,
    textStyles
} from "../../constant/theme";

const countryOptions = [
    { value: "pk", label: "Pakistan" },
    { value: "ae", label: "United Arab Emirates" },
    { value: "gb", label: "United Kingdom" },
    { value: "us", label: "United States" },
];


function SampleForm() {
    const [fullName, setFullName] = useState("")
    const [country, setCountry] = useState("")

    return (
        <>
            <section aria-labelledby="demo-inputs" className="section">
                <Text as="h2" id="demo-inputs" title="Inputs" className={textStyles.textSubheading} />
                <div className="buttons-box">
                    <Input className={inputStyles.inputDefault} label="Full name" name="fullName" placeholder="Enter your full name" autoComplete="name" value={fullName} onChange={(e) => setFullName(e.target.value)} />

                    <Input className={inputStyles.inputOutline} label="Email" type="email" placeholder="name@example.com" helperText="We never share your email" />

                    <Input className={inputStyles.inputFilled} label="Search" type="search" placeholder="Search components" />

                    <Input
                        className={inputStyles.inputUnderline}
                        label="Username"
                        placeholder="Choose a username"
                    />

                    <Input
                        className={inputStyles.inputRounded}
                        label="City"
                        placeholder="Enter your city"
                    />

                    <Input
                        className={inputStyles.inputPill}
                        label="Company"
                        placeholder="Enter your company"
                    />

                    <Input
                        className={inputStyles.inputSuccess}
                        label="Username"
                        defaultValue="fahim_dev"
                        helperText="Username is available"
                    />

                    <Input
                        className={inputStyles.inputDefault}
                        label="Work email"
                        type="email"
                        defaultValue="name@"
                        error="Enter a valid email address"
                    />

                    <Input
                        className={inputStyles.inputDark}
                        label="Coupon code"
                        placeholder="Enter your code"
                    />

                    <Input
                        className={inputStyles.inputGlow}
                        label="Phone"
                        type="tel"
                        placeholder="+00 000 0000000"
                        autoComplete="tel"
                    />

                    <Input
                        className={inputStyles.inputLarge}
                        label="Website"
                        type="url"
                        placeholder="https://example.com"
                    />

                    <Input
                        className={inputStyles.inputDefault}
                        label="Password"
                        type="password"
                        helperText="At least 8 characters"
                        autoComplete="new-password"
                        required
                    />

                    <Input
                        className={inputStyles.inputDefault}
                        label="Disabled"
                        defaultValue="Not editable"
                        disabled
                    />
                </div>
            </section>
            <section aria-labelledby="demo-selects" className="section">
                <Text
                    as="h2"
                    id="demo-selects"
                    title="Selects"
                    className={textStyles.textSubheading}
                />
                <div className="buttons-box">
                    <Select
                        className={selectStyles.selectDefault}
                        label="Country"
                        options={countryOptions}
                        placeholder="Choose a country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />

                    <Select
                        className={selectStyles.selectOutline}
                        label="Outline"
                        options={countryOptions}
                        placeholder="Choose a country"
                    />

                    <Select
                        className={selectStyles.selectFilled}
                        label="Filled"
                        options={countryOptions}
                        placeholder="Choose a country"
                    />

                    <Select
                        className={selectStyles.selectUnderline}
                        label="Underline"
                        options={countryOptions}
                        placeholder="Choose a country"
                    />

                    <Select
                        className={selectStyles.selectRounded}
                        label="Rounded"
                        options={countryOptions}
                        placeholder="Choose a country"
                    />

                    <Select
                        className={selectStyles.selectPill}
                        label="Pill"
                        options={countryOptions}
                        placeholder="Choose a country"
                    />

                    <Select
                        className={selectStyles.selectSuccess}
                        label="Success"
                        options={countryOptions}
                        defaultValue="pk"
                        helperText="Looks good"
                    />

                    <Select
                        className={selectStyles.selectDark}
                        label="Dark"
                        options={countryOptions}
                        placeholder="Choose a country"
                    />

                    <Select
                        className={selectStyles.selectDefault}
                        label="Delivery country"
                        options={countryOptions}
                        placeholder="Choose a country"
                        error="Please choose a country"
                        required
                    />

                    <Select
                        className={selectStyles.selectDefault}
                        label="Disabled"
                        options={countryOptions}
                        defaultValue="ae"
                        disabled
                    />
                </div>
            </section>
        </>
    );
}

export default SampleForm;   