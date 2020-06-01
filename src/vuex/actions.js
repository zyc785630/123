import axios from 'axios'
import {REQUEST_FAILD,REQUEST_SUCCESS,REQUESTING} from './mutationType'
export const actions = {
    async search({commit},searchName){
        commit(REQUESTING)
        try{
            let response = await axios({
                url:'https://api.github.com/search/users',
                methods:'GET',
                params:{
                    q:searchName
                }
            })
            let users = []
            response.data.items.array.forEach(item => {
                let user_name = item.login
                let user_img = item.avatar_url
                let user_url = url
                let obj = {
                    user_img,
                    user_name,
                    user_url
                }
                users.push(obj)
            });
            commit(REQUEST_SUCCESS,users)
        }catch(error){
            commit(REQUEST_FAILD,error.message)
        }
    
    }
}