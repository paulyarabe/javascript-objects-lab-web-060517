var recipes = {

}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var copy_object = Object.assign({}, object);
  delete copy_object[key];
  return copy_object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
