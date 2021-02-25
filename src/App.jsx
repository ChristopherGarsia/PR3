import './App.css';
import Tablist from './components/Tablist'
import Body from './components/Body'
import React, {useState} from 'react'

function App() {
  let [tabId, setTabId] = useState(0)
  const tabs = ['Text', 'Images', 'Videos', 'Table', 'Email']

  return (
    <div className='app'>
      <Tablist setTabId={setTabId} tabId={tabId} labels={tabs}/>
      <Body setTabId={setTabId} tabId={tabId}/>
    </div>
  )
}

export default App
