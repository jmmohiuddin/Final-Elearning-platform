import React from "react";
import logo from "../../../images/a.png";
import BookHighlightDetail from "../BookHighlightDetail/BookHighlightDetail";

const BookHighlight = [
  {
    name: "15550+Topics",
    img: logo,
  },
  {
    name: "100000+Students",
    img: logo,
  },
  {
    name: "15000+Books",
    img: logo,
  },
];

const BookHiglight = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR BOOKS</h5>
        <h2>Books We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {BookHighlight.map((book) => (
            <BookHighlightDetail
              book={book}
              key={book.name}
            ></BookHighlightDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookHiglight;
