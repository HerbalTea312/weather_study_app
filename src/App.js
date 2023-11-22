import CitySelect from './components/CitySelect/CitySelect';
import Details from './components/DayDetails/Details';
import React from 'react';
import './styles/App.css'

function onCitySelect(selectedCity) {
  console.log(selectedCity)
  localStorage.setItem("city", selectedCity);
}

function App() {
  return (
    <div className='App'>
      <header>
        <h1>SIMPLE WEATHER</h1>
        <hr style={{ margin: '10px 0' }} />
      </header>
      <CitySelect onCitySelect={onCitySelect} />
      <hr style={{ margin: '10px 0' }} />
      <Details details={detailsMobile} />
      
    </div >
  );
}

export default App;

const detailsMobile =
{
  'id': '1',
  'date': '2023-11-13',
  'times': [
    {
      'time': 'morning',
      'icon': 'Cloud',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    {
      'time': 'day',
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    {
      'time': 'evening',
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    {
      'time': 'night',
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    }]
}

const dataMobile =
  [{
    'id': '1',
    'date': '2023-11-13',
    'day': {
      'icon': 'Cloud',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    'night': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    }
  },
  {
    'id': '2',
    'date': '2023-11-14',
    'day': {
      'icon': 'Cloud',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    'night': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    }
  },
  {
    'id': '3',
    'date': '2023-11-15',
    'day': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    'night': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    }
  },
  {
    'id': '4',
    'date': '2023-11-16',
    'day': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    'night': {
      'icon': 'Cloud',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    }
  },
  {
    'id': '5',
    'date': '2023-11-17',
    'day': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    'night': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    }
  },
  {
    'id': '6',
    'date': '2023-11-18',
    'day': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    'night': {
      'icon': 'Cloud',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    }
  },
  {
    'id': '7',
    'date': '2023-11-19',
    'day': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    },
    'night': {
      'icon': 'Snow',
      'temperature': '+1',
      'wind': '0-1 ЮЗ',
      'presure': '744',
      'wet': '70 %'
    }
  }]

const data =
  [{
    'id': '1',
    'date': '2023-11-13',
    'icon': 'Cloud',
    'temperature': '+1',
    'wind': '0-1 ЮЗ',
    'presure': '744',
    'wet': '70 %'
  },
  {
    'id': '2',
    'date': '2023-11-14',
    'icon': 'Snow',
    'temperature': '0',
    'wind': '0-1 ЮЗ',
    'presure': '744',
    'wet': '70 %'
  },
  {
    'id': '3',
    'date': '2023-11-15',
    'icon': 'Snow',
    'temperature': '0',
    'wind': '0-1 ЮЗ',
    'presure': '744',
    'wet': '60 %'
  },
  {
    'id': '4',
    'date': '2023-11-16',
    'icon': 'Sun',
    'temperature': '+1',
    'wind': '0-1 ЮЗ',
    'presure': '744',
    'wet': '40 %'
  },
  {
    'id': '5',
    'date': '2023-11-17',
    'icon': 'Snow',
    'temperature': '-1',
    'wind': '1-2 С',
    'presure': '744',
    'wet': '75 %'
  },
  {
    'id': '6',
    'date': '2023-11-18',
    'icon': 'Rain',
    'temperature': '-2',
    'wind': '5 С',
    'presure': '744',
    'wet': '90 %'
  },
  {
    'id': '7',
    'date': '2023-11-19',
    'icon': 'Thunder',
    'temperature': '-2',
    'wind': '10 СЗ',
    'presure': '744',
    'wet': '90 %'
  }]

const wind = [
  {
    'value': '1',
    'date': '2023-11-13'
  },
  {
    'value': '2',
    'date': '2023-11-14'
  },
  {
    'value': '3',
    'date': '2023-11-15'
  },
  {
    'value': '4',
    'date': '2023-11-16'
  },
  {
    'value': '5',
    'date': '2023-11-17'
  },
  {
    'value': '6',
    'date': '2023-11-18'
  },
  {
    'value': '7',
    'date': '2023-11-19'
  }
]

const wet = [
  {
    'value': '1',
    'date': '2023-11-13'
  },
  {
    'value': '2',
    'date': '2023-11-14'
  },
  {
    'value': '3',
    'date': '2023-11-15'
  },
  {
    'value': '4',
    'date': '2023-11-16'
  },
  {
    'value': '5',
    'date': '2023-11-17'
  },
  {
    'value': '6',
    'date': '2023-11-18'
  },
  {
    'value': '7',
    'date': '2023-11-19'
  }
]

const presure = [
  {
    'value': '1',
    'date': '2023-11-13'
  },
  {
    'value': '2',
    'date': '2023-11-14'
  },
  {
    'value': '3',
    'date': '2023-11-15'
  },
  {
    'value': '4',
    'date': '2023-11-16'
  },
  {
    'value': '5',
    'date': '2023-11-17'
  },
  {
    'value': '6',
    'date': '2023-11-18'
  },
  {
    'value': '7',
    'date': '2023-11-19'
  }
]