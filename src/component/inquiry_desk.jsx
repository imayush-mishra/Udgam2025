import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

const FAQSection = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        { question: "What is the purpose of this application?", answer: "This application is designed to help users manage inquiries efficiently." },
        { question: "How do I create an account?", answer: "You can create an account by clicking on the 'Sign Up' button on the homepage." },
        { question: "What should I do if I forget my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page." },
        { question: "How can I contact support?", answer: "You can contact support via the 'Contact Us' page or by emailing support@example.com." },
        { question: "Is my data secure?", answer: "Yes, we take data security very seriously and implement various measures to protect your information." },
        { question: "Can I delete my account?", answer: "Yes, you can delete your account by going to the account settings and selecting 'Delete Account'." },
    ];

    return (
        <div className="w-full pt-2 p-12">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <button 
                        className="w-full text-left bg-blue-500 text-white py-3 px-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between text-lg" 
                        onClick={() => toggle(index)}
                    >
                        <span>{faq.question}</span>
                        <span className="text-2xl">{open === index ? '-' : '+'}</span>
                    </button>
                    <Collapse isOpen={open === index}>
                        <div className={`mt-2 p-4 border border-gray-300 rounded bg-gray-100 ${open === index ? 'block' : 'hidden'} text-lg`}>
                            {faq.answer}
                        </div>
                    </Collapse>
                </div>
            ))}
        </div>
    );
};

export default FAQSection;
