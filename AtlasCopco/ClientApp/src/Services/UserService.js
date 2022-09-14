import axios from 'axios';
import Globals from '../Global';

class UserService {

  base_url = Globals.BASE_URL;
  user_token = localStorage.getItem("token");

  loginldap = async (userdatas) => {
    return await axios
       .post(this.base_url+'LdapLoginFunction',userdatas ,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           return false;
      });
  };
}

export default UserService;