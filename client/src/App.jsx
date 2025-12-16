import Navbar from './components/Navbar';

function App() {

  const handleFavorite = async () => {
   await api.post(`/posts/${id}/favorite`);
   setFavorited(true);
 };

  
  return (
    <div>
      <Navbar />
      <h1>Welcome to CodePilot MERN Demo</h1>  
      <button onClick={() => api.delete(`/users/${user.id}`)}>
   Delete Account
 </button>

    </div>
  );
}

export default App;
