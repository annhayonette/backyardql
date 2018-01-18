const canonicaly = (str) => {
  return str.split('-').join(' ').split('_').join(' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


const slugify = (str) => {
  return str.split(' ').join('-').toLowerCase();
}


const removeItem = (project, resourceType, resourceData) => {
  project.persistent.resources = project.persistent.resources.filter(item => {
    return (item.url !== resourceData.url );
  });
}

const addItem = (project, resourceType, resourceData) => {

  if(project.persistent && !project.persistent.resources.some(item => item.url === resourceData.url)){
      if(project.persistent.slug==""){
        project.persistent.canonical_name = canonicaly(resourceData.name)
        project.persistent.slug = slugify(resourceData.name);
      }
      project.persistent.resources.push({ type: resourceType, name: resourceData.name, url: resourceData.url});
  }
}
