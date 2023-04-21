
export const administratorMap = (object: any): any => {
  const administrator = {
    id: object.administrator_id,
    name: object.administrator_name,
    email: object.administrator_email,
    password: object.administrator_password,
    status: object.administrator_status ? true : false,
    createdAt: +object.administrator_createdAt
  };
  return administrator;
};

export const administratorMapForAdministrator = (object: any): any => {
  const administrator = {
    id: object.administrator_id,
    name: object.administrator_name,
    email: object.administrator_email,
    status: object.administrator_status ? true : false,
    createdAt: +object.administrator_createdAt
  };
  return administrator;
};
