import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';

function Practice() {
  return (
    <Container id="practice" className="mt-5 pt-5 mb-0">
      <Row>
        <Card className="pt-5 pb-4">
          <CardTitle className="pl-4">Practice makes perfect!</CardTitle>
          <CardBody>
            <Row>
              <Col sm={7} xs={12}>
                <CardText>
                  The only way to actually understand chemistry (in fact,
                  any science) is to go over as many examples as possible.<br/>
                  Here you can do exactly that: find previous-year exams and
                  solve them. Don&#8217;t worry if you get stuck, there is plenty
                  of feedback for each question.
                </CardText>
              </Col>
              <Col sm={5} xs={12} className="pt-4">
                <NavLink role="button" className="btn btn-background btn-lg btn-block"
                  to="/practice/1301">Go to Chem <b>1301</b></NavLink>
                <NavLink role="button" className="btn btn-background btn-lg btn-block"
                  to="/practice/1302">Go to Chem <b>1302</b></NavLink>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
}

export default Practice;
