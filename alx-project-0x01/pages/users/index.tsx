import { useState } from "react";
import UserCard from "../../components/common/UserCard";
import UserModal from "../../components/common/UserModal";
import { UserProps } from "../../interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

// Fetch user data at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

const Users = ({ posts }: UsersPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add User
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            avatar={`https://i.pravatar.cc/150?u=${user.id}`} // Generate unique avatars
          />
        ))}
      </div>

      <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Users;
