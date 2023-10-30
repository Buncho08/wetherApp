import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import Results from './components/Results';
import { useState } from 'react';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  // propsを使って渡します
  // app.tsx -> form.tsx 
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // inputからsetCityにcityNameが渡されているので、それをurlに埋め込む
    // バッククォートで入れられる
    fetch(`https://api.weatherapi.com/v1/current.json?key=f7b68acc5eac49338d014340232510&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
      })
    // json形式で受け取ります
    // .thenでresを受け取っている、アローでそのまま次の処理に値を渡している
    // これはresultsに渡ります
  }
  return (
    <div className="relative content">

      <div className="App img">
        {/* Formのほうではprops.getWeatherでアクセスできる（名前は自由） */}
        {/* setCity(窓口みたいな)も渡してあげると、Formからstateに渡せるように */}
        {/* Single Source of Truth */}
        {/* 1つのコンポーネントがデータを一元的に管理することで、規模が大きいアプリでも管理が容易になる */}
        {/* 上位のコンポーネントから下位のコンポーネントに渡そう */}
        <Title />
        <Form setCity={setCity} getWeather={getWeather} flgs={results.cityName} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;

