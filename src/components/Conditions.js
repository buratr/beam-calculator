import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import InputField from './InputField';

class Conditions extends React.PureComponent {
  render() {
    const { conditions, onChange } = this.props;
    return (
      <Form>
        <h5>Conditions</h5>
        <Row style={{ paddingLeft: '6px', paddingTop: '16px', paddingBottom: '16px' }}>
          <Col sm={12} lg={4}>
            <InputField
              value={conditions.length}
              label="Length (m)"
              onChange={value => onChange('length', value)}
            />
          </Col>
          <Col sm={12} lg={4}>
            <InputField
              value={conditions.load}
              label="Distributed Load / Point Load: (N/m) / N"
              onChange={value => onChange('load', value)}
            />
          </Col>
          <Col sm={12} lg={4}>
            <InputField
              value={conditions.density}
              label="Density (g/cm3)"
              onChange={value => onChange('density', value)}
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Conditions;
