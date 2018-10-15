import { uptime as proccessUptime } from 'process'
import { datasource } from '../../../infrastructure/repositories/index'
class Health {
  static async uptime (input, output) {
    try {
      await datasource.sequelize.authenticate()
      return output
        .status(200)
        .send(`The system is online since ${new Date(Date.now() - proccessUptime() * 1000)}!`)
    } catch (e) {
      return output.status(500).send(`The system is unavailable`)
    }
  }
}

export default Health
