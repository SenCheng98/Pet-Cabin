import jwt_decode from "jwt-decode"

function getUserInfoFromJwt(jwt){

    if(jwt){

      const decodedJwt = jwt_decode(jwt);
      console.log(decodedJwt); 
      return decodedJwt.sub;
    }else{
      return [];
    }

}

export default getUserInfoFromJwt;