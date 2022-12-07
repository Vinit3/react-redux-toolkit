import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../user/userSlice";

function UserView() {
  const { loading, users, error } = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })
      )}
    </div>
  );
}

export default UserView;
