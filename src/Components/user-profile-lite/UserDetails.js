import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  // Progress
} from "shards-react";
import { useStateValue } from "../../StateProvider";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
const UserDetails = ({ userDetails }) => {

  const [user] = useAuthState(auth);

  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            src={user?.photoURL}
            alt=""
            width="110"
          />
        </div>
        <h4 className="mb-0">Dr. {user?.displayName}</h4>
        {/* <h4 className="mb-0">Dr. Sadiq Haruna</h4> */}


        <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
        <Button pill outline size="sm" className="mb-2">
          <i className="material-icons mr-1">person_add</i> Follow
        </Button>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-4">
          <strong className="text-muted d-block mb-2">
            {userDetails.metaTitle}
          </strong>
          <span>{userDetails.metaValue}</span>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
};

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Dr. Vivek Kumar Singh",
    avatar: require("../../images/avatars/vivek.jpg"),
    jobTitle: "Physician",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Ph.D | MBBS | Delhi University",
    metaValue:
      "Demonstrated work in field of Physiology and more than 1k+ successful cases of patients!"
  }
};

export default UserDetails;
