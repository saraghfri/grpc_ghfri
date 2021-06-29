import grpc_pb from "@/proto/api_pb"
import helloworld_grpc_pb from "./../proto/api_grpc_web_pb"
// import grpc_pb, {SendSMSRequest} from "./../proto/api_pb"
// import from '@/proto/api_grpc_web_pb'@/proto/api_grpc_web_pb
// var helloworld_pb = require("/src/proto/api_pb");


const API = new helloworld_grpc_pb.APIClient('http://77.238.108.56:8080', null, null);

class ApiService {
    testService(id) {
        return new Promise((resolve, reject) => {
            const request = new helloworld_grpc_pb.SendSMSRequest()
            console.log(request);
            // request.LoginRequest(id)
            // API.getWorkSpaceForEdit(request, (err, res) => {
            //     if (res !== null) {
            //         if (res.toObject().response === 200) {
            //             resolve(res.toObject())
            //         } else if (res.toObject().response === 500 || res === null) {
            //             reject(res.toObject())
            //         } else {
            //             reject(res.toObject())
            //         }
            //     } else {
            //         reject(res);
            //     }
            // })
        });
    }
}

export default new ApiService;