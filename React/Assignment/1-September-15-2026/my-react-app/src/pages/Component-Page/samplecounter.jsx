import { useState } from "react"
import Button from "../../components/ui/Button/button";
import Text from "../../components/ui/Text/text"
import {
    btnStyles,
    textStyles
} from "../../constant/theme";

function SampleCounter() {
    const [count, setCount] = useState(0)

    const [counter, setCounter] = useState(0)

    // one handler for all 8 buttons: pass +1, -1, +5, -5 ...
    const changeCounter = (amount) => setCounter((counter) => counter + amount)

    return (
        <>
            {/* <section aria-labelledby="demo-counter" className="section counter">
                <Text as="h2" id="demo-counter" title="Counter" className={textStyles.textSubheading} />
                <Text role="status" title={counter} className={textStyles.textHeading} />
            </section> */}
            <section className="section buttons-box">
                <button type="button" className="counter" onClick={() => setCount((count) => count + 1)} >Count is {count}</button>
            </section>
            <section className="section buttons-box">
                <p className="counter-value">Count: {counter}</p>

                <Button className={btnStyles.btnFilled} title="Increment +1" onClick={() => changeCounter(1)} />
                <Button className={btnStyles.btnBorder} title="Decrement -1" onClick={() => changeCounter(-1)} />
                <Button className={btnStyles.btnFilled} title="Increment +5" onClick={() => changeCounter(5)} />
                <Button className={btnStyles.btnBorder} title="Decrement -5" onClick={() => changeCounter(-5)} />
                <Button className={btnStyles.btnFilled} title="Increment +10" onClick={() => changeCounter(10)} />
                <Button className={btnStyles.btnBorder} title="Decrement -10" onClick={() => changeCounter(-10)} />
                <Button className={btnStyles.btnFilled} title="Increment +15" onClick={() => changeCounter(15)} />
                <Button className={btnStyles.btnBorder} title="Decrement -15" onClick={() => changeCounter(-15)} />
            </section>
        </>
    );
}

export default SampleCounter;
