import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const adminData = {adminEmail : data.makeAdmin};
    axios.post('http://localhost:5058/makeAdmin', adminData)
      .then(res => {
        if(res){
            console.log("Make Admin Successfully")
        }
      })
      .catch(err => {
        console.log(err);
      });
};
  return (
    <div className="col-md-9 overflow-hidden">
      <h3>Make Admin</h3>
      <div className="bg-light h-100">
        <div className="p-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="makeAdmin">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="makeAdmin"
                    type="email"
                    placeholder="Enter Email..."
                    {...register('makeAdmin')}
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

export default MakeAdmin;
