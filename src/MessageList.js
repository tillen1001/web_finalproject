import React from 'react';
import MessageItem from './MessageItem';
class MessageList extends React.Component{
render(){
let todos=this.props.data;
let todoItems=todos.map(item=>{
return <MessageItem deleteItem={this.props.deleteItem} key={item.id} data={item}/>
});
return (
<table className="table table-striped">
<thead>
<tr>
<th>留言板</th>
</tr>
</thead>
<tbody>
{todoItems}
</tbody>
</table>
);
}
}
export default MessageList;