const APIURL = '/api/avatars/';

export async function getAvatars(){
     return fetch(APIURL) // api call to the app server;
      //.then(data => data.json()) // generic callback without error handling.
          .then( res => {
              if(!res.ok){
                  if(res.status >= 400 && res.status < 500){
                      return res.json().then(data => {
                          let err = {errorMessage: data.message};
                          throw err;
                      });
                  } else{
                      let err = {errorMessage: "Please try again later, the server is not responding properly..."};
                      throw err;
                  }
              }
              return res.json();
          });
}

export async function getAvatar(id){
    const getOneURL = APIURL + id;
    
    return fetch(getOneURL)
           .then(res => {
               if(!res.ok){
                   if(res.status >= 400 && res.status < 500){
                       return res.json().then(data =>{
                           let err = {errorMessage: data.message};
                           throw err;
                       });
                   } else {
                       let err = {errorMessage: "Please try again later, the server is not responding properly..."};
                       throw err;
                   }
               } 
               
               return res.json();
           });
}

export async function createAvatar(val){
    // val has been updated in AvatarList.js and AvatarForm.js to be a js object {}
    return fetch(APIURL, { //Note on what kind of object to pass here
               method: "POST",
               headers: new Headers({
                   'Content-Type': 'application/json'
               }),
               body: JSON.stringify({name: val.inputValueName, img_url: val.inputValueURL, description: val.inputValueDescpn})
           }) // api call to the app server
          // besides, for this POST request, the response data sent back from api is the newly stored objects (i.e. the new todo object)
          .then( res => {
              if(!res.ok){
                  if(res.status >= 400 && res.status < 500){
                      return res.json().then(data => {
                          let err = {errorMessage: data.message};
                          throw err;
                      });
                  } else{
                      let err = {errorMessage: "Please try again later, the server is not responding properly..."};
                      throw err;
                  }
              }
              return res.json();
          });
}

export async function removeAvatar(id){
     const deleteURL = APIURL + id;
     
     return fetch(deleteURL, { //Note on what kind of object to pass here
           method: "DELETE"
       }) // api call to the app server
      .then( res => {
          if(!res.ok){
              if(res.status >= 400 && res.status < 500){
                  return res.json().then(data => {
                      let err = {errorMessage: data.message};
                      throw err;
                  });
              } else{
                  let err = {errorMessage: "Please try again later, the server is not responding properly..."};
                  throw err;
              }
          }
          return res.json();// even though there's no response from api in the case of a DELETE request
      });
}

export async function updateAvatar(avatar){
     const updateURL = APIURL + avatar._id;
      
     return fetch(updateURL, { //Note on what kind of object to pass here
                   method: "PUT",
                   headers: new Headers({
                       'Content-Type': 'application/json'
                   }),
                   body: JSON.stringify({completed: !avatar.completed})
               }) // api call to the app server
              .then( res => {
                  if(!res.ok){
                      if(res.status >= 400 && res.status < 500){
                          return res.json().then(data => {
                              let err = {errorMessage: data.message};
                              throw err;
                          });
                      } else{
                          let err = {errorMessage: "Please try again later, the server is not responding properly..."};
                          throw err;
                      }
                  }
                  return res.json();
              });// logic on res data from api
}

export async function updateImgForAvatar(id, url){
    const updateURL = APIURL + id;
    
    return fetch(updateURL, { //Note on what kind of object to pass here
                   method: "PUT",
                   headers: new Headers({
                       'Content-Type': 'application/json'
                   }),
                   body: JSON.stringify({img_url: url})
               }) // api call to the app server
              .then( res => {
                  if(!res.ok){
                      if(res.status >= 400 && res.status < 500){
                          return res.json().then(data => {
                              let err = {errorMessage: data.message};
                              throw err;
                          });
                      } else{
                          let err = {errorMessage: "Please try again later, the server is not responding properly..."};
                          throw err;
                      }
                  }
                  return res.json();
              });// logic on res data from api
    
}