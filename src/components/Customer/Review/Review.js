import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../../../App";

const Review = () => {
  const [loggedInUser] = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const reviewData = {
        ...loggedInUser,
        reviewerName: data.reviewer,
        reviewDescription: data.reviewDescription
    }
    axios.post('https://sheltered-tor-88108.herokuapp.com/addreview', reviewData)
      .then(res => {
        if(res){
            alert("Review Submitted Successfully");
            e.target.reset();
        }
      })
      .catch(err => {
        console.log(err);
      });
};
  return (
    <div className="col-md-9 overflow-hidden">
      <h3>Review</h3>
      <div className="bg-light h-100">
        <div className="p-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="reviewer">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    name="reviewer"
                    type="text"
                    placeholder="Your Name..."
                    {...register('reviewer')}
                  />
                </Form.Group>
                <Form.Group controlId="reviewDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    name="reviewDescription"
                    type="text"
                    placeholder="Description..."
                    as="textarea"
                    rows={4}
                    {...register('reviewDescription')}
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Review;
