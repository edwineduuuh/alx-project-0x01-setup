import React from "react";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
