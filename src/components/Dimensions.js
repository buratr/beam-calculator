/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import BeamProfile from './BeamProfile';
import DropDown from './DropDown';

class Dimensions extends React.PureComponent {

  itemRenderer = ({ item, props, methods }) => {
    return (
      <div
        tabIndex="0"
        role="button"
        onKeyPress={() => null}
        key={item[props.valueField]}
        onClick={() => methods.addItem(item)}
      >
        <div
          key={item[props.valueField]}
          style={{
            padding: '10px',
            backgroundColor: methods.isSelected(item) ? '#F7B334' : undefined,
            borderRadius: '4px',
          }}
        >
          <strong>H: </strong>
          {item[props.valueField].h}
          {item[props.valueField].b && <strong> B: </strong>}
          {item[props.valueField].b || ''}
          <strong> T: </strong>
          {item[props.valueField].t}
        </div>
      </div>
    );
  };

  render() {
    const { profile, onDimensionsChange, onModulusChange, selectedDimension } = this.props;
    const options = profile.dimensions.map(item => ({
      label: `H: ${item.h}, ${item.b ? 'B: ' + item.b + ', ' : ''} T: ${item.t}`,
      value: item,
      key: item.a
    }));
    // const eModulus = [
    //   { label: '17000', value: 17000, key: 0 },
    //   { label: '23000', value: 23000, key: 1 },
    // ];
    const eModulus = profile.eModulus.map((item, id) => ({label: item.value, value: item.value, key: id }))

    return (
      <Form>
        <Row>
          <Col sm={12} lg={6}>
            <BeamProfile profile={profile} isFullScreen />
          </Col>
          <Col sm={12} lg={6}>
            <DropDown
              values={[
                {
                  label: `H: ${selectedDimension.h}, ${selectedDimension.b ? 'B: ' + selectedDimension.b + ', ' : ''} T: ${selectedDimension.t}`,
                  value: selectedDimension,
                  key: selectedDimension.a
                },
              ]}
              label="Dimension"
              itemRenderer={this.itemRenderer}
              options={options}
              onChange={item => onDimensionsChange(item)}
            />
            <DropDown
              label="E-Modulus (MPa)"
              values={[eModulus[1]]}
              options={eModulus}
              onChange={item => onModulusChange(item)}
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Dimensions;
