import User, { IUser } from "@/models/userModel";
import bcrypt from 'bcrypt';


// Fonction pour générer un hash de mot de passe
const hashPassword = (password: string) => bcrypt.hashSync(password, 10);

export const userFixtures: Partial<IUser>[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "kilian@gmail.com",
    password: hashPassword("Adminpassword123"),
    roles: ["ROLE_USER"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: "Admin",
    lastName: "User",
    email: "admin@gmail.com",
    password: hashPassword("Adminpassword123!"),
    roles: ["ROLE_ADMIN", "ROLE_USER"],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];