import { ListGroup } from 'react-bootstrap'

const Table = ({ selected, changeSelected }) => {
  const checkSelected = (value) => (value === selected ? 'selected' : '')

  return (
    <>
      <ListGroup>
        <ListGroup.Item
          onClick={(e) => changeSelected('First')}
          className={checkSelected('First')}
        >
          First
        </ListGroup.Item>
        <ListGroup.Item
          onClick={(e) => changeSelected('Second')}
          className={checkSelected('Second')}
        >
          Second
        </ListGroup.Item>
        <ListGroup.Item
          onClick={(e) => changeSelected('Third')}
          className={checkSelected('Third')}
        >
          Third
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">Prop of selected is {selected || 'undefined'}</p>
    </>
  )
}

export default Table
