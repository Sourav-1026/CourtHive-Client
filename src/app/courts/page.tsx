import Searchbar from "@/components/Searchbar";
import React from "react";
import type { Metadata } from "next";
import CourtCard from "@/components/CourtCard";

export const metadata: Metadata = {
  title: "CourtHive | Courts",
  description: "...",
};

interface Court {
  _id: string;
  courtName: string;
  floor: number;
  rate: number;
  capacity: number;
  imageUrl: string;
  description: string;
  amenities: string[];
  userId?: string;
  [key: string]: unknown;
}

type SearchParams = { [key: string]: string | string[] | undefined };

interface CourtPageProps {
  searchParams: Promise<SearchParams>;
}

const CourtPage = async ({ searchParams }: CourtPageProps) => {
  const sParams = await searchParams;

  const params = new URLSearchParams();
  if (sParams.search) params.set("search", String(sParams.search));
  if (sParams.amenities) params.set("amenities", String(sParams.amenities));
  if (sParams.minRate) params.set("minRate", String(sParams.minRate));
  if (sParams.maxRate) params.set("maxRate", String(sParams.maxRate));

  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/courts?${params.toString()}`;
  const res = await fetch(fetchUrl, { cache: "no-store" });
  const courts: Court[] = await res.json();

  return (
    <div className="container mx-auto my-10">
      <div>
        <h1 className="text-4xl font-bold text-center mb-6">All Court</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-auto">
            <Searchbar />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 px-4 md:px-0">
            {courts.map((r) => (
              <CourtCard key={r._id} r={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtPage;
