// import { Link } from 'react-router-dom';
import '../../styles/home-style/home.css'
import Banner from  "../../components/Banner/index.jsx"
import nature1 from '../../images/nature1.PNG'
import Card from "../../components/Card/index.jsx"
import data from "../../data.json"

function App() {
  const sixFirst = data.slice(0, 6);

  return (
    <div className="App">
      <body>
        <Banner imageSrc={nature1} showText={true}/>
        <div className='card-container'>
          {sixFirst.map((e) => (
            <Card key={e.id} title={e.title} backgroundImage={e.cover} />
          ))}
        </div>
      </body>
    </div>
  );
}
export default App;