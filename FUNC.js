/* Copyright by Kelompok 4
   File Description: Javascript Function Source Code
   File Creation Date: 6th of May
   Location: DEP/
   Editor / Generator: TextEdit (Mac OS X), GEdit (Linux), Notepad (Windows)
*/
//================================>>>>>
//Function for check input only for Microsoft Internet Explorer

function checkInput(iEvent, IDName)
{	
	var keyNum;	
	var keyChar;	
	var numCheck;	
	keyNum = iEvent.keyCode;   //key Code ganti which selain IE
	keyChar = String.fromCharCode(keyNum);	
	numCheck = /\D/;	


	if(document.getElementById(IDName).value == 0)	
	{		
		document.getElementById(IDName).value = "";	
	}	
		
		return !numCheck.test(keyChar);
}
	
//================================>>>>>
	//Function for check IP value (Max = 255)
	function checkNumValue(IDName)
	{	
		
	var IP 	= document.getElementById(IDName).value;
	
		
	if(IP > 255)	
	{	
		alert("Nilai IP terbesar 255\nSilahkan masukan kembali");	
		document.getElementById(IDName).value = "";	
	}
	else if(document.getElementById("txtIP0").value != "" && document.getElementById("txtIP1").value != "" && document.getElementById("txtIP2").value != "" && document.getElementById("txtIP3").value != "" && document.getElementById("txtIP0").value > 0)	
	{
						
		setTimeout("classNameType()", 1988);
		setTimeout("lain()", 1988);
	}
	else
	{
		document.getElementById("idClass").innerHTML = "&nbsp;";
		document.getElementById("idMask").innerHTML="&nbsp;";
		document.getElementById("idNet").innerHTML="&nbsp;";
		document.getElementById("idBroad").innerHTML="&nbsp;";
		document.getElementById("idValIP").innerHTML="&nbsp;";
		document.getElementById("idRangeIP").innerHTML="&nbsp;";
			
	}
	}

//================================>>>>>
//Function for printing combobox (CIDR list)
function printCIDROpt()
{	
	
	document.write("<span>/</span>&nbsp;");
	document.write("<select id='idCIDR' onchange='classNameType(),lain()'>");
	for(i = 30; i >=8; i--)
	{		
		if(i == 24)
		{
			document.write("<option selected value=" + i + ">" + i + "</option>");
		}
		else
		{
			document.write("<option value=" + i + ">" + i + "</option>");
		}
		
	}	
	document.write("</select>");
	
}
//================================>>>>>
  function Subnet()
  {     var po1=document.getElementById("txtIP0").value;
	      var po2=document.getElementById("txtIP1").value;
	    var po3=document.getElementById("txtIP2").value;
	  var po4=document.getElementById("txtIP3").value;
        var CIDR=document.getElementById("idCIDR").value;
  	
	if((po1!="")&&(po2!="")&&(po3!="")&&(po4!="")&&(CIDR >= 24))
	{      
		if(CIDR == 24){document.getElementById("idMask").innerHTML="<span>255.255.255.0" + "</span>";}else if (CIDR == 25){document.getElementById("idMask").innerHTML="<span>255.255.255.128" + "</span>";}else if (CIDR == 26){document.getElementById("idMask").innerHTML="<span>255.255.255.192" + "</span>";}else if (CIDR == 27){document.getElementById("idMask").innerHTML="<span>255.255.255.224" + "</span>";}else if (CIDR == 28){document.getElementById("idMask").innerHTML="<span>255.255.255.240" + "</span>";}else if (CIDR == 29){document.getElementById("idMask").innerHTML="<span>255.255.255.248" + "</span>";}else if (CIDR == 30){document.getElementById("idMask").innerHTML="<span>255.255.255.252" + "</span>";}
	}
	else if((po1!="")&&(po2!="")&&(po3!="")&&(po4!="")&&(CIDR >= 16)&&(CIDR<24))
	{
		if(CIDR == 16){document.getElementById("idMask").innerHTML="<span>255.255.0.0" + "</span>";}else if (CIDR == 17){document.getElementById("idMask").innerHTML="<span>255.255.128.0" + "</span>";}else if (CIDR == 18){document.getElementById("idMask").innerHTML="<span>255.255.192.0" + "</span>";}else if (CIDR == 19){document.getElementById("idMask").innerHTML="<span>255.255.224.0" + "</span>";}else if (CIDR == 20){document.getElementById("idMask").innerHTML="<span>255.255.240.0" + "</span>";}else if (CIDR == 21){document.getElementById("idMask").innerHTML="<span>255.255.248.0" + "</span>";}else if (CIDR == 22){document.getElementById("idMask").innerHTML="<span>255.255.252.0" + "</span>";}else if(CIDR == 23){document.getElementById("idMask").innerHTML="<span>255.255.254.0" + "</span>";}
	}
	else if((po1!="")&&(po2!="")&&(po3!="")&&(po4!="")&&(CIDR >= 8)&&(CIDR<16))
	{
		if(CIDR == 8){document.getElementById("idMask").innerHTML="<span>255.0.0.0" + "</span>";}else if (CIDR == 9){document.getElementById("idMask").innerHTML="<span>255.128.0.0" + "</span>";}else if (CIDR == 10){document.getElementById("idMask").innerHTML="<span>255.192.0.0" + "</span>";}else if (CIDR == 11){document.getElementById("idMask").innerHTML="<span>255.224.0.0" + "</span>";}else if (CIDR == 12){document.getElementById("idMask").innerHTML="<span>255.240.0.0" + "</span>";}else if (CIDR == 13){document.getElementById("idMask").innerHTML="<span>255.248.0.0" + "</span>";}else if (CIDR == 14){document.getElementById("idMask").innerHTML="<span>255.252.0.0" + "</span>";}else if(CIDR == 15){document.getElementById("idMask").innerHTML="<span>255.254.0.0" + "</span>";}
	}
        else 
        {
        	document.getElementById("idMask").innerHTML="&nbsp;";
	}

  }
//================================>>>>>
function neto()
{
	   var po1=document.getElementById("txtIP0").value;
	      var po2=document.getElementById("txtIP1").value;
	    var po3=document.getElementById("txtIP2").value;
	  var po4=document.getElementById("txtIP3").value;
        var CIDR=document.getElementById("idCIDR").value;

  if((CIDR>=24) && (po1!="") && (po2 != "")  &&  (po3 != "")  &&  (po4 != ""))
  {
	if(CIDR == 24)
	{
		if ((po4!=0)&&(po4!=255))
		{
			 document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+0+"</span>";
		}
		else
		{
			 document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
	else if (CIDR == 25)
	{
		if( po4>0 && po4<127 )
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+0+"</span>";
		}
		else if(po4>128 && po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+128+"</span>";
		}
		else
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}


	else if(CIDR == 26)

	{
		if((po4>0)&&(po4<63))
		{	
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+0+"</span>";
		}
		else if((po4>64)&&(po4<127))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+64+"</span>";
		}
		else if((po4>128)&&(po4<191))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+128+"</span>";
		}
		else if((po4>192)&&(po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+192+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
		}
		
	}

    else if(CIDR == 27)

	{
		if((po4>0)&&(po4<31))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+0+"</span>";
		}
		else if((po4>32)&&(po4<63))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+32+"</span>";
		}
		else if((po4>64)&&(po4<95))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+64+"</span>";
		}
		else if((po4>96)&&(po4<127))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+96+"</span>";
		}
		else if((po4>128)&&(po4<159))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+128+"</span>";
		}
		else if((po4>160)&&(po4<191))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+160+"</span>";
		}
		else if((po4>192)&&(po4<223))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+192+"</span>";
		}
		else if((po4>224)&&(po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+224+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}

	else if(CIDR == 28)

	{
		if((po4>0)&&(po4<15))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+0+"</span>";
		}
		else if((po4>16)&&(po4<31))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+16+"</span>";
		}
		else if((po4>32)&&(po4<47))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+32+"</span>";
		}
		else if((po4>48)&&(po4<63))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+48+"</span>";
		}
		else if((po4>64)&&(po4<79))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+64+"</span>";
		}
		else if((po4>80)&&(po4<95))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+80+"</span>";
		}
		else if((po4>96)&&(po4<111))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+96+"</span>";
		}
		else if((po4>112)&&(po4<127))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+112+"</span>";
		}
		else if((po4>128)&&(po4<143))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+128+"</span>";
		}
		else if((po4>144)&&(po4<159))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+144+"</span>";
		}
		else if((po4>160)&&(po4<175))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+160+"</span>";
		}
		else if((po4>176)&&(po4<191))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+176+"</span>";
		}
		else if((po4>192)&&(po4<207))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+192+"</span>";
		}
		else if((po4>208)&&(po4<223))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+208+"</span>";
		}
		else if((po4>224)&&(po4<239))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+224+"</span>";
		}
		else if((po4>240)&&(po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+240+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
		}

	}
	
	else if (CIDR == 29)
	{
		if((po4>0)&&(po4<7))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+0+"</span>";
		}
		else if((po4>8)&&(po4<15))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+8+"</span>";
		}
		else if((po4>16)&&(po4<23))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+16+"</span>";
		}
		else if((po4>24)&&(po4<31))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+24+"</span>";
		}
		else if((po4>32)&&(po4<39))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+32+"</span>";
		}
		else if((po4>40)&&(po4<47))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+40+"</span>";
		}
		else if((po4>48)&&(po4<55))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+48+"</span>";
		}
		else if((po4>56)&&(po4<63))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+56+"</span>";
		}
		else if((po4>64)&&(po4<71))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+64+"</span>";
		}
		else if((po4>72)&&(po4<79))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+72+"</span>";
		}
		else if((po4>80)&&(po4<87))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+80+"</span>";
		}
		else if((po4>88)&&(po4<95))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+88+"</span>";
		}
		else if((po4>96)&&(po4<103))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+96+"</span>";
		}
		else if((po4>104)&&(po4<111))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+104+"</span>";
		}
		else if((po4>112)&&(po4<119))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+112+"</span>";
		}
		else if((po4>120)&&(po4<127))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+120+"</span>";
		}
		else if((po4>128)&&(po4<135))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+128+"</span>";
		}
		else if((po4>136)&&(po4<143))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+136+"</span>";
		}
		else if((po4>144)&&(po4<151))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+144+"</span>";
		}
		else if((po4>152)&&(po4<159))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+152+"</span>";
		}
		else if((po4>160)&&(po4<167))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+160+"</span>";
		}
		else if((po4>168)&&(po4<175))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+168+"</span>";
		}
		else if((po4>176)&&(po4<183))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+176+"</span>";
		}
		else if((po4>184)&&(po4<191))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+184+"</span>";
		}
		else if((po4>192)&&(po4<199))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+192+"</span>";
		}
		else if((po4>200)&&(po4<207))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+200+"</span>";
		}
		else if((po4>208)&&(po4<215))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+208+"</span>";
		}
		else if((po4>216)&&(po4<223))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+216+"</span>";
		}
		else if((po4>224)&&(po4<231))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+224+"</span>";
		}
		else if((po4>232)&&(po4<239))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+232+"</span>";
		}
		else if((po4>240)&&(po4<247))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+240+"</span>";
		}
		else if((po4>248)&&(po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+248+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
		}

	}

    else if (CIDR == 30)
	{
		if((po4>0)&&(po4<3))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+0+"</span>";
		}
		else if((po4>4)&&(po4<7))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+4+"</span>";
		}
		else if((po4>8)&&(po4<11))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+8+"</span>";
		}
		else if((po4>12)&&(po4<15))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+12+"</span>";
		}
		else if((po4>16)&&(po4<19))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+16+"</span>";
		}
		else if((po4>20)&&(po4<23))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+20+"</span>";
		}
		else if((po4>24)&&(po4<27))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+24+"</span>";
		}
		else if((po4>28)&&(po4<31))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+28+"</span>";
		}
		else if((po4>32)&&(po4<35))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+32+"</span>";
		}
		else if((po4>36)&&(po4<39))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+36+"</span>";
		}
		else if((po4>40)&&(po4<43))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+40+"</span>";
		}
		else if((po4>44)&&(po4<47))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+44+"</span>";
		}
		else if((po4>48)&&(po4<51))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+48+"</span>";
		}
		else if((po4>52)&&(po4<55))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+52+"</span>";
		}
		else if((po4>56)&&(po4<59))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+56+"</span>";
		}
		else if((po4>60)&&(po4<63))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+60+"</span>";
		}
		else if((po4>64)&&(po4<67))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+64+"</span>";
		}
		else if((po4>68)&&(po4<71))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+68+"</span>";
		}
		else if((po4>72)&&(po4<75))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+72+"</span>";
		}
		else if((po4>76)&&(po4<79))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+76+"</span>";
		}
		else if((po4>80)&&(po4<83))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+80+"</span>";
		}
		else if((po4>84)&&(po4<87))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+84+"</span>";
		}
		else if((po4>88)&&(po4<91))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+88+"</span>";
		}
		else if((po4>92)&&(po4<95))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+92+"</span>";
		}
		else if((po4>96)&&(po4<99))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+96+"</span>";
		}
		else if((po4>100)&&(po4<103))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+100+"</span>";
		}
		else if((po4>104)&&(po4<107))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+104+"</span>";
		}
		else if((po4>108)&&(po4<111))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+108+"</span>";
		}
		else if((po4>112)&&(po4<115))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+112+"</span>";
		}
		else if((po4>116)&&(po4<119))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+116+"</span>";
		}
		else if((po4>120)&&(po4<123))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+120+"</span>";
		}
		else if((po4>124)&&(po4<127))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+124+"</span>";
		}
		else if((po4>128)&&(po4<131))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+128+"</span>";
		}
		else if((po4>132)&&(po4<135))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+132+"</span>";
		}
		else if((po4>136)&&(po4<139))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+136+"</span>";
		}
		else if((po4>140)&&(po4<143))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+140+"</span>";
		}
		else if((po4>144)&&(po4<147))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+144+"</span>";
		}
		else if((po4>148)&&(po4<151))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+148+"</span>";
		}
		else if((po4>152)&&(po4<155))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+152+"</span>";
		}
		else if((po4>156)&&(po4<159))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+156+"</span>";
		}
		else if((po4>160)&&(po4<163))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+160+"</span>";
		}
		else if((po4>164)&&(po4<167))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+164+"</span>";
		}
		else if((po4>168)&&(po4<171))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+168+"</span>";
		}
		else if((po4>172)&&(po4<175))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+172+"</span>";
		}
		else if((po4>176)&&(po4<179))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+176+"</span>";
		}
		else if((po4>180)&&(po4<183))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+180+"</span>";
		}
		else if((po4>184)&&(po4<187))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+184+"</span>";
		}
		else if((po4>188)&&(po4<191))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+188+"</span>";
		}
		else if((po4>192)&&(po4<195))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+192+"</span>";
		}
		else if((po4>196)&&(po4<199))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+196+"</span>";
		}
		else if((po4>200)&&(po4<203))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+200+"</span>";
		}
		else if((po4>204)&&(po4<207))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+204+"</span>";
		}
		else if((po4>208)&&(po4<211))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+208+"</span>";
		}
		else if((po4>212)&&(po4<215))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+212+"</span>";
		}
		else if((po4>216)&&(po4<219))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+216+"</span>";
		}
		else if((po4>220)&&(po4<223))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+220+"</span>";
		}
		else if((po4>224)&&(po4<227))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+224+"</span>";
		}
		else if((po4>228)&&(po4<231))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+228+"</span>";
		}
		else if((po4>232)&&(po4<235))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+232+"</span>";
		}
		else if((po4>236)&&(po4<239))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+236+"</span>";
		}
		else if((po4>240)&&(po4<243))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+240+"</span>";
		}
		else if((po4>244)&&(po4<247))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+244+"</span>";
		}
		else if((po4>248)&&(po4<251))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+248+"</span>";
		}
		else if((po4>252)&&(po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+252+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
  }						
  else if((CIDR>=16)&& (po1!="") && (po2 != "")  &&  (po3 != "")  &&  (po4 != ""))
  {
	if(CIDR == 16)
	{
		if ((po3>=0)&&(po3<=255)&&(po4>0)&& (po4<255))
		{
			 document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+0+"."+0+"</span>";
			 document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+255+"."+255+"</span>";
		}
		else
		{
			 document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			  document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}					
	else if (CIDR == 17)
	{
		if(po3>=0 && po3<=127 && po4>0 && po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+127+"."+255+"</span>";
		}
		else if(po3>=128 && po3<=255 && po4>0 &&  po4<255 )
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+128+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+255+"."+255+"</span>";
		}
		else
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}


	else if(CIDR == 18)

	{
		if((po3>=0)&&(po3<=63)&&(po4>0)&& (po4<255))
		{	
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+63+"."+255+"</span>";
		}
		else if((po3>=64)&&(po3<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+64+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+127+"."+255+"</span>";
		}
		else if((po3>=128)&&(po3<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+128+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+191+"."+255+"</span>";
		}
		else if((po3>=192)&&(po3<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+192+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
		
	}
	else if(CIDR == 19)

	{
		if(po3>=0 && po3<31 && po4>0 &&  po4<255 )
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+31+"."+255+"</span>";
		}
		else if(po3>=32 && po3<=63 && po4>0 &&  po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+32+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+63+"."+255+"</span>";
		}
		else if(po3>=64 && po3<=95 && po4>0 &&  po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+64+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+95+"."+255+"</span>";
		}
		else if(po3>=96 && po3<=127 && po4>0 &&  po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+96+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+127+"."+255+"</span>";
		}
		else if(po3>=128 && po3<=159 && po4>0 && po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+128+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+159+"."+255+"</span>";
		}
		else if(po3>=160 && po3<=191 && po4>0 && po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+160+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+191+"."+255+"</span>";
		}
		else if(po3>=192 && po3<=223 && po4>0 &&  po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+192+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+223+"."+255+"</span>";
		}
		else if(po3>=224 && po3<=255 && po4>0 && po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+224+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
	else if(CIDR == 20)

	{
		if((po3>=0)&&(po3<=15)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+15+"."+255+"</span>";
		}
		else if((po3>=16)&&(po3<=31)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+16+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+31+"."+255+"</span>";
		}
		else if((po3>=32)&&(po3<=47)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+32+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+47+"."+255+"</span>";
		}
		else if((po3>=48)&&(po3<=63)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+48+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+63+"."+255+"</span>";
		}
		else if((po3>=64)&&(po3<=79)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+64+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+79+"."+255+"</span>";
		}
		else if((po3>=80)&&(po3<=95)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+80+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+95+"."+255+"</span>";
		}
		else if((po3>=96)&&(po3<=111)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+96+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+111+"."+255+"</span>";
		}
		else if((po3>=112)&&(po3<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+112+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+127+"."+255+"</span>";
		}
		else if((po3>=128)&&(po3<=143)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+128+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+143+"."+255+"</span>";
		}
		else if((po3>=144)&&(po3<=159)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+144+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+159+"."+255+"</span>";
		}
		else if((po3>=160)&&(po3<=175)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+160+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+175+"."+255+"</span>";
		}
		else if((po3>=176)&&(po3<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+176+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+191+"."+255+"</span>";
		}
		else if((po3>=192)&&(po3<=207)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+192+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+207+"."+255+"</span>";
		}
		else if((po3>=208)&&(po3<=223)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+208+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+223+"."+255+"</span>";
		}
		else if((po3>=224)&&(po3<=239)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+224+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+239+"."+255+"</span>";
		}
		else if((po3>=240)&&(po3<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+240+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}

	}
	else if (CIDR == 21)
	{
		if((po3>=0)&&(po3<=7)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+7+"."+255+"</span>";
		}
		else if((po3>=8)&&(po3<=15)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+8+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+15+"."+255+"</span>";
		}
		else if((po3>=16)&&(po3<=23)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+16+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+23+"."+255+"</span>";
		}
		else if((po3>=24)&&(po3<=31)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+24+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+31+"."+255+"</span>";
		}
		else if((po3>=32)&&(po3<=39)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+32+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+39+"."+255+"</span>";
		}
		else if((po3>=40)&&(po3<=47)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+40+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+47+"."+255+"</span>";
		}
		else if((po3>=48)&&(po3<=55)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+48+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+55+"."+255+"</span>";
		}
		else if((po3>=56)&&(po3<=63)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+56+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+63+"."+255+"</span>";
		}
		else if((po3>=64)&&(po3<=71)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+64+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+71+"."+255+"</span>";
		}
		else if((po3>=72)&&(po3<=79)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+72+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+79+"."+255+"</span>";
		}
		else if((po3>=80)&&(po3<=87)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+80+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+87+"."+255+"</span>";
		}
		else if((po3>=88)&&(po3<=95)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+88+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+95+"."+255+"</span>";
		}
		else if((po3>=96)&&(po3<=103)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+96+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+103+"."+255+"</span>";
		}
		else if((po3>=104)&&(po3<=111)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+104+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+111+"."+255+"</span>";
		}
		else if((po3>=112)&&(po3<=119)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+112+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+119+"."+255+"</span>";
		}
		else if((po3>=120)&&(po3<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+120+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+127+"."+255+"</span>";
		}
		else if((po3>=128)&&(po3<=135)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+128+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+135+"."+255+"</span>";
		}
		else if((po3>=136)&&(po3<=143)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+136+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+143+"."+255+"</span>";
		}
		else if((po3>=144)&&(po3<=151)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+144+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+151+"."+255+"</span>";
		}
		else if((po3>=152)&&(po3<=159)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+152+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+159+"."+255+"</span>";
		}
		else if((po3>=160)&&(po3<=167)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+160+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+167+"."+255+"</span>";
		}
		else if((po3>=168)&&(po3<=175)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+168+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+175+"."+255+"</span>";
		}
		else if((po3>=176)&&(po3<=183)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+176+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+183+"."+255+"</span>";
		}
		else if((po3>=184)&&(po3<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+184+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+191+"."+255+"</span>";
		}
		else if((po3>=192)&&(po3<=199)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+192+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+199+"."+255+"</span>";
		}
		else if((po3>=200)&&(po3<=207)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+200+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+207+"."+255+"</span>";
		}
		else if((po3>=208)&&(po3<=215)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+208+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+215+"."+255+"</span>";
		}
		else if((po3>=216)&&(po3<=223)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+216+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+223+"."+255+"</span>";
		}
		else if((po3>=224)&&(po3<=231)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+224+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+231+"."+255+"</span>";
		}
		else if((po3>=232)&&(po3<=239)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+232+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+239+"."+255+"</span>";
		}
		else if((po3>=240)&&(po3<=247)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+240+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+247+"."+255+"</span>";
		}
		else if((po3>=248)&&(po3<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+248+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}

	}
    else if (CIDR == 22)
	{
		if((po3>=0)&&(po3<=3)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+3+"."+255+"</span>";
		}
		else if((po3>=4)&&(po3<=7)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+4+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+7+"."+255+"</span>";
		}
		else if((po3>=8)&&(po3<=11)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+8+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+11+"."+255+"</span>";
		}
		else if((po3>=12)&&(po3<=15)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+12+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+15+"."+255+"</span>";
		}
		else if((po3>=16)&&(po3<=19)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+16+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+19+"."+255+"</span>";
		}
		else if((po3>=20)&&(po3<=23)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+20+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+23+"."+255+"</span>";
		}
		else if((po3>=24)&&(po3<=27)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+24+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+27+"."+255+"</span>";
		}
		else if((po3>=28)&&(po3<=31)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+28+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+255+"."+255+"</span>";
		}
		else if((po3>=32)&&(po3<=35)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+32+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+35+"."+255+"</span>";
		}
		else if((po3>=36)&&(po3<=39)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+36+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+39+"."+255+"</span>";
		}
		else if((po3>=40)&&(po3<=43)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+40+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+43+"."+255+"</span>";
		}
		else if((po3>=44)&&(po3<=47)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+44+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+47+"."+255+"</span>";
		}
		else if((po3>=48)&&(po3<=51)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+48+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+51+"."+255+"</span>";
		}
		else if((po3>=52)&&(po3<=55)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+52+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+55+"."+255+"</span>";
		}
		else if((po3>=56)&&(po3<=59)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+56+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+59+"."+255+"</span>";
		}
		else if((po3>=60)&&(po3<=63)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+60+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+63+"."+255+"</span>";
		}
		else if((po3>=64)&&(po3<=67)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+64+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+67+"."+255+"</span>";
		}
		else if((po3>=68)&&(po3<=71)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+68+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+71+"."+255+"</span>";
		}
		else if((po3>=72)&&(po3<=75)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+72+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+75+"."+255+"</span>";
		}
		else if((po3>=76)&&(po3<=79)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+76+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+79+"."+255+"</span>";
		}
		else if((po3>=80)&&(po3<=83)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+80+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+83+"."+255+"</span>";
		}
		else if((po3>=84)&&(po3<=87)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+84+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+87+"."+255+"</span>";
		}
		else if((po3>=88)&&(po3<=91)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+88+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+91+"."+255+"</span>";
		}
		else if((po3>=92)&&(po3<=95)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+92+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+95+"."+255+"</span>";
		}
		else if((po3>=96)&&(po3<=99)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+96+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+99+"."+255+"</span>";
		}
		else if((po3>=100)&&(po3<=103)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+100+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+103+"."+255+"</span>";
		}
		else if((po3>=104)&&(po3<=107)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+104+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+107+"."+255+"</span>";
		}
		else if((po3>=108)&&(po3<=111)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+108+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+111+"."+255+"</span>";
		}
		else if((po3>=112)&&(po3<=115)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+112+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+115+"."+255+"</span>";
		}
		else if((po3>=116)&&(po3<=119)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+116+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+119+"."+255+"</span>";
		}
		else if((po3>=120)&&(po3<=123)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+120+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+123+"."+255+"</span>";
		}
		else if((po3>=124)&&(po3<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+124+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+127+"."+255+"</span>";
		}
		else if((po3>=128)&&(po3<=131)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+128+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+131+"."+255+"</span>";
		}
		else if((po3>=132)&&(po3<=135)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+132+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+135+"."+255+"</span>";
		}
		else if((po3>=136)&&(po3<=139)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+136+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+139+"."+255+"</span>";
		}
		else if((po3>=140)&&(po3<=143)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+140+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+143+"."+255+"</span>";
		}
		else if((po3>=144)&&(po3<=147)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+144+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+147+"."+255+"</span>";
		}
		else if((po3>=148)&&(po3<=151)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+148+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+151+"."+255+"</span>";
		}
		else if((po3>=152)&&(po3<=155)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+152+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+155+"."+255+"</span>";
		}
		else if((po3>=156)&&(po3<=159)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+156+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+159+"."+255+"</span>";
		}
		else if((po3>=160)&&(po3<=163)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+160+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+163+"."+255+"</span>";
		}
		else if((po3>=164)&&(po3<=167)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+164+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+167+"."+255+"</span>";
		}
		else if((po3>=168)&&(po3<=171)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+168+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+171+"."+255+"</span>";
		}
		else if((po3>=172)&&(po3<=175)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+172+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+175+"."+255+"</span>";
		}
		else if((po3>=176)&&(po3<=179)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+176+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+179+"."+255+"</span>";
		}
		else if((po3>=180)&&(po3<=183)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+180+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+183+"."+255+"</span>";
		}
		else if((po3>=184)&&(po3<=187)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+184+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+187+"."+255+"</span>";
		}
		else if((po3>=188)&&(po3<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+188+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+191+"."+255+"</span>";
		}
		else if((po3>=192)&&(po3<=195)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+192+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+195+"."+255+"</span>";
		}
		else if((po3>=196)&&(po3<=199)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+196+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+199+"."+255+"</span>";
		}
		else if((po3>=200)&&(po3<=203)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+200+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+203+"."+255+"</span>";
		}
		else if((po3>=204)&&(po3<=207)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+204+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+207+"."+255+"</span>";
		}
		else if((po3>=208)&&(po3<=211)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+208+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+211+"."+255+"</span>";
		}
		else if((po3>=212)&&(po3<=215)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+212+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+215+"."+255+"</span>";
		}
		else if((po3>=216)&&(po3<=219)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+216+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+219+"."+255+"</span>";
		}
		else if((po3>=220)&&(po3<=223)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+220+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+223+"."+255+"</span>";
		}
		else if((po3>=224)&&(po3<=227)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+224+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+227+"."+255+"</span>";
		}
		else if((po3>=228)&&(po3<=231)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+228+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+231+"."+255+"</span>";
		}
		else if((po3>=232)&&(po3<=235)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+232+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+235+"."+255+"</span>";
		}
		else if((po3>=236)&&(po3<=239)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+236+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+239+"."+255+"</span>";
		}
		else if((po3>=240)&&(po3<=243)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+240+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+243+"."+255+"</span>";
		}
		else if((po3>=244)&&(po3<=247)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+244+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+247+"."+255+"</span>";
		}
		else if((po3>=248)&&(po3<=251)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+248+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+251+"."+255+"</span>";
		}
		else if((po3>=252)&&(po3<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+252+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
	else if (CIDR == 23)
	{
		if((po3>=0)&&(po3<=1)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+1+"."+255+"</span>";
		}
		else if((po3>=2)&&(po3<=3)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+2+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+3+"."+255+"</span>";
		}
		else if((po3>=4)&&(po3<=5)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+4+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+5+"."+255+"</span>";
		}
		else if((po3>=6)&&(po3<=7)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+6+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+7+"."+255+"</span>";
		}
		else if((po3>=8)&&(po3<=9)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+8+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+9+"."+255+"</span>";
		}
		else if((po3>=10)&&(po3<=11)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+10+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+11+"."+255+"</span>";
		}
		else if((po3>=12)&&(po3<=13)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+12+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+13+"."+255+"</span>";
		}
		else if((po3>=14)&&(po3<=15)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+14+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+15+"."+255+"</span>";
		}
		else if((po3>=16)&&(po3<=17)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+16+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+17+"."+255+"</span>";
		}
		else if((po3>=18)&&(po3<=19)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+18+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+19+"."+255+"</span>";
		}
		else if((po3>=20)&&(po3<=21)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+20+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+21+"."+255+"</span>";
		}
		else if((po3>=22)&&(po3<=23)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+22+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+23+"."+255+"</span>";

		}
		else if((po3>=24)&&(po3<=25)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+24+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+25+"."+255+"</span>";
		}
		else if((po3>=26)&&(po3<=27)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+26+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+27+"."+255+"</span>";
		}
		else if((po3>=28)&&(po3<=29)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+28+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+29+"."+255+"</span>";
		}
		else if((po3>=30)&&(po3<=31)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+30+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+31+"."+255+"</span>";
		}
		else if((po3>=32)&&(po3<=33)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+32+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+33+"."+255+"</span>";
		}
		else if((po3>=34)&&(po3<=35)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+34+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+35+"."+255+"</span>";
		}
		else if((po3>=36)&&(po3<=37)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+36+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+37+"."+255+"</span>";
		}
		else if((po3>=38)&&(po3<=39)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+38+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+39+"."+255+"</span>";
		}
		else if((po3>=40)&&(po3<=41)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+40+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+41+"."+255+"</span>";
		}
		else if((po3>=42)&&(po3<=43)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+42+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+43+"."+255+"</span>";
		}
		else if((po3>=44)&&(po3<=45)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+44+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+45+"."+255+"</span>";
		}
		else if((po3>=46)&&(po3<=47)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+46+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+47+"."+255+"</span>";
		}
		else if((po3>=48)&&(po3<=49)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+48+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+49+"."+255+"</span>";
		}
		else if((po3>=50)&&(po3<=51)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+50+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+51+"."+255+"</span>";
		}
		else if((po3>=52)&&(po3<=53)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+52+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+53+"."+255+"</span>";
		}
		else if((po3>=54)&&(po3<=55)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+54+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+55+"."+255+"</span>";
		}
		else if((po3>=56)&&(po3<=57)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+56+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+57+"."+255+"</span>";
		}
		else if((po3>=58)&&(po3<=59)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+58+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+59+"."+255+"</span>";
		}
		else if((po3>=60)&&(po3<=61)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+60+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+61+"."+255+"</span>";
		}
		else if((po3>=62)&&(po3<=63)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+62+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+63+"."+255+"</span>";
		}
		else if((po3>=64)&&(po3<=65)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+64+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+65+"."+255+"</span>";
		}
		else if((po3>=66)&&(po3<=67)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+66+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+67+"."+255+"</span>";
		}
		else if((po3>=68)&&(po3<=69)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+68+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+69+"."+255+"</span>";
		}
		else if((po3>=70)&&(po3<=71)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+70+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+71+"."+255+"</span>";
		}
		else if((po3>=72)&&(po3<=73)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+72+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+72+"."+255+"</span>";
		}
		else if((po3>=74)&&(po3<=75)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+74+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+75+"."+255+"</span>";
		}
		else if((po3>=76)&&(po3<=77)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+76+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+77+"."+255+"</span>";
		}
		else if((po3>=78)&&(po3<=79)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+78+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+79+"."+255+"</span>";
		}
		else if((po3>=80)&&(po3<=81)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+80+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+81+"."+255+"</span>";
		}
		else if((po3>=82)&&(po3<=83)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+82+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+83+"."+255+"</span>";
		}
		else if((po3>=84)&&(po3<=85)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+84+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+85+"."+255+"</span>";
		}
		else if((po3>=86)&&(po3<=87)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+86+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+87+"."+255+"</span>";
		}
		else if((po3>=88)&&(po3<=89)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+88+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+89+"."+255+"</span>";
		}
		else if((po3>=90)&&(po3<=91)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+90+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+91+"."+255+"</span>";
		}
		else if((po3>=92)&&(po3<=93)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+92+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+93+"."+255+"</span>";
		}
		else if((po3>=94)&&(po3<=95)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+94+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+95+"."+255+"</span>";
		}
		else if((po3>=96)&&(po3<=97)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+96+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+97+"."+255+"</span>";
		}
		else if((po3>=98)&&(po3<=99)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+98+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+99+"."+255+"</span>";
		}
		else if((po3>=100)&&(po3<=101)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+100+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+101+"."+255+"</span>";
		}
		else if((po3>=102)&&(po3<=103)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+102+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+103+"."+255+"</span>";
		}
		else if((po3>=104)&&(po3<=105)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+104+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+105+"."+255+"</span>";
		}
		else if((po3>=106)&&(po3<=107)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+106+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+107+"."+255+"</span>";
		}
		else if((po3>=108)&&(po3<=109)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+108+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+109+"."+255+"</span>";
		}
		else if((po3>=110)&&(po3<=111)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+110+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+111+"."+255+"</span>";
		}
		else if((po3>=112)&&(po3<=113)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+112+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+113+"."+255+"</span>";
		}
		else if((po3>=114)&&(po3<=115)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+114+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+115+"."+255+"</span>";
		}
		else if((po3>=116)&&(po3<=117)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+116+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+117+"."+255+"</span>";
		}
		else if((po3>=118)&&(po3<=119)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+118+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+119+"."+255+"</span>";
		}
		else if((po3>=120)&&(po3<=121)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+120+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+121+"."+255+"</span>";
		}
		else if((po3>=122)&&(po3<=123)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+122+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+123+"."+255+"</span>";
		}
		else if((po3>=124)&&(po3<=125)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+124+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+125+"."+255+"</span>";
		}
		else if((po3>=126)&&(po3<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+126+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+127+"."+255+"</span>";
		}
		else if((po3>=128)&&(po3<=129)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+128+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+95+"."+255+"</span>";
		}
		else if((po3>=130)&&(po3<=131)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+130+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+131+"."+255+"</span>";
		}
		else if((po3>=132)&&(po3<=133)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+132+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+133+"."+255+"</span>";
		}
		else if((po3>=134)&&(po3<=135)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+134+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+135+"."+255+"</span>";
		}
		else if((po3>=136)&&(po3<=137)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+136+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+137+"."+255+"</span>";
		}
		else if((po3>=138)&&(po3<=139)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+138+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+139+"."+255+"</span>";
		}
		else if((po3>=140)&&(po3<=141)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+140+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+141+"."+255+"</span>";
		}
		else if((po3>=142)&&(po3<=143)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+142+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+143+"."+255+"</span>";
		}
		else if((po3>=144)&&(po3<=145)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+144+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+145+"."+255+"</span>";
		}
		else if((po3>=146)&&(po3<=147)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+146+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+147+"."+255+"</span>";
		}
		else if((po3>=148)&&(po3<=149)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+148+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+149+"."+255+"</span>";
		}
		else if((po3>=150)&&(po3<=151)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+150+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+151+"."+255+"</span>";
		}
		else if((po3>=152)&&(po3<=153)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+152+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+153+"."+255+"</span>";
		}
		else if((po3>=154)&&(po3<=155)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+154+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+155+"."+255+"</span>";
		}
		else if((po3>=156)&&(po3<=157)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+156+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+157+"."+255+"</span>";
		}
		else if((po3>=158)&&(po3<=159)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+158+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+159+"."+255+"</span>";
		}
		else if((po3>=160)&&(po3<=161)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+160+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+161+"."+255+"</span>";
		}
		else if((po3>=162)&&(po3<=163)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+162+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+163+"."+255+"</span>";
		}
		else if((po3>=164)&&(po3<=165)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+164+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+165+"."+255+"</span>";
		}
		else if((po3>=166)&&(po3<=167)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+166+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+167+"."+255+"</span>";
		}
		else if((po3>=168)&&(po3<=169)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+168+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+169+"."+255+"</span>";
		}
		else if((po3>=170)&&(po3<=171)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+170+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+171+"."+255+"</span>";
		}
		else if((po3>=172)&&(po3<=173)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+172+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+173+"."+255+"</span>";
		}
		else if((po3>=174)&&(po3<=175)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+174+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+175+"."+255+"</span>";
		}
		else if((po3>=176)&&(po3<=177)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+176+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+177+"."+255+"</span>";
		}
		else if((po3>=178)&&(po3<=179)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+178+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+179+"."+255+"</span>";
		}
		else if((po3>=180)&&(po3<=181)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+180+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+181+"."+255+"</span>";
		}
		else if((po3>=182)&&(po3<=183)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+182+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+183+"."+255+"</span>";
		}
		else if((po3>=184)&&(po3<=185)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+184+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+185+"."+255+"</span>";
		}
		else if((po3>=186)&&(po3<=187)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+186+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+187+"."+255+"</span>";
		}
		else if((po3>=188)&&(po3<=189)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+188+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+189+"."+255+"</span>";
		}
		else if((po3>=190)&&(po3<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+190+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+191+"."+255+"</span>";
		}
		else if((po3>=192)&&(po3<=193)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+192+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+193+"."+255+"</span>";
		}
		else if((po3>=194)&&(po3<=195)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+194+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+195+"."+255+"</span>";
		}
		else if((po3>=196)&&(po3<=197)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+196+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+197+"."+255+"</span>";
		}
		else if((po3>=198)&&(po3<=199)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+198+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+199+"."+255+"</span>";
		}
		else if((po3>=200)&&(po3<=201)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+200+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+201+"."+255+"</span>";
		}
		else if((po3>=202)&&(po3<=203)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+202+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+203+"."+255+"</span>";
		}
		else if((po3>=204)&&(po3<=205)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+204+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+205+"."+255+"</span>";
		}
		else if((po3>=206)&&(po3<=207)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+206+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+207+"."+255+"</span>";
		}
		else if((po3>=208)&&(po3<=209)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+208+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+209+"."+255+"</span>";
		}
		else if((po3>=210)&&(po3<=211)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+210+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+211+"."+255+"</span>";
		}
		else if((po3>=212)&&(po3<=213)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+212+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+213+"."+255+"</span>";
		}
		else if((po3>=214)&&(po3<=215)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+214+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+215+"."+255+"</span>";
		}
		else if((po3>=216)&&(po3<=217)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+216+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+217+"."+255+"</span>";
		}
		else if((po3>=218)&&(po3<=219)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+218+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+219+"."+255+"</span>";
		}
		else if((po3>=220)&&(po3<=221)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+220+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+221+"."+255+"</span>";
		}
		else if((po3>=222)&&(po3<=223)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+222+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+223+"."+255+"</span>";
		}
		else if((po3>=224)&&(po3<=225)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+224+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+225+"."+255+"</span>";
		}
		else if((po3>=226)&&(po3<=227)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+226+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+227+"."+255+"</span>";
		}
		else if((po3>=228)&&(po3<=229)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+228+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+229+"."+255+"</span>";
		}
		else if((po3>=230)&&(po3<=231)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+230+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+231+"."+255+"</span>";
		}
		else if((po3>=232)&&(po3<=233)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+232+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+233+"."+255+"</span>";
		}
		else if((po3>=234)&&(po3<=235)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+234+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+235+"."+255+"</span>";
		}
		else if((po3>=236)&&(po3<=237)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+236+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+237+"."+255+"</span>";
		}
		else if((po3>=238)&&(po3<=239)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+238+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+239+"."+255+"</span>";
		}
		else if((po3>=240)&&(po3<=241)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+240+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+241+"."+255+"</span>";
		}
		else if((po3>=242)&&(po3<=243)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+242+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+243+"."+255+"</span>";
		}
		else if((po3>=244)&&(po3<=245)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+244+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+245+"."+255+"</span>";
		}
		else if((po3>=246)&&(po3<=247)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+246+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+247+"."+255+"</span>";
		}
		else if((po3>=248)&&(po3<=249)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+248+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+249+"."+255+"</span>";
		}
		else if((po3>=250)&&(po3<=251)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+250+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+251+"."+255+"</span>";
		}
		else if((po3>=252)&&(po3<=253)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+252+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+253+"."+255+"</span>";
		}
		else if((po3>=254)&&(po3<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+po2+"."+254+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
  }						
  else if((CIDR>=8)&& (po1!="") && (po2 != "")  &&  (po3 != "")  &&  (po4 != ""))
  {
	if(CIDR == 8)
	{
		if ((po2>=0)&&(po2<=255)&&(po4>0)&& (po4<255))
		{
			 document.getElementById("idNet").innerHTML="<span>"+po1+"."+0+"."+0+"."+0+"</span>";
			 document.getElementById("idBroad").innerHTML="<span>"+po1+"."+255+"."+255+"."+255+"</span>";
		}
		else
		{
			 document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			 document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
	else if (CIDR == 9)
	{
		if(po2>=0 && po2<=127 && po4>0 && po4<255)
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+0+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+127+"."+255+"."+255+"</span>";
		}
		else if(po2>=128 && po2<=255 && po4!=0 &&  po4!=255 )
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+128+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+255+"."+255+"."+255+"</span>";
		}
		else
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}


	else if(CIDR == 10)

	{
		if((po2>=0)&&(po2<=63)&&(po4>0)&& (po4<255))
		{	
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+0+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+63+"."+255+"."+255+"</span>";
		}
		else if((po2>=64)&&(po2<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+64+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+127+"."+255+"."+255+"</span>";
		}
		else if((po2>=128)&&(po2<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+128+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+191+"."+255+"."+255+"</span>";
		}
		else if((po2>=192)&&(po2<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+192+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+255+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
		
	}
  
    else if(CIDR == 11)

	{
		if((po2>=0)&&(po4<31)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+0+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+31+"."+255+"."+255+"</span>";
		}
		else if((po2>=32)&&(po2<=63)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+32+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+63+"."+255+"."+255+"</span>";
		}
		else if((po2>=64)&&(po2<=95)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+64+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+95+"."+255+"."+255+"</span>";
		}
		else if((po2>=96)&&(po2<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+96+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+127+"."+255+"."+255+"</span>";
		}
		else if((po2>=128)&&(po2<=159)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+128+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+159+"."+255+"."+255+"</span>";
		}
		else if((po2>=160)&&(po2<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+160+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+191+"."+255+"."+255+"</span>";
		}
		else if((po2>=192)&&(po2<=223)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+192+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+223+"."+255+"."+255+"</span>";
		}
		else if((po2>=224)&&(po2<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+224+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+225+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}

	else if(CIDR == 12)

	{
		if((po2>=0)&&(po2<=15)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+0+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+15+"."+255+"."+255+"</span>";
		}
		else if((po2>=16)&&(po2<=31)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+16+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+31+"."+255+"."+255+"</span>";
		}
		else if((po2>=32)&&(po2<=47)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+32+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+47+"."+255+"."+255+"</span>";
		}
		else if((po2>=48)&&(po2<=63)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+48+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+63+"."+255+"."+255+"</span>";
		}
		else if((po2>=64)&&(po2<=79)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+64+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+79+"."+255+"."+255+"</span>";
		}
		else if((po2>=80)&&(po2<=95)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+80+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+95+"."+255+"."+255+"</span>";
		}
		else if((po2>=96)&&(po2<=111)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+96+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+111+"."+255+"."+255+"</span>";
		}
		else if((po2>=112)&&(po2<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+112+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+127+"."+255+"."+255+"</span>";
		}
		else if((po2>=128)&&(po2<=143)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+128+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+143+"."+255+"."+255+"</span>";
		}
		else if((po2>=144)&&(po2<=159)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+144+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+159+"."+255+"."+255+"</span>";
		}
		else if((po2>=160)&&(po2<=175)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+160+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+175+"."+255+"."+255+"</span>";
		}
		else if((po2>=176)&&(po2<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+176+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+191+"."+255+"."+255+"</span>";
		}
		else if((po2>=192)&&(po2<=207)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+192+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+207+"."+255+"."+255+"</span>";
		}
		else if((po2>=208)&&(po2<=223)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+208+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+223+"."+255+"."+255+"</span>";
		}
		else if((po2>=224)&&(po2<=239)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+224+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+239+"."+255+"."+255+"</span>";
		}
		else if((po2>=240)&&(po2<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+240+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+255+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}

	}
  
	else if (CIDR == 13)
	{
		if((po2>=0)&&(po2<=7)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+0+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+7+"."+255+"."+255+"</span>";
		}
		else if((po2>=8)&&(po2<=15)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+8+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+15+"."+255+"."+255+"</span>";
		}
		else if((po2>=16)&&(po2<=23)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+16+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+23+"."+255+"."+255+"</span>";
		}
		else if((po2>=24)&&(po2<=31)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+24+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+31+"."+255+"."+255+"</span>";
		}
		else if((po2>=32)&&(po2<=39)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+32+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+39+"."+255+"."+255+"</span>";
		}
		else if((po2>=40)&&(po2<=47)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+40+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+47+"."+255+"."+255+"</span>";
		}
		else if((po2>=48)&&(po2<=55)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+48+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+55+"."+255+"."+255+"</span>";
		}
		else if((po2>=56)&&(po2<=63)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+56+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+63+"."+255+"."+255+"</span>";
		}
		else if((po2>=64)&&(po2<=71)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+64+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+71+"."+255+"."+255+"</span>";
		}
		else if((po2>=72)&&(po2<=79)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+72+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+79+"."+255+"."+255+"</span>";
		}
		else if((po2>=80)&&(po2<=87)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+80+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+87+"."+255+"."+255+"</span>";
		}
		else if((po2>=88)&&(po2<=95)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+88+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+87+"."+255+"."+255+"</span>";
		}
		else if((po2>=96)&&(po2<=103)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+96+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+103+"."+255+"."+255+"</span>";
		}
		else if((po2>=104)&&(po2<=111)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+104+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+111+"."+255+"."+255+"</span>";
		}
		else if((po2>=112)&&(po2<=119)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+112+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+119+"."+255+"."+255+"</span>";
		}
		else if((po2>=120)&&(po2<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+120+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+127+"."+255+"."+255+"</span>";
		}
		else if((po2>=128)&&(po2<=135)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+128+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+135+"."+255+"."+255+"</span>";
		}
		else if((po2>=136)&&(po2<=143)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+136+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+143+"."+255+"."+255+"</span>";
		}
		else if((po2>=144)&&(po2<=151)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+144+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+151+"."+255+"."+255+"</span>";
		}
		else if((po2>=152)&&(po2<=159)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+152+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+159+"."+255+"."+255+"</span>";
		}
		else if((po2>=160)&&(po2<=167)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+160+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+167+"."+255+"."+255+"</span>";
		}
		else if((po2>=168)&&(po2<=175)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+168+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+167+"."+255+"."+255+"</span>";
		}
		else if((po2>=176)&&(po2<=183)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+176+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+183+"."+255+"."+255+"</span>";
		}
		else if((po2>=184)&&(po2<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+184+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+191+"."+255+"."+255+"</span>";
		}
		else if((po2>=192)&&(po2<=199)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+192+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+199+"."+255+"."+255+"</span>";
		}
		else if((po2>=200)&&(po2<=207)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+200+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+207+"."+255+"."+255+"</span>";
		}
		else if((po2>=208)&&(po2<=215)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+208+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+215+"."+255+"."+255+"</span>";
		}
		else if((po2>=216)&&(po2<=223)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+216+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+223+"."+255+"."+255+"</span>";
		}
		else if((po2>=224)&&(po2<=231)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+224+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+231+"."+255+"."+255+"</span>";
		}
		else if((po2>=232)&&(po2<=239)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+232+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+239+"."+255+"."+255+"</span>";
		}
		else if((po2>=240)&&(po2<=247)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+240+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+247+"."+255+"."+255+"</span>";
		}
		else if((po2>=248)&&(po2<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+248+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+255+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}

	}
  
    else if (CIDR == 14)
	{
		if((po2>=0)&&(po2<=3)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+0+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+255+"."+255+"."+255+"</span>";
		}
		else if((po2>=4)&&(po2<=7)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+4+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+7+"."+255+"."+255+"</span>";
		}
		else if((po2>=8)&&(po2<=11)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+8+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+11+"."+255+"."+255+"</span>";
		}
		else if((po2>=12)&&(po2<=15)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+12+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+15+"."+255+"."+255+"</span>";
		}
		else if((po2>=16)&&(po2<=19)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+16+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+19+"."+255+"."+255+"</span>";
		}
		else if((po2>=20)&&(po2<=23)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+20+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+23+"."+255+"."+255+"</span>";
		}
		else if((po2>=24)&&(po2<=27)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+24+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+27+"."+255+"."+255+"</span>";
		}
		else if((po2>=28)&&(po2<=31)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+28+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+31+"."+255+"."+255+"</span>";
		}
		else if((po2>=32)&&(po2<=35)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+32+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+35+"."+255+"."+255+"</span>";
		}
		else if((po2>=36)&&(po2<=39)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+36+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+39+"."+255+"."+255+"</span>";
		}
		else if((po2>=40)&&(po2<=43)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+40+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+43+"."+255+"."+255+"</span>";
		}
		else if((po2>=44)&&(po2<=47)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+44+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+47+"."+255+"."+255+"</span>";
		}
		else if((po2>=48)&&(po2<=51)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+48+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+51+"."+255+"."+255+"</span>";
		}
		else if((po2>=52)&&(po2<=55)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+52+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+55+"."+255+"."+255+"</span>";
		}
		else if((po2>=56)&&(po2<=59)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+56+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+59+"."+255+"."+255+"</span>";
		}
		else if((po2>=60)&&(po2<=63)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+60+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+63+"."+255+"."+255+"</span>";
		}
		else if((po2>=64)&&(po2<=67)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+64+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+67+"."+255+"."+255+"</span>";

		}
		else if((po2>=68)&&(po2<=71)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+68+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+71+"."+255+"."+255+"</span>";
		}
		else if((po2>=72)&&(po2<=75)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+72+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+75+"."+255+"."+255+"</span>";
		}
		else if((po2>=76)&&(po2<=79)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+76+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+79+"."+255+"."+255+"</span>";
		}
		else if((po2>=80)&&(po2<=83)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+80+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+83+"."+255+"."+255+"</span>";
		}
		else if((po2>=84)&&(po2<=87)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+84+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+87+"."+255+"."+255+"</span>";
		}
		else if((po2>=88)&&(po2<=91)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+88+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+91+"."+255+"."+255+"</span>";
		}
		else if((po2>=92)&&(po2<=95)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+92+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+95+"."+255+"."+255+"</span>";
		}
		else if((po2>=96)&&(po2<=99)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+96+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+99+"."+255+"."+255+"</span>";
		}
		else if((po2>=100)&&(po2<=103)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+100+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+103+"."+255+"."+255+"</span>";
		}
		else if((po2>=104)&&(po2<=107)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+104+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+107+"."+255+"."+255+"</span>";
		}
		else if((po2>=108)&&(po2<=111)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+108+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+111+"."+255+"."+255+"</span>";
		}
		else if((po2>=112)&&(po2<=115)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+112+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+115+"."+255+"."+255+"</span>";
		}
		else if((po2>=116)&&(po2<=119)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+116+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+119+"."+255+"."+255+"</span>";
		}
		else if((po2>=120)&&(po2<=123)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+120+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+123+"."+255+"."+255+"</span>";
		}
		else if((po2>=124)&&(po2<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+124+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+127+"."+255+"."+255+"</span>";
		}
		else if((po2>=128)&&(po2<=131)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+128+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+131+"."+255+"."+255+"</span>";
		}
		else if((po2>=132)&&(po2<=135)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+132+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+135+"."+255+"."+255+"</span>";
		}
		else if((po2>=136)&&(po2<=139)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+136+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+139+"."+255+"."+255+"</span>";
		}
		else if((po2>=140)&&(po2<=143)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+140+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+143+"."+255+"."+255+"</span>";
		}
		else if((po2>=144)&&(po2<=147)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+144+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+147+"."+255+"."+255+"</span>";
		}
		else if((po2>=148)&&(po2<=151)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+148+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+151+"."+255+"."+255+"</span>";
		}
		else if((po2>=152)&&(po2<=155)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+152+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+155+"."+255+"."+255+"</span>";
		}
		else if((po2>=156)&&(po2<=159)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+156+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+159+"."+255+"."+255+"</span>";
		}
		else if((po2>=160)&&(po2<=163)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+160+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+163+"."+255+"."+255+"</span>";
		}
		else if((po2>=164)&&(po2<=167)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+164+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+167+"."+255+"."+255+"</span>";
		}
		else if((po2>=168)&&(po2<=171)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+168+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+171+"."+255+"."+255+"</span>";
		}
		else if((po2>=172)&&(po2<=175)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+172+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+175+"."+255+"."+255+"</span>";
		}
		else if((po2>=176)&&(po2<=179)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+176+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+179+"."+255+"."+255+"</span>";
		}
		else if((po2>=180)&&(po2<=183)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+180+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+183+"."+255+"."+255+"</span>";
		}
		else if((po2>=184)&&(po2<=187)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+184+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+187+"."+255+"."+255+"</span>";
		}
		else if((po2>=188)&&(po2<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+188+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+191+"."+255+"."+255+"</span>";
		}
		else if((po2>=192)&&(po2<=195)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+192+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+195+"."+255+"."+255+"</span>";
		}
		else if((po2>=196)&&(po2<=199)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+196+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+199+"."+255+"."+255+"</span>";
		}
		else if((po2>=200)&&(po2<=203)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+200+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+203+"."+255+"."+255+"</span>";
		}
		else if((po2>=204)&&(po2<=207)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+204+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+207+"."+255+"."+255+"</span>";
		}
		else if((po2>=208)&&(po2<=211)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+208+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+211+"."+255+"."+255+"</span>";
		}
		else if((po2>=212)&&(po2<=215)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+212+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+215+"."+255+"."+255+"</span>";
		}
		else if((po2>=216)&&(po2<=219)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+216+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+219+"."+255+"."+255+"</span>";
		}
		else if((po2>=220)&&(po2<=223)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+220+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+223+"."+255+"."+255+"</span>";
		}
		else if((po2>=224)&&(po2<=227)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+224+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+227+"."+255+"."+255+"</span>";
		}
		else if((po2>=228)&&(po2<=231)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+228+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+231+"."+255+"."+255+"</span>";
		}
		else if((po2>=232)&&(po2<=235)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+232+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+235+"."+255+"."+255+"</span>";
		}
		else if((po2>=236)&&(po2<=239)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+236+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+239+"."+255+"."+255+"</span>";
		}
		else if((po2>=240)&&(po2<=243)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+240+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+243+"."+255+"."+255+"</span>";
		}
		else if((po2>=244)&&(po2<=247)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+244+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+247+"."+255+"."+255+"</span>";
		}
		else if((po2>=248)&&(po2<=251)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+248+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+251+"."+255+"."+255+"</span>";
		}
		else if((po2>=252)&&(po2<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+252+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+255+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
	else if (CIDR == 15)
	{
		if((po2>=0)&&(po2<=1)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+0+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+1+"."+255+"."+255+"</span>";
		}
		else if((po2>=2)&&(po2<=3)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+2+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+3+"."+255+"."+255+"</span>";
		}
		else if((po2>=4)&&(po2<=5)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+4+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+5+"."+255+"."+255+"</span>";
		}
		else if((po2>=6)&&(po2<=7)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+6+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+7+"."+255+"."+255+"</span>";
		}
		else if((po2>=8)&&(po2<=9)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+8+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+9+"."+255+"."+255+"</span>";
		}
		else if((po2>=10)&&(po2<=11)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+10+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+11+"."+255+"."+255+"</span>";
		}
		else if((po2>=12)&&(po2<=13)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+12+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+13+"."+255+"."+255+"</span>";
		}
		else if((po2>=14)&&(po2<=15)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+14+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+15+"."+255+"."+255+"</span>";
		}
		else if((po2>=16)&&(po2<=17)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+16+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+17+"."+255+"."+255+"</span>";
		}
		else if((po2>=18)&&(po2<=19)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+18+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+19+"."+255+"."+255+"</span>";
		}
		else if((po2>=20)&&(po2<=21)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+20+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+21+"."+255+"."+255+"</span>";
		}
		else if((po2>=22)&&(po2<=23)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+22+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+23+"."+255+"."+255+"</span>";
		}
		else if((po2>=24)&&(po2<=25)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+24+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+25+"."+255+"."+255+"</span>";
		}
		else if((po2>=26)&&(po2<=27)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+26+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+27+"."+255+"."+255+"</span>";
		}
		else if((po2>=28)&&(po2<=29)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+28+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+29+"."+255+"."+255+"</span>";
		}
		else if((po2>=30)&&(po2<=31)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+30+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+31+"."+255+"."+255+"</span>";
		}
		else if((po2>=32)&&(po2<=33)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+32+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+33+"."+255+"."+255+"</span>";
		}
		else if((po2>=34)&&(po2<=35)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+34+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+35+"."+255+"."+255+"</span>";
		}
		else if((po2>=36)&&(po2<=37)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+36+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+37+"."+255+"."+255+"</span>";
		}
		else if((po2>=38)&&(po2<=39)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+38+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+39+"."+255+"."+255+"</span>";
		}
		else if((po2>=40)&&(po2<=41)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+40+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+41+"."+255+"."+255+"</span>";
		}
		else if((po2>=42)&&(po2<=43)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+42+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+43+"."+255+"."+255+"</span>";
		}
		else if((po2>=44)&&(po2<=45)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+44+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+45+"."+255+"."+255+"</span>";
		}
		else if((po2>=46)&&(po2<=47)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+46+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+47+"."+255+"."+255+"</span>";
		}
		else if((po2>=48)&&(po2<=49)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+48+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+49+"."+255+"."+255+"</span>";
		}
		else if((po2>=50)&&(po2<=51)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+50+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+51+"."+255+"."+255+"</span>";
		}
		else if((po2>=52)&&(po2<=53)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+52+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+53+"."+255+"."+255+"</span>";
		}
		else if((po2>=54)&&(po2<=55)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+54+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+55+"."+255+"."+255+"</span>";
		}
		else if((po2>=56)&&(po2<=57)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+56+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+57+"."+255+"."+255+"</span>";
		}
		else if((po2>=58)&&(po2<=59)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+58+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+59+"."+255+"."+255+"</span>";
		}
		else if((po2>=60)&&(po2<=61)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+60+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+61+"."+255+"."+255+"</span>";
		}
		else if((po2>=62)&&(po2<=63)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+62+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+63+"."+255+"."+255+"</span>";
		}
		else if((po2>=64)&&(po2<=65)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+64+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+65+"."+255+"."+255+"</span>";
		}
		else if((po2>=66)&&(po2<=67)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+66+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+67+"."+255+"."+255+"</span>";
		}
		else if((po2>=68)&&(po2<=69)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+68+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+69+"."+255+"."+255+"</span>";
		}
		else if((po2>=70)&&(po2<=71)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+70+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+71+"."+255+"."+255+"</span>";
		}
		else if((po2>=72)&&(po2<=73)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+72+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+73+"."+255+"."+255+"</span>";
		}
		else if((po2>=74)&&(po2<=75)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+74+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+75+"."+255+"."+255+"</span>";
		}
		else if((po2>=76)&&(po2<=77)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+76+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+77+"."+255+"."+255+"</span>";
		}
		else if((po2>=78)&&(po2<=79)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+78+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+79+"."+255+"."+255+"</span>";
		}
		else if((po2>=80)&&(po2<=81)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+80+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+81+"."+255+"."+255+"</span>";
		}
		else if((po2>=82)&&(po2<=83)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+82+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+83+"."+255+"."+255+"</span>";
		}
		else if((po2>=84)&&(po2<=85)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+84+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+85+"."+255+"."+255+"</span>";
		}
		else if((po2>=86)&&(po2<=87)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+86+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+87+"."+255+"."+255+"</span>";
		}
		else if((po2>=88)&&(po2<=89)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+88+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+89+"."+255+"."+255+"</span>";
		}
		else if((po2>=90)&&(po2<=91)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+90+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+91+"."+255+"."+255+"</span>";
		}
		else if((po2>=92)&&(po2<=93)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+92+"."+0+"."+0+"</span>";
				document.getElementById("idBroad").innerHTML="<span>"+po1+"."+93+"."+255+"."+255+"</span>";
		}
		else if((po2>=94)&&(po2<=95)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+94+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+95+"."+255+"."+255+"</span>";
		}
		else if((po2>=96)&&(po2<=97)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+96+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+97+"."+255+"."+255+"</span>";
		}
		else if((po2>=98)&&(po2<=99)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+98+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+99+"."+255+"."+255+"</span>";
		}
		else if((po2>=100)&&(po2<=101)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+100+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+101+"."+255+"."+255+"</span>";
		}
		else if((po2>=102)&&(po2<=103)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+102+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+103+"."+255+"."+255+"</span>";
		}
		else if((po2>=104)&&(po2<=105)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+104+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+105+"."+255+"."+255+"</span>";
		}
		else if((po2>=106)&&(po2<=107)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+106+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+107+"."+255+"."+255+"</span>";
		}
		else if((po2>=108)&&(po2<=109)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+108+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+109+"."+255+"."+255+"</span>";
		}
		else if((po2>=110)&&(po2<=111)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+110+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+111+"."+255+"."+255+"</span>";
		}
		else if((po2>=112)&&(po2<=113)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+112+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+113+"."+255+"."+255+"</span>";
		}
		else if((po2>=114)&&(po2<=115)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+114+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+115+"."+255+"."+255+"</span>";
		}
		else if((po2>=116)&&(po2<=117)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+116+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+117+"."+255+"."+255+"</span>";
		}
		else if((po2>=118)&&(po2<=119)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+118+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+119+"."+255+"."+255+"</span>";
		}
		else if((po2>=120)&&(po2<=121)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+120+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+121+"."+255+"."+255+"</span>";
		}
		else if((po2>=122)&&(po2<=123)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+122+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+123+"."+255+"."+255+"</span>";
		}
		else if((po2>=124)&&(po2<=125)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+124+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+125+"."+255+"."+255+"</span>";
		}
		else if((po2>=126)&&(po2<=127)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+126+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+127+"."+255+"."+255+"</span>";
		}
		else if((po2>=128)&&(po2<=129)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+128+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+129+"."+255+"."+255+"</span>";
		}
		else if((po2>=130)&&(po2<=131)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+130+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+131+"."+255+"."+255+"</span>";
		}
		else if((po2>=132)&&(po2<=133)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+132+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+133+"."+255+"."+255+"</span>";
		}
		else if((po2>=134)&&(po2<=135)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+134+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+135+"."+255+"."+255+"</span>";
		}
		else if((po2>=136)&&(po2<=137)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+136+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+137+"."+255+"."+255+"</span>";
		}
		else if((po2>=138)&&(po2<=139)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+138+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+139+"."+255+"."+255+"</span>";
		}
		else if((po2>=140)&&(po2<=141)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+140+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+141+"."+255+"."+255+"</span>";
		}
		else if((po2>=142)&&(po2<=143)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+142+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+143+"."+255+"."+255+"</span>";
		}
		else if((po2>=144)&&(po2<=145)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+144+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+145+"."+255+"."+255+"</span>";
		}
		else if((po2>=146)&&(po2<=147)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+146+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+147+"."+255+"."+255+"</span>";
		}
		else if((po2>=148)&&(po2<=149)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+148+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+149+"."+255+"."+255+"</span>";
		}
		else if((po2>=150)&&(po2<=151)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+150+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+151+"."+255+"."+255+"</span>";
		}
		else if((po2>=152)&&(po2<=153)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+152+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+153+"."+255+"."+255+"</span>";
		}
		else if((po2>=154)&&(po2<=155)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+154+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+155+"."+255+"."+255+"</span>";
		}
		else if((po2>=156)&&(po2<=157)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+156+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+157+"."+255+"."+255+"</span>";
		}
		else if((po2>=158)&&(po2<=159)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+158+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+159+"."+255+"."+255+"</span>";
		}
		else if((po2>=160)&&(po2<=161)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+160+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+161+"."+255+"."+255+"</span>";
		}
		else if((po2>=162)&&(po2<=163)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+162+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+163+"."+255+"."+255+"</span>";
		}
		else if((po2>=164)&&(po2<=165)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+164+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+165+"."+255+"."+255+"</span>";
		}
		else if((po2>=166)&&(po2<=167)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+166+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+167+"."+255+"."+255+"</span>";
		}
		else if((po2>=168)&&(po2<=169)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+168+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+169+"."+255+"."+255+"</span>";
		}
		else if((po2>=170)&&(po2<=171)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+170+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+171+"."+255+"."+255+"</span>";
		}
		else if((po2>=172)&&(po2<=173)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+172+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+173+"."+255+"."+255+"</span>";
		}
		else if((po2>=174)&&(po2<=175)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+174+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+175+"."+255+"."+255+"</span>";
		}
		else if((po2>=176)&&(po2<=177)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+176+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+177+"."+255+"."+255+"</span>";
		}
		else if((po2>=178)&&(po2<=179)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+178+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+179+"."+255+"."+255+"</span>";
		}
		else if((po2>=180)&&(po2<=181)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+180+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+181+"."+255+"."+255+"</span>";
		}
		else if((po2>=182)&&(po2<=183)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+182+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+183+"."+255+"."+255+"</span>";
		}
		else if((po2>=184)&&(po2<=185)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+184+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+185+"."+255+"."+255+"</span>";
		}
		else if((po2>=186)&&(po2<=187)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+186+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+187+"."+255+"."+255+"</span>";
		}
		else if((po2>=188)&&(po2<=189)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+188+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+189+"."+255+"."+255+"</span>";
		}
		else if((po2>=190)&&(po2<=191)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+190+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+191+"."+255+"."+255+"</span>";
		}
		else if((po2>=192)&&(po2<=193)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+192+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+193+"."+255+"."+255+"</span>";
		}
		else if((po2>=194)&&(po2<=195)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+194+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+195+"."+255+"."+255+"</span>";
		}
		else if((po2>=196)&&(po2<=197)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+196+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+197+"."+255+"."+255+"</span>";
		}
		else if((po2>=198)&&(po2<=199)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+198+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+199+"."+255+"."+255+"</span>";
		}
		else if((po2>=200)&&(po2<=201)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+200+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+201+"."+255+"."+255+"</span>";
		}
		else if((po2>=202)&&(po2<=203)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+202+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+203+"."+255+"."+255+"</span>";
		}
		else if((po2>=204)&&(po2<=205)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+204+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+205+"."+255+"."+255+"</span>";
		}
		else if((po2>=206)&&(po2<=207)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+206+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+207+"."+255+"."+255+"</span>";
		}
		else if((po2>=208)&&(po2<=209)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+208+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+209+"."+255+"."+255+"</span>";
		}
		else if((po2>=210)&&(po2<=211)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+210+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+211+"."+255+"."+255+"</span>";
		}
		else if((po2>=212)&&(po2<=213)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+212+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+213+"."+255+"."+255+"</span>";
		}
		else if((po2>=214)&&(po2<=215)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+214+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+215+"."+255+"."+255+"</span>";
		}
		else if((po2>=216)&&(po2<=217)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+216+"."+216+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+217+"."+255+"."+255+"</span>";
		}
		else if((po2>=218)&&(po2<=219)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+218+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+219+"."+255+"."+255+"</span>";
		}
		else if((po2>=220)&&(po2<=221)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+220+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+221+"."+255+"."+255+"</span>";
		}
		else if((po2>=222)&&(po2<=223)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+222+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+223+"."+255+"."+255+"</span>";
		}
		else if((po2>=224)&&(po2<=225)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+224+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+225+"."+255+"."+255+"</span>";
		}
		else if((po2>=226)&&(po2<=227)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+226+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+227+"."+255+"."+255+"</span>";
		}
		else if((po2>=228)&&(po2<=229)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+228+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+229+"."+255+"."+255+"</span>";
		}
		else if((po2>=230)&&(po2<=231)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+230+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+231+"."+255+"."+255+"</span>";
		}
		else if((po2>=232)&&(po2<=233)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+232+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+233+"."+255+"."+255+"</span>";
		}
		else if((po2>=234)&&(po2<=235)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+234+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+235+"."+255+"."+255+"</span>";
		}
		else if((po2>=236)&&(po2<=237)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+236+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+237+"."+255+"."+255+"</span>";
		}
		else if((po2>=238)&&(po2<=239)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+238+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+239+"."+255+"."+255+"</span>";
		}
		else if((po2>=240)&&(po2<=241)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+240+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+241+"."+255+"."+255+"</span>";
		}
		else if((po2>=242)&&(po2<=243)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+242+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+243+"."+255+"."+255+"</span>";
		}
		else if((po2>=244)&&(po2<=245)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+244+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+245+"."+255+"."+255+"</span>";
		}
		else if((po2>=246)&&(po2<=247)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+246+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+247+"."+255+"."+255+"</span>";
		}
		else if((po2>=248)&&(po2<=249)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+248+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+249+"."+255+"."+255+"</span>";
		}
		else if((po2>=250)&&(po2<=251)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+250+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+251+"."+255+"."+255+"</span>";
		}
		else if((po2>=252)&&(po2<=253)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+252+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+253+"."+255+"."+255+"</span>";
		}
		else if((po2>=254)&&(po2<=255)&&(po4>0)&& (po4<255))
		{
			document.getElementById("idNet").innerHTML="<span>"+po1+"."+254+"."+0+"."+0+"</span>";
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+255+"."+255+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idNet").innerHTML="<font>"+"ERROR !"+"</font>";
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
  }
  else 
  {	
		document.getElementById("idNet").innerHTML="&nbsp;";
  }
  
}

//================================>>>>>
function broad()
{
	var po1=document.getElementById("txtIP0").value;
	var po2=document.getElementById("txtIP1").value;
	var po3=document.getElementById("txtIP2").value;
	var po4=document.getElementById("txtIP3").value;
	var CIDR=document.getElementById("idCIDR").value;
  if((CIDR>=24) && (po1!="") && (po2 != "")  &&  (po3 != "")  &&  (po4 != ""))
  {
	if(CIDR == 24)
	{
		if((po4!=0)&&(po4!=255))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+255+"</span>";
		}
		else
		{
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
	else if (CIDR == 25)
	{
		if(po4<127 && po4>0)
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+127+"</span>";
		}
		else if(po4>128 && po4<255)
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+255+"</span>";
		}
		else
		{
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}


	else if(CIDR == 26)

	{
		if((po4<63)&&(po4>0))
		{	
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+63+"</span>";
		}
		else if((po4>64)&&(po4<127))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+127+"</span>";
		}
		else if((po4>128)&&(po4<191))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+191+"</span>";
		}
		else if((po4>192)&&(po4<255))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
		
	}

    else if(CIDR == 27)

	{
		if((po4<31)&&(po4>0))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+31+"</span>";
		}
		else if((po4>32)&&(po4<63))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+63+"</span>";
		}
		else if((po4>64)&&(po4<95))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+95+"</span>";
		}
		else if((po4>96)&&(po4<127))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+127+"</span>";
		}
		else if((po4>128)&&(po4<159))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+159+"</span>";
		}
		else if((po4>160)&&(po4<191))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+191+"</span>";
		}
		else if((po4>192)&&(po4<223))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+223+"</span>";
		}
		else if((po4>224)&&(po4<255))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}

	else if(CIDR == 28)

	{
		if((po4<15)&&(po4>0))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+15+"</span>";
		}
		else if((po4>16)&&(po4<31))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+31+"</span>";
		}
		else if((po4>32)&&(po4<47))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+47+"</span>";
		}
		else if((po4>48)&&(po4<63))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+63+"</span>";
		}
		else if((po4>64)&&(po4<79))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+79+"</span>";
		}
		else if((po4>80)&&(po4<95))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+95+"</span>";
		}
		else if((po4>96)&&(po4<111))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+111+"</span>";
		}
		else if((po4>112)&&(po4<127))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+127+"</span>";
		}
		else if((po4>128)&&(po4<143))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+143+"</span>";
		}
		else if((po4>144)&&(po4<159))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+159+"</span>";
		}
		else if((po4>160)&&(po4<175))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+175+"</span>";
		}
		else if((po4>176)&&(po4<191))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+191+"</span>";
		}
		else if((po4>192)&&(po4<207))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+207+"</span>";
		}
		else if((po4>208)&&(po4<223))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+223+"</span>";
		}
		else if((po4>224)&&(po4<239))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+239+"</span>";
		}
		else if((po4>240)&&(po4<255))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}

	}
	
	else if (CIDR == 29)
	{
		if((po4<7)&&(po4>0))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+7+"</span>";
		}
		else if((po4>8)&&(po4<15))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+15+"</span>";
		}
		else if((po4>16)&&(po4<23))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+23+"</span>";
		}
		else if((po4>24)&&(po4<31))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+31+"</span>";
		}
		else if((po4>32)&&(po4<39))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+39+"</span>";
		}
		else if((po4>40)&&(po4<47))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+47+"</span>";
		}
		else if((po4>48)&&(po4<55))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+55+"</span>";
		}
		else if((po4>56)&&(po4<63))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+63+"</span>";
		}
		else if((po4>64)&&(po4<71))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+71+"</span>";
		}
		else if((po4>72)&&(po4<79))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+79+"</span>";
		}
		else if((po4>80)&&(po4<87))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+87+"</span>";
		}
		else if((po4>88)&&(po4<95))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+95+"</span>";
		}
		else if((po4>96)&&(po4<103))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+103+"</span>";
		}
		else if((po4>104)&&(po4<111))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+111+"</span>";
		}
		else if((po4>112)&&(po4<119))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+119+"</span>";
		}
		else if((po4>120)&&(po4<127))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+127+"</span>";
		}
		else if((po4>128)&&(po4<135))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+135+"</span>";
		}
		else if((po4>136)&&(po4<143))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+143+"</span>";
		}
		else if((po4>144)&&(po4<151))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+151+"</span>";
		}
		else if((po4>152)&&(po4<159))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+159+"</span>";
		}
		else if((po4>160)&&(po4<167))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+167+"</span>";
		}
		else if((po4>168)&&(po4<175))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+175+"</span>";
		}
		else if((po4>176)&&(po4<183))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+183+"</span>";
		}
		else if((po4>184)&&(po4<191))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+191+"</span>";
		}
		else if((po4>192)&&(po4<199))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+199+"</span>";
		}
		else if((po4>200)&&(po4<207))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+207+"</span>";
		}
		else if((po4>208)&&(po4<215))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+215+"</span>";
		}
		else if((po4>216)&&(po4<223))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+223+"</span>";
		}
		else if((po4>224)&&(po4<231))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+231+"</span>";
		}
		else if((po4>232)&&(po4<239))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+239+"</span>";
		}
		else if((po4>240)&&(po4<247))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+247+"</span>";
		}
		else if((po4>248)&&(po4<255))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}

	}
  
    else if (CIDR == 30)
	{
		if((po4>0)&&(po4<3))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+3+"</span>";
		}
		else if((po4>4)&&(po4<7))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+7+"</span>";
		}
		else if((po4>8)&&(po4<11))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+11+"</span>";
		}
		else if((po4>12)&&(po4<15))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+15+"</span>";
		}
		else if((po4>16)&&(po4<19))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+19+"</span>";
		}
		else if((po4>20)&&(po4<23))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+23+"</span>";
		}
		else if((po4>24)&&(po4<27))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+27+"</span>";
		}
		else if((po4>28)&&(po4<31))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+31+"</span>";
		}
		else if((po4>32)&&(po4<35))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+35+"</span>";
		}
		else if((po4>36)&&(po4<39))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+39+"</span>";
		}
		else if((po4>40)&&(po4<43))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+43+"</span>";
		}
		else if((po4>44)&&(po4<47))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+47+"</span>";
		}
		else if((po4>48)&&(po4<51))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+51+"</span>";
		}
		else if((po4>52)&&(po4<55))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+55+"</span>";
		}
		else if((po4>56)&&(po4<59))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+59+"</span>";
		}
		else if((po4>60)&&(po4<63))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+63+"</span>";
		}
		else if((po4>64)&&(po4<67))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+67+"</span>";
		}
		else if((po4>68)&&(po4<71))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+72+"</span>";
		}
		else if((po4>72)&&(po4<75))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+75+"</span>";
		}
		else if((po4>76)&&(po4<79))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+79+"</span>";
		}
		else if((po4>80)&&(po4<83))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+83+"</span>";
		}
		else if((po4>84)&&(po4<87))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+87+"</span>";
		}
		else if((po4>88)&&(po4<91))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+91+"</span>";
		}
		else if((po4>92)&&(po4<95))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+95+"</span>";
		}
		else if((po4>96)&&(po4<99))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+99+"</span>";
		}
		else if((po4>100)&&(po4<103))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+103+"</span>";
		}
		else if((po4>104)&&(po4<107))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+107+"</span>";
		}
		else if((po4>108)&&(po4<111))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+111+"</span>";
		}
		else if((po4>112)&&(po4<115))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+115+"</span>";
		}
		else if((po4>116)&&(po4<119))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+119+"</span>";
		}
		else if((po4>120)&&(po4<123))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+123+"</span>";
		}
		else if((po4>124)&&(po4<127))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+127+"</span>";
		}
		else if((po4>128)&&(po4<131))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+131+"</span>";
		}
		else if((po4>132)&&(po4<135))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+135+"</span>";
		}
		else if((po4>136)&&(po4<139))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+139+"</span>";
		}
		else if((po4>140)&&(po4<143))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+143+"</span>";
		}
		else if((po4>144)&&(po4<147))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+147+"</span>";
		}
		else if((po4>148)&&(po4<151))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+151+"</span>";
		}
		else if((po4>152)&&(po4<155))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+155+"</span>";
		}
		else if((po4>156)&&(po4<159))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+159+"</span>";
		}
		else if((po4>160)&&(po4<163))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+163+"</span>";
		}
		else if((po4>164)&&(po4<167))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+167+"</span>";
		}
		else if((po4>168)&&(po4<171))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+171+"</span>";
		}
		else if((po4>172)&&(po4<175))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+175+"</span>";
		}
		else if((po4>176)&&(po4<179))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+179+"</span>";
		}
		else if((po4>180)&&(po4<183))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+183+"</span>";
		}
		else if((po4>184)&&(po4<187))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+187+"</span>";
		}
		else if((po4>188)&&(po4<191))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+191+"</span>";
		}
		else if((po4<192)&&(po4>195))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+195+"</span>";
		}
		else if((po4>196)&&(po4<199))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+199+"</span>";
		}
		else if((po4>200)&&(po4<203))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+203+"</span>";
		}
		else if((po4>204)&&(po4<207))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+207+"</span>";
		}
		else if((po4>208)&&(po4<211))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+211+"</span>";
		}
		else if((po4>212)&&(po4<215))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+215+"</span>";
		}
		else if((po4>216)&&(po4<219))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+219+"</span>";
		}
		else if((po4>220)&&(po4<223))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+223+"</span>";
		}
		else if((po4>224)&&(po4<227))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+227+"</span>";
		}
		else if((po4>228)&&(po4<231))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+231+"</span>";
		}
		else if((po4>232)&&(po4<235))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+235+"</span>";
		}
		else if((po4>236)&&(po4<239))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+239+"</span>";
		}
		else if((po4>240)&&(po4<243))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+243+"</span>";
		}
		else if((po4>244)&&(po4<247))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+247+"</span>";
		}
		else if((po4>248)&&(po4<251))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+251+"</span>";
		}
		else if((po4>252)&&(po4<255))
		{
			document.getElementById("idBroad").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+255+"</span>";
		}
		else 
		{
			document.getElementById("idBroad").innerHTML="<font>"+"ERROR !"+"</font>";
		}
	}
	
  }
}
//================================>>>>>
function IPValid()
{
	var varIPValid = 32 - document.getElementById("idCIDR").value;
	var Result = 2;
	//if(document.getElementById("idCIDR").value >= 24)
	//{
		for(a=1;a<varIPValid;a++)
		{
			Result*=2;
		}
	
		document.getElementById("idValIP").innerHTML="<span>" + (Result - 2) + "</span>";
	//}
	//else
	//{
	//	document.getElementById("idValIP").innerHTML="ONLY C CLASSES";
	//}
}

//================================>>>>>

function ranger()
{
	var po1=document.getElementById("txtIP0").value;
	var po2=document.getElementById("txtIP1").value;
	var po3=document.getElementById("txtIP2").value;
	var po4=document.getElementById("txtIP3").value;
	var CIDR=document.getElementById("idCIDR").value;
  if((CIDR>=24) && (po1!="") && (po2 != "")  &&  (po3 != "")  &&  (po4 != ""))
  {
	if(CIDR == 24)
	{document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+1+"-"+po1+"."+po2+"."+po3+"."+254+"</span>";}
	else if(CIDR == 25)
	{
		if( po4>0 && po4<127 )
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+1+"-"+po1+"."+po2+"."+po3+"."+126+"</span>";
		}
		else if(po4>128 && po4<255)
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+129+"-"+po1+"."+po2+"."+po3+"."+254+"</span>";
		}
		
	}
	else if(CIDR == 26)
	{
		if((po4>0)&&(po4<63))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+1+"-"+po1+"."+po2+"."+po3+"."+62+"</span>";
		}
		else if((po4>64)&&(po4<127))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+65+"-"+po1+"."+po2+"."+po3+"."+126+"</span>";
		}
		else if((po4>128)&&(po4<191))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+129+"-"+po1+"."+po2+"."+po3+"."+190+"</span>";
		}
		else if((po4>192)&&(po4<255))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+193+"-"+po1+"."+po2+"."+po3+"."+254+"</span>";
		}
	}
	else if(CIDR == 27)
	{
		if((po4>0)&&(po4<31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+1+"-"+po1+"."+po2+"."+po3+"."+30+"</span>";
		}
		else if((po4>32)&&(po4<63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+33+"-"+po1+"."+po2+"."+po3+"."+62+"</span>";
		}
		else if((po4>64)&&(po4<95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+65+"-"+po1+"."+po2+"."+po3+"."+94+"</span>";
		}
		else if((po4>96)&&(po4<127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+97+"-"+po1+"."+po2+"."+po3+"."+126+"</span>";
		}
		else if((po4>128)&&(po4<159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+129+"-"+po1+"."+po2+"."+po3+"."+158+"</span>";
		}
		else if((po4>160)&&(po4<191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+161+"-"+po1+"."+po2+"."+po3+"."+190+"</span>";
		}
		else if((po4>192)&&(po4<223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+193+"-"+po1+"."+po2+"."+po3+"."+222+"</span>";
		}
		else if((po4>224)&&(po4<255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+225+"-"+po1+"."+po2+"."+po3+"."+254+"</span>";
		}
	}
	else if(CIDR == 28)
	{	if((po4>0)&&(po4<15))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+1+"-"+po1+"."+po2+"."+po3+"."+14+"</span>";
		}
		else if((po4>16)&&(po4<31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+17+"-"+po1+"."+po2+"."+po3+"."+30+"</span>";
		}
		else if((po4>32)&&(po4<47))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+33+"-"+po1+"."+po2+"."+po3+"."+46+"</span>";
		}
		else if((po4>48)&&(po4<63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+49+"-"+po1+"."+po2+"."+po3+"."+62+"</span>";
		}
		else if((po4>64)&&(po4<79))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+65+"-"+po1+"."+po2+"."+po3+"."+78+"</span>";
		}
		else if((po4>80)&&(po4<95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+81+"-"+po1+"."+po2+"."+po3+"."+94+"</span>";
		}
		else if((po4>96)&&(po4<111))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+97+"-"+po1+"."+po2+"."+po3+"."+110+"</span>";
		}
		else if((po4>112)&&(po4<127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+113+"-"+po1+"."+po2+"."+po3+"."+126+"</span>";
		}
		else if((po4>128)&&(po4<143))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+129+"-"+po1+"."+po2+"."+po3+"."+142+"</span>";
		}
		else if((po4>144)&&(po4<159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+145+"-"+po1+"."+po2+"."+po3+"."+158+"</span>";
		}
		else if((po4>160)&&(po4<175))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+161+"-"+po1+"."+po2+"."+po3+"."+174+"</span>";
		}
		else if((po4>176)&&(po4<191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+177+"-"+po1+"."+po2+"."+po3+"."+190+"</span>";
		}
		else if((po4>192)&&(po4<207))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+193+"-"+po1+"."+po2+"."+po3+"."+206+"</span>";
		}
		else if((po4>208)&&(po4<223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+209+"-"+po1+"."+po2+"."+po3+"."+222+"</span>";
		}
		else if((po4>224)&&(po4<239))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+225+"-"+po1+"."+po2+"."+po3+"."+238+"</span>";
		}
		else if((po4>240)&&(po4<255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+241+"-"+po1+"."+po2+"."+po3+"."+254+"</span>";
		}
	}
	else if(CIDR == 29)
	{	if((po4>0)&&(po4<7))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+1+"-"+po1+"."+po2+"."+po3+"."+6+"</span>";
		}
		else if((po4>8)&&(po4<15))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+9+"-"+po1+"."+po2+"."+po3+"."+14+"</span>";
		}
		else if((po4>16)&&(po4<23))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+17+"-"+po1+"."+po2+"."+po3+"."+22+"</span>";
		}
		else if((po4>24)&&(po4<31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+25+"-"+po1+"."+po2+"."+po3+"."+30+"</span>";
		}
		else if((po4>32)&&(po4<39))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+33+"-"+po1+"."+po2+"."+po3+"."+38+"</span>";
		}
		else if((po4>40)&&(po4<47))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+41+"-"+po1+"."+po2+"."+po3+"."+46+"</span>";
		}
		else if((po4>48)&&(po4<55))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+49+"-"+po1+"."+po2+"."+po3+"."+54+"</span>";
		}
		else if((po4>56)&&(po4<63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+57+"-"+po1+"."+po2+"."+po3+"."+62+"</span>";
		}
		else if((po4>64)&&(po4<71))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+65+"-"+po1+"."+po2+"."+po3+"."+70+"</span>";
		}
		else if((po4>72)&&(po4<79))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+73+"-"+po1+"."+po2+"."+po3+"."+78+"</span>";
		}
		else if((po4>80)&&(po4<87))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+81+"-"+po1+"."+po2+"."+po3+"."+86+"</span>";
		}
		else if((po4>88)&&(po4<95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+89+"-"+po1+"."+po2+"."+po3+"."+94+"</span>";
		}
		else if((po4>96)&&(po4<103))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+97+"-"+po1+"."+po2+"."+po3+"."+102+"</span>";
		}
		else if((po4>104)&&(po4<111))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+105+"-"+po1+"."+po2+"."+po3+"."+110+"</span>";
		}
		else if((po4>112)&&(po4<119))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+113+"-"+po1+"."+po2+"."+po3+"."+118+"</span>";
		}
		else if((po4>120)&&(po4<127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+121+"-"+po1+"."+po2+"."+po3+"."+126+"</span>";
		}
		else if((po4>128)&&(po4<135))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+129+"-"+po1+"."+po2+"."+po3+"."+134+"</span>";
		}
		else if((po4>136)&&(po4<143))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+137+"-"+po1+"."+po2+"."+po3+"."+142+"</span>";
		}
		else if((po4>144)&&(po4<151))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+145+"-"+po1+"."+po2+"."+po3+"."+150+"</span>";
		}
		else if((po4>152)&&(po4<159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+153+"-"+po1+"."+po2+"."+po3+"."+158+"</span>";
		}
		else if((po4>160)&&(po4<167))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+161+"-"+po1+"."+po2+"."+po3+"."+166+"</span>";
		}
		else if((po4>168)&&(po4<175))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+169+"-"+po1+"."+po2+"."+po3+"."+174+"</span>";
		}
		else if((po4>176)&&(po4<183))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+177+"-"+po1+"."+po2+"."+po3+"."+182+"</span>";
		}
		else if((po4>184)&&(po4<191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+185+"-"+po1+"."+po2+"."+po3+"."+190+"</span>";
		}
		else if((po4>192)&&(po4<199))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+193+"-"+po1+"."+po2+"."+po3+"."+198+"</span>";
		}
		else if((po4>200)&&(po4<207))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+201+"-"+po1+"."+po2+"."+po3+"."+206+"</span>";
		}
		else if((po4>208)&&(po4<215))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+209+"-"+po1+"."+po2+"."+po3+"."+214+"</span>";
		}
		else if((po4>216)&&(po4<223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+217+"-"+po1+"."+po2+"."+po3+"."+222+"</span>";
		}
		else if((po4>224)&&(po4<231))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+225+"-"+po1+"."+po2+"."+po3+"."+230+"</span>";
		}
		else if((po4>232)&&(po4<239))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+233+"-"+po1+"."+po2+"."+po3+"."+238+"</span>";
		}
		else if((po4>240)&&(po4<247))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+241+"-"+po1+"."+po2+"."+po3+"."+246+"</span>";
		}
		else if((po4>248)&&(po4<255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+249+"-"+po1+"."+po2+"."+po3+"."+254+"</span>";
		}
	}
	else if(CIDR == 30)
	{
		if((po4>0)&&(po4<3))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+1+"-"+po1+"."+po2+"."+po3+"."+2+"</span>";
		}
		else if((po4>4)&&(po4<7))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+5+"-"+po1+"."+po2+"."+po3+"."+6+"</span>";
		}
		else if((po4>8)&&(po4<11))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+9+"-"+po1+"."+po2+"."+po3+"."+10+"</span>";
		}
		else if((po4>12)&&(po4<15))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+13+"-"+po1+"."+po2+"."+po3+"."+14+"</span>";
		}
		else if((po4>16)&&(po4<19))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+17+"-"+po1+"."+po2+"."+po3+"."+18+"</span>";
		}
		else if((po4>20)&&(po4<23))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+21+"-"+po1+"."+po2+"."+po3+"."+22+"</span>";
		}
		else if((po4>24)&&(po4<27))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+25+"-"+po1+"."+po2+"."+po3+"."+26+"</span>";
		}
		else if((po4>28)&&(po4<31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+29+"-"+po1+"."+po2+"."+po3+"."+30+"</span>";
		}
		else if((po4>32)&&(po4<35))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+33+"-"+po1+"."+po2+"."+po3+"."+34+"</span>";
		}
		else if((po4>36)&&(po4<39))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+37+"-"+po1+"."+po2+"."+po3+"."+38+"</span>";
		}
		else if((po4>40)&&(po4<43))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+41+"-"+po1+"."+po2+"."+po3+"."+42+"</span>";
		}
		else if((po4>44)&&(po4<47))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+45+"-"+po1+"."+po2+"."+po3+"."+46+"</span>";
		}
		else if((po4>48)&&(po4<51))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+49+"-"+po1+"."+po2+"."+po3+"."+50+"</span>";
		}
		else if((po4>52)&&(po4<55))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+53+"-"+po1+"."+po2+"."+po3+"."+54+"</span>";
		}
		else if((po4>56)&&(po4<59))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+57+"-"+po1+"."+po2+"."+po3+"."+58+"</span>";
		}
		else if((po4>60)&&(po4<63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+61+"-"+po1+"."+po2+"."+po3+"."+62+"</span>";
		}
		else if((po4>64)&&(po4<67))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+65+"-"+po1+"."+po2+"."+po3+"."+66+"</span>";
		}
		else if((po4>68)&&(po4<71))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+69+"-"+po1+"."+po2+"."+po3+"."+80+"</span>";
		}
		else if((po4>72)&&(po4<75))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+73+"-"+po1+"."+po2+"."+po3+"."+74+"</span>";
		}
		else if((po4>76)&&(po4<79))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+77+"-"+po1+"."+po2+"."+po3+"."+78+"</span>";
		}
		else if((po4>80)&&(po4<83))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+81+"-"+po1+"."+po2+"."+po3+"."+82+"</span>";
		}
		else if((po4>84)&&(po4<87))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+85+"-"+po1+"."+po2+"."+po3+"."+86+"</span>";
		}
		else if((po4>88)&&(po4<91))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+89+"-"+po1+"."+po2+"."+po3+"."+90+"</span>";
		}
		else if((po4>92)&&(po4<95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+93+"-"+po1+"."+po2+"."+po3+"."+94+"</span>";
		}
		else if((po4>96)&&(po4<99))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+97+"-"+po1+"."+po2+"."+po3+"."+98+"</span>";
		}
		else if((po4>100)&&(po4<103))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+101+"-"+po1+"."+po2+"."+po3+"."+102+"</span>";
		}
		else if((po4>104)&&(po4<107))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+105+"-"+po1+"."+po2+"."+po3+"."+106+"</span>";
		}
		else if((po4>108)&&(po4<111))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+109+"-"+po1+"."+po2+"."+po3+"."+110+"</span>";
		}
		else if((po4>112)&&(po4<115))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+113+"-"+po1+"."+po2+"."+po3+"."+114+"</span>";
		}
		else if((po4>116)&&(po4<119))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+117+"-"+po1+"."+po2+"."+po3+"."+118+"</span>";
		}
		else if((po4>120)&&(po4<123))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+121+"-"+po1+"."+po2+"."+po3+"."+122+"</span>";
		}
		else if((po4>124)&&(po4<127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+125+"-"+po1+"."+po2+"."+po3+"."+126+"</span>";
		}
		else if((po4>128)&&(po4<131))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+129+"-"+po1+"."+po2+"."+po3+"."+130+"</span>";
		}
		else if((po4>132)&&(po4<135))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+133+"-"+po1+"."+po2+"."+po3+"."+134+"</span>";
		}
		else if((po4>136)&&(po4<139))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+137+"-"+po1+"."+po2+"."+po3+"."+138+"</span>";
		}
		else if((po4>140)&&(po4<143))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+141+"-"+po1+"."+po2+"."+po3+"."+142+"</span>";
		}
		else if((po4>144)&&(po4<147))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+145+"-"+po1+"."+po2+"."+po3+"."+146+"</span>";
		}
		else if((po4>148)&&(po4<151))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+149+"-"+po1+"."+po2+"."+po3+"."+150+"</span>";
		}
		else if((po4>152)&&(po4<155))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+153+"-"+po1+"."+po2+"."+po3+"."+154+"</span>";
		}
		else if((po4>156)&&(po4<159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+157+"-"+po1+"."+po2+"."+po3+"."+158+"</span>";
		}
		else if((po4>160)&&(po4<163))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+161+"-"+po1+"."+po2+"."+po3+"."+162+"</span>";
		}
		else if((po4>164)&&(po4<167))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+165+"-"+po1+"."+po2+"."+po3+"."+166+"</span>";
		}
		else if((po4>168)&&(po4<171))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+169+"-"+po1+"."+po2+"."+po3+"."+170+"</span>";
		}
		else if((po4>172)&&(po4<175))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+173+"-"+po1+"."+po2+"."+po3+"."+174+"</span>";
		}
		else if((po4>176)&&(po4<179))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+177+"-"+po1+"."+po2+"."+po3+"."+178+"</span>";
		}
		else if((po4>180)&&(po4<183))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+181+"-"+po1+"."+po2+"."+po3+"."+182+"</span>";
		}
		else if((po4>184)&&(po4<187))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+185+"-"+po1+"."+po2+"."+po3+"."+186+"</span>";
		}
		else if((po4>188)&&(po4<191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+189+"-"+po1+"."+po2+"."+po3+"."+190+"</span>";
		}
		else if((po4>192)&&(po4<195))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+193+"-"+po1+"."+po2+"."+po3+"."+194+"</span>";
		}
		else if((po4>196)&&(po4<199))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+197+"-"+po1+"."+po2+"."+po3+"."+198+"</span>";
		}
		else if((po4>200)&&(po4<203))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+201+"-"+po1+"."+po2+"."+po3+"."+202+"</span>";
		}
		else if((po4>204)&&(po4<207))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+205+"-"+po1+"."+po2+"."+po3+"."+206+"</span>";
		}
		else if((po4>208)&&(po4<211))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+209+"-"+po1+"."+po2+"."+po3+"."+210+"</span>";
		}
		else if((po4>212)&&(po4<215))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+213+"-"+po1+"."+po2+"."+po3+"."+214+"</span>";
		}
		else if((po4>216)&&(po4<219))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+217+"-"+po1+"."+po2+"."+po3+"."+218+"</span>";
		}
		else if((po4>220)&&(po4<223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+221+"-"+po1+"."+po2+"."+po3+"."+222+"</span>";
		}
		else if((po4>224)&&(po4<227))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+225+"-"+po1+"."+po2+"."+po3+"."+226+"</span>";
		}
		else if((po4>228)&&(po4<231))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+229+"-"+po1+"."+po2+"."+po3+"."+230+"</span>";
		}
		else if((po4>232)&&(po4<235))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+233+"-"+po1+"."+po2+"."+po3+"."+234+"</span>";
		}
		else if((po4>236)&&(po4<239))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+237+"-"+po1+"."+po2+"."+po3+"."+238+"</span>";
		}
		else if((po4>240)&&(po4<243))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+241+"-"+po1+"."+po2+"."+po3+"."+242+"</span>";
		}
		else if((po4>244)&&(po4<247))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+245+"-"+po1+"."+po2+"."+po3+"."+246+"</span>";
		}
		else if((po4>248)&&(po4<251))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+249+"-"+po1+"."+po2+"."+po3+"."+250+"</span>";
		}
		else if((po4>252)&&(po4<255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+po3+"."+253+"-"+po1+"."+po2+"."+po3+"."+254+"</span>";
		}
	}

  }
  else if((CIDR>=16)&& (po1!="") && (po2 != "")  &&  (po3 != "")  &&  (po4 != ""))
  {
	if(CIDR == 16)
	{document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+0+"."+1+"-"+po1+"."+po2+"."+255+"."+254+"</span>";}
	else if(CIDR == 17)
	{
		if( po3>=0 && po3<=127)
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+0+"."+1+"-"+po1+"."+po2+"."+127+"."+254+"</span>";
		}
		else if(po3>=128 && po3<=255)
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+128+"."+1+"-"+po1+"."+po2+"."+255+"."+254+"</span>";
		}
		
	}
	else if(CIDR == 18)
	{
		if((po3>=0)&&(po3<=63))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+0+"."+1+"-"+po1+"."+po2+"."+63+"."+254+"</span>";
		}
		else if((po3>=64)&&(po3<=127))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+64+"."+1+"-"+po1+"."+po2+"."+127+"."+254+"</span>";
		}
		else if((po3>=128)&&(po3<=191))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+128+"."+1+"-"+po1+"."+po2+"."+191+"."+254+"</span>";
		}
		else if((po3>=192)&&(po3<=255))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+192+"."+1+"-"+po1+"."+po2+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR == 19)
	{
		if((po3>=0)&&(po3<=31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+0+"."+1+"-"+po1+"."+po2+"."+31+"."+254+"</span>";
		}
		else if((po3>=32)&&(po3<=63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+32+"."+1+"-"+po1+"."+po2+"."+63+"."+254+"</span>";
		}
		else if((po3>=64)&&(po3<=95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+64+"."+1+"-"+po1+"."+po2+"."+95+"."+254+"</span>";
		}
		else if((po3>=96)&&(po3<=127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+96+"."+1+"-"+po1+"."+po2+"."+127+"."+254+"</span>";
		}
		else if((po3>=128)&&(po3<=159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+128+"."+1+"-"+po1+"."+po2+"."+159+"."+254+"</span>";
		}
		else if((po3>=160)&&(po3<=191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+160+"."+1+"-"+po1+"."+po2+"."+191+"."+254+"</span>";
		}
		else if((po3>=192)&&(po3<=223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+192+"."+1+"-"+po1+"."+po2+"."+223+"."+254+"</span>";
		}
		else if((po3>=224)&&(po3<=255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+224+"."+1+"-"+po1+"."+po2+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR == 20)
	{	if((po3>=0)&&(po3<=15))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+0+"."+1+"-"+po1+"."+po2+"."+15+"."+254+"</span>";
		}
		else if((po3>=16)&&(po3<=31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+16+"."+1+"-"+po1+"."+po2+"."+31+"."+254+"</span>";
		}
		else if((po3>=32)&&(po3<=47))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+32+"."+1+"-"+po1+"."+po2+"."+47+"."+254+"</span>";
		}
		else if((po3>=48)&&(po3<=63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+48+"."+1+"-"+po1+"."+po2+"."+63+"."+254+"</span>";
		}
		else if((po3>=64)&&(po3<=79))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+64+"."+1+"-"+po1+"."+po2+"."+79+"."+254+"</span>";
		}
		else if((po3>=80)&&(po3<=95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+80+"."+1+"-"+po1+"."+po2+"."+95+"."+254+"</span>";
		}
		else if((po3>=96)&&(po3<=111))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+96+"."+1+"-"+po1+"."+po2+"."+111+"."+254+"</span>";
		}
		else if((po3>=112)&&(po3<=127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+112+"."+1+"-"+po1+"."+po2+"."+127+"."+254+"</span>";
		}
		else if((po3>=128)&&(po3<=143))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+128+"."+1+"-"+po1+"."+po2+"."+143+"."+254+"</span>";
		}
		else if((po3>=144)&&(po3<=159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+144+"."+1+"-"+po1+"."+po2+"."+159+"."+254+"</span>";
		}
		else if((po3>=160)&&(po3<=175))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+160+"."+1+"-"+po1+"."+po2+"."+175+"."+254+"</span>";
		}
		else if((po3>=176)&&(po3<=191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+176+"."+1+"-"+po1+"."+po2+"."+191+"."+254+"</span>";
		}
		else if((po3>=192)&&(po3<=207))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+192+"."+1+"-"+po1+"."+po2+"."+207+"."+254+"</span>";
		}
		else if((po3>=208)&&(po3<=223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+208+"."+1+"-"+po1+"."+po2+"."+223+"."+254+"</span>";
		}
		else if((po3>=224)&&(po3<=239))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+224+"."+1+"-"+po1+"."+po2+"."+239+"."+254+"</span>";
		}
		else if((po3>=240)&&(po3<=255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+240+"."+1+"-"+po1+"."+po2+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR == 21)
	{	if((po3>=0)&&(po3<=7))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+0+"."+1+"-"+po1+"."+po2+"."+7+"."+254+"</span>";
		}
		else if((po3>=8)&&(po3<=15))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+8+"."+1+"-"+po1+"."+po2+"."+15+"."+254+"</span>";
		}
		else if((po3>=16)&&(po3<=23))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+16+"."+1+"-"+po1+"."+po2+"."+23+"."+254+"</span>";
		}
		else if((po3>=24)&&(po3<=31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+24+"."+1+"-"+po1+"."+po2+"."+31+"."+254+"</span>";
		}
		else if((po3>=32)&&(po3<=39))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+32+"."+1+"-"+po1+"."+po2+"."+39+"."+254+"</span>";
		}
		else if((po3>=40)&&(po3<=47))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+40+"."+1+"-"+po1+"."+po2+"."+47+"."+254+"</span>";
		}
		else if((po3>=48)&&(po3<=55))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+48+"."+1+"-"+po1+"."+po2+"."+55+"."+254+"</span>";
		}
		else if((po3>=56)&&(po3<=63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+56+"."+1+"-"+po1+"."+po2+"."+63+"."+254+"</span>";
		}
		else if((po3>=64)&&(po3<=71))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+64+"."+1+"-"+po1+"."+po2+"."+71+"."+254+"</span>";
		}
		else if((po3>=72)&&(po3<=79))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+72+"."+1+"-"+po1+"."+po2+"."+79+"."+254+"</span>";
		}
		else if((po3>=80)&&(po3<=87))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+80+"."+1+"-"+po1+"."+po2+"."+87+"."+254+"</span>";
		}
		else if((po3>=88)&&(po3<=95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+88+"."+1+"-"+po1+"."+po2+"."+95+"."+254+"</span>";
		}
		else if((po3>=96)&&(po3<=103))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+96+"."+1+"-"+po1+"."+po2+"."+103+"."+254+"</span>";
		}
		else if((po3>=104)&&(po3<=111))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+104+"."+1+"-"+po1+"."+po2+"."+111+"."+254+"</span>";
		}
		else if((po3>=112)&&(po3<=119))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+112+"."+1+"-"+po1+"."+po2+"."+119+"."+254+"</span>";
		}
		else if((po3>=120)&&(po3<=127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+120+"."+1+"-"+po1+"."+po2+"."+127+"."+254+"</span>";
		}
		else if((po3>=128)&&(po3<=135))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+128+"."+1+"-"+po1+"."+po2+"."+135+"."+254+"</span>";
		}
		else if((po3>=136)&&(po3<=143))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+136+"."+1+"-"+po1+"."+po2+"."+143+"."+254+"</span>";
		}
		else if((po3>=144)&&(po3<=151))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+144+"."+1+"-"+po1+"."+po2+"."+151+"."+254+"</span>";
		}
		else if((po3>=152)&&(po3<=159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+152+"."+1+"-"+po1+"."+po2+"."+159+"."+254+"</span>";
		}
		else if((po3>=160)&&(po3<=167))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+160+"."+1+"-"+po1+"."+po2+"."+167+"."+254+"</span>";
		}
		else if((po3>=168)&&(po3<=175))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+168+"."+1+"-"+po1+"."+po2+"."+175+"."+254+"</span>";
		}
		else if((po3>=176)&&(po3<=183))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+176+"."+1+"-"+po1+"."+po2+"."+183+"."+254+"</span>";
		}
		else if((po3>=184)&&(po3<=191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+184+"."+1+"-"+po1+"."+po2+"."+191+"."+254+"</span>";
		}
		else if((po3>=192)&&(po3<=199))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+192+"."+1+"-"+po1+"."+po2+"."+199+"."+254+"</span>";
		}
		else if((po3>=200)&&(po3<=207))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+200+"."+1+"-"+po1+"."+po2+"."+207+"."+254+"</span>";
		}
		else if((po3>=208)&&(po3<=215))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+208+"."+1+"-"+po1+"."+po2+"."+215+"."+254+"</span>";
		}
		else if((po3>=216)&&(po3<=223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+216+"."+1+"-"+po1+"."+po2+"."+223+"."+254+"</span>";
		}
		else if((po3>=224)&&(po3<=231))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+224+"."+1+"-"+po1+"."+po2+"."+231+"."+254+"</span>";
		}
		else if((po3>=232)&&(po3<=239))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+232+"."+1+"-"+po1+"."+po2+"."+239+"."+254+"</span>";
		}
		else if((po3>=240)&&(po3<=247))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+240+"."+1+"-"+po1+"."+po2+"."+247+"."+254+"</span>";
		}
		else if((po3>=248)&&(po3<=255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+248+"."+1+"-"+po1+"."+po2+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR == 22)
	{
		if((po3>=0)&&(po3<=3))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+0+"."+1+"-"+po1+"."+po2+"."+3+"."+254+"</span>";
		}
		else if((po3>=4)&&(po3<=7))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+4+"."+1+"-"+po1+"."+po2+"."+7+"."+254+"</span>";
		}
		else if((po3>=8)&&(po3<=11))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+8+"."+1+"-"+po1+"."+po2+"."+11+"."+254+"</span>";
		}
		else if((po3>=12)&&(po3<=15))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+12+"."+1+"-"+po1+"."+po2+"."+15+"."+254+"</span>";
		}
		else if((po3>=16)&&(po3<=19))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+16+"."+1+"-"+po1+"."+po2+"."+19+"."+254+"</span>";
		}
		else if((po3>=20)&&(po3<=23))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+20+"."+1+"-"+po1+"."+po2+"."+23+"."+254+"</span>";
		}
		else if((po3>=24)&&(po3<=27))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+24+"."+1+"-"+po1+"."+po2+"."+27+"."+254+"</span>";
		}
		else if((po3>=28)&&(po3<=31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+28+"."+1+"-"+po1+"."+po2+"."+31+"."+254+"</span>";
		}
		else if((po3>=32)&&(po3<=35))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+32+"."+1+"-"+po1+"."+po2+"."+35+"."+254+"</span>";
		}
		else if((po3>=36)&&(po3<=39))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+36+"."+1+"-"+po1+"."+po2+"."+39+"."+254+"</span>";
		}
		else if((po3>=40)&&(po3<=43))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+40+"."+1+"-"+po1+"."+po2+"."+43+"."+254+"</span>";
		}
		else if((po3>=44)&&(po3<=47))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+44+"."+1+"-"+po1+"."+po2+"."+47+"."+254+"</span>";
		}
		else if((po3>=48)&&(po3<=51))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+48+"."+1+"-"+po1+"."+po2+"."+51+"."+254+"</span>";
		}
		else if((po3>=52)&&(po3<=55))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+52+"."+1+"-"+po1+"."+po2+"."+55+"."+254+"</span>";
		}
		else if((po3>=56)&&(po3<=59))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+56+"."+1+"-"+po1+"."+po2+"."+59+"."+254+"</span>";
		}
		else if((po3>=60)&&(po3<=63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+60+"."+1+"-"+po1+"."+po2+"."+63+"."+254+"</span>";
		}
		else if((po3>=64)&&(po3<=67))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+64+"."+1+"-"+po1+"."+po2+"."+67+"."+254+"</span>";
		}
		else if((po3>=68)&&(po3<=71))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+68+"."+1+"-"+po1+"."+po2+"."+71+"."+254+"</span>";
		}
		else if((po3>=72)&&(po3<=75))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+72+"."+1+"-"+po1+"."+po2+"."+75+"."+254+"</span>";
		}
		else if((po3>=76)&&(po3<=79))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+76+"."+1+"-"+po1+"."+po2+"."+79+"."+254+"</span>";
		}
		else if((po3>=80)&&(po3<=83))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+80+"."+1+"-"+po1+"."+po2+"."+83+"."+254+"</span>";
		}
		else if((po3>=84)&&(po3<=87))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+84+"."+1+"-"+po1+"."+po2+"."+87+"."+254+"</span>";
		}
		else if((po3>=88)&&(po3<=91))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+88+"."+1+"-"+po1+"."+po2+"."+91+"."+254+"</span>";
		}
		else if((po3>=92)&&(po3<=95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+92+"."+1+"-"+po1+"."+po2+"."+95+"."+254+"</span>";
		}
		else if((po3>=96)&&(po3<=99))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+96+"."+1+"-"+po1+"."+po2+"."+99+"."+254+"</span>";
		}
		else if((po3>=100)&&(po3<=103))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+100+"."+1+"-"+po1+"."+po2+"."+103+"."+254+"</span>";
		}
		else if((po3>=104)&&(po3<=107))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+104+"."+1+"-"+po1+"."+po2+"."+107+"."+254+"</span>";
		}
		else if((po3>=108)&&(po3<=111))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+108+"."+1+"-"+po1+"."+po2+"."+111+"."+254+"</span>";
		}
		else if((po3>=112)&&(po3<=115))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+112+"."+1+"-"+po1+"."+po2+"."+115+"."+254+"</span>";
		}
		else if((po3>=116)&&(po3<=119))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+116+"."+1+"-"+po1+"."+po2+"."+119+"."+254+"</span>";
		}
		else if((po3>=120)&&(po3<=123))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+120+"."+1+"-"+po1+"."+po2+"."+123+"."+254+"</span>";
		}
		else if((po3>=124)&&(po3<=127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+124+"."+1+"-"+po1+"."+po2+"."+127+"."+254+"</span>";
		}
		else if((po3>=128)&&(po3<=131))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+128+"."+1+"-"+po1+"."+po2+"."+131+"."+254+"</span>";
		}
		else if((po3>=132)&&(po3<=135))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+132+"."+1+"-"+po1+"."+po2+"."+135+"."+254+"</span>";
		}
		else if((po3>=136)&&(po3<=139))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+136+"."+1+"-"+po1+"."+po2+"."+139+"."+254+"</span>";
		}
		else if((po3>=140)&&(po3<=143))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+140+"."+1+"-"+po1+"."+po2+"."+143+"."+254+"</span>";
		}
		else if((po3>=144)&&(po3<=147))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+144+"."+1+"-"+po1+"."+po2+"."+147+"."+254+"</span>";
		}
		else if((po3>=148)&&(po3<=151))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+148+"."+1+"-"+po1+"."+po2+"."+151+"."+254+"</span>";
		}
		else if((po3>=152)&&(po3<=155))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+152+"."+1+"-"+po1+"."+po2+"."+155+"."+254+"</span>";
		}
		else if((po3>=156)&&(po3<=159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+156+"."+1+"-"+po1+"."+po2+"."+159+"."+254+"</span>";
		}
		else if((po3>=160)&&(po3<=163))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+160+"."+1+"-"+po1+"."+po2+"."+163+"."+254+"</span>";
		}
		else if((po3>=164)&&(po3<=167))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+164+"."+1+"-"+po1+"."+po2+"."+167+"."+254+"</span>";
		}
		else if((po3>=168)&&(po3<=171))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+168+"."+1+"-"+po1+"."+po2+"."+171+"."+254+"</span>";
		}
		else if((po3>=172)&&(po3<=175))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+172+"."+1+"-"+po1+"."+po2+"."+175+"."+254+"</span>";
		}
		else if((po3>=176)&&(po3<=179))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+176+"."+1+"-"+po1+"."+po2+"."+179+"."+254+"</span>";
		}
		else if((po3>=180)&&(po3<=183))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+180+"."+1+"-"+po1+"."+po2+"."+183+"."+254+"</span>";
		}
		else if((po3>=184)&&(po3<=187))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+184+"."+1+"-"+po1+"."+po2+"."+187+"."+254+"</span>";
		}
		else if((po3>=188)&&(po3<=191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+188+"."+1+"-"+po1+"."+po2+"."+191+"."+254+"</span>";
		}
		else if((po3>=192)&&(po3<=195))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+192+"."+1+"-"+po1+"."+po2+"."+195+"."+254+"</span>";
		}
		else if((po3>=196)&&(po3<=199))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+196+"."+1+"-"+po1+"."+po2+"."+199+"."+254+"</span>";
		}
		else if((po3>=200)&&(po3<=203))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+200+"."+1+"-"+po1+"."+po2+"."+203+"."+254+"</span>";
		}
		else if((po3>=204)&&(po3<=207))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+204+"."+1+"-"+po1+"."+po2+"."+207+"."+254+"</span>";
		}
		else if((po3>=208)&&(po3<=211))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+208+"."+1+"-"+po1+"."+po2+"."+211+"."+254+"</span>";
		}
		else if((po3>=212)&&(po3<=215))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+212+"."+1+"-"+po1+"."+po2+"."+215+"."+254+"</span>";
		}
		else if((po3>=216)&&(po3<=219))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+216+"."+1+"-"+po1+"."+po2+"."+219+"."+254+"</span>";
		}
		else if((po3>=220)&&(po3<=223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+220+"."+1+"-"+po1+"."+po2+"."+223+"."+254+"</span>";
		}
		else if((po3>=224)&&(po3<=227))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+224+"."+1+"-"+po1+"."+po2+"."+227+"."+254+"</span>";
		}
		else if((po3>=228)&&(po3<=231))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+228+"."+1+"-"+po1+"."+po2+"."+231+"."+254+"</span>";
		}
		else if((po3>=232)&&(po3<=235))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+232+"."+1+"-"+po1+"."+po2+"."+235+"."+254+"</span>";
		}
		else if((po3>=236)&&(po3<=239))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+236+"."+1+"-"+po1+"."+po2+"."+239+"."+254+"</span>";
		}
		else if((po3>=240)&&(po3<=243))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+240+"."+1+"-"+po1+"."+po2+"."+243+"."+254+"</span>";
		}
		else if((po3>=244)&&(po3<=247))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+244+"."+1+"-"+po1+"."+po2+"."+247+"."+254+"</span>";
		}
		else if((po3>=248)&&(po3<=251))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+248+"."+1+"-"+po1+"."+po2+"."+251+"."+254+"</span>";
		}
		else if((po3>=252)&&(po3<=255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+252+"."+1+"-"+po1+"."+po2+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR==23)
	{
		if((po3>=0)&&(po3<=1))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+0+"."+1+"-"+po1+"."+po2+"."+1+"."+254+"</span>";
		}
		else if((po3>=2)&&(po3<=3))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+2+"."+1+"-"+po1+"."+po2+"."+3+"."+254+"</span>";		
		}
		else if((po3>=4)&&(po3<=5))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+4+"."+1+"-"+po1+"."+po2+"."+5+"."+254+"</span>";
		}
		else if((po3>=6)&&(po3<=7))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+6+"."+1+"-"+po1+"."+po2+"."+7+"."+254+"</span>";
		}
		else if((po3>=8)&&(po3<=9))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+8+"."+1+"-"+po1+"."+po2+"."+9+"."+254+"</span>";
		}
		else if((po3>=10)&&(po3<=11))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+10+"."+1+"-"+po1+"."+po2+"."+11+"."+254+"</span>";
		}
		else if((po3>=12)&&(po3<=13))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+12+"."+1+"-"+po1+"."+po2+"."+13+"."+254+"</span>";
		}
		else if((po3>=14)&&(po3<=15))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+14+"."+1+"-"+po1+"."+po2+"."+15+"."+254+"</span>";
		}
		else if((po3>=16)&&(po3<=17))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+16+"."+1+"-"+po1+"."+po2+"."+17+"."+254+"</span>";
		}
		else if((po3>=18)&&(po3<=19))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+18+"."+1+"-"+po1+"."+po2+"."+19+"."+254+"</span>";
		}
		else if((po3>=20)&&(po3<=21))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+20+"."+1+"-"+po1+"."+po2+"."+21+"."+254+"</span>";
		}
		else if((po3>=22)&&(po3<=23))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+22+"."+1+"-"+po1+"."+po2+"."+23+"."+254+"</span>";
		}
		else if((po3>=24)&&(po3<=25))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+24+"."+1+"-"+po1+"."+po2+"."+25+"."+254+"</span>";
		}
		else if((po3>=26)&&(po3<=27))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+26+"."+1+"-"+po1+"."+po2+"."+27+"."+254+"</span>";
		}
		else if((po3>=28)&&(po3<=29))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+28+"."+1+"-"+po1+"."+po2+"."+29+"."+254+"</span>";
		}
		else if((po3>=30)&&(po3<=31))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+30+"."+1+"-"+po1+"."+po2+"."+31+"."+254+"</span>";
		}
		else if((po3>=32)&&(po3<=33))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+32+"."+1+"-"+po1+"."+po2+"."+33+"."+254+"</span>";
		}
		else if((po3>=34)&&(po3<=35))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+34+"."+1+"-"+po1+"."+po2+"."+35+"."+254+"</span>";
		}
		else if((po3>=36)&&(po3<=37))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+36+"."+1+"-"+po1+"."+po2+"."+37+"."+254+"</span>";
		}
		else if((po3>=38)&&(po3<=39))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+38+"."+1+"-"+po1+"."+po2+"."+39+"."+254+"</span>";
		}
		else if((po3>=40)&&(po3<=41))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+40+"."+1+"-"+po1+"."+po2+"."+41+"."+254+"</span>";
		}
		else if((po3>=42)&&(po3<=43))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+42+"."+1+"-"+po1+"."+po2+"."+43+"."+254+"</span>";
		}
		else if((po3>=44)&&(po3<=45))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+44+"."+1+"-"+po1+"."+po2+"."+45+"."+254+"</span>";
		}
		else if((po3>=46)&&(po3<=47))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+46+"."+1+"-"+po1+"."+po2+"."+47+"."+254+"</span>";
		}
		else if((po3>=48)&&(po3<=49))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+48+"."+1+"-"+po1+"."+po2+"."+49+"."+254+"</span>";
		}
		else if((po3>=50)&&(po3<=51))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+50+"."+1+"-"+po1+"."+po2+"."+51+"."+254+"</span>";
		}
		else if((po3>=52)&&(po3<=53))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+52+"."+1+"-"+po1+"."+po2+"."+53+"."+254+"</span>";
		}
		else if((po3>=54)&&(po3<=55))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+54+"."+1+"-"+po1+"."+po2+"."+55+"."+254+"</span>";
		}
		else if((po3>=56)&&(po3<=57))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+56+"."+1+"-"+po1+"."+po2+"."+57+"."+254+"</span>";
		}
		else if((po3>=58)&&(po3<=59))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+58+"."+1+"-"+po1+"."+po2+"."+59+"."+254+"</span>";
		}
		else if((po3>=60)&&(po3<=61))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+60+"."+1+"-"+po1+"."+po2+"."+61+"."+254+"</span>";
		}
		else if((po3>=62)&&(po3<=63))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+62+"."+1+"-"+po1+"."+po2+"."+63+"."+254+"</span>";
		}
		else if((po3>=64)&&(po3<=65))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+64+"."+1+"-"+po1+"."+po2+"."+65+"."+254+"</span>";
		}
		else if((po3>=66)&&(po3<=67))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+66+"."+1+"-"+po1+"."+po2+"."+67+"."+254+"</span>";
		}
		else if((po3>=68)&&(po3<=69))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+68+"."+1+"-"+po1+"."+po2+"."+69+"."+254+"</span>";
		}
		else if((po3>=70)&&(po3<=71))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+70+"."+1+"-"+po1+"."+po2+"."+71+"."+254+"</span>";
		}
		else if((po3>=72)&&(po3<=73))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+72+"."+1+"-"+po1+"."+po2+"."+73+"."+254+"</span>";
		}
		else if((po3>=74)&&(po3<=75))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+74+"."+1+"-"+po1+"."+po2+"."+75+"."+254+"</span>";
		}
		else if((po3>=76)&&(po3<=77))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+76+"."+1+"-"+po1+"."+po2+"."+77+"."+254+"</span>";
		}
		else if((po3>=78)&&(po3<=79))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+78+"."+1+"-"+po1+"."+po2+"."+79+"."+254+"</span>";
		}
		else if((po3>=80)&&(po3<=81))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+80+"."+1+"-"+po1+"."+po2+"."+81+"."+254+"</span>";
		}
		else if((po3>=82)&&(po3<=83))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+82+"."+1+"-"+po1+"."+po2+"."+83+"."+254+"</span>";
		}
		else if((po3>=84)&&(po3<=85))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+84+"."+1+"-"+po1+"."+po2+"."+85+"."+254+"</span>";
		}
		else if((po3>=86)&&(po3<=87))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+86+"."+1+"-"+po1+"."+po2+"."+87+"."+254+"</span>";
		}
		else if((po3>=88)&&(po3<=89))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+88+"."+1+"-"+po1+"."+po2+"."+89+"."+254+"</span>";
		}
		else if((po3>=90)&&(po3<=91))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+90+"."+1+"-"+po1+"."+po2+"."+91+"."+254+"</span>";
		}
		else if((po3>=92)&&(po3<=93))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+92+"."+1+"-"+po1+"."+po2+"."+93+"."+254+"</span>";
		}
		else if((po3>=94)&&(po3<=95))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+94+"."+1+"-"+po1+"."+po2+"."+95+"."+254+"</span>";
		}
		else if((po3>=96)&&(po3<=97))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+96+"."+1+"-"+po1+"."+po2+"."+97+"."+254+"</span>";
		}
		else if((po3>=98)&&(po3<=99))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+98+"."+1+"-"+po1+"."+po2+"."+99+"."+254+"</span>";
		}
		else if((po3>=100)&&(po3<=101))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+100+"."+1+"-"+po1+"."+po2+"."+101+"."+254+"</span>";
		}
		else if((po3>=102)&&(po3<=103))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+102+"."+1+"-"+po1+"."+po2+"."+103+"."+254+"</span>";
		}
		else if((po3>=104)&&(po3<=105))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+104+"."+1+"-"+po1+"."+po2+"."+105+"."+254+"</span>";
		}
		else if((po3>=106)&&(po3<=107))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+106+"."+1+"-"+po1+"."+po2+"."+107+"."+254+"</span>";
		}
		else if((po3>=108)&&(po3<=109))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+108+"."+1+"-"+po1+"."+po2+"."+109+"."+254+"</span>";
		}
		else if((po3>=110)&&(po3<=111))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+110+"."+1+"-"+po1+"."+po2+"."+111+"."+254+"</span>";
		}
		else if((po3>=112)&&(po3<=113))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+112+"."+1+"-"+po1+"."+po2+"."+113+"."+254+"</span>";
		}
		else if((po3>=114)&&(po3<=115))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+114+"."+1+"-"+po1+"."+po2+"."+115+"."+254+"</span>";
		}
		else if((po3>=116)&&(po3<=117))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+116+"."+1+"-"+po1+"."+po2+"."+117+"."+254+"</span>";
		}
		else if((po3>=118)&&(po3<=119))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+118+"."+1+"-"+po1+"."+po2+"."+119+"."+254+"</span>";
		}
		else if((po3>=120)&&(po3<=121))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+120+"."+1+"-"+po1+"."+po2+"."+121+"."+254+"</span>";
		}
		else if((po3>=122)&&(po3<=123))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+122+"."+1+"-"+po1+"."+po2+"."+123+"."+254+"</span>";
		}
		else if((po3>=124)&&(po3<=125))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+124+"."+1+"-"+po1+"."+po2+"."+125+"."+254+"</span>";
		}
		else if((po3>=126)&&(po3<=127))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+126+"."+1+"-"+po1+"."+po2+"."+127+"."+254+"</span>";
		}
		else if((po3>=128)&&(po3<=129))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+128+"."+1+"-"+po1+"."+po2+"."+129+"."+254+"</span>";
		}
		else if((po3>=130)&&(po3<=131))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+130+"."+1+"-"+po1+"."+po2+"."+131+"."+254+"</span>";
		}
		else if((po3>=132)&&(po3<=133))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+132+"."+1+"-"+po1+"."+po2+"."+133+"."+254+"</span>";
		}
		else if((po3>=134)&&(po3<=135))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+134+"."+1+"-"+po1+"."+po2+"."+135+"."+254+"</span>";
		}
		else if((po3>=136)&&(po3<=137))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+136+"."+1+"-"+po1+"."+po2+"."+137+"."+254+"</span>";
		}
		else if((po3>=138)&&(po3<=139))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+138+"."+1+"-"+po1+"."+po2+"."+139+"."+254+"</span>";
		}
		else if((po3>=140)&&(po3<=141))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+140+"."+1+"-"+po1+"."+po2+"."+141+"."+254+"</span>";
		}
		else if((po3>=142)&&(po3<=143))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+142+"."+1+"-"+po1+"."+po2+"."+143+"."+254+"</span>";
		}
		else if((po3>=144)&&(po3<=145))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+144+"."+1+"-"+po1+"."+po2+"."+145+"."+254+"</span>";
		}
		else if((po3>=146)&&(po3<=147))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+146+"."+1+"-"+po1+"."+po2+"."+147+"."+254+"</span>";
		}
		else if((po3>=148)&&(po3<=149))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+148+"."+1+"-"+po1+"."+po2+"."+149+"."+254+"</span>";
		}
		else if((po3>=150)&&(po3<=151))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+150+"."+1+"-"+po1+"."+po2+"."+151+"."+254+"</span>";
		}
		else if((po3>=152)&&(po3<=153))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+152+"."+1+"-"+po1+"."+po2+"."+153+"."+254+"</span>";
		}
		else if((po3>=154)&&(po3<=155))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+154+"."+1+"-"+po1+"."+po2+"."+155+"."+254+"</span>";
		}
		else if((po3>=156)&&(po3<=157))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+156+"."+1+"-"+po1+"."+po2+"."+157+"."+254+"</span>";
		}
		else if((po3>=158)&&(po3<=159))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+158+"."+1+"-"+po1+"."+po2+"."+159+"."+254+"</span>";
		}
		else if((po3>=160)&&(po3<=161))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+160+"."+1+"-"+po1+"."+po2+"."+161+"."+254+"</span>";
		}
		else if((po3>=162)&&(po3<=163))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+162+"."+1+"-"+po1+"."+po2+"."+163+"."+254+"</span>";
		}
		else if((po3>=164)&&(po3<=165))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+164+"."+1+"-"+po1+"."+po2+"."+165+"."+254+"</span>";
		}
		else if((po3>=166)&&(po3<=167))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+166+"."+1+"-"+po1+"."+po2+"."+167+"."+254+"</span>";
		}
		else if((po3>=168)&&(po3<=169))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+168+"."+1+"-"+po1+"."+po2+"."+169+"."+254+"</span>";
		}
		else if((po3>=170)&&(po3<=171))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+170+"."+1+"-"+po1+"."+po2+"."+171+"."+254+"</span>";
		}
		else if((po3>=172)&&(po3<=173))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+172+"."+1+"-"+po1+"."+po2+"."+173+"."+254+"</span>";
		}
		else if((po3>=174)&&(po3<=175))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+174+"."+1+"-"+po1+"."+po2+"."+175+"."+254+"</span>";
		}
		else if((po3>=176)&&(po3<=177))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+176+"."+1+"-"+po1+"."+po2+"."+177+"."+254+"</span>";
		}
		else if((po3>=178)&&(po3<=179))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+178+"."+1+"-"+po1+"."+po2+"."+179+"."+254+"</span>";
		}
		else if((po3>=180)&&(po3<=181))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+180+"."+1+"-"+po1+"."+po2+"."+181+"."+254+"</span>";
		}
		else if((po3>=182)&&(po3<=183))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+182+"."+1+"-"+po1+"."+po2+"."+183+"."+254+"</span>";
		}
		else if((po3>=184)&&(po3<=185))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+184+"."+1+"-"+po1+"."+po2+"."+185+"."+254+"</span>";
		}
		else if((po3>=186)&&(po3<=187))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+186+"."+1+"-"+po1+"."+po2+"."+187+"."+254+"</span>";
		}
		else if((po3>=188)&&(po3<=189))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+188+"."+1+"-"+po1+"."+po2+"."+189+"."+254+"</span>";
		}
		else if((po3>=190)&&(po3<=191))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+190+"."+1+"-"+po1+"."+po2+"."+191+"."+254+"</span>";
		}
		else if((po3>=192)&&(po3<=193))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+192+"."+1+"-"+po1+"."+po2+"."+193+"."+254+"</span>";
		}
		else if((po3>=194)&&(po3<=195))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+194+"."+1+"-"+po1+"."+po2+"."+195+"."+254+"</span>";
		}
		else if((po3>=196)&&(po3<=197))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+196+"."+1+"-"+po1+"."+po2+"."+197+"."+254+"</span>";
		}
		else if((po3>=198)&&(po3<=199))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+198+"."+1+"-"+po1+"."+po2+"."+199+"."+254+"</span>";
		}
		else if((po3>=200)&&(po3<=201))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+200+"."+1+"-"+po1+"."+po2+"."+201+"."+254+"</span>";
		}
		else if((po3>=202)&&(po3<=203))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+202+"."+1+"-"+po1+"."+po2+"."+203+"."+254+"</span>";
		}
		else if((po3>=204)&&(po3<=205))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+204+"."+1+"-"+po1+"."+po2+"."+205+"."+254+"</span>";
		}
		else if((po3>=206)&&(po3<=207))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+206+"."+1+"-"+po1+"."+po2+"."+27+"."+254+"</span>";
		}
		else if((po3>=208)&&(po3<=209))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+208+"."+1+"-"+po1+"."+po2+"."+209+"."+254+"</span>";
		}
		else if((po3>=210)&&(po3<=211))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+210+"."+1+"-"+po1+"."+po2+"."+211+"."+254+"</span>";
		}
		else if((po3>=212)&&(po3<=213))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+212+"."+1+"-"+po1+"."+po2+"."+213+"."+254+"</span>";
		}
		else if((po3>=214)&&(po3<=215))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+214+"."+1+"-"+po1+"."+po2+"."+215+"."+254+"</span>";
		}
		else if((po3>=216)&&(po3<=217))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+216+"."+1+"-"+po1+"."+po2+"."+217+"."+254+"</span>";
		}
		else if((po3>=218)&&(po3<=219))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+218+"."+1+"-"+po1+"."+po2+"."+219+"."+254+"</span>";
		}
		else if((po3>=220)&&(po3<=221))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+220+"."+1+"-"+po1+"."+po2+"."+221+"."+254+"</span>";
		}
		else if((po3>=222)&&(po3<=223))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+222+"."+1+"-"+po1+"."+po2+"."+223+"."+254+"</span>";
		}
		else if((po3>=224)&&(po3<=225))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+224+"."+1+"-"+po1+"."+po2+"."+225+"."+254+"</span>";
		}
		else if((po3>=226)&&(po3<=227))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+226+"."+1+"-"+po1+"."+po2+"."+227+"."+254+"</span>";
		}
		else if((po3>=228)&&(po3<=229))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+228+"."+1+"-"+po1+"."+po2+"."+229+"."+254+"</span>";
		}
		else if((po3>=230)&&(po3<=231))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+230+"."+1+"-"+po1+"."+po2+"."+231+"."+254+"</span>";
		}
		else if((po3>=232)&&(po3<=233))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+232+"."+1+"-"+po1+"."+po2+"."+233+"."+254+"</span>";
		}
		else if((po3>=234)&&(po3<=235))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+234+"."+1+"-"+po1+"."+po2+"."+235+"."+254+"</span>";
		}
		else if((po3>=236)&&(po3<=237))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+236+"."+1+"-"+po1+"."+po2+"."+237+"."+254+"</span>";
		}
		else if((po3>=238)&&(po3<=239))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+238+"."+1+"-"+po1+"."+po2+"."+239+"."+254+"</span>";
		}
		else if((po3>=240)&&(po3<=241))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+240+"."+1+"-"+po1+"."+po2+"."+241+"."+254+"</span>";
		}
		else if((po3>=242)&&(po3<=243))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+242+"."+1+"-"+po1+"."+po2+"."+243+"."+254+"</span>";
		}
		else if((po3>=244)&&(po3<=245))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+244+"."+1+"-"+po1+"."+po2+"."+245+"."+254+"</span>";
		}
		else if((po3>=246)&&(po3<=247))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+246+"."+1+"-"+po1+"."+po2+"."+247+"."+254+"</span>";
		}
		else if((po3>=248)&&(po3<=249))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+248+"."+1+"-"+po1+"."+po2+"."+249+"."+254+"</span>";
		}
		else if((po3>=250)&&(po3<=251))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+250+"."+1+"-"+po1+"."+po2+"."+251+"."+254+"</span>";
		}
		else if((po3>=252)&&(po3<=253))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+252+"."+1+"-"+po1+"."+po2+"."+253+"."+254+"</span>";
		}
		else if((po3>=254)&&(po3<=255))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+po2+"."+254+"."+1+"-"+po1+"."+po2+"."+255+"."+254+"</span>";
		}
	}
  }
  else if((CIDR>=8)&& (po1!="") && (po2 != "")  &&  (po3 != "")  &&  (po4 != ""))
  {
	if(CIDR == 8)
	{document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+0+"."+0+"."+1+"-"+po1+"."+255+"."+255+"."+254+"</span>";}
	else if(CIDR == 8)
	{
		if( po2>=0 && po2<=127 )
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+0+"."+0+"."+1+"-"+po1+"."+127+"."+255+"."+254+"</span>";
		}
		else if(po2>=128 && po2<=255)
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+128+"."+0+"."+1+"-"+po1+"."+255+"."+255+"."+254+"</span>";
		}
		
	}
	else if(CIDR == 10)
	{
		if((po2>=0)&&(po2<=63))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+0+"."+0+"."+1+"-"+po1+"."+63+"."+255+"."+254+"</span>";
		}
		else if((po2>=64)&&(po2<=127))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+64+"."+0+"."+1+"-"+po1+"."+127+"."+255+"."+254+"</span>";
		}
		else if((po2>=128)&&(po2<=191))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+128+"."+0+"."+1+"-"+po1+"."+191+"."+255+"."+254+"</span>";
		}
		else if((po2>=192)&&(po2<=255))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+192+"."+0+"."+1+"-"+po1+"."+255+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR == 11)
	{
		if((po2>=0)&&(po2<=31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+0+"."+0+"."+1+"-"+po1+"."+31+"."+255+"."+254+"</span>";
		}
		else if((po2>=32)&&(po2<=63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+32+"."+0+"."+1+"-"+po1+"."+63+"."+255+"."+254+"</span>";
		}
		else if((po2>=64)&&(po2<=95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+64+"."+0+"."+1+"-"+po1+"."+95+"."+255+"."+254+"</span>";
		}
		else if((po2>=96)&&(po2<=127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+96+"."+0+"."+1+"-"+po1+"."+127+"."+255+"."+254+"</span>";
		}
		else if((po2>=128)&&(po2<=159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+128+"."+0+"."+1+"-"+po1+"."+159+"."+255+"."+254+"</span>";
		}
		else if((po2>=160)&&(po2<=191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+160+"."+0+"."+1+"-"+po1+"."+191+"."+255+"."+254+"</span>";
		}
		else if((po2>=192)&&(po2<=223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+192+"."+0+"."+1+"-"+po1+"."+223+"."+255+"."+254+"</span>";
		}
		else if((po2>=224)&&(po2<=255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+224+"."+0+"."+1+"-"+po1+"."+255+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR == 12)
	{	if((po2>=0)&&(po2<=15))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+0+"."+0+"."+1+"-"+po1+"."+15+"."+255+"."+254+"</span>";
		}
		else if((po2>=16)&&(po2<=31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+16+"."+0+"."+1+"-"+po1+"."+31+"."+255+"."+254+"</span>";
		}
		else if((po2>=32)&&(po2<=47))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+32+"."+0+"."+1+"-"+po1+"."+47+"."+255+"."+254+"</span>";
		}
		else if((po2>=48)&&(po2<=63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+48+"."+0+"."+1+"-"+po1+"."+63+"."+255+"."+254+"</span>";
		}
		else if((po2>=64)&&(po2<=79))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+64+"."+0+"."+1+"-"+po1+"."+79+"."+255+"."+254+"</span>";
		}
		else if((po2>=80)&&(po2<=95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+80+"."+0+"."+1+"-"+po1+"."+95+"."+255+"."+254+"</span>";
		}
		else if((po2>=96)&&(po2<=111))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+96+"."+0+"."+1+"-"+po1+"."+111+"."+255+"."+254+"</span>";
		}
		else if((po2>=112)&&(po2<=127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+112+"."+0+"."+1+"-"+po1+"."+127+"."+255+"."+254+"</span>";
		}
		else if((po2>=128)&&(po2<=143))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+128+"."+0+"."+1+"-"+po1+"."+143+"."+255+"."+254+"</span>";
		}
		else if((po2>=144)&&(po2<=159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+144+"."+0+"."+1+"-"+po1+"."+159+"."+255+"."+254+"</span>";
		}
		else if((po2>=160)&&(po2<=175))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+160+"."+0+"."+1+"-"+po1+"."+175+"."+255+"."+254+"</span>";
		}
		else if((po2>=176)&&(po2<=191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+176+"."+0+"."+1+"-"+po1+"."+191+"."+255+"."+254+"</span>";
		}
		else if((po2>=192)&&(po2<=207))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+192+"."+0+"."+1+"-"+po1+"."+207+"."+255+"."+254+"</span>";
		}
		else if((po2>=208)&&(po2<=223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+208+"."+0+"."+1+"-"+po1+"."+223+"."+255+"."+254+"</span>";
		}
		else if((po2>=224)&&(po2<=239))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+224+"."+0+"."+1+"-"+po1+"."+239+"."+255+"."+254+"</span>";
		}
		else if((po2>=240)&&(po2<=255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+240+"."+0+"."+1+"-"+po1+"."+255+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR == 13)
	{	if((po2>=0)&&(po2<=7))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+0+"."+0+"."+1+"-"+po1+"."+7+"."+255+"."+254+"</span>";
		}
		else if((po2>=8)&&(po2<=15))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+8+"."+0+"."+1+"-"+po1+"."+15+"."+255+"."+254+"</span>";
		}
		else if((po2>=16)&&(po2<=23))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+16+"."+0+"."+1+"-"+po1+"."+23+"."+255+"."+254+"</span>";
		}
		else if((po2>=24)&&(po2<=31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+24+"."+0+"."+1+"-"+po1+"."+31+"."+255+"."+254+"</span>";
		}
		else if((po2>=32)&&(po2<=39))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+32+"."+0+"."+1+"-"+po1+"."+39+"."+255+"."+254+"</span>";
		}
		else if((po2>=40)&&(po2<=47))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+40+"."+0+"."+1+"-"+po1+"."+47+"."+255+"."+254+"</span>";
		}
		else if((po2>=48)&&(po2<=55))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+48+"."+0+"."+1+"-"+po1+"."+55+"."+255+"."+254+"</span>";
		}
		else if((po2>=56)&&(po2<=63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+56+"."+0+"."+1+"-"+po1+"."+63+"."+255+"."+254+"</span>";
		}
		else if((po2>=64)&&(po2<=71))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+64+"."+0+"."+1+"-"+po1+"."+71+"."+255+"."+254+"</span>";
		}
		else if((po2>=72)&&(po2<=79))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+72+"."+0+"."+1+"-"+po1+"."+79+"."+255+"."+254+"</span>";
		}
		else if((po2>=80)&&(po2<=87))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+80+"."+0+"."+1+"-"+po1+"."+87+"."+255+"."+254+"</span>";
		}
		else if((po2>=88)&&(po2<=95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+88+"."+0+"."+1+"-"+po1+"."+95+"."+255+"."+254+"</span>";
		}
		else if((po2>=96)&&(po2<=103))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+96+"."+0+"."+1+"-"+po1+"."+103+"."+255+"."+254+"</span>";
		}
		else if((po2>=104)&&(po2<=111))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+104+"."+0+"."+1+"-"+po1+"."+111+"."+255+"."+254+"</span>";
		}
		else if((po2>=112)&&(po2<=119))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+112+"."+0+"."+1+"-"+po1+"."+119+"."+255+"."+254+"</span>";
		}
		else if((po2>=120)&&(po2<=127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+120+"."+0+"."+1+"-"+po1+"."+127+"."+255+"."+254+"</span>";
		}
		else if((po2>=128)&&(po2<=135))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+128+"."+0+"."+1+"-"+po1+"."+135+"."+255+"."+254+"</span>";
		}
		else if((po2>=136)&&(po2<=143))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+136+"."+0+"."+1+"-"+po1+"."+143+"."+255+"."+254+"</span>";
		}
		else if((po2>=144)&&(po2<=151))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+144+"."+0+"."+1+"-"+po1+"."+151+"."+255+"."+254+"</span>";
		}
		else if((po2>=152)&&(po2<=159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+152+"."+0+"."+1+"-"+po1+"."+159+"."+255+"."+254+"</span>";
		}
		else if((po2>=160)&&(po2<=167))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+160+"."+0+"."+1+"-"+po1+"."+167+"."+255+"."+254+"</span>";
		}
		else if((po2>=168)&&(po2<=175))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+168+"."+0+"."+1+"-"+po1+"."+175+"."+255+"."+254+"</span>";
		}
		else if((po2>=176)&&(po2<=183))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+176+"."+0+"."+1+"-"+po1+"."+183+"."+255+"."+254+"</span>";
		}
		else if((po2>=184)&&(po2<=191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+184+"."+0+"."+1+"-"+po1+"."+191+"."+255+"."+254+"</span>";
		}
		else if((po2>=192)&&(po2<=199))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+192+"."+0+"."+1+"-"+po1+"."+199+"."+255+"."+254+"</span>";
		}
		else if((po2>=200)&&(po2<=207))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+200+"."+0+"."+1+"-"+po1+"."+207+"."+255+"."+254+"</span>";
		}
		else if((po2>=208)&&(po2<=215))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+208+"."+0+"."+1+"-"+po1+"."+215+"."+255+"."+254+"</span>";
		}
		else if((po2>=216)&&(po2<=223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+216+"."+0+"."+1+"-"+po1+"."+223+"."+255+"."+254+"</span>";
		}
		else if((po2>=224)&&(po2<=231))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+224+"."+0+"."+1+"-"+po1+"."+231+"."+255+"."+254+"</span>";
		}
		else if((po2>=232)&&(po2<=239))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+232+"."+0+"."+1+"-"+po1+"."+239+"."+255+"."+254+"</span>";
		}
		else if((po2>=240)&&(po2<=247))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+240+"."+0+"."+1+"-"+po1+"."+247+"."+255+"."+254+"</span>";
		}
		else if((po2>=248)&&(po2<=255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+248+"."+0+"."+1+"-"+po1+"."+255+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR == 14)
	{
		if((po2>=0)&&(po2<=3))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+0+"."+0+"."+1+"-"+po1+"."+3+"."+255+"."+254+"</span>";
		}
		else if((po2>=4)&&(po2<=7))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+4+"."+0+"."+1+"-"+po1+"."+7+"."+255+"."+254+"</span>";
		}
		else if((po2>=8)&&(po2<=11))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+8+"."+0+"."+1+"-"+po1+"."+11+"."+255+"."+254+"</span>";
		}
		else if((po2>=12)&&(po2<=15))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+12+"."+0+"."+1+"-"+po1+"."+15+"."+255+"."+254+"</span>";
		}
		else if((po2>=16)&&(po2<=19))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+16+"."+0+"."+1+"-"+po1+"."+19+"."+255+"."+254+"</span>";
		}
		else if((po2>=20)&&(po2<=23))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+20+"."+0+"."+1+"-"+po1+"."+23+"."+255+"."+254+"</span>";
		}
		else if((po2>=24)&&(po2<=27))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+24+"."+0+"."+1+"-"+po1+"."+27+"."+255+"."+254+"</span>";
		}
		else if((po2>=28)&&(po2<=31))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+28+"."+0+"."+1+"-"+po1+"."+31+"."+255+"."+254+"</span>";
		}
		else if((po2>=32)&&(po2<=35))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+32+"."+0+"."+1+"-"+po1+"."+35+"."+255+"."+254+"</span>";
		}
		else if((po2>=36)&&(po2<=39))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+36+"."+0+"."+1+"-"+po1+"."+39+"."+255+"."+254+"</span>";
		}
		else if((po2>=40)&&(po2<=43))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+40+"."+0+"."+1+"-"+po1+"."+43+"."+255+"."+254+"</span>";
		}
		else if((po2>=44)&&(po2<=47))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+44+"."+0+"."+1+"-"+po1+"."+47+"."+255+"."+254+"</span>";
		}
		else if((po2>=48)&&(po2<=51))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+48+"."+0+"."+1+"-"+po1+"."+51+"."+255+"."+254+"</span>";
		}
		else if((po2>=52)&&(po2<=55))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+52+"."+0+"."+1+"-"+po1+"."+55+"."+255+"."+254+"</span>";
		}
		else if((po2>=56)&&(po2<=59))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+56+"."+0+"."+1+"-"+po1+"."+59+"."+255+"."+254+"</span>";
		}
		else if((po2>=60)&&(po2<=63))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+60+"."+0+"."+1+"-"+po1+"."+63+"."+255+"."+254+"</span>";
		}
		else if((po2>=64)&&(po2<=67))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+64+"."+0+"."+1+"-"+po1+"."+67+"."+255+"."+254+"</span>";
		}
		else if((po2>=68)&&(po2<=71))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+68+"."+0+"."+1+"-"+po1+"."+71+"."+255+"."+254+"</span>";
		}
		else if((po2>=72)&&(po2<=75))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+72+"."+0+"."+1+"-"+po1+"."+75+"."+255+"."+254+"</span>";
		}
		else if((po2>=76)&&(po2<=79))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+76+"."+0+"."+1+"-"+po1+"."+79+"."+255+"."+254+"</span>";
		}
		else if((po2>=80)&&(po2<=83))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+80+"."+0+"."+1+"-"+po1+"."+83+"."+255+"."+254+"</span>";
		}
		else if((po2>=84)&&(po2<=87))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+84+"."+0+"."+1+"-"+po1+"."+87+"."+255+"."+254+"</span>";
		}
		else if((po2>=88)&&(po2<=91))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+88+"."+0+"."+1+"-"+po1+"."+91+"."+255+"."+254+"</span>";
		}
		else if((po2>=92)&&(po2<=95))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+92+"."+0+"."+1+"-"+po1+"."+95+"."+255+"."+254+"</span>";
		}
		else if((po2>=96)&&(po2<=99))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+96+"."+0+"."+1+"-"+po1+"."+99+"."+255+"."+254+"</span>";
		}
		else if((po2>=100)&&(po2<=103))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+100+"."+0+"."+1+"-"+po1+"."+103+"."+255+"."+254+"</span>";
		}
		else if((po2>=104)&&(po2<=107))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+104+"."+0+"."+1+"-"+po1+"."+107+"."+255+"."+254+"</span>";
		}
		else if((po2>=108)&&(po2<=111))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+108+"."+0+"."+1+"-"+po1+"."+111+"."+255+"."+254+"</span>";
		}
		else if((po2>=112)&&(po2<=115))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+112+"."+0+"."+1+"-"+po1+"."+115+"."+255+"."+254+"</span>";
		}
		else if((po2>=116)&&(po2<=119))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+116+"."+0+"."+1+"-"+po1+"."+119+"."+255+"."+254+"</span>";
		}
		else if((po2>=120)&&(po2<=123))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+120+"."+0+"."+1+"-"+po1+"."+123+"."+255+"."+254+"</span>";
		}
		else if((po2>=124)&&(po2<=127))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+124+"."+0+"."+1+"-"+po1+"."+127+"."+255+"."+254+"</span>";
		}
		else if((po2>=128)&&(po2<=131))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+128+"."+0+"."+1+"-"+po1+"."+131+"."+255+"."+254+"</span>";
		}
		else if((po2>=132)&&(po2<=135))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+132+"."+0+"."+1+"-"+po1+"."+135+"."+255+"."+254+"</span>";
		}
		else if((po2>=136)&&(po2<=139))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+136+"."+0+"."+1+"-"+po1+"."+139+"."+255+"."+254+"</span>";
		}
		else if((po2>=140)&&(po2<=143))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+140+"."+0+"."+1+"-"+po1+"."+143+"."+255+"."+254+"</span>";
		}
		else if((po2>=144)&&(po2<=147))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+144+"."+0+"."+1+"-"+po1+"."+147+"."+255+"."+254+"</span>";
		}
		else if((po2>=148)&&(po2<=151))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+148+"."+0+"."+1+"-"+po1+"."+151+"."+255+"."+254+"</span>";
		}
		else if((po2>=152)&&(po2<=155))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+152+"."+0+"."+1+"-"+po1+"."+155+"."+255+"."+254+"</span>";
		}
		else if((po2>=156)&&(po2<=159))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+156+"."+0+"."+1+"-"+po1+"."+159+"."+255+"."+254+"</span>";
		}
		else if((po2>=160)&&(po2<=163))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+160+"."+0+"."+1+"-"+po1+"."+163+"."+255+"."+254+"</span>";
		}
		else if((po2>=164)&&(po2<=167))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+164+"."+0+"."+1+"-"+po1+"."+167+"."+255+"."+254+"</span>";
		}
		else if((po2>=168)&&(po2<=171))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+168+"."+0+"."+1+"-"+po1+"."+171+"."+255+"."+254+"</span>";
		}
		else if((po2>=172)&&(po2<=175))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+172+"."+0+"."+1+"-"+po1+"."+175+"."+255+"."+254+"</span>";
		}
		else if((po2>=176)&&(po2<=179))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+176+"."+0+"."+1+"-"+po1+"."+179+"."+255+"."+254+"</span>";
		}
		else if((po2>=180)&&(po2<=183))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+180+"."+0+"."+1+"-"+po1+"."+183+"."+255+"."+254+"</span>";
		}
		else if((po2>=184)&&(po2<=187))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+184+"."+0+"."+1+"-"+po1+"."+187+"."+255+"."+254+"</span>";
		}
		else if((po2>=188)&&(po2<=191))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+188+"."+0+"."+1+"-"+po1+"."+191+"."+255+"."+254+"</span>";
		}
		else if((po2>=192)&&(po2<=195))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+192+"."+0+"."+1+"-"+po1+"."+195+"."+255+"."+254+"</span>";
		}
		else if((po2>=196)&&(po2<=199))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+196+"."+0+"."+1+"-"+po1+"."+199+"."+255+"."+254+"</span>";
		}
		else if((po2>=200)&&(po2<=203))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+200+"."+0+"."+1+"-"+po1+"."+203+"."+255+"."+254+"</span>";
		}
		else if((po2>=204)&&(po2<=207))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+204+"."+0+"."+1+"-"+po1+"."+207+"."+255+"."+254+"</span>";
		}
		else if((po2>=208)&&(po2<=211))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+208+"."+0+"."+1+"-"+po1+"."+211+"."+255+"."+254+"</span>";
		}
		else if((po2>=212)&&(po2<=215))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+212+"."+0+"."+1+"-"+po1+"."+215+"."+255+"."+254+"</span>";
		}
		else if((po2>=216)&&(po2<=219))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+216+"."+0+"."+1+"-"+po1+"."+219+"."+255+"."+254+"</span>";
		}
		else if((po2>=220)&&(po2<=223))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+220+"."+0+"."+1+"-"+po1+"."+223+"."+255+"."+254+"</span>";
		}
		else if((po2>=224)&&(po2<=227))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+224+"."+0+"."+1+"-"+po1+"."+227+"."+255+"."+254+"</span>";
		}
		else if((po2>=228)&&(po2<=231))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+228+"."+0+"."+1+"-"+po1+"."+231+"."+255+"."+254+"</span>";
		}
		else if((po2>=232)&&(po2<=235))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+232+"."+0+"."+1+"-"+po1+"."+235+"."+255+"."+254+"</span>";
		}
		else if((po2>=236)&&(po2<=239))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+236+"."+0+"."+1+"-"+po1+"."+239+"."+255+"."+254+"</span>";
		}
		else if((po2>=240)&&(po2<=243))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+240+"."+0+"."+1+"-"+po1+"."+243+"."+255+"."+254+"</span>";
		}
		else if((po2>=244)&&(po2<=247))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+244+"."+0+"."+1+"-"+po1+"."+247+"."+255+"."+254+"</span>";
		}
		else if((po2>=248)&&(po2<=251))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+248+"."+0+"."+1+"-"+po1+"."+251+"."+255+"."+254+"</span>";
		}
		else if((po2>=252)&&(po2<=255))
		{
		document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+252+"."+0+"."+1+"-"+po1+"."+255+"."+255+"."+254+"</span>";
		}
	}
	else if(CIDR==15)
	{
		if((po2>=0)&&(po2<=1))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+0+"."+0+"."+1+"-"+po1+"."+1+"."+255+"."+254+"</span>";
		}
		else if((po2>=2)&&(po2<=3))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+2+"."+0+"."+1+"-"+po1+"."+3+"."+255+"."+254+"</span>";		
		}
		else if((po2>=4)&&(po2<=5))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+4+"."+0+"."+1+"-"+po1+"."+5+"."+255+"."+254+"</span>";
		}
		else if((po2>=6)&&(po2<=7))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+6+"."+0+"."+1+"-"+po1+"."+7+"."+255+"."+254+"</span>";
		}
		else if((po2>=8)&&(po2<=9))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+8+"."+0+"."+1+"-"+po1+"."+09+"."+255+"."+254+"</span>";
		}
		else if((po2>=10)&&(po2<=11))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+10+"."+0+"."+1+"-"+po1+"."+11+"."+255+"."+254+"</span>";
		}
		else if((po2>=12)&&(po2<=13))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+12+"."+0+"."+1+"-"+po1+"."+13+"."+255+"."+254+"</span>";
		}
		else if((po2>=14)&&(po2<=15))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+14+"."+0+"."+1+"-"+po1+"."+15+"."+255+"."+254+"</span>";
		}
		else if((po2>=16)&&(po2<=17))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+16+"."+0+"."+1+"-"+po1+"."+17+"."+255+"."+254+"</span>";
		}
		else if((po2>=18)&&(po2<=19))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+18+"."+0+"."+1+"-"+po1+"."+19+"."+255+"."+254+"</span>";
		}
		else if((po2>=20)&&(po2<=21))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+20+"."+0+"."+1+"-"+po1+"."+21+"."+255+"."+254+"</span>";
		}
		else if((po2>=22)&&(po2<=23))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+22+"."+0+"."+1+"-"+po1+"."+23+"."+255+"."+254+"</span>";
		}
		else if((po2>=24)&&(po2<=25))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+24+"."+0+"."+1+"-"+po1+"."+25+"."+255+"."+254+"</span>";
		}
		else if((po2>=26)&&(po2<=27))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+26+"."+0+"."+1+"-"+po1+"."+27+"."+255+"."+254+"</span>";
		}
		else if((po2>=28)&&(po2<=29))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+28+"."+0+"."+1+"-"+po1+"."+29+"."+255+"."+254+"</span>";
		}
		else if((po2>=30)&&(po2<=31))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+30+"."+0+"."+1+"-"+po1+"."+31+"."+255+"."+254+"</span>";
		}
		else if((po2>=32)&&(po2<=33))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+32+"."+0+"."+1+"-"+po1+"."+33+"."+255+"."+254+"</span>";
		}
		else if((po2>=34)&&(po2<=35))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+34+"."+0+"."+1+"-"+po1+"."+35+"."+255+"."+254+"</span>";
		}
		else if((po2>=36)&&(po2<=37))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+36+"."+0+"."+1+"-"+po1+"."+37+"."+255+"."+254+"</span>";
		}
		else if((po2>=38)&&(po2<=39))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+38+"."+0+"."+1+"-"+po1+"."+39+"."+255+"."+254+"</span>";
		}
		else if((po2>=40)&&(po2<=41))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+40+"."+0+"."+1+"-"+po1+"."+41+"."+255+"."+254+"</span>";
		}
		else if((po2>=42)&&(po2<=43))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+42+"."+0+"."+1+"-"+po1+"."+43+"."+255+"."+254+"</span>";
		}
		else if((po2>=44)&&(po2<=45))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+44+"."+0+"."+1+"-"+po1+"."+45+"."+255+"."+254+"</span>";
		}
		else if((po2>=46)&&(po2<=47))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+46+"."+0+"."+1+"-"+po1+"."+47+"."+255+"."+254+"</span>";
		}
		else if((po2>=48)&&(po2<=49))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+48+"."+0+"."+1+"-"+po1+"."+49+"."+255+"."+254+"</span>";
		}
		else if((po2>=50)&&(po2<=51))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+50+"."+0+"."+1+"-"+po1+"."+51+"."+255+"."+254+"</span>";
		}
		else if((po2>=52)&&(po2<=53))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+52+"."+0+"."+1+"-"+po1+"."+53+"."+255+"."+254+"</span>";
		}
		else if((po2>=54)&&(po2<=55))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+54+"."+0+"."+1+"-"+po1+"."+55+"."+255+"."+254+"</span>";
		}
		else if((po2>=56)&&(po2<=57))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+56+"."+0+"."+1+"-"+po1+"."+57+"."+255+"."+254+"</span>";
		}
		else if((po2>=58)&&(po2<=59))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+58+"."+0+"."+1+"-"+po1+"."+59+"."+255+"."+254+"</span>";
		}
		else if((po2>=60)&&(po2<=61))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+60+"."+0+"."+1+"-"+po1+"."+61+"."+255+"."+254+"</span>";
		}
		else if((po2>=62)&&(po2<=63))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+62+"."+0+"."+1+"-"+po1+"."+63+"."+255+"."+254+"</span>";
		}
		else if((po2>=64)&&(po2<=65))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+64+"."+0+"."+1+"-"+po1+"."+65+"."+255+"."+254+"</span>";
		}
		else if((po2>=66)&&(po2<=67))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+66+"."+0+"."+1+"-"+po1+"."+67+"."+255+"."+254+"</span>";
		}
		else if((po2>=68)&&(po2<=69))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+68+"."+0+"."+1+"-"+po1+"."+69+"."+255+"."+254+"</span>";
		}
		else if((po2>=70)&&(po2<=71))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+70+"."+0+"."+1+"-"+po1+"."+71+"."+255+"."+254+"</span>";
		}
		else if((po2>=72)&&(po2<=73))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+72+"."+0+"."+1+"-"+po1+"."+73+"."+255+"."+254+"</span>";
		}
		else if((po2>=74)&&(po2<=75))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+74+"."+0+"."+1+"-"+po1+"."+75+"."+255+"."+254+"</span>";
		}
		else if((po2>=76)&&(po2<=77))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+76+"."+0+"."+1+"-"+po1+"."+77+"."+255+"."+254+"</span>";
		}
		else if((po2>=78)&&(po2<=79))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+78+"."+0+"."+1+"-"+po1+"."+79+"."+255+"."+254+"</span>";
		}
		else if((po2>=80)&&(po2<=81))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+80+"."+0+"."+1+"-"+po1+"."+81+"."+255+"."+254+"</span>";
		}
		else if((po2>=82)&&(po2<=83))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+82+"."+0+"."+1+"-"+po1+"."+83+"."+255+"."+254+"</span>";
		}
		else if((po2>=84)&&(po2<=85))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+84+"."+0+"."+1+"-"+po1+"."+85+"."+255+"."+254+"</span>";
		}
		else if((po2>=86)&&(po2<=87))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+86+"."+0+"."+1+"-"+po1+"."+87+"."+255+"."+254+"</span>";
		}
		else if((po2>=88)&&(po2<=89))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+88+"."+0+"."+1+"-"+po1+"."+89+"."+255+"."+254+"</span>";
		}
		else if((po2>=90)&&(po2<=91))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+90+"."+0+"."+1+"-"+po1+"."+91+"."+255+"."+254+"</span>";
		}
		else if((po2>=92)&&(po2<=93))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+92+"."+0+"."+1+"-"+po1+"."+93+"."+255+"."+254+"</span>";
		}
		else if((po2>=94)&&(po2<=95))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+94+"."+0+"."+1+"-"+po1+"."+95+"."+255+"."+254+"</span>";
		}
		else if((po2>=96)&&(po2<=97))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+96+"."+0+"."+1+"-"+po1+"."+97+"."+255+"."+254+"</span>";
		}
		else if((po2>=98)&&(po2<=99))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+98+"."+0+"."+1+"-"+po1+"."+99+"."+255+"."+254+"</span>";
		}
		else if((po2>=100)&&(po2<=101))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+100+"."+0+"."+1+"-"+po1+"."+101+"."+255+"."+254+"</span>";
		}
		else if((po2>=102)&&(po2<=103))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+102+"."+0+"."+1+"-"+po1+"."+103+"."+255+"."+254+"</span>";
		}
		else if((po2>=104)&&(po2<=105))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+104+"."+0+"."+1+"-"+po1+"."+105+"."+255+"."+254+"</span>";
		}
		else if((po2>=106)&&(po2<=107))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+106+"."+0+"."+1+"-"+po1+"."+107+"."+255+"."+254+"</span>";
		}
		else if((po2>=108)&&(po2<=109))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+108+"."+0+"."+1+"-"+po1+"."+109+"."+255+"."+254+"</span>";
		}
		else if((po2>=110)&&(po2<=111))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+110+"."+0+"."+1+"-"+po1+"."+111+"."+255+"."+254+"</span>";
		}
		else if((po2>=112)&&(po2<=113))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+112+"."+0+"."+1+"-"+po1+"."+113+"."+255+"."+254+"</span>";
		}
		else if((po2>=114)&&(po2<=115))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+114+"."+0+"."+1+"-"+po1+"."+115+"."+255+"."+254+"</span>";
		}
		else if((po2>=116)&&(po2<=117))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+116+"."+0+"."+1+"-"+po1+"."+117+"."+255+"."+254+"</span>";
		}
		else if((po2>=118)&&(po2<=119))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+118+"."+0+"."+1+"-"+po1+"."+119+"."+255+"."+254+"</span>";
		}
		else if((po2>=120)&&(po2<=121))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+120+"."+0+"."+1+"-"+po1+"."+121+"."+255+"."+254+"</span>";
		}
		else if((po2>=122)&&(po2<=123))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+122+"."+0+"."+1+"-"+po1+"."+123+"."+255+"."+254+"</span>";
		}
		else if((po2>=124)&&(po2<=125))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+124+"."+0+"."+1+"-"+po1+"."+125+"."+255+"."+254+"</span>";
		}
		else if((po2>=126)&&(po2<=127))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+126+"."+0+"."+1+"-"+po1+"."+127+"."+255+"."+254+"</span>";
		}
		else if((po2>=128)&&(po2<=129))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+128+"."+0+"."+1+"-"+po1+"."+129+"."+255+"."+254+"</span>";
		}
		else if((po2>=130)&&(po2<=131))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+130+"."+0+"."+1+"-"+po1+"."+131+"."+255+"."+254+"</span>";
		}
		else if((po2>=132)&&(po2<=133))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+132+"."+0+"."+1+"-"+po1+"."+133+"."+255+"."+254+"</span>";
		}
		else if((po2>=134)&&(po2<=135))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+134+"."+0+"."+1+"-"+po1+"."+135+"."+255+"."+254+"</span>";
		}
		else if((po2>=136)&&(po2<=137))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+136+"."+0+"."+1+"-"+po1+"."+137+"."+255+"."+254+"</span>";
		}
		else if((po2>=138)&&(po2<=139))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+138+"."+0+"."+1+"-"+po1+"."+139+"."+255+"."+254+"</span>";
		}
		else if((po2>=140)&&(po2<=141))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+140+"."+0+"."+1+"-"+po1+"."+141+"."+255+"."+254+"</span>";
		}
		else if((po2>=142)&&(po2<=143))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+142+"."+0+"."+1+"-"+po1+"."+143+"."+255+"."+254+"</span>";
		}
		else if((po2>=144)&&(po2<=145))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+144+"."+0+"."+1+"-"+po1+"."+145+"."+255+"."+254+"</span>";
		}
		else if((po2>=146)&&(po2<=147))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+146+"."+0+"."+1+"-"+po1+"."+147+"."+255+"."+254+"</span>";
		}
		else if((po2>=148)&&(po2<=149))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+148+"."+0+"."+1+"-"+po1+"."+149+"."+255+"."+254+"</span>";
		}
		else if((po2>=150)&&(po2<=151))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+150+"."+0+"."+1+"-"+po1+"."+151+"."+255+"."+254+"</span>";
		}
		else if((po2>=152)&&(po2<=153))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+152+"."+0+"."+1+"-"+po1+"."+153+"."+255+"."+254+"</span>";
		}
		else if((po2>=154)&&(po2<=155))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+154+"."+0+"."+1+"-"+po1+"."+155+"."+255+"."+254+"</span>";
		}
		else if((po2>=156)&&(po2<=157))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+156+"."+0+"."+1+"-"+po1+"."+157+"."+255+"."+254+"</span>";
		}
		else if((po2>=158)&&(po2<=159))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+158+"."+0+"."+1+"-"+po1+"."+159+"."+255+"."+254+"</span>";
		}
		else if((po2>=160)&&(po2<=161))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+160+"."+0+"."+1+"-"+po1+"."+161+"."+255+"."+254+"</span>";
		}
		else if((po2>=162)&&(po2<=163))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+162+"."+0+"."+1+"-"+po1+"."+163+"."+255+"."+254+"</span>";
		}
		else if((po2>=164)&&(po2<=165))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+164+"."+0+"."+1+"-"+po1+"."+165+"."+255+"."+254+"</span>";
		}
		else if((po2>=166)&&(po2<=167))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+166+"."+0+"."+1+"-"+po1+"."+167+"."+255+"."+254+"</span>";
		}
		else if((po2>=168)&&(po2<=169))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+168+"."+0+"."+1+"-"+po1+"."+169+"."+255+"."+254+"</span>";
		}
		else if((po2>=170)&&(po2<=171))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+170+"."+0+"."+1+"-"+po1+"."+171+"."+255+"."+254+"</span>";
		}
		else if((po2>=172)&&(po2<=173))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+172+"."+0+"."+1+"-"+po1+"."+173+"."+255+"."+254+"</span>";
		}
		else if((po2>=174)&&(po2<=175))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+174+"."+0+"."+1+"-"+po1+"."+175+"."+255+"."+254+"</span>";
		}
		else if((po2>=176)&&(po2<=177))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+176+"."+0+"."+1+"-"+po1+"."+177+"."+255+"."+254+"</span>";
		}
		else if((po2>=178)&&(po2<=179))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+178+"."+0+"."+1+"-"+po1+"."+179+"."+255+"."+254+"</span>";
		}
		else if((po2>=180)&&(po2<=181))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+180+"."+0+"."+1+"-"+po1+"."+181+"."+255+"."+254+"</span>";
		}
		else if((po2>=182)&&(po2<=183))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+182+"."+0+"."+1+"-"+po1+"."+183+"."+255+"."+254+"</span>";
		}
		else if((po2>=184)&&(po2<=185))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+184+"."+0+"."+1+"-"+po1+"."+185+"."+255+"."+254+"</span>";
		}
		else if((po2>=186)&&(po2<=187))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+186+"."+0+"."+1+"-"+po1+"."+187+"."+255+"."+254+"</span>";
		}
		else if((po2>=188)&&(po2<=189))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+188+"."+0+"."+1+"-"+po1+"."+189+"."+255+"."+254+"</span>";
		}
		else if((po2>=190)&&(po2<=191))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+190+"."+0+"."+1+"-"+po1+"."+191+"."+255+"."+254+"</span>";
		}
		else if((po2>=192)&&(po2<=193))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+192+"."+0+"."+1+"-"+po1+"."+193+"."+255+"."+254+"</span>";
		}
		else if((po2>=194)&&(po2<=195))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+194+"."+0+"."+1+"-"+po1+"."+195+"."+255+"."+254+"</span>";
		}
		else if((po2>=196)&&(po2<=197))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+196+"."+0+"."+1+"-"+po1+"."+197+"."+255+"."+254+"</span>";
		}
		else if((po2>=198)&&(po2<=199))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+198+"."+0+"."+1+"-"+po1+"."+199+"."+255+"."+254+"</span>";
		}
		else if((po2>=200)&&(po2<=201))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+200+"."+0+"."+1+"-"+po1+"."+201+"."+255+"."+254+"</span>";
		}
		else if((po2>=202)&&(po2<=203))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+202+"."+0+"."+1+"-"+po1+"."+203+"."+255+"."+254+"</span>";
		}
		else if((po2>=204)&&(po2<=205))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+204+"."+0+"."+1+"-"+po1+"."+205+"."+255+"."+254+"</span>";
		}
		else if((po2>=206)&&(po2<=207))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+206+"."+0+"."+1+"-"+po1+"."+207+"."+255+"."+254+"</span>";
		}
		else if((po2>=208)&&(po2<=209))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+208+"."+0+"."+1+"-"+po1+"."+209+"."+255+"."+254+"</span>";
		}
		else if((po2>=210)&&(po2<=211))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+210+"."+0+"."+1+"-"+po1+"."+211+"."+255+"."+254+"</span>";
		}
		else if((po2>=212)&&(po2<=213))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+212+"."+0+"."+1+"-"+po1+"."+213+"."+255+"."+254+"</span>";
		}
		else if((po2>=214)&&(po2<=215))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+214+"."+0+"."+1+"-"+po1+"."+215+"."+255+"."+254+"</span>";
		}
		else if((po2>=216)&&(po2<=217))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+216+"."+0+"."+1+"-"+po1+"."+217+"."+255+"."+254+"</span>";
		}
		else if((po2>=218)&&(po2<=219))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+218+"."+0+"."+1+"-"+po1+"."+219+"."+255+"."+254+"</span>";
		}
		else if((po2>=220)&&(po2<=221))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+220+"."+0+"."+1+"-"+po1+"."+221+"."+255+"."+254+"</span>";
		}
		else if((po2>=222)&&(po2<=223))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+222+"."+0+"."+1+"-"+po1+"."+223+"."+255+"."+254+"</span>";
		}
		else if((po2>=224)&&(po2<=225))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+224+"."+0+"."+1+"-"+po1+"."+225+"."+255+"."+254+"</span>";
		}
		else if((po2>=226)&&(po2<=227))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+226+"."+0+"."+1+"-"+po1+"."+227+"."+255+"."+254+"</span>";
		}
		else if((po2>=228)&&(po2<=229))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+228+"."+0+"."+1+"-"+po1+"."+229+"."+255+"."+254+"</span>";
		}
		else if((po2>=230)&&(po2<=231))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+230+"."+0+"."+1+"-"+po1+"."+231+"."+255+"."+254+"</span>";
		}
		else if((po2>=232)&&(po2<=233))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+232+"."+0+"."+1+"-"+po1+"."+233+"."+255+"."+254+"</span>";
		}
		else if((po2>=234)&&(po2<=235))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+234+"."+0+"."+1+"-"+po1+"."+235+"."+255+"."+254+"</span>";
		}
		else if((po2>=236)&&(po2<=237))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+236+"."+0+"."+1+"-"+po1+"."+237+"."+255+"."+254+"</span>";
		}
		else if((po2>=238)&&(po2<=239))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+238+"."+0+"."+1+"-"+po1+"."+239+"."+255+"."+254+"</span>";
		}
		else if((po2>=240)&&(po2<=241))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+240+"."+0+"."+1+"-"+po1+"."+241+"."+255+"."+254+"</span>";
		}
		else if((po2>=242)&&(po2<=243))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+242+"."+0+"."+1+"-"+po1+"."+243+"."+255+"."+254+"</span>";
		}
		else if((po2>=244)&&(po2<=245))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+244+"."+0+"."+1+"-"+po1+"."+245+"."+255+"."+254+"</span>";
		}
		else if((po2>=246)&&(po2<=247))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+246+"."+0+"."+1+"-"+po1+"."+p247+"."+255+"."+254+"</span>";
		}
		else if((po2>=248)&&(po2<=249))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+248+"."+0+"."+1+"-"+po1+"."+249+"."+255+"."+254+"</span>";
		}
		else if((po2>=250)&&(po2<=251))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+250+"."+0+"."+1+"-"+po1+"."+251+"."+255+"."+254+"</span>";
		}
		else if((po2>=252)&&(po2<=253))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+252+"."+0+"."+1+"-"+po1+"."+253+"."+255+"."+254+"</span>";
		}
		else if((po2>=254)&&(po2<=255))
		{
			document.getElementById("idRangeIP").innerHTML="<span>"+po1+"."+254+"."+0+"."+1+"-"+po1+"."+255+"."+255+"."+254+"</span>";
		}
	}
  }
  else 
  {
	document.getElementById("idValIP").innerHTML="&nbsp;";
	document.getElementById("idRangeIP").innerHTML="&nbsp;";
  }
}

//================================>>>>>
  function lain()	
	{
	Subnet();neto();broad();IPValid();ranger();
	}
//================================>>>>>



		          //Function for check viewer browser (Run correctly for Microsoft Internet Explorer)
 		        function checkBrowser()
		      {	         
	        var browserName = navigator.appName;	

	    if(browserName != "Microsoft Internet Explorer")	
	  {
    alert("Aplikasi browser " + browserName + " tidak mendukung penuh aplikasi ini.\n\nSilahkan menggunakan Microsoft Internet Explorer.");	
  }
}
//Function for define class and type
function classNameType()
{
if(document.getElementById("txtIP0").value > 0 && document.getElementById("txtIP0").value <= 126)
  {
    if(document.getElementById("txtIP0").value == 10){document.getElementById("idClass").innerHTML = "<span>A Private</span>";}else{document.getElementById("idClass").innerHTML = "<span>A Public</span>";}}
      else if(document.getElementById("txtIP0").value > 127 && document.getElementById("txtIP0").value <= 191)
	    {
	      if((document.getElementById("txtIP0").value == 172)&&(document.getElementById("txtIP1").value >= 16)&&(document.getElementById("txtIP1").value <= 31)){document.getElementById("idClass").innerHTML = "<span>B Private</span>";}else{document.getElementById("idClass").innerHTML = "<span>B Public</span>";}}
	        else if(document.getElementById("txtIP0").value >= 192 && document.getElementById("txtIP0").value <= 223)
	          {
	       	    if((document.getElementById("txtIP0").value == 192)&&(document.getElementById("txtIP1").value == 168)){document.getElementById("idClass").innerHTML = "<span>C Private</span>";}else{document.getElementById("idClass").innerHTML = "<span>C Public</span>";}}
		          else if(document.getElementById("txtIP0").value >= 224 && document.getElementById("txtIP0").value <= 239)
		            {
					  document.getElementById("idClass").innerHTML = "<span>D</span>";}
					    else if(document.getElementById("txtIP0").value >= 240 && document.getElementById("txtIP0").value <= 255)
					      {
						    document.getElementById("idClass").innerHTML = "<span>E</span>";}
							  }
