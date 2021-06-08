function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}
var flag = false;
function test(states){
       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       document.getElementById("content").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado: ").concat(states[1]).concat("--").concat(states[2]);	
       if(states[1]=="CLEAN" && states[2]=="CLEAN"){
        if(!flag){
             flag=true;
             if (location="A"){
                 states[1] = "DIRTY";
                 states[2] = "DIRTY";
             }else{
                 states[1] = "DIRTY";
                 states[2] = "DIRTY";
             }

        }else{
             document.getElementById("content").innerHTML+="<br>---- Todos los estados recorridos -------- ";
            return;
        }
    }else if(action_result == "CLEAN"){
         if (location == "A") states[1] = "CLEAN";
          else if (location == "B") states[2] = "CLEAN";
       }
       else if (action_result == "RIGHT") states[0] = "B";
       else if (action_result == "LEFT") states[0] = "A";	
       
 setTimeout(function(){ test(states); }, 2000);
}

var states = ["B","DIRTY","DIRTY"];
test(states);