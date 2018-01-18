// Request Status Validations
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

// Response data to JSON
function json(response) {
  return response.json()
}

// Formating for every entry to have persistent on browser only
function persisting(data) {
  data.map(function(element) {
    if(!element.persistent){
      element.persistent = {slug: "", canonical_name: "", resources: [] };
    }
  });
  return data;
}

// Give a referencial index for management
function indexing(data) {
  var counter = 0;
  data.map(function(element) {
      element["id"]=counter;
      counter++;
  });
  return data;
}

//API Request
function get_data(instance) {
  return fetch("https://backyard-api.unholster.com/resources/projects",{
    credentials: "include",
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
  })
  .then(status)
  .then(json)
  .then(function(data) {
    instance.setState({
      data: indexing(persisting(data))
   });
  })
  .catch(function(error) {
    console.log('Request failed', error);
  });
}

//API POST
function post_data(project){
  fetch("https://backyard-api.unholster.com/resources/projects/_sync",{
        method: 'POST',
        credentials: "include",
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify( project )
    })
    .then(status)
    .then(json)
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
}
