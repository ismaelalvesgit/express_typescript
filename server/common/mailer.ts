// import { environment } from './environment';
// import * as nodemailer from 'nodemailer';
// import * as handlebars from 'handlebars';
// import * as fs from 'fs'
// import { Usuario } from '../src/models/usuario.model';
// import { Attachment } from 'nodemailer/lib/mailer';

// const transport = nodemailer.createTransport({
//     host:environment.email.host,
//     auth:{
//         user: environment.email.user,
//         pass: environment.email.pass
//     }
// })

// const readHTMLFILE = function(path:any, callback:any){
//     fs.readFile('./views/mail/'+path, {encoding:'utf-8'}, function(error, html){
//         if(error){
//             throw error;
//             callback(error);
//         }else{
//             callback(null, html)
//         }
//     })
// }

// //@Author ismael alves
// class Mail{

//     bemVindo(user:Usuario){
//         return this.send(user.email, "bem-vindo", "bem-vindo.html", user)
//     }

//     private send(destinatario:string, subject:string , template:string, data?:any, files?:Attachment[]):Promise<any>{
//         return new Promise((resolve, reject)=>{
//             readHTMLFILE(template, function(error:any, html:any){
//                 let templateCompile = handlebars.compile(html)
//                 const htlmToSend = templateCompile(data)
//                 transport.sendMail({
//                     to:environment.email.user,
//                     from:destinatario,
//                     subject:subject,
//                     html: htlmToSend,
//                     attachments:files
//                 })
//                 .then(resolve)
//                 .catch(reject)
//             }) 
//         })
//     }
// }

// export const mail = new Mail()