const axios = require('axios').default;
// import axios from 'axios';

 export function config(obj) {

    console.log("obj to print--->", obj)
        return axios({
            method: 'post',
            url: 'http://localhost:3001/quatitymeasurement',
            data: obj
        })
    }

  export function getUnits() {
        return axios.get('http://localhost:3001/gettype')
    }

  export function getUnitType(obj) {
      console.log("obj--> ",obj);
      
        return axios({
           method:'post',
            url:'http://localhost:3001/getunits',
            data : {
                type:obj
            }
        })
        
    }

