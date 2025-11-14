import type { FC } from "react";
import { useParams } from "react-router-dom";

const UserDetailsPage: FC = () => {
  const { id } = useParams();

  return <div className="user-details-page">User details {id}</div>;
};

export default UserDetailsPage;
