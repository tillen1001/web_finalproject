import React from 'react';

class MessageItem extends React.Component{
    render(){
        let {text,time,done,id}=this.props.data;
        return (
            <tr>
            <td>{time}<br/><br/>{text}</td>
            <td>
            <br/>
            <br/>   
            </td>
            </tr>
        );
    }
}
export default MessageItem;