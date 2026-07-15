"use client";

import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

type DeleteModalProps = {
  court: {
    _id: string;
    courtName: string;
  };
};

const DeleteModal = ({ court }: DeleteModalProps) => {
  const router = useRouter();
  const { _id, courtName } = court;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/courts/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );

    const data = await res.json();

    if (data) {
      toast.warning("Court deleted successfully");
      router.push("/courts");
    }
  };

  return (
    <AlertDialog>
      <Button className="flex-1 rounded-xl bg-transparent text-red-400 border border-red-400 text-xs tracking-widest uppercase px-4 py-2 hover:bg-red-400/10 transition-colors">
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="bg-[#0d1f14] rounded-2xl border border-white/10 w-full max-w-sm mx-4 sm:mx-auto">
            <AlertDialog.CloseTrigger className="bg-[#0d1f14] text-lime-500 hover:text-lime-400" />

            <AlertDialog.Header className="px-6 pt-6 pb-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <AlertDialog.Icon status="danger" />
                </div>
                <AlertDialog.Heading className="text-lg font-semibold text-white">
                  Delete Court?
                </AlertDialog.Heading>
              </div>
            </AlertDialog.Header>

            <AlertDialog.Body className="px-6 py-4">
              <p className="text-slate-400 text-sm leading-relaxed">
                This will permanently delete{" "}
                <span className="text-white font-medium">{courtName}</span> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
              <Button
                slot="close"
                className="flex-1 bg-lime-500 hover:bg-lime-400 text-black text-sm font-medium py-2.5 rounded-xl border border-[#1e3a5f] transition-colors"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                slot="close"
                className="flex-1 bg-red-500 hover:bg-red-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
              >
                Delete Court
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteModal;
