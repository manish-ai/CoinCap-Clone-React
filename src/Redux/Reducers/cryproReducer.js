import { CRYPTODATA_FAILED, CRYPTODATA_SUCCESS, REQUEST_CRYPTODATA } from "../Types/CryptoTypes";

  const initialState = {
    cryptoData: [],
    loading:false
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case CRYPTODATA_SUCCESS:
        return {
          ...state,
          cryptoData:  state.cryptoData.concat(action.payload),
          loading:false
        };
      case CRYPTODATA_FAILED:
        return {
          ...state,
          loading:false
        };
      case REQUEST_CRYPTODATA:
        return {
          ...state,
          loading: true
        };
     
  
      default:
        return state;
    }
  }
  