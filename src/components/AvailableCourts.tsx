import React from "react";
import CourtCard from "./CourtCard";

interface Court {
  _id: string;
  [key: string]: unknown;
  courtName: string;
    imageUrl: string;
    description: string;
    rate: number;
    capacity: number;
    amenities: string[];
}

const AvailableCourts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courts`);

  const courts: Court[] = await res.json();

  // console.log(rooms);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-6">Available Courts</h1>
      <div
        className="grid grid-cols-1
      md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-0"
      >
        {courts.slice(0, 6).map((r) => (
          <CourtCard key={r._id} r={r} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCourts;