"use client";

import React, { useState } from "react";
import { Button,  Checkbox, FieldError, Input, Label, Modal,  TextArea, TextField } from "@heroui/react";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const amenitiesList = [
  { id: "whiteboard", label: "Whiteboard" },
  { id: "projector", label: "Projector" },
  { id: "wifi", label: "Wi-Fi" },
  { id: "power-outlets", label: "Power Outlets" },
  { id: "quiet-zone", label: "Quiet Zone" },
  { id: "air-conditioning", label: "Air Conditioning" },
];

type EditModalProps = {
  court: {
    _id: string;
    courtName: string;
    description: string;
    capacity: string;
    rate: string;
    imageUrl: string;
  }
}

const EditModal = ({ court }: EditModalProps) => {
  const router = useRouter();
  const { _id, description, imageUrl, capacity, rate, courtName } = court;

  const [amenities, setAmenities] = useState<string[]>([]);

  const handleAmenityChange = (value:string, checked:boolean) => {
    setAmenities((prev) => (checked ? [...prev, value] : prev.filter((a) => a !== value)));
  };

  //   const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const court = Object.fromEntries(formData.entries());

    const finalCourt = {
      ...court,
      amenities: [...amenities],
    };

    console.log(finalCourt);

    try {
      const { data: tokenData } = await authClient.token();
      console.log(tokenData);
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courts/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(finalCourt),
      });

      const data = await res.json();
      console.log(data);

      if (data) {
        console.log("Court added successfully!", data.insertedId);
        toast.success("Court Updated Successfully", {
          position: "top-center",
        });
        router.push("/courts");

        // e.g. router.push("/rooms") or show a toast
      } else {
        console.error("Failed to add court:", data.message);
        toast.error("Failed to add court:", data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <Modal>
      <Button className="flex-1 rounded-xl bg-transparent text-amber-400 border border-amber-400 text-xs tracking-widest uppercase px-4 py-2 hover:bg-amber-400/10 transition-colors">Edit Court</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-full sm:max-w-2xl bg-[#0d1f3c] rounded-2xl border border-white/10 mx-4 sm:mx-auto">
            <Modal.CloseTrigger className="text-slate-400 hover:text-white" />

            {/* Modal Header */}
            <Modal.Header className="px-6 pt-6 pb-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <FaRegEdit size={16} />
                </div>
                <Modal.Heading className="text-xl font-semibold text-white">Edit Court</Modal.Heading>
              </div>
            </Modal.Header>

            <Modal.Body className="px-6 py-6">
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                {/* Basic Info */}
                <div>
                  <p className="text-slate-400 text-xs tracking-widest uppercase mb-4 pb-3 border-b border-white/10">Basic Information</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <TextField name="courtName" isRequired defaultValue={courtName}>
                        <Label className="text-slate-400 text-xs tracking-widest uppercase mb-1.5 block">Court Name</Label>
                        <Input
                          placeholder="e.g. Golf Court"
                          className="w-full bg-[#162d4a] border border-[#1e3a5f] rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <FieldError className="text-red-400 text-xs mt-1" />
                      </TextField>
                    </div>

                    {/* <TextField name="floor" type="number" isRequired defaultValue={floor}>
                      <Label className="text-slate-400 text-xs tracking-widest uppercase mb-1.5 block">Floor</Label>
                      <Input
                        placeholder="e.g. 3"
                        className="w-full bg-[#162d4a] border border-[#1e3a5f] rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      <FieldError className="text-red-400 text-xs mt-1" />
                    </TextField> */}

                    <TextField name="rate" type="number" isRequired defaultValue={rate}>
                      <Label className="text-slate-400 text-xs tracking-widest uppercase mb-1.5 block">Hourly Rate (USD)</Label>
                      <Input
                        placeholder="e.g. 25"
                        className="w-full bg-[#162d4a] border border-[#1e3a5f] rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      <FieldError className="text-red-400 text-xs mt-1" />
                    </TextField>

                    <div className="sm:col-span-2">
                      <TextField name="capacity" type="number" isRequired defaultValue={capacity}>
                        <Label className="text-slate-400 text-xs tracking-widest uppercase mb-1.5 block">Capacity (people)</Label>
                        <Input
                          placeholder="e.g. 10"
                          className="w-full bg-[#162d4a] border border-[#1e3a5f] rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <FieldError className="text-red-400 text-xs mt-1" />
                      </TextField>
                    </div>

                    <div className="sm:col-span-2">
                      <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                        <Label className="text-slate-400 text-xs tracking-widest uppercase mb-1.5 block">Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/court.jpg"
                          className="w-full bg-[#162d4a] border border-[#1e3a5f] rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <FieldError className="text-red-400 text-xs mt-1" />
                      </TextField>
                    </div>

                    <div className="sm:col-span-2">
                      <TextField name="description" isRequired defaultValue={description}>
                        <Label className="text-slate-400 text-xs tracking-widest uppercase mb-1.5 block">Description</Label>
                        <TextArea
                          placeholder="Describe the court..."
                          rows={3}
                          className="w-full bg-[#162d4a] border border-[#1e3a5f] rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        />
                        <FieldError className="text-red-400 text-xs mt-1" />
                      </TextField>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <p className="text-slate-400 text-xs tracking-widest uppercase mb-4 pb-3 border-b border-white/10">Amenities</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {amenitiesList.map(({ id, label }) => {
                      const checked = amenities?.includes(label);
                      return (
                        <div
                          key={id}
                          className={`flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                            checked ? "border-amber-500 bg-amber-500/10" : "border-[#1e3a5f] bg-[#162d4a] hover:border-slate-500"
                          }`}
                        >
                          <Checkbox id={id} isSelected={checked} onChange={(isChecked) => handleAmenityChange(label, isChecked)}>
                            <Checkbox.Control>
                              <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                              <Label className="text-white text-sm cursor-pointer" htmlFor={id}>
                                {label}
                              </Label>
                            </Checkbox.Content>
                          </Checkbox>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-white/10">
                  <Button slot="close" className="flex-1 bg-[#162d4a] hover:bg-[#1e3a5f] text-slate-300 text-sm font-medium py-2.5 rounded-xl border border-[#1e3a5f] transition-colors">
                    Cancel
                  </Button>
                  <Button type="submit" slot="close" className="flex-1 bg-amber-500 hover:bg-amber-400 text-[#0d1f3c] text-sm font-semibold py-2.5 rounded-xl transition-colors">
                    Update Court
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
