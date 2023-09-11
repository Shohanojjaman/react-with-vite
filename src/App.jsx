import './App.css';
import reactLogo from './assets/react.svg';
import Counter from './components/Counter';
import Posts from './components/post/posts';
import Users from './components/user/Users';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <Counter />
      <Users />
      <Posts />
    </>
  );
}

export default App;
