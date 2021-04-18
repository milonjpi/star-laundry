import React from 'react';
import shirt from "../../../images/shirt.png";
import sweater from "../../../images/sweater.png";
import machine from "../../../images/machine.png";
import Blogs from './Blogs';

const OurBlog = () => {
  const ourBlogList = [
    {
      id: 1,
      photo: shirt,
      title: "Dry cleaning",
      description: "We have the state of the art technology machines guaranteed to give you the best results."
    },
    {
      id: 2,
      photo: sweater,
      title: "Healing",
      description: "The way you dress and carry yourself sends a message to everyone around you."
    },
    {
      id: 3,
      photo: machine,
      title: "Wet washing",
      description: "Our machines are centralized, multiple machines that will service high loads of garments."
    }
  ]
    return (
        <div className="container mt-4">
            <h2 className="text-center py-4">Our Blog</h2>
            <div className="row">
                {
                  ourBlogList.map( blog => <Blogs key={blog.id} blog={blog}></Blogs>)
                }
            </div>
        </div>
    );
};

  

export default OurBlog;