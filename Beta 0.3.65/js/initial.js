//初始化地图音量
document.getElementsByClassName("bgAudio")[0].volume = mainMap.bgVolume;
mainMap.mapSeed=randomStr(5,'0123456789qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM0123456789');
//生成一组随机字符串,参数为长度与取值范围
function randomStr(len,$chars) {
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {pwd += $chars.charAt(Math.floor(Math.random() * maxPos));}
　　return pwd;
}

//决定角色职业
var PRO0=randomStr(1,"032145");
if(PRO0=="2")mainMap.actor.PRO="胖子";
else if(PRO0=="3")mainMap.actor.PRO="法师";
else if(PRO0=="4")mainMap.actor.PRO="倒霉蛋";
else if(PRO0=="5")mainMap.actor.PRO="商人";
else mainMap.s_switchMP=true;



//统计在控制台里有多少个指定字符,注:暂为控制台专属函数
function countStr(_char)
{
    var regex = new RegExp(_char, 'g'); // 使用g表示整个字符串都要匹配
    var result = mainMap.history.match(regex);
    var count = !result?0:result.length;//找不到，返回-1，-1的长度是0，所以返回长度
    return count;
}


//初始化游戏地图大小
for(var times=12;times!=0;times-=1)
{
    mainMap.gameMap.push([1,1,1,1,1,1,1,1,1,1,1,1]);
    mainMap.largeMap.push(["","","","","","","","","","","","","\n"]);
    mainMap.master.push([{},{},{},{},{},{},{},{},{},{},{},{}]);
    mainMap.b_if.push(false);
}

var gameMapTemp=JSON.parse(JSON.stringify(mainMap.gameMap));
var largeMapTemp=JSON.parse(JSON.stringify(mainMap.largeMap));
var masterTemp=JSON.parse(JSON.stringify(mainMap.master));

mainMap.gameMap[1][1]=31;
mainMap.gameMap[1][2]=32;
mainMap.gameMap[1][3]=33;
mainMap.gameMap[1][4]=34;
mainMap.gameMap[1][5]=35;
mainMap.gameMap[1][6]=36;
mainMap.gameMap[1][7]=37;


//初始化道具函数控制变量
for(var times=400;times!=0;times-=1){mainMap.i_if.push(0)};



////随机生成怪物
//for(var times=12;times!=0;times-=1)

mapInitial();
//map1_1();
//mainMap.buildMap();
//
//mainMap.saveMapList.LB=JSON.stringify(mainMap.largeMap);
//mainMap.saveMapList.GB=JSON.stringify(mainMap.gameMap);
//mainMap.saveMapList.MB=JSON.stringify(mainMap.master);


//map1_2();
mainMap.buildMap();


//mainMap.gameMap[Math.ceil(Math.random()*10)][Math.ceil(Math.random()*10)]=31;









//赋予角色初时位置,并且生成地图


//移动函数,负责主角移动和转向
function move(){
key = event.keyCode;
    if (key == 37) 
    {
        mainMap.FaceY=0;mainMap.FaceX=-1;
        if(!mainMap.skillTurned)
        {mainMap.moveActor(Number(mainMap.actorCoor[1])-1,Number(mainMap.actorCoor[0]));}
        else{mainMap.consoleInformation2="角色朝向了左";mainMap.skillTurned=false;}
    }
    else if (key == 38)
    {   
        mainMap.FaceY=-1;mainMap.FaceX=0;
        if(!mainMap.skillTurned)
        {mainMap.moveActor(Number(mainMap.actorCoor[1]),Number(mainMap.actorCoor[0])-1);}
        else{mainMap.consoleInformation2="角色朝向了上";mainMap.skillTurned=false;}
    }
    else if (key == 39) 
    {  
        mainMap.FaceY=0;mainMap.FaceX=1;
        if(!mainMap.skillTurned)
        {mainMap.moveActor(Number(mainMap.actorCoor[1])+1,Number(mainMap.actorCoor[0]));}
        else{mainMap.consoleInformation2="角色朝向了右";mainMap.skillTurned=false;}
    }
    else if (key == 40)  
    {   
        mainMap.FaceY=1;mainMap.FaceX=0;
        if(!mainMap.skillTurned)
        {mainMap.moveActor(Number(mainMap.actorCoor[1]),Number(mainMap.actorCoor[0])+1);}
        else{mainMap.consoleInformation2="角色朝向了下";mainMap.skillTurned=false;}
    }
    //开启简单模式
    else if (key == 65)if(++mainMap.easy2==5)mainMap.easy=true;
}
document.onkeydown=move;