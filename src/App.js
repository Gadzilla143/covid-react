import React, {useEffect, useState } from 'react';
import { fetchData } from './api';
import { Cards, Chart, CountryPicker } from './components'

import styles from './App.module.scss';

import coronaImage from './images/covid.png'

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    
    async function fetchApi() { 
      setData(await fetchData())
    }
    
    fetchApi()
    
  }, [])
  
  const handleCountryChange = async (countries) => {
    setCountry(countries)
    setData(await fetchData(countries))
  
  }
  
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19"/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>

    </div>
  )
}

export default App;
