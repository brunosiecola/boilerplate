
export const userMap = (object: any): any => {
  const user = {
    id: object.user_id,
    name: object.user_name,
    email: object.user_email,
    password: object.user_password,
    status: object.user_status ? true : false,
    createdAt: +object.user_createdAt
  };
  return user;
};

export const userMapForAdministrator = (object: any): any => {
  const user = {
    id: object.user_id,
    name: object.user_name,
    email: object.user_email,
    status: object.user_status ? true : false,
    createdAt: +object.user_createdAt
  };
  return user;
};

export const userMapForUser = (object: any): any => {
  const user = {
    id: object.user_id,
    name: object.user_name,
    email: object.user_email
  };
  return user;
};
