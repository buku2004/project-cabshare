import React from 'react';
import Link from 'next/link';

const UserAuth = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-8 mt-[6rem]">
      <div className="flex-shrink-0">
        <img
          src="./userauth.webp"
          alt="User Authentication"
          className="w-48 h-48 object-cover"
        />
      </div>

      <div className="flex-grow">
        <h3 className="text-2xl font-semibold text-green-500">User Authentication</h3>
        <p className="text-gray-700 mt-4 text-lg">
          Experience a seamless and secure login process with our User Authentication feature. Utilizing OAuth
          technology, users can easily log in using their institute email, ensuring safety and accessibility. Set
          up your basic profile with essential details, including your name, department, and contact number, to
          connect with fellow students effortlessly. This streamlined process not only enhances user experience
          but also fosters a trustworthy community. With a focus on security and usability, our platform prioritizes
          your privacy and safety while you navigate through your cab-sharing journey.
        </p>

        <Link href="/sign-up">
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
          Authenticate Yourself
        </button>
        </Link>
      </div>
    </div>
  );
};

export default UserAuth;
