import '../App.css';
import Bar from './Navbar'


function Home() {
  return (
    <div className="App">
        <Bar/>
      <header className="App-header">
        <h1 style={{fontSize:'250px',fontWeight:'bold' }}>Jewelry</h1>
      </header>
    </div>
  );
}

export default Home;