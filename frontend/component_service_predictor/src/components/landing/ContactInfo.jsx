import React from 'react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const contacts = [
    {
      name: "John Doe",
      role: "Customer Support",
      email: "john.doe@example.com",
      phone: "+1 (234) 567-890",
      location: "New York, NY"
    },
    {
      name: "Jane Smith",
      role: "Sales Manager",
      email: "jane.smith@example.com",
      phone: "+1 (987) 654-321",
      location: "Los Angeles, CA"
    },
    {
      name: "Emily Johnson",
      role: "Technical Support",
      email: "emily.johnson@example.com",
      phone: "+1 (555) 123-4567",
      location: "Chicago, IL"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-800 text-white rounded-lg shadow-lg max-w-full mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6 text-center">For More Information, Please Contact:</h2>
      <div className="flex flex-col items-center gap-6 py-4 w-full sm:flex-row sm:flex-wrap sm:justify-center">
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-xs transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-900 hover:to-transparent"
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-semibold mb-2">{contact.name}</p>
            <p className="text-md mb-2">{contact.role}</p>
            <div className="flex items-center mb-2">
              <p className="font-medium mr-1">Email:</p>
              <a href={`mailto:${contact.email}`} className="text-blue-400 hover:underline">
                {contact.email}
              </a>
            </div>
            <div className="flex items-center mb-2">
              <p className="font-medium mr-1">Phone:</p>
              <a href={`tel:${contact.phone}`} className="text-blue-400 hover:underline">
                {contact.phone}
              </a>
            </div>
            <div className="flex items-center">
              <p className="font-medium mr-1">Location:</p>
              <p>{contact.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
