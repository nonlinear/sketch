/* global MSJSONDataArchiver MSJSONDataUnarchiver MSKeyedUnarchiver NSString NSUTF8StringEncoding */

function archiveDataFromSketchObject(object) {
  const immutableObject = object.immutableModelObject();
  return MSJSONDataArchiver.new().archivedDataWithRootObject_error(immutableObject, null);
}

function sketchObjectFromArchiveData(archiveData) {
  /*
  var unarchiver = MSJSONDataUnarchiver.alloc().initForReadingWithData(archiveData);
  var object = unarchiver.decodeRoot();
  */
  var jsonString = NSString.alloc().initWithData_encoding(archiveData, NSUTF8StringEncoding);
  var object = MSJSONDataUnarchiver.unarchiveObjectWithString_asVersion_corruptionDetected_error(
    jsonString,
    999,
    null,
    null
  );

  if (object) {
    if (object.className() == 'MSArchiveHeader') {
      return object.root();
    } else {
      return object;
    }
  } else {
    return MSKeyedUnarchiver.unarchiveObjectWithData(archiveData);
  }
}


module.exports = {
  archiveDataFromSketchObject: archiveDataFromSketchObject,
  sketchObjectFromArchiveData: sketchObjectFromArchiveData
};
