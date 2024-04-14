import { configDotenv } from "dotenv";
configDotenv()

export const { PORT, MONGODB_URL } = process.env
