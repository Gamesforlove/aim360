gdjs.LevelEndCode = {};
gdjs.LevelEndCode.localVariables = [];
gdjs.LevelEndCode.GDReplayBtnObjects1= [];
gdjs.LevelEndCode.GDReplayBtnObjects2= [];
gdjs.LevelEndCode.GDReplayBtnObjects3= [];
gdjs.LevelEndCode.GDMainMenuBtnObjects1= [];
gdjs.LevelEndCode.GDMainMenuBtnObjects2= [];
gdjs.LevelEndCode.GDMainMenuBtnObjects3= [];
gdjs.LevelEndCode.GDCoinCountObjects1= [];
gdjs.LevelEndCode.GDCoinCountObjects2= [];
gdjs.LevelEndCode.GDCoinCountObjects3= [];
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1= [];
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects2= [];
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects3= [];
gdjs.LevelEndCode.GDbgObjects1= [];
gdjs.LevelEndCode.GDbgObjects2= [];
gdjs.LevelEndCode.GDbgObjects3= [];
gdjs.LevelEndCode.GDskullObjects1= [];
gdjs.LevelEndCode.GDskullObjects2= [];
gdjs.LevelEndCode.GDskullObjects3= [];
gdjs.LevelEndCode.GDCoinCountTextObjects1= [];
gdjs.LevelEndCode.GDCoinCountTextObjects2= [];
gdjs.LevelEndCode.GDCoinCountTextObjects3= [];


gdjs.LevelEndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.LevelEndCode.GDbgObjects1);
{for(var i = 0, len = gdjs.LevelEndCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDbgObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.LevelEndCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDbgObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.LevelEndCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDbgObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


};gdjs.LevelEndCode.asyncCallback19503004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelEndCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}gdjs.LevelEndCode.localVariables.length = 0;
}
gdjs.LevelEndCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelEndCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber()), (runtimeScene) => (gdjs.LevelEndCode.asyncCallback19503004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LevelEndCode.asyncCallback19504012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelEndCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}gdjs.LevelEndCode.localVariables.length = 0;
}
gdjs.LevelEndCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelEndCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber()), (runtimeScene) => (gdjs.LevelEndCode.asyncCallback19504012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LevelEndCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinCountText"), gdjs.LevelEndCode.GDCoinCountTextObjects2);
{for(var i = 0, len = gdjs.LevelEndCode.GDCoinCountTextObjects2.length ;i < len;++i) {
    gdjs.LevelEndCode.GDCoinCountTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString() + ", You Earned");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinCountText"), gdjs.LevelEndCode.GDCoinCountTextObjects1);
{for(var i = 0, len = gdjs.LevelEndCode.GDCoinCountTextObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDCoinCountTextObjects1[i].getBehavior("Text").setText("Wow new high score! " + runtimeScene.getGame().getVariables().getFromIndex(6).getAsString() + ", You Earned");
}
}}

}


};gdjs.LevelEndCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.LevelEndCode.GDbgObjects1);
{for(var i = 0, len = gdjs.LevelEndCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDbgObjects1[i].setZOrder(-(100));
}
}}

}


{


gdjs.LevelEndCode.eventsList0(runtimeScene);
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinCount"), gdjs.LevelEndCode.GDCoinCountObjects1);
{for(var i = 0, len = gdjs.LevelEndCode.GDCoinCountObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDCoinCountObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ReplayBtn"), gdjs.LevelEndCode.GDReplayBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelEndCode.GDReplayBtnObjects1.length;i<l;++i) {
    if ( gdjs.LevelEndCode.GDReplayBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelEndCode.GDReplayBtnObjects1[k] = gdjs.LevelEndCode.GDReplayBtnObjects1[i];
        ++k;
    }
}
gdjs.LevelEndCode.GDReplayBtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelEndCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuBtn"), gdjs.LevelEndCode.GDMainMenuBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelEndCode.GDMainMenuBtnObjects1.length;i<l;++i) {
    if ( gdjs.LevelEndCode.GDMainMenuBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelEndCode.GDMainMenuBtnObjects1[k] = gdjs.LevelEndCode.GDMainMenuBtnObjects1[i];
        ++k;
    }
}
gdjs.LevelEndCode.GDMainMenuBtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelEndCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitToLeaderboardBtn"), gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1.length;i<l;++i) {
    if ( gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[k] = gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[i];
        ++k;
    }
}
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "4188f837-c916-4a91-a382-f1085282ba43", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "4188f837-c916-4a91-a382-f1085282ba43", true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinCount"), gdjs.LevelEndCode.GDCoinCountObjects1);
gdjs.copyArray(runtimeScene.getObjects("CoinCountText"), gdjs.LevelEndCode.GDCoinCountTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MainMenuBtn"), gdjs.LevelEndCode.GDMainMenuBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReplayBtn"), gdjs.LevelEndCode.GDReplayBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitToLeaderboardBtn"), gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("skull"), gdjs.LevelEndCode.GDskullObjects1);
{for(var i = 0, len = gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[i].getHeight()) / 2 + 80);
}
}{for(var i = 0, len = gdjs.LevelEndCode.GDReplayBtnObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDReplayBtnObjects1[i].setPosition((( gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1.length === 0 ) ? 0 :gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[0].getX()),(( gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1.length === 0 ) ? 0 :gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[0].getY()) + (gdjs.LevelEndCode.GDReplayBtnObjects1[i].getHeight()) + 20);
}
}{for(var i = 0, len = gdjs.LevelEndCode.GDMainMenuBtnObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDMainMenuBtnObjects1[i].setPosition((( gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1.length === 0 ) ? 0 :gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[0].getX()),(( gdjs.LevelEndCode.GDReplayBtnObjects1.length === 0 ) ? 0 :gdjs.LevelEndCode.GDReplayBtnObjects1[0].getY()) + (gdjs.LevelEndCode.GDMainMenuBtnObjects1[i].getHeight()) + 20);
}
}{for(var i = 0, len = gdjs.LevelEndCode.GDCoinCountTextObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDCoinCountTextObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.LevelEndCode.GDCoinCountTextObjects1[i].getWidth()) / 2,(( gdjs.LevelEndCode.GDCoinCountObjects1.length === 0 ) ? 0 :gdjs.LevelEndCode.GDCoinCountObjects1[0].getY()) - 80);
}
}{for(var i = 0, len = gdjs.LevelEndCode.GDskullObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDskullObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,(( gdjs.LevelEndCode.GDCoinCountTextObjects1.length === 0 ) ? 0 :gdjs.LevelEndCode.GDCoinCountTextObjects1[0].getY()) - 80);
}
}{for(var i = 0, len = gdjs.LevelEndCode.GDCoinCountObjects1.length ;i < len;++i) {
    gdjs.LevelEndCode.GDCoinCountObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.LevelEndCode.GDCoinCountObjects1[i].getWidth()) / 2,(( gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1.length === 0 ) ? 0 :gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1[0].getY()) - 80);
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

{ //Subevents
gdjs.LevelEndCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.storage.writeStringInJSONFile("player", "score", runtimeScene.getGame().getVariables().getFromIndex(10).getAsString());
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LevelEndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelEndCode.GDReplayBtnObjects1.length = 0;
gdjs.LevelEndCode.GDReplayBtnObjects2.length = 0;
gdjs.LevelEndCode.GDReplayBtnObjects3.length = 0;
gdjs.LevelEndCode.GDMainMenuBtnObjects1.length = 0;
gdjs.LevelEndCode.GDMainMenuBtnObjects2.length = 0;
gdjs.LevelEndCode.GDMainMenuBtnObjects3.length = 0;
gdjs.LevelEndCode.GDCoinCountObjects1.length = 0;
gdjs.LevelEndCode.GDCoinCountObjects2.length = 0;
gdjs.LevelEndCode.GDCoinCountObjects3.length = 0;
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1.length = 0;
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects2.length = 0;
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects3.length = 0;
gdjs.LevelEndCode.GDbgObjects1.length = 0;
gdjs.LevelEndCode.GDbgObjects2.length = 0;
gdjs.LevelEndCode.GDbgObjects3.length = 0;
gdjs.LevelEndCode.GDskullObjects1.length = 0;
gdjs.LevelEndCode.GDskullObjects2.length = 0;
gdjs.LevelEndCode.GDskullObjects3.length = 0;
gdjs.LevelEndCode.GDCoinCountTextObjects1.length = 0;
gdjs.LevelEndCode.GDCoinCountTextObjects2.length = 0;
gdjs.LevelEndCode.GDCoinCountTextObjects3.length = 0;

gdjs.LevelEndCode.eventsList4(runtimeScene);
gdjs.LevelEndCode.GDReplayBtnObjects1.length = 0;
gdjs.LevelEndCode.GDReplayBtnObjects2.length = 0;
gdjs.LevelEndCode.GDReplayBtnObjects3.length = 0;
gdjs.LevelEndCode.GDMainMenuBtnObjects1.length = 0;
gdjs.LevelEndCode.GDMainMenuBtnObjects2.length = 0;
gdjs.LevelEndCode.GDMainMenuBtnObjects3.length = 0;
gdjs.LevelEndCode.GDCoinCountObjects1.length = 0;
gdjs.LevelEndCode.GDCoinCountObjects2.length = 0;
gdjs.LevelEndCode.GDCoinCountObjects3.length = 0;
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects1.length = 0;
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects2.length = 0;
gdjs.LevelEndCode.GDSubmitToLeaderboardBtnObjects3.length = 0;
gdjs.LevelEndCode.GDbgObjects1.length = 0;
gdjs.LevelEndCode.GDbgObjects2.length = 0;
gdjs.LevelEndCode.GDbgObjects3.length = 0;
gdjs.LevelEndCode.GDskullObjects1.length = 0;
gdjs.LevelEndCode.GDskullObjects2.length = 0;
gdjs.LevelEndCode.GDskullObjects3.length = 0;
gdjs.LevelEndCode.GDCoinCountTextObjects1.length = 0;
gdjs.LevelEndCode.GDCoinCountTextObjects2.length = 0;
gdjs.LevelEndCode.GDCoinCountTextObjects3.length = 0;


return;

}

gdjs['LevelEndCode'] = gdjs.LevelEndCode;
