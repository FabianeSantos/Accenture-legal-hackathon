let nodeoutlook = require("nodejs-nodemailer-outlook");

nodeoutlook.sendEmail({
  auth: {
    user: "cs-hackathon@outlook.com",
    pass: "326598fa",
  },
  from: "cs-hackathon@outlook.com",
  to: "geraldinevillacuraruz@gmail.com, ladynataliepino@gmail.com   ",
  subject: "Respuesta de Chile Legal!",
  html: `<h3> Su solicitud fue recibida y será procesada por el sector correspondiente</h3>
  <p><b>Para tener una mayor información de nuestro equipo y áreas a las que prestan soporte, ingresa al siguiente link:</b></p>
       <p><b><a href="https://www.accenture.com/cl-es">Chile legal-Santiago</a></b>
       <br><br><br>
       
       <h1>ACCENTURE</h1>`,
  //   text: "This is text version!",
  //   replyTo: "fanutri1@gmail.com",
  //   attachments: [
  //     {
  //       filename: "text1.txt",
  //       content: "hello world!",
  //     },
  //     {
  //       // binary buffer as an attachment
  //       filename: "text2.txt",
  //       content: new Buffer("hello world!", "utf-8"),
  //     },
  //     {
  //       // file on disk as an attachment
  //       filename: "text3.txt",
  //       path: "/path/to/file.txt", // stream this file
  //     },
  //     {
  //       // filename and content type is derived from path
  //       path: "/path/to/file.txt",
  //     },
  //     {
  //       // stream as an attachment
  //       filename: "text4.txt",
  //       content: fs.createReadStream("file.txt"),
  //     },
  //     {
  //       // define custom content type for the attachment
  //       filename: "text.bin",
  //       content: "hello world!",
  //       contentType: "text/plain",
  //     },
  //     {
  //       // use URL as an attachment
  //       filename: "license.txt",
  //       path: "https://raw.github.com/nodemailer/nodemailer/master/LICENSE",
  //     },
  //     {
  //       // encoded string as an attachment
  //       filename: "text1.txt",
  //       content: "aGVsbG8gd29ybGQh",
  //       encoding: "base64",
  //     },
  //     {
  //       // data uri as an attachment
  //       path: "data:text/plain;base64,aGVsbG8gd29ybGQ=",
  //     },
  //     {
  //       // use pregenerated MIME node
  //       raw:
  //         "Content-Type: text/plain\r\n" +
  //         "Content-Disposition: attachment;\r\n" +
  //         "\r\n" +
  //         "Hello world!",
  //     },
  //   ],
  //   onError: (e) => console.log(e),
  //   onSuccess: (i) => console.log(i),
});
