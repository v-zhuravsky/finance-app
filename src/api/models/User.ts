interface User {
  id: number;
  token: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  totalMoneySpent: number;
  spentThisMonth: number;
}

export default User;
