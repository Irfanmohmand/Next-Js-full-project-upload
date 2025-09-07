// mongodb+srv://irfanmohmand987:nextjscourse@cluster0.ymfy1au.mongodb.net/Nextjs
const username = process.env.myusername;
const password = process.env.mypassword;

if (!username || !password) {
  throw new Error("Missing Mongodb Credentials");
}

export const connectionString = process.env.MONGODB_URI;
