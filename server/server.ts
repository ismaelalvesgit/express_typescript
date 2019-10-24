import  express from 'express'
import { Router } from './common/router';
import { environment } from './common/environment';
import * as core from "express-serve-static-core";
import * as http from "http";
import helmet from 'helmet'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'

//@Author ismael alves
export class Server {

  server:core.Express = express()
  application!:http.Server

  inicializeDb(){}

  initRoutes(routers: Router[]): Promise<any>{
    return new Promise((resolve, reject)=>{
      try{

        //routes
        for (let router of routers) {
          router.applyRoutes(this.server)
        }

        //iniciando server
        this.application = this.server.listen(environment.server.port, ()=>{
           resolve(this.server)
        })

        //middlewares
        this.server.use(express.static('public'))
        this.server.use(helmet())
        this.server.use(compression())
        this.server.use(bodyParser.urlencoded({ extended:true}));
        this.server.use(bodyParser.json());
        this.server.use(cors())

      }catch(error){
        reject(error)
      }
    })
  }

  bootstrap(routers: Router[] = []): Promise<Server>{
    return  this.initRoutes(routers).then(()=> this) 
  }

  shutdown(){
    return this.application.close()
  }
}
