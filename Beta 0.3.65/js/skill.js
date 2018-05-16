//HP转换MP技能
function switchMP()
{if(!--mainMap.action){mainMap.roundEnd();}   
    if(mainMap.actor.HP>15)
    {aHP(-15);aMP(10);aEXP(3);
    var audio=new Audio("music/skill.ogg");audio.volume=mainMap.seVolume;audio.play();
    mainMap.consoleInformation2="恢复了自己，消耗15HP";
    mainMap.history+="释放技能:恢复!<br>"
    }
}

//MP转换HP技能
function quickTreat()
{if(!--mainMap.action){mainMap.roundEnd();}   
    if(mainMap.actor.MP>=10)
    {aHP(10);aMP(-10);aEXP(2);
    var audio=new Audio("music/skill.ogg");audio.volume=mainMap.seVolume;audio.play();
    mainMap.consoleInformation2="治疗了自己，消耗10MP";
    mainMap.history+="释放技能:治疗!<br>"
    }
}

//直线穿刺技能
function strLine()  
{if(!--mainMap.action){mainMap.roundEnd();}
    mainMap.history+="释放技能:穿刺!<br>";
    details_strLine(8);mainMap.levelUp();
}

//发射弓箭的技能
function arrow()
{if(!--mainMap.action){mainMap.roundEnd();}
    if(datails_arrow(10)){mainMap.history+="释放技能:弓箭!<br>";}
    mainMap.levelUp();
}

//改变角色转向的技能
function turned()
{   if(mainMap.skillTurned)
    {
        mainMap.history+="取消技能:转向!<br>";
        mainMap.action+=1;mainMap.skillTurned=false;
        mainMap.consoleInformation2="取消转向";
    }
    else
    {
        if(!--mainMap.action){mainMap.roundEnd();}
        mainMap.skillTurned=true;
        mainMap.consoleInformation2="请按键盘方向键或点击按钮进行转向";
        mainMap.history+="释放技能:转向!<br>";
    }
}

//鼠标悬停时，在控制台2显示技能描述
function message(title){mainMap.consoleInformation2=(document.getElementsByClassName(title)[0].title);}

//引入外部js文件
var newscript = document.createElement('script');
newscript.setAttribute('type','text/javascript');
newscript.setAttribute('src','js/details/skillDetails.js');
var head = document.getElementsByTagName('head')[0];
head.appendChild(newscript);
function a(){b();}