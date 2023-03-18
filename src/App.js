import { useEffect, useState } from 'react';
import './App.css';
//import Hello from './components/Hello/Hello.tsx';
//import ContextText from './components/ContextText/ContextText.tsx'  
//import ReducerTest from './components/ReducerTest/ReducerTest.tsx';
//import UseFormTest from './components/UseFormTest/UseFormTest.tsx';
//import UseFormTest2 from './components/UseFormTest/UseFormTest2.tsx';
//import UseFormTest3 from './components/UseFormTest/UseFormTest3.tsx';
import UseFormTest4 from './components/UseFormTest/UseFormTest4.tsx';
import RefExample from './tests/RefExample.tsx';

function App() {

  /* const [message, setMessage] = useState('waitin...')
  const [message2, setMessage2] = useState('testing2')
  const [message3, setMessage3] = useState('testing3') */

  useEffect(()=>{
    //setTimeout(() => setMessage('loaded'), 3000)
  },[])

  return (
    <div className="App">
      {/* <ReducerTest>

      </ReducerTest> */}
      {/* <UseFormTest></UseFormTest> */}
      <UseFormTest4/>
      {/* <ContextText/>
      <RefExample/>
      <p>test</p>
      <Hello
      text = {message}
      setText = {setMessage}
      />
      <Hello
      text= {message2}
      />
      <Hello
      text= {message3}
      /> */}
    </div>
  );
}

export default App;
