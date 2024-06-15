import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage=(props) =>{
    const chatprops=useMultiChatLogic('828ef90b-2964-4abf-80ca-b8d9e1e92b44',props.user.username,props.user.secret);
    return (
        <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatprops} />
        <MultiChatWindow {...chatprops} style={{height:'100%'}}/>
        </div>
    )
}

export default ChatsPage