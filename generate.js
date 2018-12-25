function clearFields(){for(i=0;i<document.getElementsByTagName("INPUT").length;i++)document.getElementsByTagName("INPUT")[i].value=""}function stripCommas(e){return e.split(/[ ,]+/)}function getFromIndex(e,t){var b=["al_obj","num_obj","lit_obj","pbl_obj","al_sS","num_sS","lit_sS","pbl_sS","al_tS","num_tS","lit_tS","pbl_tS"];return e==b[0]?al_obj[t]:e==b[1]?num_obj[t]:e==b[2]?lit_obj[t]:e==b[3]?pbl_obj[t]:e==b[4]?al_sS[t]:e==b[5]?num_sS[t]:e==b[6]?lit_sS[t]:e==b[7]?pbl_sS[t]:e==b[8]?al_tS[t]:e==b[9]?num_tS[t]:e==b[10]?lit_tS[t]:e==b[11]?pbl_tS[t]:void 0}function getIEP(e,t){var b="";for(e=stripCommas(e),i=0;i<e.length;i++)b=b+getFromIndex(t,e[i])+"<br />";return b}function generate(){var e="<div class='title'>Results</div><br />";document.getElementById("form").style.height="auto";var t=document.getElementById("obj-al").value,b=document.getElementById("obj-num").value,n=document.getElementById("obj-lit").value,r=document.getElementById("obj-pbl").value,l=document.getElementById("sS-al").value,a=document.getElementById("sS-num").value,u=document.getElementById("sS-lit").value,m=document.getElementById("sS-pbl").value,o=document.getElementById("tS-al").value,i=document.getElementById("tS-num").value,g=document.getElementById("tS-lit").value,s=document.getElementById("tS-pbl").value;e=(e+="<b>Autonomous Learning Objectives: </b><br />")+getIEP(t,"al_obj")+"<br />",e=(e+="<b>Numeracy Objectives: </b><br />")+getIEP(b,"num_obj")+"<br />",e=(e+="<b>Literacy Objectives: </b><br />")+getIEP(n,"lit_obj")+"<br />",e=(e+="<b>Project-Based Learning Objectives: </b><br />")+getIEP(r,"pbl_obj")+"<br /><hr><br />",e=(e+="<b>Autonomous Learning Student Strategies: </b><br />")+getIEP(l,"al_sS")+"<br />",e=(e+="<b>Numeracy Student Strategies: </b><br />")+getIEP(a,"num_sS")+"<br />",e=(e+="<b>Literacy Student Strategies: </b><br />")+getIEP(u,"lit_sS")+"<br />",e=(e+="<b>Project-Based Learning Student Strategies: </b><br />")+getIEP(m,"pbl_sS")+"<br /><hr><br />",e=(e+="<b>Autonomous Learning Teacher Strategies: </b><br />")+getIEP(o,"al_tS")+"<br />",e=(e+="<b>Numeracy Teacher Strategies: </b><br />")+getIEP(i,"num_tS")+"<br />",e=(e+="<b>Literacy Teacher Strategies: </b><br />")+getIEP(g,"lit_tS")+"<br />",e=(e+="<b>Project-Based Learning Teacher Strategies: </b><br />")+getIEP(s,"pbl_tS")+"<br />",document.getElementById("form").innerHTML=e}

/* uncompressed

function clearFields() {
  for(i = 0; i < document.getElementsByTagName("INPUT").length; i++) {
    document.getElementsByTagName("INPUT")[i].value = "";
  }
}

function stripCommas(i) {
  return(i.split(/[ ,]+/));
}

//Declare objectives
function getFromIndex(a, i) {
    var options = [
        "al_obj",
        "num_obj",
        "lit_obj",
        "pbl_obj",
        "al_sS",
        "num_sS",
        "lit_sS",
        "pbl_sS",
        "al_tS",
        "num_tS",
        "lit_tS",
        "pbl_tS"
        ];
        
    if(a == options[0]) {
        return al_obj[i]
    } else if(a == options[1]) {
        return num_obj[i];
    } else if(a == options[2]) {
        return lit_obj[i];
    } else if(a == options[3]) {
        return pbl_obj[i];
    } else if(a == options[4]) {
        return al_sS[i];
    } else if(a == options[5]) {
        return num_sS[i];
    } else if(a == options[6]) {
        return lit_sS[i];
    } else if(a == options[7]) {
        return pbl_sS[i];
    } else if(a == options[8]) {
        return al_tS[i];
    } else if(a == options[9]) {
        return num_tS[i];
    } else if(a == options[10]) {
        return lit_tS[i];
    } else if(a == options[11]) {
        return pbl_tS[i];
    }
}

function getIEP(indexes, subject) {
  var output = "";
  indexes = stripCommas(indexes);
  for(i = 0; i < indexes.length; i++) {
    output = output + getFromIndex(subject, indexes[i]) + "<br />";
  }
  return output;
}

function generate() {
	var fullIEP = "<div class='title'>Results</div><br />";

	document.getElementById("form").style.height = "auto";

	var al_obj_s = document.getElementById("obj-al").value;
	var num_obj_s = document.getElementById("obj-num").value;
	var lit_obj_s = document.getElementById("obj-lit").value;
	var pbl_obj_s = document.getElementById("obj-pbl").value;
	
	var al_sS_s = document.getElementById("sS-al").value;
	var num_sS_s = document.getElementById("sS-num").value;
	var lit_sS_s = document.getElementById("sS-lit").value;
	var pbl_sS_s = document.getElementById("sS-pbl").value;
	
	var al_tS_s = document.getElementById("tS-al").value;
	var num_tS_s = document.getElementById("tS-num").value;
	var lit_tS_s = document.getElementById("tS-lit").value;
	var pbl_tS_s = document.getElementById("tS-pbl").value;
	
	fullIEP += "<b>Autonomous Learning Objectives: </b><br />";
	fullIEP = fullIEP + getIEP(al_obj_s, "al_obj") + "<br />";
	fullIEP += "<b>Numeracy Objectives: </b><br />";
	fullIEP = fullIEP + getIEP(num_obj_s, "num_obj") + "<br />";
	fullIEP += "<b>Literacy Objectives: </b><br />";
	fullIEP = fullIEP + getIEP(lit_obj_s, "lit_obj") + "<br />";
	fullIEP += "<b>Project-Based Learning Objectives: </b><br />";
	fullIEP = fullIEP + getIEP(pbl_obj_s, "pbl_obj") + "<br /><hr><br />";
	
	fullIEP += "<b>Autonomous Learning Student Strategies: </b><br />";
	fullIEP = fullIEP + getIEP(al_sS_s, "al_sS") + "<br />";
	fullIEP += "<b>Numeracy Student Strategies: </b><br />";
	fullIEP = fullIEP + getIEP(num_sS_s, "num_sS") + "<br />";
	fullIEP += "<b>Literacy Student Strategies: </b><br />";
	fullIEP = fullIEP + getIEP(lit_sS_s, "lit_sS") + "<br />";
	fullIEP += "<b>Project-Based Learning Student Strategies: </b><br />";
	fullIEP = fullIEP + getIEP(pbl_sS_s, "pbl_sS") + "<br /><hr><br />";
	
	fullIEP += "<b>Autonomous Learning Teacher Strategies: </b><br />";
	fullIEP = fullIEP + getIEP(al_tS_s, "al_tS") + "<br />";
	fullIEP += "<b>Numeracy Teacher Strategies: </b><br />";
	fullIEP = fullIEP + getIEP(num_tS_s, "num_tS") + "<br />";
	fullIEP += "<b>Literacy Teacher Strategies: </b><br />";
	fullIEP = fullIEP + getIEP(lit_tS_s, "lit_tS") + "<br />";
	fullIEP += "<b>Project-Based Learning Teacher Strategies: </b><br />";
	fullIEP = fullIEP + getIEP(pbl_tS_s, "pbl_tS") + "<br />";
	
	document.getElementById("form").innerHTML = fullIEP;
}
*/
