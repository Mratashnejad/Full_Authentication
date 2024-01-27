// AboutUsPage.tsx

import React from 'react';
import {Navbar} from '@/components/common'; // Make sure to import your Navbar component

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen">


      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          Welcome to Full Auth, your go-to platform for comprehensive
          authentication solutions. We are dedicated to providing secure and
          user-friendly authentication services to meet your needs. Our team of
          experts is committed to ensuring a seamless and reliable experience
          for our users.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Full Auth, our mission is to simplify the authentication process
            while prioritizing security. We aim to empower individuals and
            businesses by offering robust authentication solutions that protect
            user data and privacy.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://placekitten.com/200/200" // Replace with team member's photo
                alt="Team Member"
              />
            </div>
            <div>
              <p className="font-bold">Alireza Atashnejad</p>
              <p className="text-gray-700">Co-founder & CEO</p>
            </div>
          </div>

          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
