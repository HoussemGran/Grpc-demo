
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto" , {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;


const server = new grpc.Server();

server.bind("0.0.0.0:3000" , grpc.ServerCredentials.createInsecure());

server.addService(todoPackage.Todo.service , {

    "createTodo":createTodo,
    "readTodos":readTodos,
    "readTodosStream":readTodosStream

})

server.start();



function createTodo(call , callback){

}

function readTodos(call , callback){

}

function readTodosStream(call , callback){


}