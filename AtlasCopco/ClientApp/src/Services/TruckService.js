import axios from 'axios';
import Globals from '../Global';

class TruckService {

  base_url = Globals.BASE_URL;
  user_token = localStorage.getItem("token");

  getTruckList = async () => {
    debugger;
    return await axios
       .get(this.base_url , { headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        debugger;
        return response.data;
      })
      .catch(function (error) {
           return null;
      });
  };

  insertTruck = async (truckSelected) => {
    return await axios
       .post(this.base_url, truckSelected,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           return false;
      });
  };

  updateTruck = async (TruckSelected) => {
    debugger;

    return await axios
       .put(this.base_url, TruckSelected,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
        return false;
      });
  };

  deleteTruck = async (id) => {
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

export default TruckService;