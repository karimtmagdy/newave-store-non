export type Role = "user" | "admin" | "moderator" | "manager";
export type Status = "active" | "inactive" | "banned" | "suspended";
export type Online = "online" | "offline";
export type Gender = "male" | "female";
export const allowedRoles = ["admin", "manager", "moderator"] as const;
export type AccessRole = (typeof allowedRoles)[number];
export type Photo = {
  url: string;
  public_id: null;
};
export type DecodedToken = {
  exp?: number;
  iat?: number;
  sub?: string;
  _id?: string;
  email?: string;
  role?: string;
};
export type ResponseUserType = {
  status: string;
  message: string;
  token: DecodedToken;
  user: TUserType;
};

export type TUserType = {
  _id: string;
  username: string;
  email: string;
  photo: Photo;
  slug: string;
  phone: null;
  remember_me: boolean;
  active: boolean;
  verified: boolean;
  role: Role;
  status: Status;
  isOnline: Online;
  gender: Gender;
  cart: any[];
  order: any[];
  wishlist: any[];
  likes: any[];
  favorite: any[];
  permission: any[];
  joinedAt: Date;
  updatedAt: Date;
  orders: any[];
  tags: any[];
  last_login: Date;
};
export type AuthContextType = {
  user: TUserType | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  token: string | null;
  signup: (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => Promise<void>;
  signin: (email: string, password: string) => Promise<void>;
   signout: () => Promise<void>;
};
