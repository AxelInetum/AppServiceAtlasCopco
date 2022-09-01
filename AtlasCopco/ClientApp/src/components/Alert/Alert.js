import Swal from 'sweetalert2';
const Alert = (text1,text2,type) => {
    Swal.fire(
        text1,
        text2,
        type,
        )  
  }
  
  
  export default Alert;
  