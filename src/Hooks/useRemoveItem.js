import axios from "axios";
import { toast } from "react-toastify";


const useRemoveItem = async (id) => {
    const { data } = await axios.delete(`http://localhost:5000/removeItem/${id}`)
    if (data.acknowledged) {
        toast.success('Successfully Item Deleted')
    }
};

export default useRemoveItem;