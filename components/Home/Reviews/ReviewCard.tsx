import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

//props type
type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { image, name, profession, rating, review: clientReview } = review;
  return (
    <div className="rounded-md overflow-hidden bg-[#1C1C1C] m-4">
      <div className="p-6">
        <Image
          src="/images/double-quotes.png"
          alt="image"
          width={50}
          height={50}
        />
        <p className="text-white text-opacity-70">{clientReview}</p>
        <Image
          src="/images/double-quotes.png"
          alt="image"
          width={50}
          height={50}
          className="ml-auto"
        />
      </div>
      <div className="px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-[#F78F42] text-white font-bold">
        <span>{rating}/5</span>
        <FaStar />
      </div>
      <div className="bg-gray-100">
        <div className="p-6 flex items-center space-x-6">
          <div>
            <Image
              src={image}
              alt={name}
              height={40}
              width={40}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-base text-gray-700">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
