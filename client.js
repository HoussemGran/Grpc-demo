const grpc = require("grpc");
<<<<<<< HEAD
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("todo.proto", {});
=======
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto" , {});
>>>>>>> b867f9f71a7edcd60110dbe3d0c4f69e572bca0b
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const text = process.argv[2];

<<<<<<< HEAD
const client = new todoPackage.Todo("localhost:3000", 
grpc.credentials.createInsecure())
console.log(text)
=======
const client = todoPackage.Todo("localhost:3000" , 
grpc.credentials.createInsecure()
)
>>>>>>> b867f9f71a7edcd60110dbe3d0c4f69e572bca0b

client.createTodo({
    "id": -1,
    "text": text
<<<<<<< HEAD
}, (err, response) => {

    console.log("Recieved from server " + JSON.stringify(response))

})
/*
client.readTodos(null, (err, response) => {
    console.log("read the todos from server " + JSON.stringify(response))
    if (!response.items)
        response.items.forEach(a=>console.log(a.text));
})
*/

const call = client.readTodosStream();
call.on("data", item => {
    console.log("received item from server " + JSON.stringify(item))
})

call.on("end", e => console.log("server done!"))
=======
} , (err,res)=>{
    console.log("received from server "+JSON.stringify(res));
})


const call = client.readTodosStream();

call.on("data" , item=>{
    console.log("received item from server "+ JSON.stringify(item))
})

call.on("end", e=> console.log("server done"))
>>>>>>> b867f9f71a7edcd60110dbe3d0c4f69e572bca0b
