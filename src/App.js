import React, {useEffect, useState } from 'react';
import { fetchData } from './api';
import styles from './App.module.scss';

import { Cards, Chart, CountryPicker } from './components'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    
    async function fetchApi() { 
      setData(await fetchData())
    }
    
    fetchApi()
    
  }, [])
  
  

  return (
    <div className={styles.container}>
  
      <Cards data ={data}/>
      <CountryPicker/>
      <Chart/>

    </div>
  )
}

export default App;
