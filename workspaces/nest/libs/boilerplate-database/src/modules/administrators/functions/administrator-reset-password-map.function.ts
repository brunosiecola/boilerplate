
export const administratorResetPasswordMap = (object: any): any => {
  const administrator = {
    id: object.administrator_reset_password_id,
    administratorId: object.administrator_reset_password_administratorId,
    token: object.administrator_reset_password_token,
    createdAt: object.administrator_reset_password_createdAt,
    updatedAt: object.administrator_reset_password_updatedAt
  };
  return administrator;
};
