var mainMap = new Vue({
    el:".mainMap",
    data:
    {//物品信息看下面
        mapSeed:"",floor:1,
        mapRefresh:true,mainMenuRefresh:false,skillPanelRefresh:false,skillTurned:false,
        historyRefresh:false,itemRefresh:false,manualRefresh:false,blackRefresh:false,
        easy:false,easy2:0,canDrop:true,dropID:0,dropID1:0,dropID2:0,itemPage1:true,itemPage2:false,
        actorCoor:[0,0],
        FaceX:0,FaceY:0,action:2,round:1,
        gameMap:[],largeMap:[],mapInfo:"",   
        actor:{HP:100000,MP:2200,ATT:10,DEF:10,EXP:0,SKL:0,LEV:1,GOL:200,EQUIP:["无","无"],EID:[0,0],PRO:"平凡",EQnum:0,MaxHP:0},
        bag:[{}],equip:[{}],
        blackShop:[{},{id:1,name:"烤鸭",des:"北京的烤鸭，吃过都说好",quantity:50,price:5},{id:2,name:"苹果",des:"北京的烤鸭，吃过都说好",quantity:50,price:5}],
        i_if:[],b_if:[],
        master:[],masterCoor:[],masterID:1,
        master1:{masterType:"master1",HP:700,ATT:15,EXP:1,PIC:"img/g1.gif",MID:0},
        master2:{masterType:"master2",HP:10,ATT:15,EXP:80,PIC:"img/g2.gif",MID:0},
        consoleInformation:"欢迎来到XXX游戏！鼠标停留在技能或背包面板即可看到技能或背包介绍！",
        consoleInformation2:"",
        roundFunction:[],
        history:"",
        bgVolume:0.0,
        seVolume:0.0,
        //技能开关
        s_quickTreat:false,s_switchMP:false,s_arrow:true,s_strLine:true,
        Build_Map:{AEQ:0,AIT:0,BEQ:0,BIT:0,CEQ:0,CIT:0,DEQ:0,DIT:0,EEQ:0,EIT:0,BOSS1IT:0,BOSS1EQ:0,BOSS2IT:0,BOSS2EQ:0,BOSS3IT:0,BOSS3EQ:0,AU:"",AD:"",AL:"",AR:"",BU:"",BR:"",BD:"",BL:"",CU:"",CD:"",CL:"",CR:"",DU:"",DD:"",DL:"",DR:"",EU:"",ED:"",EL:"",ER:"",BOSSU:"",BOSSD:"",BOSSL:"",BOSSR:""},
        currentMap:"",
        saveMapList:{MBOSS:[],LBOSS:[],GBOSS:[],GA:[],GB:[],GC:[],GD:[],GE:[],LA:[],LD:[],LB:[],LC:[],LE:[],MA:[],MB:[],MC:[],MD:[],ME:[]},
        itemEffect:{recordHP:0,recordHPSwitch:0}
    },
    methods:
    {
        //根据gameMap生成largeMap等的初始化函数
        buildMap()
        {
            details_buildMap();
        },
        //角色移动函数,和下一个函数共同组成
        moveActor(coorY,coorX)
        {
//            alert("movea"+mainMap.gameMap[coorX][coorY])
            if (coorY>=0&&coorY<12&&coorX<12&&coorX>=0)
            {
                if(mainMap.gameMap[coorX][coorY]>10&&mainMap.gameMap[coorX][coorY]<15)
                {
                    if(mainMap.fight(mainMap.master[coorX][coorY]))
                    {mainMap.setActor(coorX,coorY);
                    mainMap.master[coorX][coorY]={};
                     if(mainMap.i_if[sitem[24-1].id]==1&&randomStr(1,"22122")==="1")aHP(25);
                     if(mainMap.equip[9].eq==true&&randomStr(1,"122212222222222")=="1")aATT(1);
                     if(mainMap.equip[11].found==true&&!(mainMap.actor.PRO=="法师"))aHP(-50);
                    }
                }
                else if(mainMap.largeMap[coorX][coorY]=="img/grass.png")
                {
                    mainMap.setActor(coorX,coorY);
                    if(randomStr(1,"331333333")==="1")
                        mainMap.bag[34].quantity+=1;
                }
                else if(mainMap.gameMap[coorX][coorY]==1){mainMap.setActor(coorX,coorY);}
                else if(mainMap.gameMap[coorX][coorY]==9){mainMap.setActor(coorX,coorY);}
                else if(mainMap.gameMap[coorX][coorY]==3){goNextMap(3);}
                else if(mainMap.gameMap[coorX][coorY]==4){goNextMap(4);}
                else if(mainMap.gameMap[coorX][coorY]==5){goNextMap(5);}
                else if(mainMap.gameMap[coorX][coorY]==6){goNextMap(6);}
                else if(Number(mainMap.gameMap[coorX][coorY])>=30)
                {
                    mainMap.canDrop==false;
                    if(mainMap.actor.EQnum<5)
                    {
                        pickEquip(Number(mainMap.gameMap[coorX][coorY])-30);
                        mainMap.actor.EQnum+=1;
                        mainMap.equip[mainMap.gameMap[coorX][coorY]-30].found=true;
                        mainMap.setActor(coorX,coorY);   
                    }
                    else
                    {//包不够的情况下
                        mainMap.canDrop=false;
                        if(mainMap.i_if[292]==0)
                        {      
                            mainMap.dropID1=mainMap.gameMap[coorX][coorY];
                            mainMap.i_if[292]=mainMap.actorCoor[0]+mainMap.FaceY;
                            mainMap.i_if[293]=mainMap.actorCoor[1]+mainMap.FaceX;
                            mainMap.roundFunction.push
                            (
                            function()
                            {
                            if(mainMap.i_if[292]!=mainMap.actorCoor[0]||mainMap.i_if[293]!=mainMap.actorCoor[1])
                                {
                                    mainMap.gameMap[mainMap.i_if[292]][mainMap.i_if[293]]=mainMap.dropID1;
                                    mainMap.largeMap[mainMap.i_if[292]][mainMap.i_if[293]]="img/item.png";
                                    if(mainMap.i_if[294]==0)mainMap.canDrop=true;
                                    mainMap.i_if[292]=0;
                                    return true;
                                }
                            }
                            )
                        }
                        else//294,295
                        {
                            mainMap.dropID2=mainMap.gameMap[coorX][coorY];
                            mainMap.i_if[294]=mainMap.actorCoor[0]+mainMap.FaceY;
                            mainMap.i_if[295]=mainMap.actorCoor[1]+mainMap.FaceX;
                            mainMap.roundFunction.push
                            (
                            function()
                            {
                            if(mainMap.i_if[294]!=mainMap.actorCoor[0]||mainMap.i_if[295]!=mainMap.actorCoor[1])
                                {
                                    mainMap.gameMap[mainMap.i_if[294]][mainMap.i_if[295]]=mainMap.dropID2;
                                    mainMap.largeMap[mainMap.i_if[294]][mainMap.i_if[295]]="img/item.png";
                                    if(mainMap.i_if[292]==0)mainMap.canDrop=true;
                                    mainMap.i_if[294]=0;
                                    return true;
                                }
                            }
                            )    
                        } 
                        mainMap.setActor(coorX,coorY);
                    }
                }
            mainMap.roundEnd();
            }
        },
        //角色移动辅助函数
        setActor(coorX,coorY)
        {
            mainMap.largeMap[mainMap.actorCoor[0]][mainMap.actorCoor[1]]="img/bitem.png";
            mainMap.largeMap[coorX][coorY]="img/actor.png";
            mainMap.gameMap[coorX][coorY]=9;
            mainMap.gameMap[mainMap.actorCoor[0]][mainMap.actorCoor[1]]=1;
            mainMap.actorCoor[0]=coorX;
            mainMap.actorCoor[1]=coorY;
        },
        //角色与怪物近战的函数,战斗成功返回true
        fight(master)
        {
            var audio=new Audio("music/attack.ogg");audio.volume=mainMap.seVolume;audio.play();
            if(mainMap.comHP(mainMap.actor,master))
            {
                //物品短兵相接效果触发函数
                var var26=master.ATT/(mainMap.actor.DEF/10)*(master.HP/mainMap.actor.ATT);
                aHP(-(master.ATT/(mainMap.actor.DEF/10)*(master.HP/mainMap.actor.ATT)));
                aEXP(master.EXP);
                mainMap.consoleInformation2="干掉了"+master.masterType+"!";
                mainMap.history+=mainMap.consoleInformation2+"<br>";
                if(mainMap.i_if[sitem[26-1].id]==1)
                {mainMap.actor.HP+=Math.ceil(var26);mainMap.i_if[sitem[26-1].id]=0;}
                return true;
            }
            else{mainMap.consoleInformation2="当前HP不足以维持战斗!<br>";return false;} 
        },
        //自动比较是否可以战斗,如果主角HP足够则返回true
        //计算公式:损耗HP=取整(怪物的攻击力/(主角防御力/10)*(怪物的HP/主角的攻击力))
        comHP(actor,master)
        {return (actor.HP>Math.ceil(master.ATT/(actor.DEF/10))*master.HP/actor.ATT)?true:false;},
        //角色升级函数
        levelUp()
        {
            let dmd=80;let common=100;
            if(mainMap.equip[10].found){dmd-=5;commom-=5};
            while(mainMap.actor.EXP>=dmd&&mainMap.action.PRO=="倒霉蛋")
            {
                mainMap.actor.LEV+=1;mainMap.actor.SKL+=1;
                mainMap.actor.EXP-=80;mainMap.actor.ATT+=2;
                mainMap.actor.DEF+=2;aHP(5);aMP(5);
            }
            while(mainMap.actor.EXP>=common)
            {
                mainMap.actor.LEV+=1;mainMap.actor.SKL+=1;
                mainMap.actor.EXP-=100;mainMap.actor.ATT+=2;
                mainMap.actor.DEF+=2;aHP(5);aMP(5);
            }
        },
        //关闭所有面板(包括有主菜单和技能面板)
        closeAllPanel()
        {mainMap.skillPanelRefresh=false;mainMap.mainMenuRefresh=false;},
        //鼠标移动到主菜单按钮上显示提示信息
        initialConsoleInformation(){mainMap.consoleInformation="欢迎来到XXX游戏！鼠标停留在技能面板即可看到技能介绍！";message('_menu')},
        //查看技能面板,二次点击自动关闭
        viewSkillPanel()
        {   
            if(mainMap.skillPanelRefresh)
            {mainMap.closeAllPanel();}
            else{mainMap.closeAllPanel();mainMap.skillPanelRefresh=true;}   
        },
        //查看主菜单,二次点击自动关闭
        viewMainMenu()
        {
            if(mainMap.mainMenuRefresh){mainMap.closeAllPanel();}
            else{mainMap.closeAllPanel();mainMap.mainMenuRefresh=true;}
        },
        //查看背包,二次点击自动关闭
        viewItem()
        {mainMap.itemRefresh=mainMap.itemRefresh?false:true;},
        //查看黑市,消耗1HP,二次点击自动关闭
        viewBlack()
        {
            if(!mainMap.blackRefresh)
            {
                mainMap.blackRefresh=true;
                if(!(mainMap.equip[6].found))aHP(-1);
                mainMap.b_if[Number(randomStr(1,"12"))]=true;
            }
            else
            {
                mainMap.blackRefresh=false;
                for(var _times in mainMap.b_if){mainMap.b_if[_times]=false;};
            }
        },
        //查看道具图鉴,二次点击自动关闭
        viewManual(){mainMap.manualRefresh=mainMap.manualRefresh?false:true;},
        //重置一局新的游戏,页面刷新
        restart(){location.reload();},
        //开启控制台
        viewHistory(){mainMap.historyRefresh=mainMap.historyRefresh?false:true;},
        roundEnd()
        {
            //清空信息界面
            mainMap.consoleInformation="";mainMap.consoleInformation2="";
            for(var _times=2;_times!=0;_times--)
            //控制台信息太多则自动清理
            if(countStr("<br>")>10)
            {var c="";var j=0;var h=0;
                h=mainMap.history.indexOf("<br>");
                for(q1 in mainMap.history)
                {if(++j<h+5);else c+=mainMap.history[q1];}
            mainMap.history=c;
            }    
            //回合点数重置
            mainMap.action=mainMap.equip[5].eq?3:2;
            mainMap.round+=1;
            //执行延期执行的函数
            //因为splice函数会使数组删除的元素的后面的元素位置补全,所以加入fix作为修正变量
            var ctimes=[];var fix=0;
            for(var _times in mainMap.roundFunction)
            {if(mainMap.roundFunction[_times]()){ctimes.push(_times);}}
            for (var _ctimes in ctimes){mainMap.roundFunction.splice(ctimes[_ctimes]+fix,1);fix-=1;}
            
            masterMove();
        },
        //判断是否可以杀死怪物,如果可以,抹掉后并返回true
        killMaster(damage,master,coorX,coorY)
        {if(damage>=master.HP)
        {   mainMap.master[coorX][coorY]={};
            mainMap.largeMap[coorX][coorY]="img/bitem.png";
            mainMap.gameMap[coorX][coorY]=1;
            mainMap.consoleInformation2+="杀死了"+master.masterType+"!<br>";
            mainMap.history+="杀死了"+master.masterType+"!<br>";
            aEXP(master.EXP);
            return true;
        }
        return false;
        }, 
        //使用道具函数,自动计算回合点数,使用后加入道具图鉴
        useItem(item)
        {  
            //道具:光盘的效果
            if(mainMap.i_if[sitem[20-1].id]==1)
            {
                mainMap.history+="复制道具:"+item.name+"!<br>";
                mainMap.i_if[sitem[20-1].id]=0;
                mainMap.bag[item.id].quantity+=1;
            }
            else
            {
            mainMap.history+="使用道具:"+item.name+"!<br>";
            mainMap.bag[item.id].found=true;
            mainMap.bag[item.id].quantity-=1;
            itemUse(item);
            //控制台信息太多则自动清理
            if(countStr("<br>")>10)
            {var c="";var j=0;var h=0;
                h=mainMap.history.indexOf("<br>");
                for(q1 in mainMap.history)
                {if(++j<h+5);else c+=mainMap.history[q1];}
            mainMap.history=c;
            }     
            }       
        if(!--mainMap.action){mainMap.roundEnd();}
        },
        dropItem(item){mainMap.bag[item.id].quantity-=1;},
        buyItem(item)
        {
            if(mainMap.actor.GOL>=item.price*10)
            {
                mainMap.bag[item.id].quantity+=1;
                aGOL(-item.price*10);
                mainMap.blackShop[item.id].quantity-=1;
            }
        },
        equipItem(item)
        {
            if(item.canBeEq)
            {mainMap.actor.EQnum-=1;
                if(mainMap.actor.EQUIP[0]=="无")
                {
                    mainMap.actor.EQUIP[0]=item.name;
                    mainMap.equip[item.id].eq=true;
                    equipList[item.id]();
                    mainMap.actor.EID[0]=item.id;
                    return true;
                }
                else if(mainMap.actor.EQUIP[1]=="无")
                {
                    mainMap.actor.EQUIP[1]=item.name;
                    mainMap.equip[item.id].eq=true;
                    equipList[item.id]();
                    mainMap.actor.EID[1]=item.id;
                    return true;
                }
            }
        },
        equipCancelItem(index)
        {
            if(mainMap.actor.EQnum>=5)
            {
                if(mainMap.canDrop)
                {
                    dropEquipList[mainMap.actor.EID[index]]();
                    mainMap.dropEquip(mainMap.equip[mainMap.actor.EID[index]]);
                    mainMap.equip[mainMap.actor.EID[index]].eq=false;
                    mainMap.equip[mainMap.actor.EID[index]].found=false;
                    mainMap.actor.EQUIP[index]="无";
                    mainMap.actor.EQnum+=1;
                    equipCancelList[mainMap.actor.EID[index]]();
                    return true;
                }
            }
            else if(mainMap.actor.EQUIP[index]=="无");
            else
            {
                mainMap.actor.EQnum+=1;
                mainMap.equip[mainMap.actor.EID[index]].eq=false;
                mainMap.actor.EQUIP[index]="无";
                equipCancelList[mainMap.actor.EID[index]]();
            }
        },
        dropEquip(item)
        {
            if(aHP(0)>1000&&mainMap.i_if[sitem[19-1].id]==1)
            {
                if(item.canBeEq)equipList[item.id]();
                else{pickEquip(item.id);}
                aHP(-1000);
                mainMap.equip[item.id].found=false;
                mainMap.actor.EQnum-=1;
                mainMap.i_if[sitem[19-1].id]=0;
                return true;
            }
            if(mainMap.canDrop==true)
            {
                mainMap.actor.EQnum-=1;
                mainMap.dropID=mainMap.equip[item.id].id;
                dropEquipList[mainMap.equip[item.id].id]();
                mainMap.equip[item.id].found=false;
                mainMap.canDrop=false;
                mainMap.i_if[290]=mainMap.actorCoor[0];
                mainMap.i_if[291]=mainMap.actorCoor[1];
                mainMap.roundFunction.push
                (
                function()
                {
                if(mainMap.i_if[290]!=mainMap.actorCoor[0]||mainMap.i_if[291]!=mainMap.actorCoor[1])
                {
                    mainMap.gameMap[mainMap.i_if[290]][mainMap.i_if[291]]=mainMap.dropID+30;
                    mainMap.largeMap[mainMap.i_if[290]][mainMap.i_if[291]]="img/item.png";
                    mainMap.canDrop=true;
                    return true;
                }
                }
                )
            }
        },
        goNextMap()
        {
            for(var t1 in mainMap.gameMap)
            for (var t2 in mainMap.gameMap[t1])
            {
                mainMap.gameMap[t1][t2]=1;
//                mainMap.largeMap[t1][t2]="img/bitem.png";
                mainMap.master[t1][t2]=JSON.parse(JSON.stringify({}));
            }
            mainMap.gameMap[0][0]=9;
            mainMap.buildMap();
        }
    }
});
/*
mapSeed为当前地图的种子,整个游戏根据种子生成地图
Refresh为控制地图界面刷新的变量
skillTurned为转向技能控制是否释放的变量,true时在initial.js内自动执行
actorCoor记录每回合角色坐标位置,方便其他函数调用
Face控制角色的转向朝向
action,round为回合点数与回合
roundFunction类似于函数栈,每回合执行一遍里面的函数
easy为简单难度开关
i_if为延期执行函数控制变量
b_if为黑市随机商品控制变量
Volume用于控制游戏整体音乐音量
masterN:{怪物模版:"master1",HP:700,ATT:15,EXP:80,怪物对应的图片:"img/g1.gif"}
*/