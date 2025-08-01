// server.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["OPTIONS", "POST", "GET", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.text());

let data = { message: "여러분 화이팅!" };

app.options(`/`, (req, res) => {
  return res.send(`요청 보내세요.`);
});

app.get(`/`, (req, res) => {
  return res.send(data);
});

app.post(`/`, (req, res) => {
  console.log(req.body);
  return res.send(`받은 POST 데이터: ${req.body}`);
});

app.put(`/`, (req, res) => {
  console.log(req.body);
  return res.send(`업데이트된 데이터: ${req.body.body}`);
});

app.delete(`/`, (req, res) => {
  return res.send("데이터가 삭제되었습니다.");
});

// const http = require("http");

// // CORS 설정을 위한 헤더
// const headers = {
//   "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
//   "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE",
//   "Access-Control-Allow-Headers": "Content-Type",
// };

// const server = http.createServer((req, res) => {
//   if (req.method === "OPTIONS") {
//     res.writeHead(204, headers);
//     res.end(`요청을 보내세요`);
//     return;
//   }

//   if (req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json", ...headers });
//     res.end(JSON.stringify(data));
//   }

//   if (req.method === "POST") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       data.message = body;
//       res.writeHead(200, headers);
//       res.end(`받은 POST 데이터: ${body}`);
//     });

//     if (req.method === "PUT") {
//       let body = "";
//       req.on("data", (chunk) => {
//         body += chunk.toString();
//       });
//     }

//     req.on("end", () => {
//       data.message = body;
//       res.writeHead(200, headers);
//       res.end(`업데이트된 데이터: ${body}`);
//     });
//   }

//   if (req.method === "DELETE") {
//     data = {};
//     res.writeHead(200, headers);
//     res.end("데이터가 삭제되었습니다.");
//   }
// });

app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
