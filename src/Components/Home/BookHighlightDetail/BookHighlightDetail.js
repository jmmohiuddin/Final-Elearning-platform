import React from "react";

const BookHighlightDetail = ({ book }) => {
  return (
    <div className="col-md-4 text-center container-md">
      <img style={{ height: "100px" }} src={book.img} alt="" />
      <h5 className="mt-3 mb-3">{book.name}</h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
        quaerat?
      </p>
    </div>
  );
};

export default BookHighlightDetail;
