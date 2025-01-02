gdjs.Loading2Code = {};
gdjs.Loading2Code.localVariables = [];
gdjs.Loading2Code.GDtextObjects1= [];
gdjs.Loading2Code.GDtextObjects2= [];
gdjs.Loading2Code.GDtextObjects3= [];
gdjs.Loading2Code.GDHelloTextObjects1= [];
gdjs.Loading2Code.GDHelloTextObjects2= [];
gdjs.Loading2Code.GDHelloTextObjects3= [];
gdjs.Loading2Code.GDClearStrogeBtnObjects1= [];
gdjs.Loading2Code.GDClearStrogeBtnObjects2= [];
gdjs.Loading2Code.GDClearStrogeBtnObjects3= [];
gdjs.Loading2Code.GDbgObjects1= [];
gdjs.Loading2Code.GDbgObjects2= [];
gdjs.Loading2Code.GDbgObjects3= [];
gdjs.Loading2Code.GDLogoObjects1= [];
gdjs.Loading2Code.GDLogoObjects2= [];
gdjs.Loading2Code.GDLogoObjects3= [];


gdjs.Loading2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.Loading2Code.GDbgObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDbgObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDbgObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.Loading2Code.GDbgObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDbgObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.Loading2Code.GDbgObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDbgObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


};gdjs.Loading2Code.asyncCallback18387484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SetPlayerName", false);
}gdjs.Loading2Code.localVariables.length = 0;
}
gdjs.Loading2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.Loading2Code.asyncCallback18387484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading2Code.asyncCallback18388068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}gdjs.Loading2Code.localVariables.length = 0;
}
gdjs.Loading2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.Loading2Code.asyncCallback18388068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Loading2Code.asyncCallback18389628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SetPlayerName", false);
}gdjs.Loading2Code.localVariables.length = 0;
}
gdjs.Loading2Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.Loading2Code.asyncCallback18389628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading2Code.asyncCallback18390484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}gdjs.Loading2Code.localVariables.length = 0;
}
gdjs.Loading2Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.Loading2Code.asyncCallback18390484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading2Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading2Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading2Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Loading2Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "assets\\sound\\UI_bgmusic.mp3");
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\sound\\UI_bgmusic.mp3", 0, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HelloText"), gdjs.Loading2Code.GDHelloTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Loading2Code.GDLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Loading2Code.GDtextObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDtextObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDtextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Loading2Code.GDtextObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.Loading2Code.GDHelloTextObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDHelloTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Loading2Code.GDHelloTextObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.Loading2Code.GDLogoObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDLogoObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Loading2Code.GDtextObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDtextObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDtextObjects1[i].getBehavior("Flash").Flash(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Loading2Code.GDtextObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDtextObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDtextObjects1[i].getBehavior("Text").setText("Tap to start");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Loading2Code.GDtextObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDtextObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDtextObjects1[i].getBehavior("Text").setText("Click to start");
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
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.Loading2Code.GDbgObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDbgObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDbgObjects1[i].setZOrder(-(100));
}
}}

}


{


gdjs.Loading2Code.eventsList0(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClearStrogeBtn"), gdjs.Loading2Code.GDClearStrogeBtnObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDClearStrogeBtnObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDClearStrogeBtnObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Loading2Code.GDClearStrogeBtnObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDClearStrogeBtnObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClearStrogeBtn"), gdjs.Loading2Code.GDClearStrogeBtnObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDClearStrogeBtnObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDClearStrogeBtnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Loading2Code.GDClearStrogeBtnObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDClearStrogeBtnObjects1[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading2Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ClearStrogeBtn"), gdjs.Loading2Code.GDClearStrogeBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Loading2Code.GDClearStrogeBtnObjects1.length;i<l;++i) {
    if ( gdjs.Loading2Code.GDClearStrogeBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Loading2Code.GDClearStrogeBtnObjects1[k] = gdjs.Loading2Code.GDClearStrogeBtnObjects1[i];
        ++k;
    }
}
gdjs.Loading2Code.GDClearStrogeBtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.clearJSONFile("player");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("player", "name");
}{gdjs.evtTools.storage.unloadJSONFile("player");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("player", "name");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HelloText"), gdjs.Loading2Code.GDHelloTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(false);
}{for(var i = 0, len = gdjs.Loading2Code.GDHelloTextObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDHelloTextObjects1[i].getBehavior("Text").setText("Hello again!");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("player", "name"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HelloText"), gdjs.Loading2Code.GDHelloTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}{for(var i = 0, len = gdjs.Loading2Code.GDHelloTextObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDHelloTextObjects1[i].getBehavior("Text").setText("Hi, Let's play");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Loading2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading2Code.GDtextObjects1.length = 0;
gdjs.Loading2Code.GDtextObjects2.length = 0;
gdjs.Loading2Code.GDtextObjects3.length = 0;
gdjs.Loading2Code.GDHelloTextObjects1.length = 0;
gdjs.Loading2Code.GDHelloTextObjects2.length = 0;
gdjs.Loading2Code.GDHelloTextObjects3.length = 0;
gdjs.Loading2Code.GDClearStrogeBtnObjects1.length = 0;
gdjs.Loading2Code.GDClearStrogeBtnObjects2.length = 0;
gdjs.Loading2Code.GDClearStrogeBtnObjects3.length = 0;
gdjs.Loading2Code.GDbgObjects1.length = 0;
gdjs.Loading2Code.GDbgObjects2.length = 0;
gdjs.Loading2Code.GDbgObjects3.length = 0;
gdjs.Loading2Code.GDLogoObjects1.length = 0;
gdjs.Loading2Code.GDLogoObjects2.length = 0;
gdjs.Loading2Code.GDLogoObjects3.length = 0;

gdjs.Loading2Code.eventsList7(runtimeScene);
gdjs.Loading2Code.GDtextObjects1.length = 0;
gdjs.Loading2Code.GDtextObjects2.length = 0;
gdjs.Loading2Code.GDtextObjects3.length = 0;
gdjs.Loading2Code.GDHelloTextObjects1.length = 0;
gdjs.Loading2Code.GDHelloTextObjects2.length = 0;
gdjs.Loading2Code.GDHelloTextObjects3.length = 0;
gdjs.Loading2Code.GDClearStrogeBtnObjects1.length = 0;
gdjs.Loading2Code.GDClearStrogeBtnObjects2.length = 0;
gdjs.Loading2Code.GDClearStrogeBtnObjects3.length = 0;
gdjs.Loading2Code.GDbgObjects1.length = 0;
gdjs.Loading2Code.GDbgObjects2.length = 0;
gdjs.Loading2Code.GDbgObjects3.length = 0;
gdjs.Loading2Code.GDLogoObjects1.length = 0;
gdjs.Loading2Code.GDLogoObjects2.length = 0;
gdjs.Loading2Code.GDLogoObjects3.length = 0;


return;

}

gdjs['Loading2Code'] = gdjs.Loading2Code;
