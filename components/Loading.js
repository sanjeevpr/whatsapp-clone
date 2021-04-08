import { Circle } from "better-react-spinkit"
import Center from "next/center"

function Loading() {
    return (
        <center>
            <div>
                <img
                    src="https://camo.githubusercontent.com/945d32cdd8d51fe844ca8b2976914ae8786586607aee1cba24d7318e24b30411/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f77686174736170702e737667">
                    alt=""
                    style={{ marginBottom: 10 }}
                    height={200}
                />
                    <Circle color="#3cbc28" size={60} />
            </div>
        </center>
            )
}

            export default Loading;