import {ChangeEvent, useState} from 'react'


const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>('')


const getSearchOptions = (value: string) => {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then((data) => console.log({data}))
  }

  
  
  
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => { 
    const value = e.target.value.trim()
    setTerm(value)

    if (value === '') return

    getSearchOptions(value)
  }
  
  // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-yellow-100 via--500 to-emerald-900 h-[100vh] w-full">

      <section className=" w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin ">Weather <span className="font-black">Forecast</span></h1>

        <p className="text-sm mt-2"> Where would you like to know what the weather is like?</p>

      <div className="flex mt-10 md:mt-4">
        <input type="text" value={term} className="px-2 py-1 rounded-l-md border-2 border-white" onChange={onInputChange}/>

        <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer">search</button>
      </div>

      </section>
    </main>
  )
}

export default App
