import React from "react";

export default function Intro() {
  return (
    <div className="bg-white ">
      <div className="p-5 text-2xl font-bold text-center text-gray-600">
        <div className="text-[#063970] flex justify-center text-5xl">
          why <div className="text-[#da251d] ml-2 mr-2">book</div> with us
        </div>
      </div>

      <div className="flex justify-center text-center">
        <div className="flex w-1/4 p-5 px-10">
          <div>
            <div></div>
            <div className="mb-5 text-2xl font-bold text-[#da251d] ">
              Agents
            </div>
            <div className="font-light">
              Access a vast network of agents to assist you with your bookings
              through our online porta
            </div>
          </div>
        </div>
        <div className="flex w-1/4 p-5 px-10">
          <div>
            <div></div>
            <div className="mb-5 text-2xl font-bold text-[#da251d] ">
              Support
            </div>
            <div className="font-light">
              Experience top-notch customer support throughout your online
              booking journey.
            </div>
          </div>
        </div>{" "}
        <div className="flex w-1/4 p-5 px-10">
          <div>
            <div></div>
            <div className="mb-5 text-2xl font-bold text-[#da251d] ">Price</div>
            <div className="font-light">
              Discover unbeatable prices for your travel arrangements on our
              online platform.
            </div>
          </div>
        </div>{" "}
        <div className="flex w-1/4 p-5 px-10">
          <div>
            <div></div>
            <div className="mb-5 text-2xl font-bold text-[#da251d] ">
              Our Network
            </div>
            <div className="font-light">
              Explore and book accommodations, activities, and tours in multiple
              cities through our online portal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
