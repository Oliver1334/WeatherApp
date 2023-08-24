import {useState, useEffect, ChangeEvent} from "react"
import { optionType } from "../types"



const useForecast = () => {
    const [term, setTerm] = useState<string>('')
    const [city, setCity] = useState<optionType | null>(null)
      const [options, setOptions] = useState<[]>([])
      const [forecast, setForecast] = useState<null>(null)
    
    const getSearchOptions = (value: string) => {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then((data) => setOptions(data))
      }
    
      
      
      
      const onInputChange = (e: ChangeEvent<HTMLInputElement>) => { 
        const value = e.target.value.trim()
        setTerm(value)
    
        if (value === '') return
    
        getSearchOptions(value)
      }
    
    const getForecast = (city: optionType) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(res => res.json()).then((data) => setForecast(data))
      
    // add this one instead ^^^ https://api.openweathermap.org/data/2.5/weather?q=${*cityName*}&appid=${*API_key*}&units=metric  << comment on danascript video this api works instead of one below...
    
    //https://api.openweathermap.org/data/2.5/onecall?lat=${option.lat}&lon=${option.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}
      
      // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    }
    
    const onSubmit = () => {
      if (!city) return
    
    
      getForecast(city)
    }
    
      const onOptionSelect = (option: optionType) => {
        setCity(option)
        // do something
      }
       
    
    useEffect(() => {
    
      if(city) {
        setTerm(city.name)
        setOptions([])
      }
    }, [city])

    return {
        term, options, forecast, onInputChange, onOptionSelect, onSubmit
    }
}

export default useForecast