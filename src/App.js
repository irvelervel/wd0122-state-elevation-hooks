import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { useState } from 'react'

const App = () => {
  // if we're able to move the state here, at that point
  // we can pass it down to ALL the components at the same time!
  // because the components at this point are BOTH CHILDREN
  // of the same component hosting the state!

  // you want to elevate the state until you find the COMMON parent
  // of all the components you want to share it with!

  // first step: convert App into a Class Component, so it can hold a state...

  // state = {
  //   selected: undefined,
  // }

  const [selected, setSelected] = useState(undefined)

  const changeSelected = (newSelectedValue) => {
    // this.setState({
    //   selected: newSelectedValue,
    // })
    setSelected(newSelectedValue)
  }
  // changeSelected is a function which takes the new value for selected
  // and sets the state of App with it!

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <Table selected={selected} changeSelected={changeSelected} />
            </Col>
            <Col className="my-auto">
              <Detail selected={selected} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
