import express from 'express'
import { Router } from '../../server/common/router'

//@Author ismael alves
class MainController extends Router {
  applyRoutes(application: express.Express) {

    //metodo que inicial
    application.get('/', (req, resp, next)=>{
      resp.json({
        usuarios: '/usuarios',
      })
    })
  }
}

export const mainController = new MainController()