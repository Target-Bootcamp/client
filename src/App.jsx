import './App.css'
import MainContext from './context'
import MainRouter from './routes'
// import MainTest from './test'


function App() {
  return (
    <>
      <MainContext>
        <MainRouter />
        {/* <MainTest/> */}
      </MainContext>
    </>
  )
}

export default App
