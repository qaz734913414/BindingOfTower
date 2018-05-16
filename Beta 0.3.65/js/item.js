var itemList=[];
var equipCancelList=[];
var dropEquipList=[];
var equipList=[];
var pickEquipList=[];
var sitem=
[
    //id为使用物品对应的函数，如下。manual为图鉴信息，quantity为道具数量，found为是否收录图鉴
    //price为物品出现在商店时的价格。
    //因为欠债系统的加入,使得i_if每次使用道具都做一次刷新
    {id:1,name:"烤鸭",des:"北京的烤鸭，吃过都说好",manual:"",quantity:0,price:1,found:false},
    {id:2,name:"苹果",des:"红苹果，挺脆",manual:"",quantity:0,price:10,found:false},
    {id:3,name:"圣水",des:"它可以对角色周围敌人造成大量伤害",manual:"",price:10,quantity:0,found:false},
    {id:4,name:"致命的毒药",des:"？？？",manual:"",quantity:0,price:10,found:false},
    {id:5,name:"浸血的纸巾",des:"擦拭擦拭",manual:"",quantity:0,price:10,found:false},
    {id:6,name:"苦咖啡",des:"提神醒脑!晚上睡不着",manual:"",quantity:0,price:10,found:false},
    {id:7,name:"剩菜",des:"馊了的剩菜,吃了要拉肚子",manual:"",quantity:0,price:10,found:false},
    {id:8,name:"血偿",des:"借你血!但你要还",manual:"",quantity:0,price:10,found:false},
    {id:9,name:"赌博机",des:"陪你到天荒地老!",manual:"",quantity:0,price:10,found:false},
    {id:10,name:"必胜的赌博机",des:"必须让你赢!",manual:"",quantity:0,price:10,found:false},
    {id:11,name:"压力山大&最后一搏",des:"你确定它是BOSS?",manual:"",quantity:0,price:10,found:false},
    {id:12,name:"射偏的子弹",des:"它是你最后的希望",manual:"",quantity:0,price:10,found:false},
    {id:13,name:"生命赌博计时器",des:"你能否在规定回合内杀死所有怪物?",manual:"",quantity:0,price:10,found:true},
    {id:14,name:"死神的沙漏",des:"跑吧,跑吧",manual:"",quantity:1,price:0,found:true},
    {id:15,name:"巫师的毒药",des:"享受生命虚脱的时刻",manual:"",quantity:0,price:10,found:false},
    {id:16,name:"横冲直撞",des:"试试看,保证让你横冲直撞",manual:"",quantity:0,price:10,found:false},
    {id:17,name:"拿破仑的石镐",des:"发现新大陆",manual:"",quantity:1,price:10,found:true},
    {id:18,name:"镜子碎片",des:"映射出反着的自己",manual:"",quantity:0,price:10,found:false},
    {id:19,name:"烙印",des:"保证你忘不掉它",manual:"",quantity:1,price:10,found:true},
    {id:20,name:"盗版光盘",des:"复制一个一样的!",manual:"",quantity:0,price:10,found:true},
    {id:21,name:"爱财如命",des:"为了钱!得到钱!",manual:"",quantity:0,price:10,found:false},
    {id:22,name:"卖血",des:"穷途末路...",manual:"",quantity:0,price:10,found:false},
    {id:23,name:"腐烂的肉",des:"吐出来的比吃下去的多!",manual:"",quantity:0,price:10,found:false},
    {id:24,name:"献祭",des:"向撒旦证明你的忠诚!",manual:"",quantity:0,price:10,found:false},
    {id:25,name:"上膛",des:"我准备着战斗",manual:"",quantity:0,price:10,found:false},
    {id:26,name:"短兵相接",des:"它证明你是最强的",manual:"",quantity:0,price:10,found:false},
    {id:27,name:"轰炸鸡",des:"咯咯哒!",manual:"",quantity:0,price:10,found:false},
    {id:28,name:"生长激素",des:"助你快速成长!",manual:"",quantity:0,price:10,found:false},
    {id:29,name:"反应迟钝",des:"我想回到从前",manual:"",quantity:0,price:10,found:false},
    {id:30,name:"造物骰子",des:"它可以创造一切!",manual:"",quantity:1,price:10,found:false},
    {id:31,name:"指物针",des:"看看它,得到一切!",manual:"",quantity:0,price:10,found:false},
    {id:32,name:"大法师的指甲",des:"改变你所看到的",manual:"",quantity:1,price:10,found:false},
    {id:33,name:"测试道具 下一层",des:"",manual:"",quantity:0,price:0,found:false},
    {id:34,name:"药草",des:"轻微恢复角色",manual:"",quantity:0,price:10,found:false},
    {id:35,name:"后悔药",des:"想回到从前?",manual:"",quantity:1,price:10,found:false},
];
for(var _times in sitem)
{
    mainMap.bag.push(sitem[_times]);
}




//eq为装备状态,canBeEq为是否可被装备,found为是否拥有
var equip=
[
    {id:1,name:"泼妇的擀面杖",des:"携带时攻击+10,如果作为装备攻击额外加5",eq:false,canBeEq:true,found:true},
    {id:2,name:"血债",des:"装备时HP+400,解除时HP-400",eq:false,canBeEq:true,found:false},
    {id:3,name:"破旧的棉裤",des:"装备时防御+7,攻击-2",eq:false,canBeEq:true,found:false},
    {id:4,name:"铁皮护盾",des:"防御+2,装备时防御额外加1",eq:false,canBeEq:true,found:true},
    {id:5,name:"幸运的沙漏",des:"装备时,每回合行动点数+1",eq:false,canBeEq:true,found:true},
    {id:6,name:"比特币",des:"进入黑市不需要消耗HP",eq:false,canBeEq:false,found:true},
    {id:7,name:"狼牙",des:"装备时,攻击+20,丢弃时攻击额外-5",eq:false,canBeEq:true,found:true},
    {id:8,name:"甜蜜的痛苦",des:"角色HP减少时,一定机率增MP+10",eq:false,canBeEq:false,found:false},
    {id:9,name:"打气筒",des:"装备时,下次近战完成后,极小几率增加1攻击",eq:false,canBeEq:true,found:false},
    {id:10,name:"兵法书",des:"携带时,升级所需EXP减少5",eq:false,canBeEq:false,found:false},
    {id:11,name:"大法师的权杖",des:"装备时,攻击+25,非法师职业携带时,每次战斗结束后HP-50",eq:false,canBeEq:true,found:false},
]
for(var _times in equip)
{
    mainMap.equip.push(equip[_times]);
}

for(var _times=300;_times>0;_times-=1){itemList.push({});}
for(var _times=100;_times>0;_times-=1){equipList.push({});equipCancelList.push({});pickEquipList.push({});dropEquipList.push({});}

itemList[1] = function(){aHP(100);aMP(10);}
itemList[2] = function(){aHP(10);aMP(10);}
itemList[3] = function()
{
    mainMap.consoleInformation+="使用圣水!<br>"
    aHP(10);
    for(var coorX=-1;coorX<2;coorX+=1)
    for (var coorY=-1;coorY<2;coorY+=1)
    {
        if(mainMap.actorCoor[0]+coorX>0&&mainMap.actorCoor[0]+coorX<12&&mainMap.actorCoor[1]+coorY>0&&mainMap.actorCoor[1]+coorY<12)
        if(JSON.stringify(mainMap.master[Number(mainMap.actorCoor[0])+coorX][Number(mainMap.actorCoor[1])+coorY])==="{}");
            else
            {
                mainMap.master[mainMap.actorCoor[0]+coorX][mainMap.actorCoor[1]+coorY].HP-=350;
                if(mainMap.killMaster(350,mainMap.master[mainMap.actorCoor[0]+coorX][mainMap.actorCoor[1]+coorY],mainMap.actorCoor[0]+coorX,mainMap.actorCoor[1]+coorY));
                else{mainMap.consoleInformation+="使用圣水!"+mainMap.master[mainMap.actorCoor[0]+coorX][mainMap.actorCoor[1]+coorY].masterType+"损伤350HP<br>";}
            }
    }
}
itemList[4] = function(){aHP(-Math.ceil(mainMap.actor.HP*0.8));aMP(500);}
itemList[5] = function()
{
    var _char=randomStr(1,"12")
    if(_char=="1")
    {aHP(10);}
    else{aHP(-10);}
}
itemList[6] = function()
{
    aMP(20);
    mainMap.i_if[sitem[6-1].id]=mainMap.round+3;
    mainMap.roundFunction.push
    (
        function()
        {if(mainMap.round===mainMap.i_if[sitem[6-1].id]){aHP(-10);return true;}}
    )
}
itemList[7] = function()
{
    aHP(30);
    mainMap.i_if[sitem[7-1].id]=mainMap.round+2;
    mainMap.roundFunction.push
    (
        function()
        {if(mainMap.round===mainMap.i_if[sitem[7-1].id]){aHP(-50);return true;}}
    )
}
itemList[8] = function()
{
    aHP(100);
    mainMap.i_if[sitem[8-1].id]=mainMap.round+5;
    mainMap.roundFunction.push
    (
        function()
        {if(mainMap.round===mainMap.i_if[sitem[8-1].id]){aHP(-100);return true;}}
    )
}
itemList[9] = function()
{mainMap.bag[9].quantity+=1;
    if(mainMap.actor.GOL>=10)
    {
        mainMap.actor.GOL-=10;
        var _char=randomStr(1,"123456789");
        if (_char==="1"){aHP(20);mHIS("增加20HP");}
        else if (_char==="2"){aMP(20);mHIS("增加20MP");}
        else if (_char==="3"){aEXP(50);mHIS("增加50EXP");}
        else if (_char==="4"){aHP(-10);mHIS("减少10HP");}
        else if (_char==="5"){aGOL(15);mHIS("增加15金币");}
        else {mHIS("但是什么也没发生");}
    }
    else{mHIS("但是钱不够了");}
}
itemList[10] = function()
{
    if(mainMap.actor.GOL>=10)
    {
        mainMap.actor.GOL-=10;
        var _char=randomStr(1,"1235");
        if (_char==="1"){aHP(20);mHIS("增加20HP");}
        else if (_char==="2"){aMP(20);mHIS("增加20MP");}
        else if (_char==="3"){aEXP(50);mHIS("增加50EXP");}
        else if (_char==="5"){aGOL(15);mHIS("增加15金币");}
        mHIS("必胜的赌博机坏了");
    }
    else{mHIS("但是钱不够了");}
}
itemList[11] = function()
{ 
    mainMap.actor.DEF=mainMap.actor.DEF<=0?1:mainMap.actor.DEF;
    mainMap.actor.GOL=mainMap.actor.GOL<=0?1:mainMap.actor.GOL;
    aHP(mainMap.actor.DEF*mainMap.actor.GOL/5*3);
    mainMap.actor.DEF=Math.ceil(mainMap.actor.DEF/2);mainMap.actor.GOL=0;
}
itemList[12] = function()
{
   if(!(JSON.stringify(mainMap.master[mainMap.actorCoor[0]+mainMap.FaceY][mainMap.actorCoor[1]+mainMap.FaceX])==="{}"))
    {var audio=new Audio("music/skill.ogg");audio.volume=mainMap.seVolume;audio.play();
        if(randomStr(1,"qwertyuiop12345678")=="1")
        mainMap.killMaster(999999,mainMap.master[mainMap.actorCoor[0]+mainMap.FaceY][mainMap.actorCoor[1]+mainMap.FaceX],mainMap.actorCoor[0]+mainMap.FaceY,mainMap.actorCoor[1]+mainMap.FaceX)
        else {mHIS("子弹射偏了");}
    }
    else{mainMap.consoleInformation="你的朝向的那边并没有怪物";mainMap.bag[12].quantity+=1;}
}
itemList[13] = function()
{ 
    mainMap.i_if[sitem[13-1].id]=mainMap.round+10;
    for(var _times in mainMap.master)
    for (var t2 in mainMap.master[_times])
    if(!(JSON.stringify(mainMap.master[_times][t2])==="{}")){mainMap.master[_times][t2].HP/=2;}
    mainMap.roundFunction.push
    (
        function()
        {if(mainMap.round===mainMap.i_if[sitem[13-1].id])
         {for(var _times in mainMap.master)
            for (var t2 in mainMap.master[_times])
            if(!(JSON.stringify(mainMap.master[_times][t2])==="{}")){over(1);}
            return true;
         }
        }
    )
}
itemList[14] = function()
{ 
    for(var _times in mainMap.master)
    for (var t2 in mainMap.master[_times])
    if(!(JSON.stringify(mainMap.master[_times][t2])==="{}"))
    {mainMap.killMaster(mainMap.master[_times][t2].HP,mainMap.master[_times][t2],_times,t2);}
    var t_d=setTimeout("over(1)",3300);   
}
itemList[15] = function()
{ 
    mainMap.i_if[sitem[15-1].id]=mainMap.round+10;
    mainMap.roundFunction.push
    (
        function()
        {
            var _char = randomStr(1,"1234");
            aHP(-Number(_char));aMP(-Number(_char));
            if(mainMap.round===mainMap.i_if[sitem[15-1].id])return true;
        }
    )
}
itemList[16] = function()
{
    mainMap.actor.ATT+=80;
    mainMap.roundFunction.push
    (function(){aHP(-10);})
}
itemList[17] = function()
{
    if(mainMap.gameMap[mainMap.actorCoor[0]+mainMap.FaceY][mainMap.actorCoor[1]+mainMap.FaceX]===2)
    {
        mainMap.gameMap[mainMap.actorCoor[0]][mainMap.actorCoor[1]]=1;
        mainMap.largeMap[mainMap.actorCoor[0]][mainMap.actorCoor[1]]="img/bitem.png";
        mainMap.gameMap[mainMap.actorCoor[0]+mainMap.FaceY][mainMap.actorCoor[1]+mainMap.FaceX]=9;
        mainMap.actorCoor[0]=mainMap.actorCoor[0]+mainMap.FaceY;
        mainMap.actorCoor[1]=mainMap.actorCoor[1]+mainMap.FaceX;
        mainMap.largeMap[mainMap.actorCoor[0]][mainMap.actorCoor[1]]="img/actor.png";
    }
    else
    {
        if(mainMap.action==1)mainMap.action+=1;
        else{mainMap.round-=1;}
        mainMap.bag[17].quantity+=1;
        mHIS("前方不是墙");
    }
}
itemList[18] = function()
{
    aATT(aDEF(0));
    mainMap.actor.DEF=mainMap.actor.ATT-mainMap.actor.DEF;
    aATT(-aDEF(0));
    mainMap.actor.HP+=mainMap.actor.MP;
    mainMap.actor.MP=mainMap.actor.HP-mainMap.actor.MP;
    mainMap.actor.HP=mainMap.actor.HP-mainMap.actor.MP;
}
itemList[19] = function()
{
    mainMap.i_if[sitem[19-1].id]=1;
}
itemList[20] = function()
{
    mainMap.i_if[sitem[20-1].id]=1;
}
itemList[21] = function()
{
    if (mainMap.actor.HP==200)
        aGOL(1000);
    else{aGOL(200);}
}
itemList[22] = function()
{
    if(aHP(0)>500)
    {aHP(-500);
    aGOL(500);}
}
itemList[23] = function()
{
    aHP(5000);
    mainMap.i_if[sitem[23-1].id]=mainMap.round+10;
    mainMap.roundFunction.push
    (
        function()
        {if(mainMap.round===mainMap.i_if[sitem[23-1].id]){aHP(-800);return true;}aHP(-800);}
    )
}
itemList[24] = function()
{
    if(aHP(0)>1000)
    {aHP(-2000);
    mainMap.i_if[sitem[24-1].id]=1;}
}
itemList[25] = function()
{
    aATT(20);
    mainMap.i_if[sitem[25-1].id]=mainMap.round+3;
    mainMap.roundFunction.push
    (
        function()
        {if(mainMap.round===mainMap.i_if[sitem[25-1].id]){aATT(-20);return true;}}
    )
}
itemList[26] = function(){mainMap.i_if[sitem[26-1].id]=1;}
itemList[27] = function()
{ 
    for(var _times in mainMap.master)
    for (var t2 in mainMap.master[_times])
    if(!(JSON.stringify(mainMap.master[_times][t2])==="{}"))
    if(randomStr(1,"11122222")=="1")
    {mainMap.master[_times][t2].HP*=0.7;}
}
itemList[28] = function(){aEXP(500);}
itemList[29] = function()
{ 
    if(mainMap.round>=4)
    mainMap.round-=3
    else mainMap.round=1;
}
itemList[30] = function(){mainMap.bag[parseInt(Math.random()*(30-1+1)+1,10)].quantity+=1}
function randomMasterType(coorX,coorY)
{
    var r = randomStr(1,"12");
    if(r==="1")
    {
        mainMap.gameMap[coorX][coorY]=11;
        mainMap.master[coorX][coorY].masterType="master1";
        mainMap.master[coorX][coorY].PIC="img/g1.gif";
        mainMap.largeMap[coorX][coorY]="img/g1.gif";
    }
    if(r==="2")
    {
        mainMap.gameMap[coorX][coorY]=11;
        mainMap.master[coorX][coorY].masterType="master2";
        mainMap.master[coorX][coorY].PIC="img/g2.gif";
        mainMap.largeMap[coorX][coorY]="img/g2.gif";
    }
}
itemList[32] = function()
{ 
    for(var _times in mainMap.master)
    for (var t2 in mainMap.master[_times])
    if(!(JSON.stringify(mainMap.master[_times][t2])==="{}"))
    {
        randomMasterType(_times,t2);
    }
    Refresh();
}
itemList[33] = function(){mainMap.goNextMap();Refresh();}
itemList[34] = function(){aHP(5);aMP(5);}
itemList[35] = function()
{ 
    if(mainMap.itemEffect.recordHPSwitch===0)
    {
        mainMap.itemEffect.recordHP=mainMap.actor.HP;
        mainMap.itemEffect.recordHPSwitch=1;
        mainMap.bag[35].quantity+=1;
    }
    else
    {
        mainMap.actor.HP=mainMap.itemEffect.recordHP;
    }
}


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
function itemUse(item){itemList[item.id]();}
function equipUse(item){equipList[item.id]();}
function pickEquip(id){pickEquipList[id]();}
//    mainMap.i_if[sitem[8-1].id]=mainMap.round+5;
//    mainMap.roundFunction.push
//    (
//        function()
//        {if(mainMap.round===mainMap.i_if[sitem[8-1].id]){aHP(-100);return true;}}
//    )

pickEquipList[1] = function(){aATT(10);}
dropEquipList[1] = function(){aATT(-10);}
equipList[1] = function(){aATT(5);}
equipCancelList[1] = function(){aATT(-5);}
pickEquipList[2] = function(){aATT(10);}
dropEquipList[2] = function(){aATT(-10);}
equipList[2] = function(){mainMap.actor.HP+=400;}
equipCancelList[2] = function(){mainMap.actor.HP-=400;}
pickEquipList[3] = function(){}
dropEquipList[3] = function(){}
equipList[3] = function(){aATT(-2);aDEF(7);}
equipCancelList[3] = function(){aATT(2);aDEF(-7);}
pickEquipList[4] = function()
{
 
}
dropEquipList[4] = function()
{
    
}
equipList[4] = function()
{
  
}
equipCancelList[4] = function()
{
   
}
pickEquipList[5] = function()
{
   
}
dropEquipList[5] = function()
{

}
equipList[5] = function()
{
  
}
equipCancelList[5] = function()
{
   
}
pickEquipList[6] = function()
{alert(1);
}
dropEquipList[6] = function()
{
}
pickEquipList[7] = function()
{
}
dropEquipList[7] = function()
{ 
    aATT(-5);
}
equipList[7] = function()
{
  aATT(20);
}
equipCancelList[7] = function()
{
   aATT(-20);
}
pickEquipList[8] = function(){}
dropEquipList[8] = function(){}
equipList[8] = function(){}
equipCancelList[8] = function(){}

pickEquipList[9] = function(){}
dropEquipList[9] = function(){}
equipList[9] = function(){}
equipCancelList[9] = function(){}

pickEquipList[10] = function(){}
dropEquipList[10] = function(){}
equipList[10] = function(){}
equipCancelList[10] = function(){}

pickEquipList[11] = function(){}
dropEquipList[11] = function(){}
equipList[11] = function(){aATT(25)}
equipCancelList[11] = function(){aATT(-25)}

//pickEquipList[4] = function(){}
//dropEquipList[4] = function(){}
//equipList[4] = function(){}
//equipCancelList[4] = function(){}