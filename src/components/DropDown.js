/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { Form } from 'react-bootstrap';
import DropDown from 'react-dropdown-select';

class Template extends React.PureComponent {

  static defaultProps = {
    values: [],
  };

  render() {
    const { label, options, values, onChange, itemRenderer } = this.props;
    return (
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <DropDown
          values={values}
          options={options}
          onChange={item => onChange(item[0].value)}
          // itemRenderer={(item, itemIndex, props, state, methods) =>
          //   this.itemRenderer(item, itemIndex, props, state, methods)
          // }
          itemRenderer={itemRenderer}
        />
      </Form.Group>
    );
  }
}

export default Template;
