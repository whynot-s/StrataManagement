import logo from './logo.svg';
import './App.css';

function App() {

  const apartments = [
    {id: 1, name: 'Apartment A', location: 'City Center', reportURL: '/ApaA_Report.pdf'},
    {id: 2, name: 'Apartment B', location: 'Down Town', reportURL: '/ApaB_Report.pdf'},
    {id: 3, name: 'Apartment C', location: 'Countryside', reportURL: '/ApaC_Report.pdf'},
  ]

  return (
    <div className="App">
      <div>
        <h1>Strata Management</h1>
        <h2>Apartment List</h2>
          {
            apartments.map(apartment => (
              <div key={apartment.id}> 
               {apartment.name} - {apartment.location} <a href={apartment.reportURL}>Download Report</a>
               <ul>
                <li>Electricity</li>
                <li>Water</li>
                <li>Heat</li>
                <li>Gas</li>
               </ul>
              </div>
            ))
          }
      </div>
    </div>
  );
}

export default App;
