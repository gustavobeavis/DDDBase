import { createLogger, transports } from 'winston'
let logger
export default config => {
  const debugTransports = [
    new transports.Console({
      colorize: true
    })
  ]

  if (!logger) {
    logger = createLogger({
      level: config.level,
      handleExceptions: true,
      transports: debugTransports
    })
  }
  return logger
}
