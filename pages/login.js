import styled from "styled-components";
import Head from "next/head"
import { Button } from "@material-ui/core";
import { provider, auth } from "../firebase"

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo
                    src="https://camo.githubusercontent.com/945d32cdd8d51fe844ca8b2976914ae8786586607aee1cba24d7318e24b30411/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f77686174736170702e737667"></Logo>
                <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`;

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius:5px;
    box-shadow:0px 4px 14px -3px rgba(0, 0, 0, 0.7)
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom:50px;
`;