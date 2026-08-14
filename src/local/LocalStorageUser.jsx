export const saveUser = (user) => {
  const userList = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  userList.push(user);

  localStorage.setItem(
    "users",
    JSON.stringify(userList)
  );
};


export const getUsers = () => {
  const userList = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  return userList;
};


export const deleteUser = (email) => {
  const userList = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const newUserList = userList.filter(
    (user) => user.email !== email
  );

  localStorage.setItem(
    "users",
    JSON.stringify(newUserList)
  );
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("currentUser");

  if (!user) {
    return null;
  }

  return JSON.parse(user);
};

export const isLoggedIn = () => {
  return !!getCurrentUser();
};

