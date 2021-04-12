import { Avatar } from "@material-ui/core";
import styled from "styled-components"
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import Head from 'next/head';
import { db, auth } from "../../firebase";
import getRecipientEmail from "../../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";

function Chat({messages, chat}) {

    const [user] = useAuthState(auth);

    return (
        <Container>
            <Head>
                <title>Chat with {getRecipientEmail(chat.users, user)}</title>
            </Head>

            <Sidebar />

            <ChatContainer>
                <ChatScreen chat={chat} messages={messages}/>
            </ChatContainer>
        </Container>
    )
}

export default Chat;

export async function getServerSideProps(context) {
    const ref = db.collection("chats").doc(context.query.id);

    const messagesResponse = await ref.collection("messages").orderBy("timestamp", "asc").get();

    const messages = messagesResponse.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })).map(messages => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime()
    }))

    const chatResponse = await ref.get();
    const chat = {
        id: chatResponse.id,
        ...chatResponse.data()
    }

    console.log(chat);
    console.log(messages);

    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat
        }
    }
}

const Container = styled.div`
    display: flex;
`;

const ChatContainer = styled.div`
    flex: 1;
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
