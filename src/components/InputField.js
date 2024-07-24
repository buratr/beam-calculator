import React from 'react';
import { Form } from 'react-bootstrap';

class InputField extends React.PureComponent {

  static defaultProps = {
    readOnly: false,
  }

  render() {
    const { readOnly, label, value, placeholder, onChange } = this.props;
    return (
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type="text"
          value={value}
          readOnly={readOnly}
          placeholder={placeholder || ''}
          onChange={event => onChange(event.target.value)}
        />
      </Form.Group>
    );
  }
}

export default InputField;
