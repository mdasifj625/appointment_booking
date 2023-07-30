import dotenv from 'dotenv'
dotenv.config()
const Config = {
  PORT: process.env.PORT,
  ENVIRONMENT: process.env.NODE_ENV,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  DB_CONNECTION_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
}

export { Config }
