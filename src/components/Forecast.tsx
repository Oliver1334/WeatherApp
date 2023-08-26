import { forecastType } from '../types'

type Props = {
  data: forecastType
}

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
)

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0]
  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 1g:px-24 h-full 1g:h-auto bg-white bg-opacity-20 backdrop-blur-1s rounded drop-shadow-1g">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2x1 font-black">
            {data.name}
            <span className="font-thin">, {data.country}</span>
          </h2>
          <h1 className="text-4x1 font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
        </section>
      </div>
    </div>
  )
}

export default Forecast
