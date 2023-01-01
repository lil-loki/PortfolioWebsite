import './App.css';
import React,{useRef,useEffect} from 'react';
import Input from './components/Input/Input.component';
import History from './components/History/History.component';
import {IntroArt} from './utils/asciiArt';

import {useHistory} from './/utils/hooks'

function App() {

  const inputRef = useRef(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);



  return (
    <div className="MainContainer" onClick={onClickAnywhere}>
      <pre>
        <IntroArt/>
      </pre>
      <History history ={history} />
      <br></br>
      <Input
        inputRef={inputRef}
        command={command}
        history={history}
        setCommand={setCommand}
        setHistory={setHistory}
        setLastCommandIndex={setLastCommandIndex}
        clearHistory={clearHistory} 
        lastCommandIndex={lastCommandIndex}
      />
    </div>
  );
}

export default App;
