import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = (data, e) => {
        const serviceData = {
            serviceTitle: data.serviceTitle,
            serviceDescription: data.serviceDescription,
            serviceCost: data.serviceCost,
            imageURL: imageURL
        }
        axios.post('http://localhost:5058/addService', serviceData)
          .then(res => {
            if(res){
                alert("A Service added Successfully");
                e.target.reset();
            }
          })
          .catch(err => {
            console.log(err);
          });
    };
    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', '196b049326c3d73fcf7197dfd7229953');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(res => {
            setImageURL(res.data.data.display_url);
          })
          .catch(err => {
            console.log(err);
          });
    }
  return (
    <div className="col-md-9 overflow-hidden">
      <h3>Add Service</h3>
      <div className="bg-light h-100">
        <div className="p-4">
          <Form onSubmit={handleSubmit(onSubmit)} >
            <div className="row">
              <div className="col-6">
                <Form.Group controlId="serviceTitle">
                  <Form.Label>Service Title</Form.Label>
                  <Form.Control
                    name="serviceTitle"
                    type="text"
                    placeholder="Enter Service Title..."
                    {...register('serviceTitle')}
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group>
                  <Form.File onChange={handleImageUpload} id="addServicePhoto" label="Add Photo" />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group controlId="serviceDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    name="serviceDescription"
                    type="text"
                    placeholder="Description..."
                    as="textarea"
                    rows={3}
                    {...register('serviceDescription')}
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group controlId="serviceCost">
                  <Form.Label>Service Cost</Form.Label>
                  <Form.Control
                    name="serviceCost"
                    type="number"
                    placeholder="Service Cost..."
                    {...register('serviceCost')}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Button variant="primary" type="submit">
                  Add Service
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
