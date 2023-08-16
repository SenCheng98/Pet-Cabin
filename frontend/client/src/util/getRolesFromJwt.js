
import jwt_decode from "jwt-decode"

function getRolesFromJwt(jwt){

    if(jwt){

      const decodedJwt = jwt_decode(jwt);
      console.log(decodedJwt); 
      return decodedJwt.authority;
    }else{
      return [];
    }
}

export default getRolesFromJwt;
    