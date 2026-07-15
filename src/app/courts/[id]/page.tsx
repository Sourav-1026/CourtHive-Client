import Image from "next/image";
import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CourtHive | Court Details",
  description: "...",
};

interface Court {
  _id: string;
  courtName: string;
  rate: number;
  capacity: number;
  imageUrl: string;
  description: string;
  amenities: string[];
  userId?: string;
  [key: string]: unknown;
}

interface CourtDetailsPageProps {
  params: Promise<{ id: string }>;
}

const CourtDetailsPage = async ({ params }: CourtDetailsPageProps) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/courts/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const court: Court = await res.json();

  const { description, imageUrl, capacity, courtName, amenities } = court;

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#1a1714]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* ── Hero Image ── */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src={
            imageUrl ||
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80"
          }
          alt={courtName}
          fill
          priority
          className="object-cover object-[50%_20%] brightness-[0.6] scale-105 hover:scale-100 transition-transform duration-8000 ease-out"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-[#f7f4ef]" />

        {/* Hero Text */}
        <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-0">
          <h1 className="font-display text-[#1b3636] text-6xl md:text-8xl font-normal leading-[0.92] tracking-tight">
            {courtName?.split(" ").slice(0, -1).join(" ")}{" "}
            <em className="text-lime-500">{courtName?.split(" ").slice(-1)}</em>
          </h1>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-350 mx-auto px-8 md:px-16 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* ── Left Column ── */}
          <div>
            {/* Description */}
            <div className="mb-12">
              <div className="w-12 h-px bg-lime-500 mb-6" />
              <p className="font-body text-[0.65rem] tracking-[0.25em] uppercase text-lime-500 mb-4">
                About This Court
              </p>
              <p className="font-display text-xl font-normal leading-relaxed text-[#4a4540] max-w-150">
                {description}
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-10 mb-14 pb-14 border-b border-[#1a1714]/10">
              {[
                { value: capacity, label: "People" },
                // { value: `${floor}`, label: "Floor" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-display text-5xl font-normal text-[#1a1714] leading-none">
                    {value}
                  </span>
                  <span className="font-body text-[0.6rem] tracking-[0.22em] uppercase text-[#a09880]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Amenities — mapped from array */}
            <div>
              <p className="font-body text-[0.65rem] tracking-[0.25em] uppercase text-lime-500 mb-6">
                Court Amenities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {amenities?.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 py-3 border-b border-black/6"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 shrink-0" />
                    <span className="font-body text-sm text-[#6b6358]">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column — Booking Card ── */}
          <BookingCard court={court} />
        </div>
      </div>
    </div>
  );
};

export default CourtDetailsPage;
