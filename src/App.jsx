import './App.css'
import MainContext from './context'
import MainRouter from './routes'
import MainTest from './test'

function App() {
  return (
    <>
      <MainContext>
        <MainTest />
        <MainRouter />
      </MainContext>
    </>
  )
}

export default App
