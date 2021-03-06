import config from './config'
import App from './presentation/serverless/index'
import awsServerlessExpress from 'aws-serverless-express'
const server = App(config)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
