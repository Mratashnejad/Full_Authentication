// FAQPage.tsx

import React from 'react';
import {NavBar} from '@/components/common'; // Make sure to import your Navbar component

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: 'What is Full Auth?',
      answer:
        'Full Auth is a comprehensive authentication platform that provides secure and user-friendly authentication solutions for individuals and businesses.',
    },
    {
      question: 'How do I create an account?',
      answer:
        'To create an account, click on the "Register" link in the navigation menu. Fill in the required information, and you will be guided through the registration process.',
    },
    {
      question: 'Can I use social media accounts for authentication?',
      answer:
        'Yes, Full Auth supports authentication through popular social media accounts such as Google and Facebook. You can link your social media accounts for a seamless login experience.',
    },
    {
      question: 'Is my data secure with Full Auth?',
      answer:
        'Absolutely! We prioritize the security and privacy of your data. Our platform employs industry-standard security measures to ensure the confidentiality and integrity of user information.',
    },
    {
      question: 'How can I reset my password?',
      answer:
        'If you forget your password, you can use the "Forgot Password" link on the login page. Follow the instructions sent to your email to reset your password securely.',
    },
    {
      question: 'Can I use Full Auth for my business?',
      answer:
        'Certainly! Full Auth offers business solutions for secure user authentication. Contact our support team to discuss your business authentication needs.',
    },
  ];

  return (
    <div className="bg-gray-100 h-screen">


      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
