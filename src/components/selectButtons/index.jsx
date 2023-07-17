import { useEffect, useState } from "react";

export default function SelectButtons({ options, isSingleChoice, className }) {
    const [choice, setChoice] = useState()
    useEffect(() => {
        console.log(choice);
    }, [choice])

    // function isSingleChoice(options) {
    //     if (setChoice != choice) {
    //         { onchange = () => setChoice(options.val.v) }
    //     }

    return (
        <div>
            {options.map(val => val.map(v => {
                return <button className={className} key={v.value} onClick={() => setChoice(v.value)} >{v.text}</button>
            }))}
        </div>
    )
}