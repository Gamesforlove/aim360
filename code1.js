gdjs.SetPlayerNameCode = {};
gdjs.SetPlayerNameCode.localVariables = [];
gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1_1final = [];

gdjs.SetPlayerNameCode.GDPlayerNameObjects1= [];
gdjs.SetPlayerNameCode.GDPlayerNameObjects2= [];
gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1= [];
gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2= [];
gdjs.SetPlayerNameCode.GDGoBtnObjects1= [];
gdjs.SetPlayerNameCode.GDGoBtnObjects2= [];
gdjs.SetPlayerNameCode.GDDebugObjects1= [];
gdjs.SetPlayerNameCode.GDDebugObjects2= [];
gdjs.SetPlayerNameCode.GDBackBtnObjects1= [];
gdjs.SetPlayerNameCode.GDBackBtnObjects2= [];
gdjs.SetPlayerNameCode.GDbgObjects1= [];
gdjs.SetPlayerNameCode.GDbgObjects2= [];
gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects1= [];
gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects2= [];


gdjs.SetPlayerNameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.SetPlayerNameCode.GDbgObjects1);
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDbgObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.SetPlayerNameCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDbgObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.SetPlayerNameCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDbgObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


};gdjs.SetPlayerNameCode.asyncCallback18435204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SetPlayerNameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}gdjs.SetPlayerNameCode.localVariables.length = 0;
}
gdjs.SetPlayerNameCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SetPlayerNameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()), (runtimeScene) => (gdjs.SetPlayerNameCode.asyncCallback18435204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SetPlayerNameCode.asyncCallback18442724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SetPlayerNameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(false);
}gdjs.SetPlayerNameCode.localVariables.length = 0;
}
gdjs.SetPlayerNameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SetPlayerNameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()), (runtimeScene) => (gdjs.SetPlayerNameCode.asyncCallback18442724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SetPlayerNameCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.SetPlayerNameCode.GDbgObjects1);
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDbgObjects1[i].setZOrder(-(100));
}
}}

}


{


gdjs.SetPlayerNameCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Debug"), gdjs.SetPlayerNameCode.GDDebugObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerName"), gdjs.SetPlayerNameCode.GDPlayerNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDPlayerNameObjects1[i].getBehavior("Text").setText("Current Name: " + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}{for(var i = 0, len = gdjs.SetPlayerNameCode.GDDebugObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDDebugObjects1[i].getBehavior("Text").setText((( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[0].getBehavior("Text").getText()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GoBtn"), gdjs.SetPlayerNameCode.GDGoBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerName"), gdjs.SetPlayerNameCode.GDPlayerNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerNameRules"), gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects1);
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDPlayerNameObjects1[i].setPosition((( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length === 0 ) ? 0 :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[0].getX()),(( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length === 0 ) ? 0 :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[0].getY()) - 150);
}
}{for(var i = 0, len = gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects1[i].setPosition((( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length === 0 ) ? 0 :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[0].getX()),(( gdjs.SetPlayerNameCode.GDPlayerNameObjects1.length === 0 ) ? 0 :gdjs.SetPlayerNameCode.GDPlayerNameObjects1[0].getY()) + 35);
}
}{for(var i = 0, len = gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[i].getWidth()) / 2 - (( gdjs.SetPlayerNameCode.GDGoBtnObjects1.length === 0 ) ? 0 :gdjs.SetPlayerNameCode.GDGoBtnObjects1[0].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (( gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects1.length === 0 ) ? 0 :gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects1[0].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.SetPlayerNameCode.GDGoBtnObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDGoBtnObjects1[i].setPosition((( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length === 0 ) ? 0 :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[0].getX()) + (gdjs.SetPlayerNameCode.GDGoBtnObjects1[i].getWidth()) * 1.8,(( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length === 0 ) ? 0 :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[0].getY()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("player", "name");
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("player", "name", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GoBtn"), gdjs.SetPlayerNameCode.GDGoBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SetPlayerNameCode.GDGoBtnObjects1.length;i<l;++i) {
    if ( gdjs.SetPlayerNameCode.GDGoBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SetPlayerNameCode.GDGoBtnObjects1[k] = gdjs.SetPlayerNameCode.GDGoBtnObjects1[i];
        ++k;
    }
}
gdjs.SetPlayerNameCode.GDGoBtnObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setString((( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.storage.writeStringInJSONFile("player", "name", runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
{ //Subevents
gdjs.SetPlayerNameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[0].getBehavior("Text").getText())) > 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[0].getBehavior("Text").getText())) <= 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length;i<l;++i) {
    if ( !((gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[i].getBehavior("Text").getText()).includes(" ")) ) {
        isConditionTrue_0 = true;
        gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[k] = gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1[i];
        ++k;
    }
}
gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GoBtn"), gdjs.SetPlayerNameCode.GDGoBtnObjects1);
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDGoBtnObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDGoBtnObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2);
{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[0].getBehavior("Text").getText())) <= 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1_1final.indexOf(gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[j]) === -1 )
            gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1_1final.push(gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2);
{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[0].getBehavior("Text").getText())) > 5);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1_1final.indexOf(gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[j]) === -1 )
            gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1_1final.push(gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2);
for (var i = 0, k = 0, l = gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2.length;i<l;++i) {
    if ( (gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[i].getBehavior("Text").getText()).includes(" ") ) {
        isConditionTrue_1 = true;
        gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[k] = gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[i];
        ++k;
    }
}
gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1_1final.indexOf(gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[j]) === -1 )
            gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1_1final.push(gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1_1final, gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GoBtn"), gdjs.SetPlayerNameCode.GDGoBtnObjects1);
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDGoBtnObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDGoBtnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoBtn"), gdjs.SetPlayerNameCode.GDGoBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SetPlayerNameCode.GDGoBtnObjects1.length;i<l;++i) {
    if ( gdjs.SetPlayerNameCode.GDGoBtnObjects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SetPlayerNameCode.GDGoBtnObjects1[k] = gdjs.SetPlayerNameCode.GDGoBtnObjects1[i];
        ++k;
    }
}
gdjs.SetPlayerNameCode.GDGoBtnObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SetPlayerNameCode.GDGoBtnObjects1 */
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDGoBtnObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDGoBtnObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoBtn"), gdjs.SetPlayerNameCode.GDGoBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SetPlayerNameCode.GDGoBtnObjects1.length;i<l;++i) {
    if ( !(gdjs.SetPlayerNameCode.GDGoBtnObjects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.SetPlayerNameCode.GDGoBtnObjects1[k] = gdjs.SetPlayerNameCode.GDGoBtnObjects1[i];
        ++k;
    }
}
gdjs.SetPlayerNameCode.GDGoBtnObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SetPlayerNameCode.GDGoBtnObjects1 */
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDGoBtnObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDGoBtnObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackBtn"), gdjs.SetPlayerNameCode.GDBackBtnObjects1);
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDBackBtnObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDBackBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SetPlayerNameCode.GDBackBtnObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDBackBtnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackBtn"), gdjs.SetPlayerNameCode.GDBackBtnObjects1);
{for(var i = 0, len = gdjs.SetPlayerNameCode.GDBackBtnObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDBackBtnObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SetPlayerNameCode.GDBackBtnObjects1.length ;i < len;++i) {
    gdjs.SetPlayerNameCode.GDBackBtnObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackBtn"), gdjs.SetPlayerNameCode.GDBackBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SetPlayerNameCode.GDBackBtnObjects1.length;i<l;++i) {
    if ( gdjs.SetPlayerNameCode.GDBackBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SetPlayerNameCode.GDBackBtnObjects1[k] = gdjs.SetPlayerNameCode.GDBackBtnObjects1[i];
        ++k;
    }
}
gdjs.SetPlayerNameCode.GDBackBtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.SetPlayerNameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.SetPlayerNameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SetPlayerNameCode.GDPlayerNameObjects1.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameObjects2.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2.length = 0;
gdjs.SetPlayerNameCode.GDGoBtnObjects1.length = 0;
gdjs.SetPlayerNameCode.GDGoBtnObjects2.length = 0;
gdjs.SetPlayerNameCode.GDDebugObjects1.length = 0;
gdjs.SetPlayerNameCode.GDDebugObjects2.length = 0;
gdjs.SetPlayerNameCode.GDBackBtnObjects1.length = 0;
gdjs.SetPlayerNameCode.GDBackBtnObjects2.length = 0;
gdjs.SetPlayerNameCode.GDbgObjects1.length = 0;
gdjs.SetPlayerNameCode.GDbgObjects2.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects1.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects2.length = 0;

gdjs.SetPlayerNameCode.eventsList3(runtimeScene);
gdjs.SetPlayerNameCode.GDPlayerNameObjects1.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameObjects2.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameInputObjects1.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameInputObjects2.length = 0;
gdjs.SetPlayerNameCode.GDGoBtnObjects1.length = 0;
gdjs.SetPlayerNameCode.GDGoBtnObjects2.length = 0;
gdjs.SetPlayerNameCode.GDDebugObjects1.length = 0;
gdjs.SetPlayerNameCode.GDDebugObjects2.length = 0;
gdjs.SetPlayerNameCode.GDBackBtnObjects1.length = 0;
gdjs.SetPlayerNameCode.GDBackBtnObjects2.length = 0;
gdjs.SetPlayerNameCode.GDbgObjects1.length = 0;
gdjs.SetPlayerNameCode.GDbgObjects2.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects1.length = 0;
gdjs.SetPlayerNameCode.GDPlayerNameRulesObjects2.length = 0;


return;

}

gdjs['SetPlayerNameCode'] = gdjs.SetPlayerNameCode;
