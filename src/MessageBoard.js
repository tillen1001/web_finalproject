import logo from './logo.svg';
import './MessageBoard.css';

function MessageBoard() {
  return (
    <div className="MessageBoard">
      <header className="MessageBoard-header">
        <img src={logo} className="MessageBoard-logo" alt="logo" />
        <p>
          Edit <code>src/MessageBoard.js</code> and save to reload.
        </p>
        <a
          className="MessageBoard-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MessageBoard;
