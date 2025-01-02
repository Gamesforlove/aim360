gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDPlayBtnObjects1= [];
gdjs.MainMenuCode.GDPlayBtnObjects2= [];
gdjs.MainMenuCode.GDPlayBtnObjects3= [];
gdjs.MainMenuCode.GDControlsBtnObjects1= [];
gdjs.MainMenuCode.GDControlsBtnObjects2= [];
gdjs.MainMenuCode.GDControlsBtnObjects3= [];
gdjs.MainMenuCode.GDMoreBtnObjects1= [];
gdjs.MainMenuCode.GDMoreBtnObjects2= [];
gdjs.MainMenuCode.GDMoreBtnObjects3= [];
gdjs.MainMenuCode.GDEditNameBtnObjects1= [];
gdjs.MainMenuCode.GDEditNameBtnObjects2= [];
gdjs.MainMenuCode.GDEditNameBtnObjects3= [];
gdjs.MainMenuCode.GDPlayerNameObjects1= [];
gdjs.MainMenuCode.GDPlayerNameObjects2= [];
gdjs.MainMenuCode.GDPlayerNameObjects3= [];
gdjs.MainMenuCode.GDLeaderboardBtnObjects1= [];
gdjs.MainMenuCode.GDLeaderboardBtnObjects2= [];
gdjs.MainMenuCode.GDLeaderboardBtnObjects3= [];
gdjs.MainMenuCode.GDExitBtnObjects1= [];
gdjs.MainMenuCode.GDExitBtnObjects2= [];
gdjs.MainMenuCode.GDExitBtnObjects3= [];
gdjs.MainMenuCode.GDbgObjects1= [];
gdjs.MainMenuCode.GDbgObjects2= [];
gdjs.MainMenuCode.GDbgObjects3= [];
gdjs.MainMenuCode.GDBodyObjects1= [];
gdjs.MainMenuCode.GDBodyObjects2= [];
gdjs.MainMenuCode.GDBodyObjects3= [];
gdjs.MainMenuCode.GDHeadObjects1= [];
gdjs.MainMenuCode.GDHeadObjects2= [];
gdjs.MainMenuCode.GDHeadObjects3= [];
gdjs.MainMenuCode.GDGunObjects1= [];
gdjs.MainMenuCode.GDGunObjects2= [];
gdjs.MainMenuCode.GDGunObjects3= [];
gdjs.MainMenuCode.GDside_9595imageObjects1= [];
gdjs.MainMenuCode.GDside_9595imageObjects2= [];
gdjs.MainMenuCode.GDside_9595imageObjects3= [];
gdjs.MainMenuCode.GDLogoObjects1= [];
gdjs.MainMenuCode.GDLogoObjects2= [];
gdjs.MainMenuCode.GDLogoObjects3= [];
gdjs.MainMenuCode.GDsidepanalObjects1= [];
gdjs.MainMenuCode.GDsidepanalObjects2= [];
gdjs.MainMenuCode.GDsidepanalObjects3= [];
gdjs.MainMenuCode.GDRedExplosionObjects1= [];
gdjs.MainMenuCode.GDRedExplosionObjects2= [];
gdjs.MainMenuCode.GDRedExplosionObjects3= [];
gdjs.MainMenuCode.GDui_9595bgObjects1= [];
gdjs.MainMenuCode.GDui_9595bgObjects2= [];
gdjs.MainMenuCode.GDui_9595bgObjects3= [];
gdjs.MainMenuCode.GDbtn_9595closeObjects1= [];
gdjs.MainMenuCode.GDbtn_9595closeObjects2= [];
gdjs.MainMenuCode.GDbtn_9595closeObjects3= [];
gdjs.MainMenuCode.GDinstructionsObjects1= [];
gdjs.MainMenuCode.GDinstructionsObjects2= [];
gdjs.MainMenuCode.GDinstructionsObjects3= [];
gdjs.MainMenuCode.GDmore_9595uiObjects1= [];
gdjs.MainMenuCode.GDmore_9595uiObjects2= [];
gdjs.MainMenuCode.GDmore_9595uiObjects3= [];
gdjs.MainMenuCode.GDbtn_9595siteObjects1= [];
gdjs.MainMenuCode.GDbtn_9595siteObjects2= [];
gdjs.MainMenuCode.GDbtn_9595siteObjects3= [];
gdjs.MainMenuCode.GDBulletObjects1= [];
gdjs.MainMenuCode.GDBulletObjects2= [];
gdjs.MainMenuCode.GDBulletObjects3= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.MainMenuCode.GDbgObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbgObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbgObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbgObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


};gdjs.MainMenuCode.asyncCallback18480860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback18480860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback18482244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SetPlayerName", false);
}gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback18482244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback18483268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback18483268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback18485060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback18485060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDbtn_95959595closeObjects1Objects = Hashtable.newFrom({"btn_close": gdjs.MainMenuCode.GDbtn_9595closeObjects1});
gdjs.MainMenuCode.asyncCallback18487036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback18487036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDbtn_95959595siteObjects1Objects = Hashtable.newFrom({"btn_site": gdjs.MainMenuCode.GDbtn_9595siteObjects1});
gdjs.MainMenuCode.asyncCallback18488644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.window.openURL("https://miusoftgames.com", runtimeScene);
}gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback18488644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback18489612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "4188f837-c916-4a91-a382-f1085282ba43", true);
}gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback18489612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback18491332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback18491332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainMenuCode.GDBulletObjects1});
gdjs.MainMenuCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.MainMenuCode.GDGunObjects1);
gdjs.MainMenuCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.MainMenuCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGunObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.MainMenuCode.GDGunObjects1[i].getPointX("BuletSpawn")), (gdjs.MainMenuCode.GDGunObjects1[i].getPointY("BuletSpawn")), gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBulletObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 1800, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBulletObjects1[i].getBehavior("Scale").setScale(0.12);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBulletObjects1[i].setZOrder((( gdjs.MainMenuCode.GDGunObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDGunObjects1[0].getZOrder()) - 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sound\\gunshot01.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.MainMenuCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGunObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.08, 5, 5, 5, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.MainMenuCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Body"), gdjs.MainMenuCode.GDBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.MainMenuCode.GDGunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Head"), gdjs.MainMenuCode.GDHeadObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDHeadObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDHeadObjects2[i].setPosition((( gdjs.MainMenuCode.GDBodyObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDBodyObjects2[0].getPointX("Head")),(( gdjs.MainMenuCode.GDBodyObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDBodyObjects2[0].getPointY("Head")));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGunObjects2[i].setPosition((( gdjs.MainMenuCode.GDBodyObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDBodyObjects2[0].getPointX("Gun")),(( gdjs.MainMenuCode.GDBodyObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDBodyObjects2[0].getPointY("Gun")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Body"), gdjs.MainMenuCode.GDBodyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBodyObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBodyObjects2[i].getCenterXInScene() <= gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBodyObjects2[k] = gdjs.MainMenuCode.GDBodyObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBodyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBodyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.MainMenuCode.GDGunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Head"), gdjs.MainMenuCode.GDHeadObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDBodyObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBodyObjects2[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGunObjects2[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGunObjects2[i].getBehavior("Flippable").flipY(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDHeadObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDHeadObjects2[i].getBehavior("Flippable").flipY(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Body"), gdjs.MainMenuCode.GDBodyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBodyObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBodyObjects2[i].getCenterXInScene() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBodyObjects2[k] = gdjs.MainMenuCode.GDBodyObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBodyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBodyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.MainMenuCode.GDGunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Head"), gdjs.MainMenuCode.GDHeadObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDBodyObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBodyObjects2[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGunObjects2[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGunObjects2[i].getBehavior("Flippable").flipY(true);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDHeadObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDHeadObjects2[i].getBehavior("Flippable").flipY(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.MainMenuCode.GDGunObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGunObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 800, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Head"), gdjs.MainMenuCode.GDHeadObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDHeadObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDHeadObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18500068);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainMenuCode.GDBulletObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDControlsBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDEditNameBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDMoreBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDLeaderboardBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDExitBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDsidepanalObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDLogoObjects1Objects = Hashtable.newFrom({"PlayBtn": gdjs.MainMenuCode.GDPlayBtnObjects1, "ControlsBtn": gdjs.MainMenuCode.GDControlsBtnObjects1, "EditNameBtn": gdjs.MainMenuCode.GDEditNameBtnObjects1, "MoreBtn": gdjs.MainMenuCode.GDMoreBtnObjects1, "LeaderboardBtn": gdjs.MainMenuCode.GDLeaderboardBtnObjects1, "ExitBtn": gdjs.MainMenuCode.GDExitBtnObjects1, "sidepanal": gdjs.MainMenuCode.GDsidepanalObjects1, "Logo": gdjs.MainMenuCode.GDLogoObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRedExplosionObjects1Objects = Hashtable.newFrom({"RedExplosion": gdjs.MainMenuCode.GDRedExplosionObjects1});
gdjs.MainMenuCode.eventsList11 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ExitBtn"), gdjs.MainMenuCode.GDExitBtnObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDExitBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDExitBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitBtnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.MainMenuCode.GDbgObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbgObjects1[i].setZOrder(-(100));
}
}}

}


{


gdjs.MainMenuCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainMenuCode.GDBulletObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBulletObjects1[i].setBlendMode(3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 0));
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\sound\\UI_bgmusic.mp3", 0, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerName"), gdjs.MainMenuCode.GDPlayerNameObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayerNameObjects1[i].getBehavior("Text").setText("Hello, " + runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() + "!");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btn_close"), gdjs.MainMenuCode.GDbtn_9595closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_site"), gdjs.MainMenuCode.GDbtn_9595siteObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.MainMenuCode.GDinstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("more_ui"), gdjs.MainMenuCode.GDmore_9595uiObjects1);
gdjs.copyArray(runtimeScene.getObjects("ui_bg"), gdjs.MainMenuCode.GDui_9595bgObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDbtn_9595closeObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbtn_9595closeObjects1[i].setPosition((( gdjs.MainMenuCode.GDui_9595bgObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDui_9595bgObjects1[0].getCenterXInScene()) + (( gdjs.MainMenuCode.GDui_9595bgObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDui_9595bgObjects1[0].getWidth()) / 2,(( gdjs.MainMenuCode.GDui_9595bgObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDui_9595bgObjects1[0].getCenterYInScene()) - (( gdjs.MainMenuCode.GDui_9595bgObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDui_9595bgObjects1[0].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDinstructionsObjects1[i].setPosition((( gdjs.MainMenuCode.GDui_9595bgObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDui_9595bgObjects1[0].getCenterXInScene()),(( gdjs.MainMenuCode.GDui_9595bgObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDui_9595bgObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDmore_9595uiObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDmore_9595uiObjects1[i].setPosition((( gdjs.MainMenuCode.GDui_9595bgObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDui_9595bgObjects1[0].getCenterXInScene()),(( gdjs.MainMenuCode.GDui_9595bgObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDui_9595bgObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDbtn_9595siteObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbtn_9595siteObjects1[i].setPosition((( gdjs.MainMenuCode.GDmore_9595uiObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDmore_9595uiObjects1[0].getPointX("site")),(( gdjs.MainMenuCode.GDmore_9595uiObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDmore_9595uiObjects1[0].getPointY("site")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_close"), gdjs.MainMenuCode.GDbtn_9595closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ui_bg"), gdjs.MainMenuCode.GDui_9595bgObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDbtn_9595closeObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbtn_9595closeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDui_9595bgObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDui_9595bgObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_close"), gdjs.MainMenuCode.GDbtn_9595closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ui_bg"), gdjs.MainMenuCode.GDui_9595bgObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDui_9595bgObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDui_9595bgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDbtn_9595closeObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbtn_9595closeObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.MainMenuCode.GDinstructionsObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDinstructionsObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.MainMenuCode.GDinstructionsObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDinstructionsObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_site"), gdjs.MainMenuCode.GDbtn_9595siteObjects1);
gdjs.copyArray(runtimeScene.getObjects("more_ui"), gdjs.MainMenuCode.GDmore_9595uiObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDmore_9595uiObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDmore_9595uiObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDbtn_9595siteObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbtn_9595siteObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_site"), gdjs.MainMenuCode.GDbtn_9595siteObjects1);
gdjs.copyArray(runtimeScene.getObjects("more_ui"), gdjs.MainMenuCode.GDmore_9595uiObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDmore_9595uiObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDmore_9595uiObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDbtn_9595siteObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDbtn_9595siteObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.MainMenuCode.GDinstructionsObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDinstructionsObjects1[i].getBehavior("Animation").setAnimationName("mobile");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.MainMenuCode.GDinstructionsObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDinstructionsObjects1[i].getBehavior("Animation").setAnimationName("pc");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MainMenuCode.GDPlayBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayBtnObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayBtnObjects1[k] = gdjs.MainMenuCode.GDPlayBtnObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayBtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EditNameBtn"), gdjs.MainMenuCode.GDEditNameBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEditNameBtnObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDEditNameBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEditNameBtnObjects1[k] = gdjs.MainMenuCode.GDEditNameBtnObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEditNameBtnObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ControlsBtn"), gdjs.MainMenuCode.GDControlsBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDControlsBtnObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDControlsBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDControlsBtnObjects1[k] = gdjs.MainMenuCode.GDControlsBtnObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDControlsBtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoreBtn"), gdjs.MainMenuCode.GDMoreBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDMoreBtnObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDMoreBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDMoreBtnObjects1[k] = gdjs.MainMenuCode.GDMoreBtnObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDMoreBtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_close"), gdjs.MainMenuCode.GDbtn_9595closeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDbtn_95959595closeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18486964);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_site"), gdjs.MainMenuCode.GDbtn_9595siteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDbtn_95959595siteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18488484);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardBtn"), gdjs.MainMenuCode.GDLeaderboardBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDLeaderboardBtnObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDLeaderboardBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDLeaderboardBtnObjects1[k] = gdjs.MainMenuCode.GDLeaderboardBtnObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDLeaderboardBtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitBtn"), gdjs.MainMenuCode.GDExitBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDExitBtnObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDExitBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDExitBtnObjects1[k] = gdjs.MainMenuCode.GDExitBtnObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDExitBtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList8(runtimeScene);} //End of subevents
}

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
{gdjs.evtTools.storage.readStringFromJSONFile("player", "name", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


{


gdjs.MainMenuCode.eventsList10(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainMenuCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("ControlsBtn"), gdjs.MainMenuCode.GDControlsBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("EditNameBtn"), gdjs.MainMenuCode.GDEditNameBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitBtn"), gdjs.MainMenuCode.GDExitBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeaderboardBtn"), gdjs.MainMenuCode.GDLeaderboardBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.MainMenuCode.GDLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoreBtn"), gdjs.MainMenuCode.GDMoreBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MainMenuCode.GDPlayBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("sidepanal"), gdjs.MainMenuCode.GDsidepanalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBulletObjects1Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDControlsBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDEditNameBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDMoreBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDLeaderboardBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDExitBtnObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDsidepanalObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDLogoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18496892);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBulletObjects1 */
gdjs.MainMenuCode.GDRedExplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRedExplosionObjects1Objects, (( gdjs.MainMenuCode.GDBulletObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDBulletObjects1[0].getCenterXInScene()), (( gdjs.MainMenuCode.GDBulletObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDBulletObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.MainMenuCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDPlayBtnObjects1.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects2.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects3.length = 0;
gdjs.MainMenuCode.GDControlsBtnObjects1.length = 0;
gdjs.MainMenuCode.GDControlsBtnObjects2.length = 0;
gdjs.MainMenuCode.GDControlsBtnObjects3.length = 0;
gdjs.MainMenuCode.GDMoreBtnObjects1.length = 0;
gdjs.MainMenuCode.GDMoreBtnObjects2.length = 0;
gdjs.MainMenuCode.GDMoreBtnObjects3.length = 0;
gdjs.MainMenuCode.GDEditNameBtnObjects1.length = 0;
gdjs.MainMenuCode.GDEditNameBtnObjects2.length = 0;
gdjs.MainMenuCode.GDEditNameBtnObjects3.length = 0;
gdjs.MainMenuCode.GDPlayerNameObjects1.length = 0;
gdjs.MainMenuCode.GDPlayerNameObjects2.length = 0;
gdjs.MainMenuCode.GDPlayerNameObjects3.length = 0;
gdjs.MainMenuCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.MainMenuCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.MainMenuCode.GDLeaderboardBtnObjects3.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects1.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects2.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects3.length = 0;
gdjs.MainMenuCode.GDbgObjects1.length = 0;
gdjs.MainMenuCode.GDbgObjects2.length = 0;
gdjs.MainMenuCode.GDbgObjects3.length = 0;
gdjs.MainMenuCode.GDBodyObjects1.length = 0;
gdjs.MainMenuCode.GDBodyObjects2.length = 0;
gdjs.MainMenuCode.GDBodyObjects3.length = 0;
gdjs.MainMenuCode.GDHeadObjects1.length = 0;
gdjs.MainMenuCode.GDHeadObjects2.length = 0;
gdjs.MainMenuCode.GDHeadObjects3.length = 0;
gdjs.MainMenuCode.GDGunObjects1.length = 0;
gdjs.MainMenuCode.GDGunObjects2.length = 0;
gdjs.MainMenuCode.GDGunObjects3.length = 0;
gdjs.MainMenuCode.GDside_9595imageObjects1.length = 0;
gdjs.MainMenuCode.GDside_9595imageObjects2.length = 0;
gdjs.MainMenuCode.GDside_9595imageObjects3.length = 0;
gdjs.MainMenuCode.GDLogoObjects1.length = 0;
gdjs.MainMenuCode.GDLogoObjects2.length = 0;
gdjs.MainMenuCode.GDLogoObjects3.length = 0;
gdjs.MainMenuCode.GDsidepanalObjects1.length = 0;
gdjs.MainMenuCode.GDsidepanalObjects2.length = 0;
gdjs.MainMenuCode.GDsidepanalObjects3.length = 0;
gdjs.MainMenuCode.GDRedExplosionObjects1.length = 0;
gdjs.MainMenuCode.GDRedExplosionObjects2.length = 0;
gdjs.MainMenuCode.GDRedExplosionObjects3.length = 0;
gdjs.MainMenuCode.GDui_9595bgObjects1.length = 0;
gdjs.MainMenuCode.GDui_9595bgObjects2.length = 0;
gdjs.MainMenuCode.GDui_9595bgObjects3.length = 0;
gdjs.MainMenuCode.GDbtn_9595closeObjects1.length = 0;
gdjs.MainMenuCode.GDbtn_9595closeObjects2.length = 0;
gdjs.MainMenuCode.GDbtn_9595closeObjects3.length = 0;
gdjs.MainMenuCode.GDinstructionsObjects1.length = 0;
gdjs.MainMenuCode.GDinstructionsObjects2.length = 0;
gdjs.MainMenuCode.GDinstructionsObjects3.length = 0;
gdjs.MainMenuCode.GDmore_9595uiObjects1.length = 0;
gdjs.MainMenuCode.GDmore_9595uiObjects2.length = 0;
gdjs.MainMenuCode.GDmore_9595uiObjects3.length = 0;
gdjs.MainMenuCode.GDbtn_9595siteObjects1.length = 0;
gdjs.MainMenuCode.GDbtn_9595siteObjects2.length = 0;
gdjs.MainMenuCode.GDbtn_9595siteObjects3.length = 0;
gdjs.MainMenuCode.GDBulletObjects1.length = 0;
gdjs.MainMenuCode.GDBulletObjects2.length = 0;
gdjs.MainMenuCode.GDBulletObjects3.length = 0;

gdjs.MainMenuCode.eventsList11(runtimeScene);
gdjs.MainMenuCode.GDPlayBtnObjects1.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects2.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects3.length = 0;
gdjs.MainMenuCode.GDControlsBtnObjects1.length = 0;
gdjs.MainMenuCode.GDControlsBtnObjects2.length = 0;
gdjs.MainMenuCode.GDControlsBtnObjects3.length = 0;
gdjs.MainMenuCode.GDMoreBtnObjects1.length = 0;
gdjs.MainMenuCode.GDMoreBtnObjects2.length = 0;
gdjs.MainMenuCode.GDMoreBtnObjects3.length = 0;
gdjs.MainMenuCode.GDEditNameBtnObjects1.length = 0;
gdjs.MainMenuCode.GDEditNameBtnObjects2.length = 0;
gdjs.MainMenuCode.GDEditNameBtnObjects3.length = 0;
gdjs.MainMenuCode.GDPlayerNameObjects1.length = 0;
gdjs.MainMenuCode.GDPlayerNameObjects2.length = 0;
gdjs.MainMenuCode.GDPlayerNameObjects3.length = 0;
gdjs.MainMenuCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.MainMenuCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.MainMenuCode.GDLeaderboardBtnObjects3.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects1.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects2.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects3.length = 0;
gdjs.MainMenuCode.GDbgObjects1.length = 0;
gdjs.MainMenuCode.GDbgObjects2.length = 0;
gdjs.MainMenuCode.GDbgObjects3.length = 0;
gdjs.MainMenuCode.GDBodyObjects1.length = 0;
gdjs.MainMenuCode.GDBodyObjects2.length = 0;
gdjs.MainMenuCode.GDBodyObjects3.length = 0;
gdjs.MainMenuCode.GDHeadObjects1.length = 0;
gdjs.MainMenuCode.GDHeadObjects2.length = 0;
gdjs.MainMenuCode.GDHeadObjects3.length = 0;
gdjs.MainMenuCode.GDGunObjects1.length = 0;
gdjs.MainMenuCode.GDGunObjects2.length = 0;
gdjs.MainMenuCode.GDGunObjects3.length = 0;
gdjs.MainMenuCode.GDside_9595imageObjects1.length = 0;
gdjs.MainMenuCode.GDside_9595imageObjects2.length = 0;
gdjs.MainMenuCode.GDside_9595imageObjects3.length = 0;
gdjs.MainMenuCode.GDLogoObjects1.length = 0;
gdjs.MainMenuCode.GDLogoObjects2.length = 0;
gdjs.MainMenuCode.GDLogoObjects3.length = 0;
gdjs.MainMenuCode.GDsidepanalObjects1.length = 0;
gdjs.MainMenuCode.GDsidepanalObjects2.length = 0;
gdjs.MainMenuCode.GDsidepanalObjects3.length = 0;
gdjs.MainMenuCode.GDRedExplosionObjects1.length = 0;
gdjs.MainMenuCode.GDRedExplosionObjects2.length = 0;
gdjs.MainMenuCode.GDRedExplosionObjects3.length = 0;
gdjs.MainMenuCode.GDui_9595bgObjects1.length = 0;
gdjs.MainMenuCode.GDui_9595bgObjects2.length = 0;
gdjs.MainMenuCode.GDui_9595bgObjects3.length = 0;
gdjs.MainMenuCode.GDbtn_9595closeObjects1.length = 0;
gdjs.MainMenuCode.GDbtn_9595closeObjects2.length = 0;
gdjs.MainMenuCode.GDbtn_9595closeObjects3.length = 0;
gdjs.MainMenuCode.GDinstructionsObjects1.length = 0;
gdjs.MainMenuCode.GDinstructionsObjects2.length = 0;
gdjs.MainMenuCode.GDinstructionsObjects3.length = 0;
gdjs.MainMenuCode.GDmore_9595uiObjects1.length = 0;
gdjs.MainMenuCode.GDmore_9595uiObjects2.length = 0;
gdjs.MainMenuCode.GDmore_9595uiObjects3.length = 0;
gdjs.MainMenuCode.GDbtn_9595siteObjects1.length = 0;
gdjs.MainMenuCode.GDbtn_9595siteObjects2.length = 0;
gdjs.MainMenuCode.GDbtn_9595siteObjects3.length = 0;
gdjs.MainMenuCode.GDBulletObjects1.length = 0;
gdjs.MainMenuCode.GDBulletObjects2.length = 0;
gdjs.MainMenuCode.GDBulletObjects3.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
