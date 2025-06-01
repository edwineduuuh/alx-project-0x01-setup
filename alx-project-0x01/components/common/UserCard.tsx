// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email, avatar }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition">
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{email}</p>
        <span className="text-xs text-gray-400">User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;
