/**   
 * api接口统一管理
 */
import { api } from './http'

// https://raw.githubusercontent.com/JacobHsu/vue-axios/master/db.json
// export const apiComments = p => api.get('http://localhost:3000/comments', p);
// export const apiGetPosts = p => api.get('http://localhost:3000/posts', p);
const publicPath = process.env.NODE_ENV === "production" ? "/vue-axios" : "";
console.log(publicPath, 111)
export const apiComments = p => api.get( publicPath + '/comments.json', p);
export const apiGetPosts = p => api.get( publicPath + '/posts.json', p);
export const apiProfile = p => api.get( publicPath + '/profile.json', p);
export const delay2s = p => api.delay(2000, p)
export const apiAddress = p => api.post('api/v1/users/my_address/address_edit_before', p);
