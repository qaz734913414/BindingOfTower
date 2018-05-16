var buildMapFunction=[];

function autoMakeMap(id)
{
    buildMapFunction[0]();
    buildMapFunction[id+1]();
}

function attachBOSS()
{
    delateMap();
    map1();
    map1_BOSS1();
    details_buildMap();
}

function mapInitial()
{    
    
    if(mainMap.mapSeed[0].charCodeAt()>100)mainMap.currentMap="A";
    else if(mainMap.mapSeed[0].charCodeAt()>70)mainMap.currentMap="C";
    else if(mainMap.mapSeed[0].charCodeAt()>40)mainMap.currentMap="E";
    mapConnect();
    buildBossRom();
    randomMap();
    map1();
    mainMap.gameMap[3][3]=9;
    clearMap(mainMap.currentMap);
    Refresh();
}

function buildBossRom()
{
    if(mainMap.mapSeed[2].charCodeAt()>75)
    {
        if(reLogic("u","BOSS")&&thiLogic("u","B"))
        {  
            logic("u","BOSS","B");
            mainMap.Build_Map.BU="BOSS";
        }
        else if(reLogic("r","BOSS")&&thiLogic("r","B"))
        {  
            logic("r","BOSS","B");
            mainMap.Build_Map.BR="BOSS";
        }
        else if(reLogic("d","BOSS")&&thiLogic("d","B"))
        {  
            logic("d","BOSS","B");
            mainMap.Build_Map.BD="BOSS";
        }
        else if(reLogic("l","BOSS")&&thiLogic("l","B"))
        {  
            logic("l","BOSS","B");
            mainMap.Build_Map.BL="BOSS";
        }
    }
    else
    {
        if(reLogic("u","BOSS")&&thiLogic("u","D"))
        {  
            logic("u","BOSS","D");
            mainMap.Build_Map.DU="BOSS";
        }
        else if(reLogic("r","BOSS")&&thiLogic("r","D"))
        {  
            logic("r","BOSS","D");
            mainMap.Build_Map.DR="BOSS";
        }
        else if(reLogic("d","BOSS")&&thiLogic("d","D"))
        {  
            logic("d","BOSS","D");
            mainMap.Build_Map.DD="BOSS";
        }
        else if(reLogic("l","BOSS")&&thiLogic("l","D"))
        {  
            logic("l","BOSS","D");
            mainMap.Build_Map.DL="BOSS";
        }
    }
    

}

function randomMap()
{
    buildMapFunction.push(function (){delateMap();map1();});
    for(var times=0;times<5;times++)
    {
        var see=mainMap.mapSeed[times].charCodeAt()+"";
        see=Number(see[1]);
        if(see>=8)
        {buildMapFunction.push(function(){map1_1();details_buildMap();})}
        else if(see>=6)
        {buildMapFunction.push(function(){map1_2();details_buildMap();})}
        else if(see>=4)
        {buildMapFunction.push(function(){map1_3();details_buildMap();})}
        else if(see>=2)
        {buildMapFunction.push(function(){map1_4();details_buildMap();})}
        else if(see>=0)
        {buildMapFunction.push(function(){map1_5();details_buildMap();})}
//        alert(times);
    }
}

function mapConnect()
{
    var mapInfo="";var d1="ABCDE";
    var h1=0;var h2=4;
    for(var t1=0;t1<9;t1+=2)
    {
        if(mainMap.mapSeed[t1]>mainMap.mapSeed[t1+1])
            {mapInfo+=d1[h1];h1++}
        else {mapInfo+=d1[h2];h2--;}
    }
    mainMap.mapInfo=mapInfo;
    for(var mchar=0;mchar<4;mchar++)
    {
        if(mapInfo[mchar]==="A")
        {
            if(mainMap.mapSeed[mchar].charCodeAt()>=80)
            {
                if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","A"))
                {  
                    logic("u",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","A"))
                {  
                    logic("r",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","A"))
                {  
                    logic("d",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","A"))
                {  
                    logic("l",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AL=mapInfo[mchar+1];
                }
                
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=71)
            {
                if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","A"))
                {  
                    logic("r",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","A"))
                {  
                    logic("d",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","A"))
                {  
                    logic("l",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","A"))
                {  
                    logic("u",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AU=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=65)
            {
                if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","A"))
                {  
                    logic("d",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","A"))
                {
                    logic("l",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","A"))
                {
                    logic("u",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","A"))
                {
                    logic("r",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AR=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()<65)
            {
                if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","A"))
                {
                    logic("l",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","A"))
                {
                    logic("u",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","A"))
                {
                    logic("r",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","A"))
                {
                    logic("d",mapInfo[mchar+1],"A");
                    mainMap.Build_Map.AD=mapInfo[mchar+1];
                }
            }
        }
        if(mapInfo[mchar]==="B")
       {
            if(mainMap.mapSeed[mchar].charCodeAt()>=80)
            {
                if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","B"))
                {  
                    logic("u",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","B"))
                {  
                    logic("r",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","B"))
                {  
                    logic("d",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","B"))
                {  
                    logic("l",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BL=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=71)
            {
                if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","B"))
                {  
                    logic("r",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","B"))
                {  
                    logic("d",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","B"))
                {  
                    logic("l",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","B"))
                {  
                    logic("u",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BU=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=65)
            {
                if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","B"))
                {  
                    logic("d",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","B"))
                {
                    logic("l",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","B"))
                {
                    logic("u",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","B"))
                {
                    logic("r",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BR=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()<65)
            {
                if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","B"))
                {
                    logic("l",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","B"))
                {
                    logic("u",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","B"))
                {
                    logic("r",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","B"))
                {
                    logic("d",mapInfo[mchar+1],"B");
                    mainMap.Build_Map.BD=mapInfo[mchar+1];
                }
            }
        }
        if(mapInfo[mchar]==="C")
        {
            if(mainMap.mapSeed[mchar].charCodeAt()>=80)
            {
                if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","C"))
                {  
                    logic("u",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","C"))
                {  
                    logic("r",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","C"))
                {  
                    logic("d",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","C"))
                {  
                    logic("l",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CL=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=71)
            {
                if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","C"))
                {  
                    logic("r",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","C"))
                {  
                    logic("d",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","C"))
                {  
                    logic("l",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","C"))
                {  
                    logic("u",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CU=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=65)
            {
                if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","C"))
                {  
                    logic("d",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","C"))
                {
                    logic("l",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","C"))
                {
                    logic("u",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","C"))
                {
                    logic("r",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CR=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()<65)
            {
                if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","C"))
                {
                    logic("l",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","C"))
                {
                    logic("u",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","C"))
                {
                    logic("r",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","C"))
                {
                    logic("d",mapInfo[mchar+1],"C");
                    mainMap.Build_Map.CD=mapInfo[mchar+1];
                }
            }
        }
        if(mapInfo[mchar]==="D")
       {
            if(mainMap.mapSeed[mchar].charCodeAt()>=80)
            {
                if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","D"))
                {  
                    logic("u",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","D"))
                {  
                    logic("r",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","D"))
                {  
                    logic("d",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","D"))
                {  
                    logic("l",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DL=mapInfo[mchar+1];
                }
                
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=71)
            {
                if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","D"))
                {  
                    logic("r",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","D"))
                {  
                    logic("d",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","D"))
                {  
                    logic("l",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","D"))
                {  
                    logic("u",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DU=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=65)
            {
                if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","D"))
                {  
                    logic("d",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DD=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","D"))
                {
                    logic("l",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","D"))
                {
                    logic("u",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","D"))
                {
                    logic("r",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DR=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()<65)
            {
                if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","D"))
                {
                    logic("l",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","D"))
                {
                    logic("u",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","D"))
                {
                    logic("r",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DR=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","D"))
                {
                    logic("d",mapInfo[mchar+1],"D");
                    mainMap.Build_Map.DD=mapInfo[mchar+1];
                }
            }
        }
        if(mapInfo[mchar]==="E")
        {
            if(mainMap.mapSeed[mchar].charCodeAt()>=80)
            {
                if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","E"))
                {  
                    logic("u",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.EU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","E"))
                {  
                    logic("r",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.ER=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","E"))
                {  
                    logic("d",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.ED=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","E"))
                {  
                    logic("l",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.EL=mapInfo[mchar+1];
                }
                
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=71)
            {
                if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","E"))
                {  
                    logic("r",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.ER=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","E"))
                {  
                    logic("d",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.ED=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","E"))
                {  
                    logic("l",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.EL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","E"))
                {  
                    logic("u",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.EU=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()>=65)
            {
                if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","E"))
                {  
                    logic("d",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.ED=mapInfo[mchar+1];
                }
                else if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","E"))
                {
                    logic("l",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.EL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","E"))
                {
                    logic("u",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.EU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","E"))
                {
                    logic("r",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.ER=mapInfo[mchar+1];
                }
            }
            else if(mainMap.mapSeed[mchar].charCodeAt()<65)
            {
                if(reLogic("l",mapInfo[mchar+1])&&thiLogic("l","E"))
                {
                    logic("l",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.EL=mapInfo[mchar+1];
                }
                else if(reLogic("u",mapInfo[mchar+1])&&thiLogic("u","E"))
                {
                    logic("u",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.EU=mapInfo[mchar+1];
                }
                else if(reLogic("r",mapInfo[mchar+1])&&thiLogic("r","E"))
                {
                    logic("r",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.ER=mapInfo[mchar+1];
                }
                else if(reLogic("d",mapInfo[mchar+1])&&thiLogic("d","E"))
                {
                    logic("d",mapInfo[mchar+1],"E");
                    mainMap.Build_Map.ED=mapInfo[mchar+1];
                }
            }
        }
    }
}
//            方向l（al=c），下一个也就是C，现在的就是A

//如果A->B，使得A<-B
function logic(current,next,thi)
{
    if(next==="A")
    {
        if(current=="r"){mainMap.Build_Map.AL=thi;}
        if(current=="l"){mainMap.Build_Map.AR=thi;}
        if(current=="u"){mainMap.Build_Map.AD=thi;}
        if(current=="d"){mainMap.Build_Map.AU=thi;}
    }
    else if(next==="B")
    {
        if(current=="r"){mainMap.Build_Map.BL=thi;}
        if(current=="l"){mainMap.Build_Map.BR=thi;}
        if(current=="u"){mainMap.Build_Map.BD=thi;}
        if(current=="d"){mainMap.Build_Map.BU=thi;}
    }
    else if(next==="C")
    {
        if(current=="r"){mainMap.Build_Map.CL=thi;}
        if(current=="l"){mainMap.Build_Map.CR=thi;}
        if(current=="u"){mainMap.Build_Map.CD=thi;}
        if(current=="d"){mainMap.Build_Map.CU=thi;}
    }
    else if(next==="D")
    {
        if(current=="r"){mainMap.Build_Map.DL=thi;}
        if(current=="l"){mainMap.Build_Map.DR=thi;}
        if(current=="u"){mainMap.Build_Map.DD=thi;}
        if(current=="d"){mainMap.Build_Map.DU=thi;}
    }
    else if(next==="E")
    {
        if(current=="r"){mainMap.Build_Map.EL=thi;}
        if(current=="l"){mainMap.Build_Map.ER=thi;}
        if(current=="u"){mainMap.Build_Map.ED=thi;}
        if(current=="d"){mainMap.Build_Map.EU=thi;}
    }
    else if(next==="BOSS")
    {
        if(current=="r"){mainMap.Build_Map.BOSSL=thi;}
        if(current=="l"){mainMap.Build_Map.BOSSR=thi;}
        if(current=="u"){mainMap.Build_Map.BOSSD=thi;}
        if(current=="d"){mainMap.Build_Map.BOSSU=thi;}
    }
}

//如果A->B，查看A<-B是否被占用
function reLogic(current,next)
{
    if(next==="A")
    {
        if(current==="l")return mainMap.Build_Map.AR===""?true:false;
        else if(current==="r")return mainMap.Build_Map.AL===""?true:false;
        else if(current==="u")return mainMap.Build_Map.AD===""?true:false;
        else if(current==="d")return mainMap.Build_Map.AU===""?true:false;
    }
    else if(next==="B")
    {
        if(current==="l")return mainMap.Build_Map.BR===""?true:false;
        else if(current==="r")return mainMap.Build_Map.BL===""?true:false;
        else if(current==="u")return mainMap.Build_Map.BD===""?true:false;
        else if(current==="d")return mainMap.Build_Map.BU===""?true:false;
    }
    else if(next==="C")
    {
        if(current==="l")return mainMap.Build_Map.CR===""?true:false;
        else if(current==="r")return mainMap.Build_Map.CL===""?true:false;
        else if(current==="u")return mainMap.Build_Map.CD===""?true:false;
        else if(current==="d")return mainMap.Build_Map.CU===""?true:false;
    }
    else if(next==="D")
    {
        if(current==="l")return mainMap.Build_Map.DR===""?true:false;
        else if(current==="r")return mainMap.Build_Map.DL===""?true:false;
        else if(current==="u")return mainMap.Build_Map.DD===""?true:false;
        else if(current==="d")return mainMap.Build_Map.DU===""?true:false;
    }
    else if(next==="E")
    {
        if(current==="l")return mainMap.Build_Map.ER===""?true:false;
        else if(current==="r")return mainMap.Build_Map.EL===""?true:false;
        else if(current==="u")return mainMap.Build_Map.ED===""?true:false;
        else if(current==="d")return mainMap.Build_Map.EU===""?true:false;
    }
    else if(next==="BOSS")
    {
        if(current==="l")return mainMap.Build_Map.BOSSR===""?true:false;
        else if(current==="r")return mainMap.Build_Map.BOSSL===""?true:false;
        else if(current==="u")return mainMap.Build_Map.BOSSD===""?true:false;
        else if(current==="d")return mainMap.Build_Map.BOSSU===""?true:false;
    }
}

//控制真假变量 ,当A->C后B->C时，优先选择A<->C
function thiLogic(current,thi)
{
    if(thi==="A")
    {    
        if(current==="l")return mainMap.Build_Map.AL===""?true:false;
        if(current==="r")return mainMap.Build_Map.AR===""?true:false;
        if(current==="u")return mainMap.Build_Map.AU===""?true:false;
        if(current==="d")return mainMap.Build_Map.AD===""?true:false;
    }
    else if(thi==="B")
    {    
        if(current==="l")return mainMap.Build_Map.BL===""?true:false;
        if(current==="r")return mainMap.Build_Map.BR===""?true:false;
        if(current==="u")return mainMap.Build_Map.BU===""?true:false;
        if(current==="d")return mainMap.Build_Map.BD===""?true:false;
    }
    else if(thi==="C")
    {    
        if(current==="l")return mainMap.Build_Map.CL===""?true:false;
        if(current==="r")return mainMap.Build_Map.CR===""?true:false;
        if(current==="u")return mainMap.Build_Map.CU===""?true:false;
        if(current==="d")return mainMap.Build_Map.CD===""?true:false;
    }
    else if(thi==="D")
    {    
        if(current==="l")return mainMap.Build_Map.DL===""?true:false;
        if(current==="r")return mainMap.Build_Map.DR===""?true:false;
        if(current==="u")return mainMap.Build_Map.DU===""?true:false;
        if(current==="d")return mainMap.Build_Map.DD===""?true:false;
    }
    if(thi==="E")
    {    
        if(current==="l")return mainMap.Build_Map.EL===""?true:false;
        if(current==="r")return mainMap.Build_Map.ER===""?true:false;
        if(current==="u")return mainMap.Build_Map.EU===""?true:false;
        if(current==="d")return mainMap.Build_Map.ED===""?true:false;
    }
    if(thi==="BOSS")
    {    
        if(current==="l")return mainMap.Build_Map.BOSSL===""?true:false;
        if(current==="r")return mainMap.Build_Map.BOSSR===""?true:false;
        if(current==="u")return mainMap.Build_Map.BOSSU===""?true:false;
        if(current==="d")return mainMap.Build_Map.BOSSD===""?true:false;
    }
}

function map1()
{
    for(var t1=0;t1<12;t1++)
    for (var t2=0;t2<12;t2++)
    if(t1<3||t1>8)
    mainMap.gameMap[t1][t2]=0;
    for(var t1=2;t1<12;t1++)
    for (var t2=0;t2<12;t2++)
    if(t2<3||t2>8)
    mainMap.gameMap[t1][t2]=0;

    
    
    var s=Number(mainMap.mapSeed[0].charCodeAt()+""+mainMap.mapSeed[1].charCodeAt())+5000;
    if(s>6000)
    {//AC房间的怪物会掉落道具,B房间有装备,BOSS掉落装备和道具
        mainMap.Build_Map.AIT=1;mainMap.Build_Map.CIT=1;
        mainMap.Build_Map.BEQ=1;
        mainMap.Build_Map.BOSS1EQ=1;mainMap.Build_Map.BOSS1IT=1;
    }
    else if(s>4000)
    {//B房间的怪物会掉落道具,C房间有装备,BOSS掉落装备和道具
        mainMap.Build_Map.BIT=1;mainMap.Build_Map.CEQ=1;
        mainMap.Build_Map.BOSS1EQ=1;mainMap.Build_Map.BOSS1IT=1;
    }
    else if(s>2000)
    {//B房间的怪物会掉落道具，C房间的怪物掉落装备,BOSS掉落道具两个
        mainMap.Build_Map.BIT=1;
        mainMap.Build_Map.BOSS1IT=2;
    }
    else if(s>1000)
    {//C房间的怪物会掉落道具,BOSS掉落一个道具
        mainMap.Build_Map.CIT=1;
        mainMap.Build_Map.BOSS1IT=1;
    }
//    reverseMap();
}


function goNextMap(nextMap)
{
    clearActor();
    if(mainMap.currentMap=="BOSS")alert(8);
    if(mainMap.currentMap=="A")
    {
        saveMapA();
        if(nextMap==3)//去它上面的房间
        {
            if(mainMap.Build_Map.AU==="B"){loadMapB();}
            else if(mainMap.Build_Map.AU==="C"){loadMapC();}
            else if(mainMap.Build_Map.AU==="D"){loadMapD();}
            else if(mainMap.Build_Map.AU==="E"){loadMapE();}
            else if(mainMap.Build_Map.AU==="BOSS"){loadMapBOSS();}
            map1UpToDown();
            mainMap.currentMap=mainMap.Build_Map.AU;
        }
        else if(nextMap==4)//去它上面的房间
        {
            if(mainMap.Build_Map.AR==="B"){loadMapB();}
            else if(mainMap.Build_Map.AR==="C"){loadMapC();}
            else if(mainMap.Build_Map.AR==="D"){loadMapD();}
            else if(mainMap.Build_Map.AR==="E"){loadMapE();}
            else if(mainMap.Build_Map.AR==="BOSS"){loadMapBOSS();}
            map1RightToLeft();
            mainMap.currentMap=mainMap.Build_Map.AR;
        }
        else if(nextMap==5)//去它上面的房间
        {
            if(mainMap.Build_Map.AD==="B"){loadMapB();}
            else if(mainMap.Build_Map.AD==="C"){loadMapC();}
            else if(mainMap.Build_Map.AD==="D"){loadMapD();}
            else if(mainMap.Build_Map.AD==="E"){loadMapE();}
            else if(mainMap.Build_Map.AD==="BOSS"){loadMapBOSS();}
            map1DownToUp();
            mainMap.currentMap=mainMap.Build_Map.AD;
        }
        else if(nextMap==6)//去它上面的房间
        {
            if(mainMap.Build_Map.AL==="B"){loadMapB();}
            else if(mainMap.Build_Map.AL==="C"){loadMapC();}
            else if(mainMap.Build_Map.AL==="D"){loadMapD();}
            else if(mainMap.Build_Map.AL==="E"){loadMapE();}
            else if(mainMap.Build_Map.AL==="BOSS"){loadMapBOSS();}
            map1LeftToRight();
            mainMap.currentMap=mainMap.Build_Map.AL;
        }
    }
    else if (mainMap.currentMap=="B")
    {
        saveMapB();
        if(nextMap==3)//去它下面的房间
        {
            if(mainMap.Build_Map.BU==="A"){loadMapA();}
            else if(mainMap.Build_Map.BU==="C"){loadMapC();}
            else if(mainMap.Build_Map.BU==="D"){loadMapD();} 
            else if(mainMap.Build_Map.BU==="E"){loadMapE();} 
            else if(mainMap.Build_Map.BU==="BOSS"){loadMapBOSS();}
            map1UpToDown();
            mainMap.currentMap=mainMap.Build_Map.BU;      
        }
        else if(nextMap==4)//去它下面的房间
        {
            if(mainMap.Build_Map.BR==="A"){loadMapA();}
            else if(mainMap.Build_Map.BR==="C"){loadMapC();}
            else if(mainMap.Build_Map.BR==="D"){loadMapD();} 
            else if(mainMap.Build_Map.BR==="E"){loadMapE();}
            else if(mainMap.Build_Map.BR==="BOSS"){loadMapBOSS();}
            map1RightToLeft();
            mainMap.currentMap=mainMap.Build_Map.BR;      
        }
        else if(nextMap==5)//去它下面的房间
        {
            if(mainMap.Build_Map.BD==="A"){loadMapA();}
            else if(mainMap.Build_Map.BD==="C"){loadMapC();}
            else if(mainMap.Build_Map.BD==="D"){loadMapD();} 
            else if(mainMap.Build_Map.BD==="E"){loadMapE();}
            else if(mainMap.Build_Map.BD==="BOSS"){loadMapBOSS();}
            map1DownToUp();
            mainMap.currentMap=mainMap.Build_Map.BD;      
        }
        else if(nextMap==6)//去它下面的房间
        {
            if(mainMap.Build_Map.BL==="A"){loadMapA();}
            else if(mainMap.Build_Map.BL==="C"){loadMapC();}
            else if(mainMap.Build_Map.BL==="D"){loadMapD();} 
            else if(mainMap.Build_Map.BL==="E"){loadMapE();}
            else if(mainMap.Build_Map.BL==="BOSS"){loadMapBOSS();}
            map1LeftToRight();
            mainMap.currentMap=mainMap.Build_Map.BL;      
        }
    }
    else if (mainMap.currentMap=="C")
    {
        saveMapC();
        if(nextMap==3)//去它下面的房间
        {
            if(mainMap.Build_Map.CU==="A"){loadMapA();}
            else if(mainMap.Build_Map.CU==="B"){loadMapB();}
            else if(mainMap.Build_Map.CU==="D"){loadMapD();} 
            else if(mainMap.Build_Map.CU==="E"){loadMapE();} 
            else if(mainMap.Build_Map.CU==="BOSS"){loadMapBOSS();} 
            map1UpToDown();
            mainMap.currentMap=mainMap.Build_Map.CU;      
        }
        else if(nextMap==4)//去它下面的房间
        {
            if(mainMap.Build_Map.CR==="A"){loadMapA();}
            else if(mainMap.Build_Map.CR==="B"){loadMapB();}
            else if(mainMap.Build_Map.CR==="D"){loadMapD();}
            else if(mainMap.Build_Map.CR==="E"){loadMapE();}
            else if(mainMap.Build_Map.CR==="BOSS"){loadMapBOSS();} 
            map1RightToLeft();
            mainMap.currentMap=mainMap.Build_Map.CR;      
        }
        else if(nextMap==5)//去它下面的房间
        {
            if(mainMap.Build_Map.CD==="A"){loadMapA();}
            else if(mainMap.Build_Map.CD==="B"){loadMapB();}
            else if(mainMap.Build_Map.CD==="D"){loadMapD();} 
            else if(mainMap.Build_Map.CD==="E"){loadMapE();} 
            else if(mainMap.Build_Map.CD==="BOSS"){loadMapBOSS();} 
            map1DownToUp();
            mainMap.currentMap=mainMap.Build_Map.CD;
//            alert(mainMap.Build_Map.CD);
        }
        else if(nextMap==6)//去它下面的房间
        {
            if(mainMap.Build_Map.CL==="A"){loadMapA();}
            else if(mainMap.Build_Map.CL==="B"){loadMapB();}
            else if(mainMap.Build_Map.CL==="D"){loadMapD();} 
            else if(mainMap.Build_Map.CL==="E"){loadMapE();}
            else if(mainMap.Build_Map.CL==="BOSS"){loadMapBOSS();}
            map1LeftToRight();
            mainMap.currentMap=mainMap.Build_Map.CL;      
        }       
    }
    else if (mainMap.currentMap=="D")
    {
        saveMapD();
        if(nextMap==3)//去它下面的房间
        {
            if(mainMap.Build_Map.DU==="A"){loadMapA();}
            else if(mainMap.Build_Map.DU==="B"){loadMapB();}
            else if(mainMap.Build_Map.DU==="C"){loadMapC();}
            else if(mainMap.Build_Map.DU==="D"){loadMapD();} 
            else if(mainMap.Build_Map.DU==="E"){loadMapE();} 
            else if(mainMap.Build_Map.DU==="BOSS"){loadMapBOSS();} 
            map1UpToDown();
            mainMap.currentMap=mainMap.Build_Map.DU;      
        }
        else if(nextMap==4)//去它下面的房间
        {
            if(mainMap.Build_Map.DR==="A"){loadMapA();}
            else if(mainMap.Build_Map.DR==="B"){loadMapB();}
            else if(mainMap.Build_Map.DR==="C"){loadMapC();}
            else if(mainMap.Build_Map.DR==="D"){loadMapD();}
            else if(mainMap.Build_Map.DR==="E"){loadMapE();}
            else if(mainMap.Build_Map.DR==="BOSS"){loadMapBOSS();}
            map1RightToLeft();
            mainMap.currentMap=mainMap.Build_Map.DR;      
        }
        else if(nextMap==5)//去它下面的房间
        {
            if(mainMap.Build_Map.DD==="A"){loadMapA();}
            else if(mainMap.Build_Map.DD==="B"){loadMapB();}
            else if(mainMap.Build_Map.DD==="C"){loadMapC();}
            else if(mainMap.Build_Map.DD==="D"){loadMapD();} 
            else if(mainMap.Build_Map.DD==="E"){loadMapE();} 
            else if(mainMap.Build_Map.DD==="BOSS"){loadMapBOSS();}
            map1DownToUp();
            mainMap.currentMap=mainMap.Build_Map.DD;
        }
        else if(nextMap==6)//去它下面的房间
        {
            if(mainMap.Build_Map.DL==="A"){loadMapA();}
            else if(mainMap.Build_Map.DL==="B"){loadMapB();}
            else if(mainMap.Build_Map.DL==="C"){loadMapC();}
            else if(mainMap.Build_Map.DL==="D"){loadMapD();}
            else if(mainMap.Build_Map.DL==="E"){loadMapE();}
            else if(mainMap.Build_Map.DL==="BOSS"){loadMapBOSS();} 
            map1LeftToRight();
            mainMap.currentMap=mainMap.Build_Map.DL;      
        }       
    }
    else if (mainMap.currentMap=="E")
        {
        saveMapE();
        if(nextMap==3)//去它下面的房间
        {
            if(mainMap.Build_Map.EU==="A"){loadMapA();}
            else if(mainMap.Build_Map.EU==="B"){loadMapB();}
            else if(mainMap.Build_Map.EU==="C"){loadMapC();}
            else if(mainMap.Build_Map.EU==="D"){loadMapD();} 
            else if(mainMap.Build_Map.EU==="E"){loadMapE();} 
            else if(mainMap.Build_Map.EU==="BOSS"){loadMapBOSS();} 
            map1UpToDown();
            mainMap.currentMap=mainMap.Build_Map.EU;      
        }
        else if(nextMap==4)//去它下面的房间
        {
            if(mainMap.Build_Map.ER==="A"){loadMapA();}
            else if(mainMap.Build_Map.ER==="B"){loadMapB();}
            else if(mainMap.Build_Map.ER==="C"){loadMapC();}
            else if(mainMap.Build_Map.ER==="D"){loadMapD();}
            else if(mainMap.Build_Map.ER==="E"){loadMapE();}
            else if(mainMap.Build_Map.ER==="BOSS"){loadMapBOSS();}
            map1RightToLeft();
            mainMap.currentMap=mainMap.Build_Map.ER;      
        }
        else if(nextMap==5)//去它下面的房间
        {
            if(mainMap.Build_Map.ED==="A"){loadMapA();}
            else if(mainMap.Build_Map.ED==="B"){loadMapB();}
            else if(mainMap.Build_Map.ED==="C"){loadMapC();}
            else if(mainMap.Build_Map.ED==="D"){loadMapD();} 
            else if(mainMap.Build_Map.ED==="E"){loadMapE();} 
            else if(mainMap.Build_Map.ED==="BOSS"){loadMapBOSS();}
            map1DownToUp();
            mainMap.currentMap=mainMap.Build_Map.ED;
        }
        else if(nextMap==6)//去它下面的房间
        {
            if(mainMap.Build_Map.EL==="A"){loadMapA();}
            else if(mainMap.Build_Map.EL==="B"){loadMapB();}
            else if(mainMap.Build_Map.EL==="C"){loadMapC();}
            else if(mainMap.Build_Map.EL==="D"){loadMapD();}
            else if(mainMap.Build_Map.EL==="E"){loadMapE();} 
            else if(mainMap.Build_Map.EL==="BOSS"){loadMapBOSS();} 
            map1LeftToRight();
            mainMap.currentMap=mainMap.Build_Map.EL;      
        }       
    }
    
    else if (mainMap.currentMap=="BOSS")
        {
        saveMapBOSS();
        if(nextMap==3)//去它下面的房间
        {
            if(mainMap.Build_Map.BOSSU==="A"){loadMapA();}
            else if(mainMap.Build_Map.BOSSU==="B"){loadMapB();}
            else if(mainMap.Build_Map.BOSSU==="C"){loadMapC();}
            else if(mainMap.Build_Map.BOSSU==="D"){loadMapD();} 
            else if(mainMap.Build_Map.BOSSU==="E"){loadMapE();} 
            else if(mainMap.Build_Map.BOSSU==="BOSS"){loadMapBOSS();} 
            map1UpToDown();
            mainMap.currentMap=mainMap.Build_Map.BOSSU;      
        }
        else if(nextMap==4)//去它下面的房间
        {
            if(mainMap.Build_Map.BOSSR==="A"){loadMapA();}
            else if(mainMap.Build_Map.BOSSR==="B"){loadMapB();}
            else if(mainMap.Build_Map.BOSSR==="C"){loadMapC();}
            else if(mainMap.Build_Map.BOSSR==="D"){loadMapD();}
            else if(mainMap.Build_Map.BOSSR==="E"){loadMapE();}
            else if(mainMap.Build_Map.BOSSR==="BOSS"){loadMapBOSS();}
            map1RightToLeft();
            mainMap.currentMap=mainMap.Build_Map.BOSSR;      
        }
        else if(nextMap==5)//去它下面的房间
        {
            if(mainMap.Build_Map.BOSSD==="A"){loadMapA();}
            else if(mainMap.Build_Map.BOSSD==="B"){loadMapB();}
            else if(mainMap.Build_Map.BOSSD==="C"){loadMapC();}
            else if(mainMap.Build_Map.BOSSD==="D"){loadMapD();} 
            else if(mainMap.Build_Map.BOSSD==="E"){loadMapE();} 
            else if(mainMap.Build_Map.BOSSD==="BOSS"){loadMapBOSS();}
            map1DownToUp();
            mainMap.currentMap=mainMap.Build_Map.BOSSD;
        }
        else if(nextMap==6)//去它下面的房间
        {
            if(mainMap.Build_Map.BOSSL==="A"){loadMapA();}
            else if(mainMap.Build_Map.BOSSL==="B"){loadMapB();}
            else if(mainMap.Build_Map.BOSSL==="C"){loadMapC();}
            else if(mainMap.Build_Map.BOSSL==="D"){loadMapD();}
            else if(mainMap.Build_Map.BOSSL==="E"){loadMapE();} 
            else if(mainMap.Build_Map.BOSSL==="BOSS"){loadMapBOSS();} 
            map1LeftToRight();
            mainMap.currentMap=mainMap.Build_Map.BOSSL;      
        }       
    }
    
    
    Refresh();
    clearMap(mainMap.currentMap);//用于生成房间入口
}


function reverseMap()
{
    var arrNew=[];
    arrNew=JSON.parse(JSON.stringify(mainMap.gameMap));
    for(var t1=0;t1<12;t1++)
    for (var t2=0;t2<12;t2++)
    {arrNew[t2][t1]=mainMap.gameMap[t1][t2];}
    mainMap.gameMap=arrNew;
}

function saveMapA()
{
    mainMap.saveMapList.LA=JSON.parse(JSON.stringify(mainMap.largeMap));
    mainMap.saveMapList.GA=JSON.parse(JSON.stringify(mainMap.gameMap));
    mainMap.saveMapList.MA=JSON.parse(JSON.stringify(mainMap.master));
}

function saveMapB()
{
    mainMap.saveMapList.LB=JSON.parse(JSON.stringify(mainMap.largeMap));
    mainMap.saveMapList.GB=JSON.parse(JSON.stringify(mainMap.gameMap));
    mainMap.saveMapList.MB=JSON.parse(JSON.stringify(mainMap.master));
}

function saveMapC()
{
    mainMap.saveMapList.LC=JSON.parse(JSON.stringify(mainMap.largeMap));
    mainMap.saveMapList.GC=JSON.parse(JSON.stringify(mainMap.gameMap));
    mainMap.saveMapList.MC=JSON.parse(JSON.stringify(mainMap.master));
}

function saveMapD()
{
    mainMap.saveMapList.LD=JSON.parse(JSON.stringify(mainMap.largeMap));
    mainMap.saveMapList.GD=JSON.parse(JSON.stringify(mainMap.gameMap));
    mainMap.saveMapList.MD=JSON.parse(JSON.stringify(mainMap.master));
}

function saveMapE()
{
    mainMap.saveMapList.LE=JSON.parse(JSON.stringify(mainMap.largeMap));
    mainMap.saveMapList.GE=JSON.parse(JSON.stringify(mainMap.gameMap));
    mainMap.saveMapList.ME=JSON.parse(JSON.stringify(mainMap.master));
}

function saveMapBOSS()
{
    mainMap.saveMapList.LBOSS=JSON.parse(JSON.stringify(mainMap.largeMap));
    mainMap.saveMapList.GBOSS=JSON.parse(JSON.stringify(mainMap.gameMap));
    mainMap.saveMapList.MBOSS=JSON.parse(JSON.stringify(mainMap.master));
}

function loadMapA()
{
    if(mainMap.saveMapList.GA.length===0)
    {
        autoMakeMap(0);
    }
    else
    {
    mainMap.largeMap=JSON.parse(JSON.stringify(mainMap.saveMapList.LA));
    mainMap.master=JSON.parse(JSON.stringify(mainMap.saveMapList.MA));
    mainMap.gameMap=JSON.parse(JSON.stringify(mainMap.saveMapList.GA));
    }
}

function loadMapB()
{
    if(mainMap.saveMapList.GB.length===0)
    {
        autoMakeMap(1);
    }
    else
    {
    mainMap.largeMap=JSON.parse(JSON.stringify(mainMap.saveMapList.LB));
    mainMap.master=JSON.parse(JSON.stringify(mainMap.saveMapList.MB));
    mainMap.gameMap=JSON.parse(JSON.stringify(mainMap.saveMapList.GB));
    }
}

function loadMapC()
{
    if(mainMap.saveMapList.GC.length===0)
    {
        autoMakeMap(2);
    }
    else
    {
    mainMap.largeMap=JSON.parse(JSON.stringify(mainMap.saveMapList.LC));
    mainMap.master=JSON.parse(JSON.stringify(mainMap.saveMapList.MC));
    mainMap.gameMap=JSON.parse(JSON.stringify(mainMap.saveMapList.GC));
    }
}

function loadMapD()
{
    if(mainMap.saveMapList.GD.length===0)
    {
        autoMakeMap(3);
    }
    else
    {
    mainMap.largeMap=JSON.parse(JSON.stringify(mainMap.saveMapList.LD));
    mainMap.master=JSON.parse(JSON.stringify(mainMap.saveMapList.MD));
    mainMap.gameMap=JSON.parse(JSON.stringify(mainMap.saveMapList.GD));
    }
}

function loadMapE()
{
    if(mainMap.saveMapList.GE.length===0)
    {
        autoMakeMap(4);
    }
    else
    {
    mainMap.largeMap=JSON.parse(JSON.stringify(mainMap.saveMapList.LE));
    mainMap.master=JSON.parse(JSON.stringify(mainMap.saveMapList.ME));
    mainMap.gameMap=JSON.parse(JSON.stringify(mainMap.saveMapList.GE));
    }
}

function loadMapBOSS()
{
    if(mainMap.saveMapList.GBOSS.length===0)
    {
        alert(12222222);
        attachBOSS();
    }
    else
    {
    mainMap.largeMap=JSON.parse(JSON.stringify(mainMap.saveMapList.LBOSS));
    mainMap.master=JSON.parse(JSON.stringify(mainMap.saveMapList.MBOSS));
    mainMap.gameMap=JSON.parse(JSON.stringify(mainMap.saveMapList.GBOSS));
    }
}

function map1UpToDown()
{
    mainMap.gameMap[8][5]=9;
    mainMap.largeMap[8][5]="img/actor.png";
    mainMap.actorCoor[0]=8;
    mainMap.actorCoor[1]=5;
    mainMap.largeMap[9][5]="img/nextMapDown.png"
}

function map1DownToUp()
{
    mainMap.gameMap[3][6]=9;
    mainMap.largeMap[3][6]="img/actor.png";
    mainMap.actorCoor[0]=3;
    mainMap.actorCoor[1]=6;
    mainMap.largeMap[2][6]="img/nextMapDown.png"
}

function map1LeftToRight()
{
    mainMap.gameMap[5][8]=9;
    mainMap.largeMap[5][8]="img/actor.png";
    mainMap.actorCoor[0]=5;
    mainMap.actorCoor[1]=8;
    mainMap.gameMap[5][9]=4;
    mainMap.largeMap[5][9]="img/nextMapDown.png"
}

function map1RightToLeft()
{ 
    mainMap.gameMap[6][3]=9;
    mainMap.largeMap[6][3]="img/actor.png";
    mainMap.actorCoor[0]=6;
    mainMap.actorCoor[1]=3;
    mainMap.gameMap[6][2]=6;
    mainMap.largeMap[6][2]="img/nextMapDown.png"
}

function clearActor()
{
    if(mainMap.floor===1)
    {
        mainMap.largeMap[8][5]="img/bitem.png";
        mainMap.gameMap[3][6]=1;
        mainMap.largeMap[3][6]="img/bitem.png";
        mainMap.gameMap[6][3]=1;
        mainMap.largeMap[6][3]="img/bitem.png";
        mainMap.gameMap[5][8]=1;
        mainMap.largeMap[5][8]="img/bitem.png";
    }
}

function clearMap(coo)
{
    if(mainMap.floor===1)
    {
        if(coo==="A")
        {
            if(mainMap.Build_Map.AU===""){mainMap.gameMap[2][6]=0;
            mainMap.largeMap[2][6]="img/wall.png";}
            else{mainMap.gameMap[2][6]=3;mainMap.largeMap[2][6]="img/nextMapUp.png";}
            if(mainMap.Build_Map.AR===""){mainMap.gameMap[5][9]=0;
            mainMap.largeMap[5][9]="img/wall.png";}
            else{mainMap.gameMap[5][9]=4;mainMap.largeMap[5][9]="img/nextMapRight.png";}
            if(mainMap.Build_Map.AD===""){mainMap.gameMap[9][5]=0;
            mainMap.largeMap[9][5]="img/wall.png";}
            else{mainMap.gameMap[9][5]=5;mainMap.largeMap[9][5]="img/nextMapDown.png";}
            if(mainMap.Build_Map.AL===""){mainMap.gameMap[6][2]=0;
            mainMap.largeMap[6][2]="img/wall.png";}
            else{mainMap.gameMap[6][2]=6;mainMap.largeMap[6][2]="img/nextMapLeft.png";}
        }
        else if(coo==="B")
        {
            if(mainMap.Build_Map.BU===""){mainMap.gameMap[2][6]=0;
            mainMap.largeMap[2][6]="img/wall.png";}
            else{mainMap.gameMap[2][6]=3;mainMap.largeMap[2][6]="img/nextMapUp.png";}
            if(mainMap.Build_Map.BR===""){mainMap.gameMap[5][9]=0;
            mainMap.largeMap[5][9]="img/wall.png";}
            else{mainMap.gameMap[5][9]=4;mainMap.largeMap[5][9]="img/nextMapRight.png";}
            if(mainMap.Build_Map.BD===""){mainMap.gameMap[9][5]=0;
            mainMap.largeMap[9][5]="img/wall.png";}
            else{mainMap.gameMap[9][5]=5;mainMap.largeMap[9][5]="img/nextMapDown.png";}
            if(mainMap.Build_Map.BL===""){mainMap.gameMap[6][2]=0;
            mainMap.largeMap[6][2]="img/wall.png";}
            else{mainMap.gameMap[6][2]=6;mainMap.largeMap[6][2]="img/nextMapLeft.png";}
        }
        else if(coo==="C")
        {
            if(mainMap.Build_Map.CU===""){mainMap.gameMap[2][6]=0;
            mainMap.largeMap[2][6]="img/wall.png";}
            else{mainMap.gameMap[2][6]=3;mainMap.largeMap[2][6]="img/nextMapUp.png";}
            if(mainMap.Build_Map.CR===""){mainMap.gameMap[5][9]=0;
            mainMap.largeMap[5][9]="img/wall.png";}
            else{mainMap.gameMap[5][9]=4;mainMap.largeMap[5][9]="img/nextMapRight.png";}
            if(mainMap.Build_Map.CD===""){mainMap.gameMap[9][5]=0;
            mainMap.largeMap[9][5]="img/wall.png";}
            else{mainMap.gameMap[9][5]=5;mainMap.largeMap[9][5]="img/nextMapDown.png";}
            if(mainMap.Build_Map.CL===""){mainMap.gameMap[6][2]=0;
            mainMap.largeMap[6][2]="img/wall.png";}
            else{mainMap.gameMap[6][2]=6;mainMap.largeMap[6][2]="img/nextMapLeft.png";}
        }
        else if(coo==="D")
        {
            if(mainMap.Build_Map.DU===""){mainMap.gameMap[2][6]=0;
            mainMap.largeMap[2][6]="img/wall.png";}
            else{mainMap.gameMap[2][6]=3;mainMap.largeMap[2][6]="img/nextMapUp.png";}
            if(mainMap.Build_Map.DR===""){mainMap.gameMap[5][9]=0;
            mainMap.largeMap[5][9]="img/wall.png";}
            else{mainMap.gameMap[5][9]=4;mainMap.largeMap[5][9]="img/nextMapRight.png";}
            if(mainMap.Build_Map.DD===""){mainMap.gameMap[9][5]=0;
            mainMap.largeMap[9][5]="img/wall.png";}
            else{mainMap.gameMap[9][5]=5;mainMap.largeMap[9][5]="img/nextMapDown.png";}
            if(mainMap.Build_Map.DL===""){mainMap.gameMap[6][2]=0;
            mainMap.largeMap[6][2]="img/wall.png";}
            else{mainMap.gameMap[6][2]=6;mainMap.largeMap[6][2]="img/nextMapLeft.png";}
        }
        else if(coo==="E")
        {
            if(mainMap.Build_Map.EU===""){mainMap.gameMap[2][6]=0;
            mainMap.largeMap[2][6]="img/wall.png";}
            else{mainMap.gameMap[2][6]=3;mainMap.largeMap[2][6]="img/nextMapUp.png";}
            if(mainMap.Build_Map.ER===""){mainMap.gameMap[5][9]=0;
            mainMap.largeMap[5][9]="img/wall.png";}
            else{mainMap.gameMap[5][9]=4;mainMap.largeMap[5][9]="img/nextMapRight.png";}
            if(mainMap.Build_Map.ED===""){mainMap.gameMap[9][5]=0;
            mainMap.largeMap[9][5]="img/wall.png";}
            else{mainMap.gameMap[9][5]=5;mainMap.largeMap[9][5]="img/nextMapDown.png";}
            if(mainMap.Build_Map.EL===""){mainMap.gameMap[6][2]=0;
            mainMap.largeMap[6][2]="img/wall.png";}
            else{mainMap.gameMap[6][2]=6;mainMap.largeMap[6][2]="img/nextMapLeft.png";}
        }
        else if(coo==="BOSS")
        {
            if(mainMap.Build_Map.BOSSU===""){mainMap.gameMap[2][6]=0;
            mainMap.largeMap[2][6]="img/wall.png";}
            else{mainMap.gameMap[2][6]=3;mainMap.largeMap[2][6]="img/nextMapUp.png";}
            if(mainMap.Build_Map.BOSSR===""){mainMap.gameMap[5][9]=0;
            mainMap.largeMap[5][9]="img/wall.png";}
            else{mainMap.gameMap[5][9]=4;mainMap.largeMap[5][9]="img/nextMapRight.png";}
            if(mainMap.Build_Map.BOSSD===""){mainMap.gameMap[9][5]=0;
            mainMap.largeMap[9][5]="img/wall.png";}
            else{mainMap.gameMap[9][5]=5;mainMap.largeMap[9][5]="img/nextMapDown.png";}
            if(mainMap.Build_Map.BOSSL===""){mainMap.gameMap[6][2]=0;
            mainMap.largeMap[6][2]="img/wall.png";}
            else{mainMap.gameMap[6][2]=6;mainMap.largeMap[6][2]="img/nextMapLeft.png";}
        }
        else if(coo==="Up"){mainMap.gameMap[2][6]=0;mainMap.largeMap[2][6]="img/wall.png";}
        else if(coo==="Down"){mainMap.gameMap[9][5]=0;mainMap.largeMap[9][5]="img/wall.png";}
        else if(coo==="Left"){mainMap.gameMap[6][2]=0;mainMap.largeMap[6][2]="img/wall.png";}
        else if(coo==="Right"){mainMap.gameMap[5][9]=0;mainMap.largeMap[5][9]="img/wall.png";}
        else
        {
            mainMap.gameMap[2][6]=0;
            mainMap.largeMap[2][6]="img/wall.png";
            mainMap.gameMap[9][5]=0;
            mainMap.largeMap[9][5]="img/wall.png";
            mainMap.gameMap[6][2]=0;
            mainMap.largeMap[6][2]="img/wall.png";
            mainMap.gameMap[5][9]=0;
            mainMap.largeMap[5][9]="img/wall.png";
        }
    }
}

function delateMap()
{
    mainMap.gameMap=JSON.parse(JSON.stringify(gameMapTemp));
    mainMap.largeMap=JSON.parse(JSON.stringify(largeMapTemp));
    mainMap.master=JSON.parse(JSON.stringify(masterTemp));
}