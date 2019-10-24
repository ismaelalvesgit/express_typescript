import * as express from 'express'
import {EventEmitter} from 'events'

//@Author ismael alves
export abstract class Router extends EventEmitter {

  abstract applyRoutes(application: express.Express):any

}
