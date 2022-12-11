import React from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";
import "./Faq.css";

const Faq = () => {
  return (
    <section id="faq">
      <div className="u-title" data-aos="fade-up">
        <MdOutlineLibraryBooks color="orange" size={30} />
        <h2>FAQs</h2>
        <p className="u-text-small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          itaque veniam laudantium, quam quas dolor tempora eligendi officia
          sequi. Iusto.
        </p>
      </div>
      {/* <div className="questions">
        {questions.map((question) => (
          <Question title={question.title} answer={question.answer} />
        ))}
      </div> */}
    </section>
  );
};

export default Faq;
