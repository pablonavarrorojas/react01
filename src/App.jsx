import './App.css'
import Card from './components/Card';
import ShowHide from './components/ShowHide';
import vehicles from './data/vehicles';

function App() {
  
  const vehicleList = vehicles.map( v => { 
    return <Card title={v.name} address={ v.address } description={ v.description } />
  })
  return (
    <>
    <div className="App">
        <h1>HI React!</h1>
        
        <div className="container">
          {vehicleList}
          
          <ShowHide />

        </div>
        
    </div>
    </>
  )
}

// function App() {
  
//   return (
//     <>
//     <div className="App">
//       <h1>hola reacct</h1>
//       <div className="container">
//         <Card title='titulo' description='description' />
//         <Card title='titulo 3' description='descrip 2' />
//         <Card />
//         <Card />
//       </div>
//     </div>
//     </>
//   )
// }

export default App
