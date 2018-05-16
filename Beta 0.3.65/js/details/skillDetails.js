
function datails_arrow(damage)
{
    if(mainMap.actor.PRO=="法师")damage=Math.ceil(damage*1.2);
    if(!(JSON.stringify(mainMap.master[mainMap.actorCoor[0]+mainMap.FaceY][mainMap.actorCoor[1]+mainMap.FaceX])==="{}"))
    if(mainMap.actor.MP>=20)
    {var audio=new Audio("music/skill.ogg");audio.volume=mainMap.seVolume;audio.play();
        mainMap.actor.MP-=20;
        if(mainMap.killMaster(damage,mainMap.master[mainMap.actorCoor[0]+mainMap.FaceY][mainMap.actorCoor[1]+mainMap.FaceX],mainMap.actorCoor[0]+mainMap.FaceY,mainMap.actorCoor[1]+mainMap.FaceX))return true;
        else{mainMap.consoleInformation="射中了,"+mainMap.master[mainMap.actorCoor[0]+mainMap.FaceY][mainMap.actorCoor[1]+mainMap.FaceX].masterType+"损伤"+damage+"HP";
        mainMap.master[mainMap.actorCoor[0]+mainMap.FaceY][mainMap.actorCoor[1]+mainMap.FaceX].HP-=damage;
        return true;}
    }
    else{mainMap.consoleInformation="你的MP不足20";}
    else{mainMap.consoleInformation="你的朝向的那边并没有怪物";}
}

function details_strLine(damage)
{
    if(mainMap.actor.PRO=="法师")damage=Math.ceil(damage*1.2);
    var _consoleInformation="发射!<br>";
         if(mainMap.actor.MP>=50)
         {var audio=new Audio("music/skill.ogg");audio.volume=mainMap.seVolume;audio.play();
            mainMap.actor.MP-=50;
            if(mainMap.FaceY==1)//向下发射
            {
                for(var _FaceY=1;mainMap.actorCoor[0]+_FaceY<12;_FaceY+=1)
                {
                    if(!(JSON.stringify(mainMap.master[mainMap.actorCoor[0]+_FaceY][mainMap.actorCoor[1]])==="{}"))
                    {
                        damage=damage>1?damage-1:1;
                        if(mainMap.killMaster(8,mainMap.master[mainMap.actorCoor[0]+_FaceY][mainMap.actorCoor[1]],mainMap.actorCoor[0]+_FaceY,mainMap.actorCoor[1]));
                        else{mainMap.master[mainMap.actorCoor[0]+_FaceY][mainMap.actorCoor[1]].HP-=8;
                        _consoleInformation+="射中了,"+mainMap.master[mainMap.actorCoor[0]+_FaceY][mainMap.actorCoor[1]].masterType+"损伤"+damage.toString()+"HP!<br>";}
                    }
                }
            }
            else if(mainMap.FaceY==-1)//向上发射
            {
                for(var _FaceY=-1;0<=mainMap.actorCoor[0]+_FaceY;_FaceY-=1)
                {
                    if(!(JSON.stringify(mainMap.master[mainMap.actorCoor[0]+_FaceY][mainMap.actorCoor[1]])==="{}"))
                    {   
                        damage=damage>1?damage-1:1;
                        if(mainMap.killMaster(8,mainMap.master[mainMap.actorCoor[0]+_FaceY][mainMap.actorCoor[1]],mainMap.actorCoor[0]+_FaceY,mainMap.actorCoor[1]));
                        else{mainMap.master[mainMap.actorCoor[0]+_FaceY][mainMap.actorCoor[1]].HP-=8;
                        _consoleInformation+="射中了,"+mainMap.master[mainMap.actorCoor[0]+_FaceY][mainMap.actorCoor[1]].masterType+"损伤"+damage.toString()+"HP!<br>";}
                    }
                }
            }
            else if(mainMap.FaceX==-1)//向左发射
            {
                for(var _FaceX=-1;0<=mainMap.actorCoor[1]+_FaceX;_FaceX-=1)
                {
                    if(!(JSON.stringify(mainMap.master[mainMap.actorCoor[0]][mainMap.actorCoor[1]+_FaceX])==="{}"))
                    {
                        damage=damage>1?damage-1:1;
                        if(mainMap.killMaster(8,mainMap.master[mainMap.actorCoor[0]][mainMap.actorCoor[1]+_FaceX],mainMap.actorCoor[0],mainMap.actorCoor[1]+_FaceX));
                        else{mainMap.master[mainMap.actorCoor[0]][mainMap.actorCoor[1]+_FaceX].HP-=8;
                        _consoleInformation+="射中了,"+mainMap.master[mainMap.actorCoor[0]][mainMap.actorCoor[1]+_FaceX].masterType+"损伤"+damage.toString()+"HP!<br>";}
                    }
                }
            }
            else if(mainMap.FaceX==+1)//向右发射
            {
                for(var _FaceX=1;mainMap.actorCoor[1]+_FaceX<12;_FaceX+=1)
                {
                    if(!(JSON.stringify(mainMap.master[mainMap.actorCoor[0]][mainMap.actorCoor[1]+_FaceX])==="{}"))
                    {
                        damage=damage>1?damage-1:1;
                        if(mainMap.killMaster(8,mainMap.master[mainMap.actorCoor[0]][mainMap.actorCoor[1]+_FaceX],mainMap.actorCoor[0],mainMap.actorCoor[1]+_FaceX));
                        else{mainMap.master[mainMap.actorCoor[0]][mainMap.actorCoor[1]+_FaceX].HP-=8;
                        _consoleInformation+="射中了,"+mainMap.master[mainMap.actorCoor[0]][mainMap.actorCoor[1]+_FaceX].masterType+"损伤"+damage.toString()+"HP!<br>";};
                    }
                }
            }
        mainMap.consoleInformation=_consoleInformation;
        }
        else {mainMap.consoleInformation="你的MP不足50";}
}