import { UserModalProps, UserProps } from "../../interfaces";
import { useState } from "react";

type UserFormData = {
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  avatar: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  lat: string;
  lng: string;
};

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
    avatar: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: ""
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: UserProps = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      username: formData.username,
      phone: formData.phone,
      website: formData.website,
      avatar: formData.avatar,
      street: formData.street,
      suite: formData.suite,
      city: formData.city,
      zipcode: formData.zipcode,
      lat: formData.lat,
      lng: formData.lng,
      address: {
        street: formData.street,
        suite: formData.suite,
        city: formData.city,
        zipcode: formData.zipcode,
        geo: { lat: formData.lat, lng: formData.lng }
      },
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }
    };

    onSubmit(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full border p-2 rounded"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-2 rounded"
          />
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-600 hover:underline">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserModal;
