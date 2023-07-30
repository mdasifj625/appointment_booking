import { Database } from './database.js'

export default async (Application) => {
  // eslint-disable-line
  try {
    // Do stuff that needs to be done before server start
    // #1 connect database
    await connectDatabase()
    // #2 instance of application
    const application = new Application()
    const expressApp = application.express()
    expressApp.listen(expressApp.get('port'), () => {
      application.onServerStart()
    })
  } catch (error) {
    Logger.error(error)
    throw error
  }
}

// Database connection
async function connectDatabase() {
  Logger.info('Database connection being established...')
  const database = new Database({
    url: App.Config.DB_CONNECTION_STRING,
    connectionOptions: App.Config.DB_CONNECTION_OPTIONS,
  })
  return await database.connect()
}
