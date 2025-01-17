import React, {useState, useEffect} from 'react';
import api from './services/api'
import DevItem from './components/devsItem'
import DevForm from './components/devsForm'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [devs, setDevs] = useState([])
  

  
    
    useEffect(() => {
      async function loadDev() {
        const response = await api.get('/devs')
          setDevs(response.data)
      }
      loadDev()
    }, [])
    
    async function handleAddDev(data) {
      const response = await api.post('/devs', data)
      
      setDevs([...devs, response.data])
    }

    
    return (
      <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <DevForm onSubmit={handleAddDev}/>
    </aside>
    <main>
      <ul>
        {devs.map((dev) => (
          <DevItem key={dev._id} dev={dev}/>
        ))}
      </ul>
    </main>
    </div>
  );
}

export default App;
