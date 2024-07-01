import axios from 'axios'
export const startGetJewels = ()=>{
    return async (dispatch)=>{
        try{
            const response = await axios.get('http://localhost:3009/api/jewels')
            console.log(response.data)
            dispatch(setJewels(response.data))
        }
        catch(err){
            console.log(err)
        }
    }
}

const setJewels = (data)=>{
    return {
        type : 'SET_JEWELS',
        payload : data
    }
}
export const startCreateJewels = (formData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3009/api/jewels', formData,{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            });
            dispatch(createJewels(response.data));
            dispatch(startGetJewels());
        } catch (err) {
            console.log(err);
        }
    };
};

    
const createJewels = (data) => {
    return {
        type : 'CREATE_JEWELS',
        payload : data
    }
}

export const startRemoveJewels = (id) => {
    return async(dispatch) => {
        try{
            const response = await axios.delete(`http://localhost:3009/api/jewels/${id}`,{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            })
            dispatch(removeJewels(id))
            return response.data
        }
        catch(err){
            console.log(err)
        }
    }
}

const removeJewels = (id) => {
    return {
        type : 'REMOVE_JEWELS',
        payload : id
    }
}

export const startUpdateJewels = (id, formData) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`http://localhost:3009/api/jewels/${id}`, formData);
            console.log(response.data);
            dispatch(updateJewels(response.data));
            dispatch(startGetJewels());
        } catch (err) {
            console.log(err);
        }
    };
};
const updateJewels = (data) => {
    return {
        type : 'UPDATE_JEWELS',
        payload : data
    }
}