import * as url from '../endPointUrl'

export const loginUserService = (request) => {
    console.log("gjgj")
    const LOGIN_API_ENDPOINT = url.Login;
  
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(LOGIN_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };