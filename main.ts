import {Server} from './server/server'
import { mainController } from './src/controllers/main.controller';

//@Author ismael alves
const server = new Server()
server.bootstrap([
  mainController
]).then(server=>{
  console.log('Server is listening on:', server.application.address())
}).catch(error=>{
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})
