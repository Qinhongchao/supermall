import {request} from "./request.js"
export function getDetailById(iid){
    return request(
        {
            url:'/detail',
            params:{
                iid
            } 
        }
       
    );
}