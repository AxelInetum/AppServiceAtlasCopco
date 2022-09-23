import axios from 'axios';
import Globals from '../Global';

class OrderService {

  
  base_url = Globals.BASE_URL_ORDER;
  user_token = localStorage.getItem("token");

  getOrderList = async () => {
    return await axios
       .get(this.base_url , { headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           return null;
      });
  };

  getOrderTypes = async () => {
    return await axios
       .get(this.base_url+'/types' , { headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           return null;
      });
  };


  createOrder = async (orderSelected) => {
    console.log(orderSelected);
    return await axios
       .post(this.base_url, orderSelected,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           return false;
      });
  };

  updateOrder = async (OrderSelected) => {
    return await axios
       .put(this.base_url, OrderSelected,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
        return false;
      });
  };

  deleteOrder= async (id) => {
    return await axios
       .delete(this.base_url + "/" +id ,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           return false;
      });
  };
}

export default OrderService;