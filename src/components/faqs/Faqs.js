import React from "react";
import { useState } from "react";
import "./Faqs.css";

function Faq({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">
      <div className="question" onClick={toggleFaq}>
        <div className="question-text">{question}</div>
        <div className="button">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
}

export default function Faqs() {
  return (
    <div className="FAQs">
      <h2>Frequently asked questions</h2>
      <Faq
        question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
        answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. 
          Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus 
          sagittis tortor integer."
      />
      <Faq
        question="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
        answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. 
          Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus 
          sagittis tortor integer."
      />
      <Faq
        question="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
        answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. 
          Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus 
          sagittis tortor integer."
      />
    </div>
  );
}
