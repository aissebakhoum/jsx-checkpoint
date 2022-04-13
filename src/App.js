import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div style={{border:"solid 1px noir",maxWidth:"100vw"}}>
      <h1 className='title red'>Votre nom ici</h1>
      
      <img src='/imageInSrc.jpg' />
      
        <img src='/imageInPublic.jpg' />
    
    </div>
    <video width="320" height="240">

    <source src='maVideo.mp4' type='video/mp4' />
      
    </video>
    </div>
  );
}

export default App;
