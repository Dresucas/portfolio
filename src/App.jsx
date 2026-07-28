import Cmd from './components/cmd';
import Taskbar from './components/taskbar';

function App(){
  return(
    <div>
<div
  style={{
    height: '70vh',
    width: '50vw',
    borderRadius: '10px',
    background: 'rgba(0, 0, 0, 0.22)',
    backdropFilter:'blur(5px)',
    
boxShadow: '0 40px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
    padding: '10px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box' // Prevents padding from breaking 50vh/50vw size
  }}
>
      <Cmd />
    </div>
    <Taskbar/>
    </div>



  )
}

export default App;