import axiosConfig from "../../Utils/axiosConfig";
import { cyptoTableData } from "../../Utils/Constants";
import { CRYPTODATA_FAILED, CRYPTODATA_SUCCESS, REQUEST_CRYPTODATA } from "../Types/CryptoTypes";

export const setCryptoDatLoading = () =>  dispatch => {
        dispatch({
            type: REQUEST_CRYPTODATA,
        })
}

export const getCryptoData = (limit, offset)=>  dispatch => {
    dispatch(setCryptoDatLoading())
    axiosConfig
      .get(cyptoTableData+"?limit="+ limit+"&offset="+offset)
      .then((res) => {
        if (res.status !== 200) throw new Error();
        dispatch({
            type: CRYPTODATA_SUCCESS,
            payload: res.data.data,
        })
      })
      .catch((err) => {
        dispatch({
            type: CRYPTODATA_FAILED,
        })
     })
}