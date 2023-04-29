
export const userResetPasswordMap = (object: any): any => {
  const user = {
    id: object.user_reset_password_id,
    userId: object.user_reset_password_userId,
    token: object.user_reset_password_token,
    createdAt: object.user_reset_password_createdAt,
    updatedAt: object.user_reset_password_updatedAt
  };
  return user;
};
