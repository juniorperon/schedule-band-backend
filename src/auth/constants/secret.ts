export const jwtConstants = {
  secret_access: process.env.SECRET_JWT || 'secret',
  secret_refresh: process.env.SECRET_JWT_REFRESH || 'secret',
};

export const passwordConstants = {
  secret: process.env.SECRET_PASSWORD || 'secret',
};
