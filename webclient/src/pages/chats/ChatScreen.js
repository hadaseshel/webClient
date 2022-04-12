import Avatar from "./icons/Avatar";
import "./ChatScreen.css";
import Send from "./icons/Send";
import IcionPaperclip from "./icons/IconPaperclip";



function ChatScreen(){
    return(
        <div className="chatScreen">
            <div className="chat_header">
                <Avatar/>
                <div className="chat_headerinfo">NAME</div>
            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && "chat_reciever"}`}>hii exemple messge
                    <span className="chat_message_timedate">00:00</span>
                </p>
            </div>

            <div className="chat_footer">
                <from className="chat_footer_from">
                <button type="button" className="btn btn-outline-success btn-sm"><IcionPaperclip />Upload</button>
                    <input type="text" placeholder="New message here.."></input>
                    <button type="button" className="btn btn-outline-success btn-sm"><Send />Send</button>
                </from>
            </div>


        </div>
    );
}

export default ChatScreen;