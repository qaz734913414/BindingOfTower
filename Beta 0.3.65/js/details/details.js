function masterMove()
{
    for(var n1 =-2;n1<=2;n1++)
    for (var n2 =-2;n2<=2;n2++)
    if(aC0()+n1>=0&&aC0()+n1<12&&aC1()+n2>=0&&aC1()+n2<12)
    {
        if (JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2])==="{}"){}
        else 
        {
            if(mainMap.masterCoor.indexOf(mainMap.master[aC0()+n1][aC1()+n2].MID)+1){}
               else{details_masterMove(n1,n2);}
        }
    } 
    for(var n1 =-2;n1<=2;n1++)
    for (var n2 =-2;n2<=2;n2++)
    if(aC0()+n1>=0&&aC0()+n1<12&&aC1()+n2>=0&&aC1()+n2<12)
        {
            if (JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2])==="{}"){}
            else 
            {
                if(mainMap.masterCoor.indexOf(mainMap.master[aC0()+n1][aC1()+n2].MID)+1){}
               else{details_masterMove(n1,n2);}
            }
        }
    mainMap.masterCoor.splice(0,mainMap.masterCoor.length);
    Refresh();
}

function details_masterMove(n1,n2)
{
    if(n2===-2&&n1===0&&mainMap.gameMap[aC0()][aC1()-1]==1)//怪左人右
                {
                    mainMap.master[aC0()][aC1()-1]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()][aC1()-1].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()][aC1()-1]=11;
                    mainMap.largeMap[aC0()][aC1()-1]=mainMap.master[aC0()][aC1()-1].PIC;
                }
                else if(n2===2&&n1===0&&mainMap.gameMap[aC0()][aC1()+1]==1)
                {
                    mainMap.master[aC0()][aC1()+1]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()][aC1()+1].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()][aC1()+1]=11;
                    mainMap.largeMap[aC0()][aC1()+1]=mainMap.master[aC0()][aC1()+1].PIC;
                }
                else if(n1===-2&&n2===0&&mainMap.gameMap[aC0()-1][aC1()]==1)
                {
                    mainMap.master[aC0()-1][aC1()]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()-1][aC1()].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()-1][aC1()]=11;
                    mainMap.largeMap[aC0()-1][aC1()]=mainMap.master[aC0()-1][aC1()].PIC;
                }
                else if(n1===2&&n2===0&&mainMap.gameMap[aC0()+1][aC1()]==1)
                {
                    mainMap.master[aC0()+1][aC1()]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+1][aC1()].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+1][aC1()]=11;
                    mainMap.largeMap[aC0()+1][aC1()]=mainMap.master[aC0()+1][aC1()].PIC;
                }
                else if(n2===-2&&mainMap.gameMap[aC0()+n1][aC1()+1+n2]==1)
                {
                    mainMap.master[aC0()+n1][aC1()+1+n2]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()+n2+1].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1][aC1()+1+n2]=11;
                    mainMap.largeMap[aC0()+n1][aC1()+1+n2]=mainMap.master[aC0()+n1][aC1()+1+n2].PIC;
                }
                else if(n2===2&&mainMap.gameMap[aC0()+n1][aC1()-1+n2]==1)
                {
                    mainMap.master[aC0()+n1][aC1()-1+n2]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()-1+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1][aC1()-1+n2]=11;
                    mainMap.largeMap[aC0()+n1][aC1()-1+n2]=mainMap.master[aC0()+n1][aC1()-1+n2].PIC;
                }
                else if(n1===2&&mainMap.gameMap[aC0()-1+n1][aC1()+n2]==1)
                {
                    mainMap.master[aC0()-1+n1][aC1()+n2]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()-1+n1][aC1()+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()-1+n1][aC1()+n2]=11;
                    mainMap.largeMap[aC0()-1+n1][aC1()+n2]=mainMap.master[aC0()-1+n1][aC1()+n2].PIC;
                }
                else if(n1===-2&&mainMap.gameMap[aC0()+1+n1][aC1()+n2]==1)
                {
                    mainMap.master[aC0()+1+n1][aC1()+n2]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+1+n1][aC1()+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+1+n1][aC1()+n2]=11;
                    mainMap.largeMap[aC0()+1+n1][aC1()+n2]=mainMap.master[aC0()+1+n1][aC1()+n2].PIC;
                }
                else if(n1===-1&&n2>0)//-1的话就触发相反的n2移动
                {
//                    alert(1);
                    if(mainMap.gameMap[aC0()+n1][aC1()+n2-1]==1){
                    mainMap.master[aC0()+n1][aC1()+n2-1]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()+n2-1].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1][aC1()+n2-1]=11;
                    mainMap.largeMap[aC0()+n1][aC1()+n2-1]=mainMap.master[aC0()+n1][aC1()-1+n2].PIC;
                    }  
                    else if(mainMap.gameMap[aC0()+n1+1][aC1()+n2]==1)
                    {
                    mainMap.master[aC0()+n1+1][aC1()+n2]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1+1][aC1()+n2]=11;
                    mainMap.largeMap[aC0()+n1+1][aC1()+n2]=mainMap.master[aC0()+n1+1][aC1()+n2].PIC;
                    }
                }
                else if(n1===-1&&n2<0)//-1的话就触发相反的n2移动
                {
//                    alert(2);
                    if(mainMap.gameMap[aC0()+n1][aC1()+n2+1]==1)
                    {
                    mainMap.master[aC0()+n1][aC1()+n2+1]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1][aC1()+n2+1]=11;
                    mainMap.largeMap[aC0()+n1][aC1()+n2+1]=mainMap.master[aC0()+n1][aC1()+1+n2].PIC;
                    }
                    else if(mainMap.gameMap[aC0()+n1+1][aC1()+n2]==1)
                    {
                    mainMap.master[aC0()+n1+1][aC1()+n2]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1+1][aC1()+n2]=11;
                    mainMap.largeMap[aC0()+n1+1][aC1()+n2]=mainMap.master[aC0()+n1+1][aC1()+n2].PIC;
                    }
                }
                else if(n1===1&&n2<0)//-1的话就触发相反的n2移动
                {
//                    alert(3);
                    if(mainMap.gameMap[aC0()+n1][aC1()+n2+1]===1)
                    {
                        mainMap.master[aC0()+n1][aC1()+n2+1]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1][aC1()+n2+1]=11;
                    mainMap.largeMap[aC0()+n1][aC1()+n2+1]=mainMap.master[aC0()+n1][aC1()+1+n2].PIC;
                    }
                    else if(mainMap.gameMap[aC0()+n1-1][aC1()+n2]===1)
                    {
                    mainMap.master[aC0()+n1-1][aC1()+n2]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1-1][aC1()+n2]=11;
                    mainMap.largeMap[aC0()+n1-1][aC1()+n2]=mainMap.master[aC0()-1+n1][aC1()+n2].PIC;
                    }       
                }
                else if(n1===1&&n2>0)//-1的话就触发相反的n2移动
                {
//                    alert(7);
                    if(mainMap.gameMap[aC0()+n1][aC1()+n2-1]==1)
                    {
                    mainMap.master[aC0()+n1][aC1()+n2-1]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1][aC1()+n2-1]=11;
                    mainMap.largeMap[aC0()+n1][aC1()+n2-1]=mainMap.master[aC0()+n1][aC1()+n2-1].PIC;
                    }
                    else if(mainMap.gameMap[aC0()+n1-1][aC1()+n2]==1){
                    mainMap.master[aC0()+n1-1][aC1()+n2]=JSON.parse(JSON.stringify(mainMap.master[aC0()+n1][aC1()+n2]));
                    mainMap.masterCoor.push(mainMap.master[aC0()+n1][aC1()+n2].MID);
                    mainMap.master[aC0()+n1][aC1()+n2]={};
                    mainMap.gameMap[aC0()+n1][aC1()+n2]=1;
                    mainMap.largeMap[aC0()+n1][aC1()+n2]="img/bitem.png";
                    mainMap.gameMap[aC0()+n1-1][aC1()+n2]=11;
                    mainMap.largeMap[aC0()+n1-1][aC1()+n2]=mainMap.master[aC0()-1+n1][aC1()+n2].PIC;
                    }
                } 
                if (mainMap.gameMap[aC0()+1][aC1()]==11&&!(mainMap.masterCoor.indexOf(mainMap.master[aC0()+1][aC1()].MID)+1))
                {
                    if(mainMap.fight(mainMap.master[aC0()+1][aC1()]))
                    {
                        mainMap.gameMap[aC0()+1][aC1()]=1;
                        mainMap.largeMap[aC0()+1][aC1()]="img/bitem.png";
                        mainMap.master[aC0()+1][aC1()]={};
                    }
                    else alert("游戏结束");
                }
                if (mainMap.gameMap[aC0()-1][aC1()]==11&&!(mainMap.masterCoor.indexOf(mainMap.master[aC0()-1][aC1()].MID)+1))
                {
                    if(mainMap.fight(mainMap.master[aC0()-1][aC1()]))
                    {
                        mainMap.gameMap[aC0()-1][aC1()]=1;
                        mainMap.largeMap[aC0()-1][aC1()]="img/bitem.png";
                        mainMap.master[aC0()-1][aC1()]={};
                    }
                    else alert("游戏结束");
                }
                if (mainMap.gameMap[aC0()][aC1()-1]==11&&!(mainMap.masterCoor.indexOf(mainMap.master[aC0()][aC1()-1].MID)+1))
                {
                    if(mainMap.fight(mainMap.master[aC0()][aC1()-1]))
                    {
                        mainMap.gameMap[aC0()][aC1()-1]=1;
                        mainMap.largeMap[aC0()][aC1()-1]="img/bitem.png";
                        mainMap.master[aC0()][aC1()-1]={};
                    }
                    else alert("游戏结束");
                }
                if (mainMap.gameMap[aC0()][aC1()+1]==11&&!(mainMap.masterCoor.indexOf(mainMap.master[aC0()][aC1()+1].MID)+1))
                {
                    if(mainMap.fight(mainMap.master[aC0()][aC1()+1]))
                    {
                        mainMap.gameMap[aC0()][aC1()+1]=1;
                        mainMap.largeMap[aC0()][aC1()+1]="img/bitem.png";
                        mainMap.master[aC0()][aC1()+1]={};
                    }
                    else alert("游戏结束");
                }
    Refresh();
}

function masterAndItem()
{
    
}

function details_buildMap(){
    for(n1 in mainMap.gameMap)
    for (n2 in mainMap.gameMap[n1])
    {
        if(mainMap.gameMap[n1][n2]===0)
        {mainMap.largeMap[n1][n2]="img/wall.png";}
        else if(mainMap.gameMap[n1][n2]===1)
        {
            if(randomStr(1,"12")==="1")
            mainMap.largeMap[n1][n2]="img/grass.png";
            else mainMap.largeMap[n1][n2]="img/bitem.png";
        }
        else if(mainMap.gameMap[n1][n2]===9){
        mainMap.largeMap[n1][n2]="img/actor.png";
        mainMap.actorCoor[0]=n1;mainMap.actorCoor[1]=n2;
        }
        else if(mainMap.gameMap[n1][n2]==11) //11代表怪物
        {
            mainMap.master[n1][n2]=JSON.parse(JSON.stringify(mainMap.master1));
            mainMap.largeMap[n1][n2]=mainMap.master[n1][n2].PIC;
            mainMap.master[n1][n2].MID=mainMap.masterID;
            mainMap.masterID+=1;
        }
        else if(mainMap.gameMap[n1][n2]==12) //11代表怪物
        {
            mainMap.master[n1][n2]=JSON.parse(JSON.stringify(mainMap.master2));
            mainMap.largeMap[n1][n2]=mainMap.master[n1][n2].PIC;
            mainMap.master[n1][n2].MID=mainMap.masterID;
            mainMap.masterID+=1;
        }
        else if(mainMap.gameMap[n1][n2]>30) //30道具
        {
            mainMap.largeMap[n1][n2]="img/item.png";
        }
        else if(mainMap.gameMap[n1][n2]==2)
        {mainMap.largeMap[n1][n2]="img/stone.png";}
        else if(mainMap.gameMap[n1][n2]==3)
        {mainMap.largeMap[n1][n2]="img/nextMapUp.png";}
        else if(mainMap.gameMap[n1][n2]==4)
        {mainMap.largeMap[n1][n2]="img/nextMapRight.png";}
        else if(mainMap.gameMap[n1][n2]==5)
        {mainMap.largeMap[n1][n2]="img/nextMapDown.png";}
        else if(mainMap.gameMap[n1][n2]==6)
        {mainMap.largeMap[n1][n2]="img/nextMapLeft.png";}
        else{mainMap.largeMap[n1][n2]="img/bitem.png"}
    } 
//    mainMap.mapRefresh=false;mainMap.mapRefresh=true;
    Refresh();
}
function over(_num)
{
    if(_num==1)alert("游戏结束");
    if(mainMap.actor.HP<=0)alert("游戏结束");
}
function aATT(ATT)
{
    mainMap.actor.ATT+=Math.ceil(ATT);
    return mainMap.actor.ATT;
}
function aDEF(DEF)
{
    mainMap.actor.DEF+=Math.ceil(DEF);
    return mainMap.actor.DEF;
}
function aSKL(SKL)
{
    mainMap.actor.SKL+=Math.ceil(SKL);
    return mainMap.actor.SKL;
}
function aHP(HP)
{
    if(mainMap.equip[8].found==true&&randomStr(1,"122")=="1")aMP(10);
    if(mainMap.easy&&HP<0)HP*=0.6;
    if(mainMap.actor.PRO=="胖子"&&HP>0)HP*=1.25;
    else if(mainMap.actor.PRO=="倒霉蛋"&&HP>0)HP*=0.9;
    else if(mainMap.actor.PRO=="倒霉蛋"&&HP<0)HP*=1.05;
    mainMap.actor.HP+=Math.ceil(HP);over();
    return mainMap.actor.HP;
}
function aMP(MP)
{
    if(mainMap.actor.PRO=="胖子"&&MP>0)MP*=0.9;
    else if(mainMap.actor.PRO=="法师"&&MP>0)MP*=1.1;
    mainMap.actor.MP+=Math.ceil(MP);
    return mainMap.actor.MP;
}
function aGOL(GOL)
{
    if(mainMap.actor.PRO=="商人"&&GOL<0)GOL*=0.8;
    mainMap.actor.GOL+=Math.ceil(GOL);
    return mainMap.actor.GOL;
}
function aEXP(EXP)
{
    mainMap.actor.EXP+=Math.ceil(EXP);
    mainMap.levelUp();mainMap.actor.SKL+=1;
    return mainMap.actor.EXP;
}
function mHIS(Hchar){Hchar+="<br>";mainMap.history+=Hchar;}
function Refresh(){mainMap.mapRefresh=false;mainMap.mapRefresh=true;}
function aC0(){return Number(mainMap.actorCoor[0]);}
function aC1(){return Number(mainMap.actorCoor[1]);}