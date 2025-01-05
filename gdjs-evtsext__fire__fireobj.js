
gdjs.evtsExt__Fire__FireObj = gdjs.evtsExt__Fire__FireObj || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__Fire__FireObj.FireObj = class FireObj extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Property = objectData.content.Property !== undefined ? objectData.content.Property : Number("") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Property !== newObjectData.content.Property)
      this._objectData.Property = newObjectData.content.Property;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getProperty() {
    return this._objectData.Property !== undefined ? this._objectData.Property : Number("") || 0;
  }
  _setProperty(newValue) {
    this._objectData.Property = newValue;
  }

  

  
}

// Methods:

gdjs.evtsExt__Fire__FireObj.FireObj.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("Fire::FireObj", gdjs.evtsExt__Fire__FireObj.FireObj);
