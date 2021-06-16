import React from 'react';
class MessageItem extends React.Component{
delete(){
this.props.deleteItem(this.props.data.id);
}
render(){
let {text,time,done,id}=this.props.data;
return (
<tr>
<td>{time}<br/><br/>{text}</td>
<td>
<br/>
<br/>
<a onClick={this.delete.bind(this)}>刪除留言</a>
</td>
</tr>
);
}
}
export default MessageItem;