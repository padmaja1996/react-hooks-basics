// eslint-disable-next-line no-unused-vars
import {useState , useEffect} from 'react'
import './App.css';

function App() {

  // const [count , setCount] = useState(0)
  
  const [state,setState] = useState({age:19,sibling:10}) 


const handleclick = val => 

  setState({
      age:age+1,
      sibling:sibling+1
      
    })
  const { age, sibling } = state
  console.log(state);



  // useEffect(() => {
  //   document.title = "you clicked "+count+ " times"
  // })

  return (
    <div className="App">
      <div>
        Today i am {age} years of Age<br/>
        I have {sibling} siblings 
        <div>
        <button onClick={handleclick}>Get older</button>
        </div>
      </div>


        {/* Count is {count} 
        <div>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={() => setCount(prevstate=>prevstate+1)}>Add +</button>
        <button onClick={() => setCount(prevstate=>prevstate-1)}>Substract -</button>
      </div> */}

      {/* <button onClick={()=>setCount(prevState=>prevState+1)}>Click me and Check title</button> */}
    </div>

  );
}

export default App;