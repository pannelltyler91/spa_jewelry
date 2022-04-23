import '../App.css';
import Bar from './Navbar'


function Home() {
    
  return (
    <div className="App">
        <Bar/>
      
      <div id='order' style={{border:'3px solid #e0e1dd'}}>
          <div id='metal' style={{marginBottom:'20px',marginTop:'20px'}}>
              <button>Silver</button>
              <button>8k Yellow Gold</button>
              <button>10k Yellow Gold</button>
              <button>14k Yellow Gold</button>
              <button>White Gold</button>
          </div>
          <div id='teeth' >
                <div id='top' style={{margin:'10px'}}>
                <button onTouchStart={() => {console.log('tooth clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                   
                </div>
                <div id='bottom' style={{margin:'10px'}}>
                <button onTouchStart={() => {console.log('tooth selected')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                <button onTouchStart={() => {console.log('clicked')}} style={{width:'25px',height:'25px'}}></button>
                </div>
          </div>
          <div id='design' style={{marginTop:'20px'}}>
            <button>Open Face</button>
            <button>Diamond Cut</button>
            <button>Diamond Dust</button>
          </div>
          <div id='price' style={{color:'#e0e1dd'}}>
              <h1>Total:</h1>
          </div>
      </div>
      <div id='clientInfo' style={{color:'#e0e1dd',border:'3px solid #e0e1dd',marginTop:'20px'}}>
          <h1>Name:</h1>
          <h1>Phone:</h1>

      </div>
    </div>
  );
}

export default Home;