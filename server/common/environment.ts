//@Author ismael alves
export const environment = {
  server: { 
    port: process.env.SERVER_PORT || 3000,
    url: process.env.SERVER_URL  || 'http://localhost:3000'
  },
  cliente:{
    web: process.env.CLIENT_URL || 'http://localhost:4200',
    mobile: process.env.CLIENT_URL || 'http://localhost:4200'
  },
  db: {
    key:'../security/events-firebase-adminsdk.json',
    bucketName: 'events-5437d.appspot.com'
  },
  log:{
    name:'events',
    level:'debug'
  },
  security: {
    saltRounds: process.env.SALT_ROUNDS || 10,
  },
  email:{
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT ||  587,
    secure: process.env.EMAIL_SECURE || false,
    user: process.env.EMAIL_USER || 'agilidade.evolucao@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'agilidade@85',
  }
}
