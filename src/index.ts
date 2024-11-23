import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080});

// event handler
wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        console.log("message received"+data);
        if(ws){
            if(data.toString() === "ping")
            ws.send("pong");
        }
       // setInterval(()=>{ws.send("I am going to be one of the best")},1000);
        
    })
})

