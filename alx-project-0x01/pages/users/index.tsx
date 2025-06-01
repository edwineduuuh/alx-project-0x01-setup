import UserCard from "../../components/common/UserCard";
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
  return (
    <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
  );
};

export default Users;
