import axios from "axios";
import { useState } from "react";



 const  SignInFunction = async (e) => {
    const [formData, setFormData] = useState({
        password: null,
        email: null
    });
    const [state, setState] = useState(false);
    const enterPage = (a) => {
        setState(a)
    }
    const response =  await axios.get('"http://localhost:1337/api/signups');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
     
    function checkInput () {
        if (response.map(item => {
        item.password === formData.password
    })) {
        return true;
    } else if (response.map(item => {
        item.email === formData.email
    })) {
        return true
    }
    if (checkInput) {
        setState(true)
    }
}
}
//SignInFunction()

export default SignInFunction;