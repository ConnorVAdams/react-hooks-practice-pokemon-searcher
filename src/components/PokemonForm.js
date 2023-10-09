import { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPoke }) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: '',
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPoke = {...formData}
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPoke)
    })
    .then(resp => resp.json())
    .then(newPoke => onAddPoke(newPoke))
  }

  const handleFormChange = ({ target: { name, value } }) => {
    if (name === 'frontUrl') {
      const newData = {...formData}
      newData.sprites.front = value
      setFormData(newData)
    } else if (name === 'backUrl') {
      const newData = {...formData}
      newData.sprites.back = value
      setFormData(newData)
    } else {
      const newData = {
        ...formData,
        [name]: value
      }
      setFormData(newData)
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group  widths="equal">
          <Form.Input onChange={handleFormChange} fluid label="Name" placeholder="Name" name="name" value={formData.name} />
          <Form.Input onChange={handleFormChange} fluid label="hp" placeholder="hp" name="hp" value={formData.hp}/>
          <Form.Input
            onChange={handleFormChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front}
          />
          <Form.Input
            onChange={handleFormChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
