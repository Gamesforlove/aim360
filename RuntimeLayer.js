var gdjs;(function(i){let n;(function(r){r[r.TWO_D=0]="TWO_D",r[r.THREE_D=1]="THREE_D",r[r.TWO_D_PLUS_THREE_D=2]="TWO_D_PLUS_THREE_D"})(n=i.RuntimeLayerRenderingType||(i.RuntimeLayerRenderingType={}));const f=a=>a==="3d"?1:a==="2d+3d"||a===""?2:0;let s;(function(t){t[t.PERSPECTIVE=0]="PERSPECTIVE",t[t.ORTHOGRAPHIC=1]="ORTHOGRAPHIC"})(s=i.RuntimeLayerCameraType||(i.RuntimeLayerCameraType={}));const l=a=>a==="orthographic"?1:0;let o;(function(t){t[t.DO_NOTHING=0]="DO_NOTHING",t[t.TOP_LEFT_ANCHORED_IF_NEVER_MOVED=1]="TOP_LEFT_ANCHORED_IF_NEVER_MOVED"})(o=i.RuntimeLayerDefaultCameraBehavior||(i.RuntimeLayerDefaultCameraBehavior={}));const c=a=>a==="top-left-anchored-if-never-moved"?1:0;class d{constructor(e,t){this._timeScale=1;this._defaultZOrder=0;this._rendererEffects={};this._name=e.name,this._renderingType=f(e.renderingType),this._cameraType=l(e.cameraType),this._defaultCameraBehavior=c(e.defaultCameraBehavior||"top-left-anchored-if-never-moved"),this._hidden=!e.visibility,this._initialCamera3DFieldOfView=e.camera3DFieldOfView||45,this._initialCamera3DNearPlaneDistance=e.camera3DNearPlaneDistance||.1,this._initialCamera3DFarPlaneDistance=e.camera3DFarPlaneDistance||2e3,this._initialEffectsData=e.effects||[],this._runtimeScene=t,this._effectsManager=t.getGame().getEffectsManager(),this._isLightingLayer=e.isLightingLayer,this._followBaseLayerCamera=e.followBaseLayerCamera,this._clearColor=[e.ambientLightColorR/255,e.ambientLightColorG/255,e.ambientLightColorB/255,1],this._renderer=new i.LayerRenderer(this,t.getRenderer(),t.getGame().getRenderer()),this.show(!this._hidden);for(let r=0;r<e.effects.length;++r)this.addEffect(e.effects[r])}getRenderer(){return this._renderer}getRendererObject(){return this._renderer.getRendererObject()}get3DRendererObject(){return this._renderer.getThreeScene()}getRenderingType(){return this._renderingType}getCameraType(){return this._cameraType}getDefaultZOrder(){return this._defaultZOrder}setDefaultZOrder(e){this._defaultZOrder=e}getRuntimeScene(){return this._runtimeScene.getScene()}updatePreRender(e){this._followBaseLayerCamera&&this.followBaseLayer(),this._renderer.updatePreRender(),this._effectsManager.updatePreRender(this._rendererEffects,this)}getName(){return this._name}show(e){this._hidden=!e,this._renderer.updateVisibility(e)}isVisible(){return!this._hidden}getWidth(){return this._runtimeScene.getViewportWidth()}getHeight(){return this._runtimeScene.getViewportHeight()}getInitialCamera3DFieldOfView(){return this._initialCamera3DFieldOfView}getInitialCamera3DNearPlaneDistance(){return this._initialCamera3DNearPlaneDistance}getInitialCamera3DFarPlaneDistance(){return this._initialCamera3DFarPlaneDistance}getInitialEffectsData(){return this._initialEffectsData}getRendererEffects(){return this._rendererEffects}addEffect(e){this._effectsManager.addEffect(e,this._rendererEffects,this)}removeEffect(e){this._effectsManager.removeEffect(this._rendererEffects,this,e)}setEffectDoubleParameter(e,t,r){this._effectsManager.setEffectDoubleParameter(this._rendererEffects,e,t,r)}setEffectStringParameter(e,t,r){this._effectsManager.setEffectStringParameter(this._rendererEffects,e,t,r)}setEffectBooleanParameter(e,t,r){this._effectsManager.setEffectBooleanParameter(this._rendererEffects,e,t,r)}enableEffect(e,t){this._effectsManager.enableEffect(this._rendererEffects,this,e,t)}isEffectEnabled(e){return this._effectsManager.isEffectEnabled(this._rendererEffects,this,e)}hasEffect(e){return this._effectsManager.hasEffect(this._rendererEffects,e)}setTimeScale(e){e>=0&&(this._timeScale=e)}getTimeScale(){return this._timeScale}getElapsedTime(e){return(e||this._runtimeScene).getElapsedTime()*this._timeScale}followBaseLayer(){const e=this._runtimeScene.getLayer("");this.setCameraX(e.getCameraX()),this.setCameraY(e.getCameraY()),this.setCameraRotation(e.getCameraRotation()),this.setCameraZoom(e.getCameraZoom())}getClearColor(){return this._clearColor}setClearColor(e,t,r){this._clearColor[0]=e/255,this._clearColor[1]=t/255,this._clearColor[2]=r/255,this._renderer.updateClearColor()}setFollowBaseLayerCamera(e){this._followBaseLayerCamera=e}isLightingLayer(){return this._isLightingLayer}}i.RuntimeLayer=d})(gdjs||(gdjs={}));
//# sourceMappingURL=RuntimeLayer.js.map