import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Button } from "shards-react";
import { useStateValue } from "../../StateProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";

const UserAccountDetails = ({ title }) => {

  // const [{ user="" }] = useStateValue();
  const [user] = useAuthState(auth);

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {/* First Name */}
                  {/* {JSON.stringify(user)} */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">First Name</label>
                    <Input
                      id="feFirstName"
                      placeholder="First Name"
                      // value={user?.displayName}
                      value={user?.displayName.split(' ').slice(0, -1).join(' ')}
                      onChange={() => { }}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Last Name</label>
                    <Input
                      id="feLastName"
                      placeholder="Last Name"
                      value={user?.displayName.split(' ').slice(-1).join(' ')}
                      onChange={() => { }}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Email</label>
                    <Input
                      type="email"
                      id="feEmail"
                      placeholder="Email Address"
                      value={user?.email}
                      onChange={() => { }}
                      autoComplete="email"
                    />
                  </Col>
                  {/* Password */}
                  <Col md="6" className="form-group">
                    <label htmlFor="fePassword">Password</label>
                    <Input
                      type="password"
                      id="fePassword"
                      placeholder="Password"
                      value="Lol!DontEvenTryThis"
                      onChange={() => { }}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <FormGroup>
                  <label htmlFor="feAddress">Address</label>
                  <Input
                    id="feAddress"
                    placeholder="Address"
                    value="Add Your Work Address Here"
                    onChange={() => { }}
                  />
                </FormGroup>
                <Row form>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">City</label>
                    <Input
                      id="feCity"
                      placeholder="Add Your City Here"
                      onChange={() => { }}
                    />
                  </Col>
                  {/* State */}
                  <Col md="4" className="form-group">
                    <label htmlFor="feInputState">State</label>
                    <Input id="feInputState" type="select ">
                      <option>Andhra Pradesh</option>
                      <option>Jharkhand</option>
                      <option>Karnataka</option>
                      <option>Maharashtra</option>
                      <option>Tamil Nadu</option>
                      <option>West Bengal</option>
                    </Input>
                  </Col>
                  {/* Zip Code */}
                  <Col md="2" className="form-group">
                    <label htmlFor="feZipCode">Zip</label>
                    <Input
                      id="feZipCode"
                      placeholder="Your Pin Code"
                      onChange={() => { }}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Description</label>
                    <Input id="feDescription" rows="5" type="textarea" />
                  </Col>
                </Row>
                <Button pill outline size="sm" className="mb-2 mt-2">
                  <i className="material-icons mr-1">Update</i> Profile
                </Button>
                {/* <Button theme="accent">Update Account</Button> */}
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
};

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
