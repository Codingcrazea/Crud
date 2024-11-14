import axios from "axios";
const sendData = async (url,data)=>{
    try {
        const response = await axios.post(url, data);
        
        if (response.status === 200) {
          return response.data; 
        } else {
          throw new Error('Request failed with status ' + response.status);
        }
      } catch (error) {
        console.error('Error in POST request:', error.message);
        throw error; 
      }
    
}
export default sendData;
