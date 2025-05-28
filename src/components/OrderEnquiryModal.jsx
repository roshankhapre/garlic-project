// components/OrderEnquiryModal.jsx
import { useState } from "react";

export default function OrderEnquiryModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Enquire Now
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl w-[90%] md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Order Enquiry</h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded mb-4"
            />
            <textarea
              placeholder="Your Requirement"
              rows="4"
              className="w-full border p-3 rounded mb-4"
            />
            <div className="flex justify-end gap-4">
              <button onClick={() => setOpen(false)} className="text-red-500">
                Cancel
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
