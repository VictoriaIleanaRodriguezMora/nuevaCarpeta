import { useState, useEffect } from "react"
import "../../sassCarpeta/index.scss"

const ScrollAnimation = () => {
    const [background, setBg] = useState("blue")

    useEffect(() => {
        const efectoScroll = () => {
            const div = document.getElementById("scroll")
            console.log("scroll");
            const { y } = div.getBoundingClientRect()
            console.log(y);

            const bgColor = y < -1 ? "red" : "blue";
            setBg(bgColor)

        }

        window.addEventListener("scroll", efectoScroll)
        return (() => {
            window.removeEventListener("scroll", efectoScroll)
        })

    }, [])

    return (

        <div id="scroll" style={{background}} >
            <h3>sscrolear para cambiar el fondo</h3>
        </div>
    )

}
export default ScrollAnimation