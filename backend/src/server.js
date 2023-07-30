// config.js
import dotenv from 'dotenv'
dotenv.config()

// Load the Express App
import { Application } from './app.js'
import Bootstrap from './core/bootstrap.js'

// Execute Bootstrap Code
Bootstrap(Application)

// Error Handling for uncaught exception
process.on('uncaughtException', (err) => {
  Logger.error('UNCAUGHT EXCEPTION!!! Shutting Down...')
  Logger.error(err)
  process.exit(1)
})

// Error Handling for uncaught rejection
process.on('unhandledRejection', (err) => {
  Logger.error('UNHANDLED REJECTION!!! Shutting Down...')
  Logger.error(err)
  process.exit(1)
})
