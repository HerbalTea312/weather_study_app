// import OneRowTable from './components/OneRowTable'
// import ThreeRowTable from './components/ThreeRowTable';
// import Item from './components/Mobile/Item/Item';
import Day from './components/Mobile/Day/Day';
import City from './components/City';
import React from 'react';
import './styles/App.css'

const data =
  [{
    "id": "1",
    "date": "2023-11-13",
    "icon": "Cloud",
    "temperature": "+1"
  },
  {
    "id": "2",
    "date": "2023-11-14",
    "icon": "Snow",
    "temperature": "0"
  },
  {
    "id": "3",
    "date": "2023-11-15",
    "icon": "Snow",
    "temperature": "0"
  },
  {
    "id": "4",
    "date": "2023-11-16",
    "icon": "Sun",
    "temperature": "+1"
  },
  {
    "id": "5",
    "date": "2023-11-17",
    "icon": "Snow",
    "temperature": "-1"
  },
  {
    "id": "6",
    "date": "2023-11-18",
    "icon": "Rain",
    "temperature": "-2"
  },
  {
    "id": "7",
    "date": "2023-11-19",
    "icon": "Thunder",
    "temperature": "-2"
  }]

const wind = [
  {
    "value": "1",
    "date": "2023-11-13"
  },
  {
    "value": "2",
    "date": "2023-11-14"
  },
  {
    "value": "3",
    "date": "2023-11-15"
  },
  {
    "value": "4",
    "date": "2023-11-16"
  },
  {
    "value": "5",
    "date": "2023-11-17"
  },
  {
    "value": "6",
    "date": "2023-11-18"
  },
  {
    "value": "7",
    "date": "2023-11-19"
  }
]

const water = [
  {
    "value": "1",
    "date": "2023-11-13"
  },
  {
    "value": "2",
    "date": "2023-11-14"
  },
  {
    "value": "3",
    "date": "2023-11-15"
  },
  {
    "value": "4",
    "date": "2023-11-16"
  },
  {
    "value": "5",
    "date": "2023-11-17"
  },
  {
    "value": "6",
    "date": "2023-11-18"
  },
  {
    "value": "7",
    "date": "2023-11-19"
  }
]

function App() {

  return (
    <div className="App">
      <header>
        <h1>SIMPLE WEATHER</h1>
        <hr style={{ margin: '15px 0' }} />
      </header>
      <City />
      <hr style={{ margin: '15px 0' }} />

      {/* 
      // Для десктопа
      <ThreeRowTable data={data} />
      <OneRowTable data={wind} title='Ветер' />
      <OneRowTable data={water} title='Влажность' /> */}

      <div>
        <h3>Неделя</h3>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
      </div>
    </div >
  );
}

export default App;
