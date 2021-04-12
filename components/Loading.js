import { Circle } from "better-react-spinkit"

function Loading() {
    return (
        <center style={{display: 'grid', placeItems: 'center', height: '100vh'}}>
            <div>
                <img
                    src="https://github.com/sanjeevpr/whatsapp-clone/raw/master/images/whatsapp-logo.png"
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