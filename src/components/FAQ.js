import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What documents do I need to rent a car?',
      answer: 'You need a valid driver\'s license, proof of identity (Aadhar card, passport, or PAN card), and a credit/debit card for the security deposit.'
    },
    {
      question: 'What is the minimum age to rent a car?',
      answer: 'The minimum age requirement is 21 years with a valid driving license that you\'ve held for at least 1 year.'
    },
    {
      question: 'Is there a security deposit?',
      answer: 'Yes, we require a refundable security deposit which varies based on the car category. The deposit is fully refunded after the car inspection upon return.'
    },
    {
      question: 'Can I extend my rental period?',
      answer: 'Yes, you can extend your rental period subject to car availability. Please contact us at least 24 hours before your scheduled return time.'
    },
    {
      question: 'What happens if I return the car late?',
      answer: 'Late returns may incur additional charges. We provide a 1-hour grace period, after which hourly charges apply as per the rental agreement.'
    },
    {
      question: 'Do you offer delivery and pickup service?',
      answer: 'Yes, we offer free delivery and pickup within city limits. For airport and outstation deliveries, nominal charges may apply.'
    },
    {
      question: 'What is your fuel policy?',
      answer: 'We provide the car with a full tank. Please return it with a full tank to avoid refueling charges at higher rates.'
    },
    {
      question: 'Are there any hidden charges?',
      answer: 'No hidden charges. All costs including insurance, taxes, and basic maintenance are included in the quoted price. Additional charges only apply for extra services or damages.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
        <p className="section-subtitle">Find quick answers to common questions about our luxury car rental service</p>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <p>Still have questions? <strong>Call us at +91 9876543210</strong> or <strong>chat with us live!</strong></p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;