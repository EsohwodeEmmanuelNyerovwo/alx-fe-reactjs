import './App.css'
import PostsComponent from './components/postsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <PostsComponent />
    </>
  );
}

export default App
