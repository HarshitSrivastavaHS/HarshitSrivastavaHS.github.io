var dot = true
var op = true
var outps = false
var para = 0
var err = false
var clicked= function clicked(value) {
    var imp = document.querySelector("#display")
    var val = imp.value
    if (err==true) {
        err = false
        imp.value = ""
    }
    
    if (outps) {
        var regExp = /[a-zA-Z]/g;
        if (regExp.test(val)) {
            imp.value = ""
            }
    }
    
    if (value == "("||value==")") {
        if (value=="(") {
            
            if (val[val.length-1]=="+" || val[val.length-1]=="-" || val[val.length-1]=="*" || val[val.length-1]=="/" || val[val.length-1]=="(" || val.length == 0) {
            
            imp.value = val + "" + value
            para++
            }
        }
        if (value==")") {
            var val = imp.value
            if (val[val.length-1]!="+" && val[val.length-1]!="-" && val[val.length-1]!="*" && val[val.length-1]!="/" && val[val.length-1]!="(" && para!=0) {
            
            imp.value = val + "" + value
            para--
            }
        }
        
        
        
    }


    else if (value == ".") {
    
    
        if (dot) {
            
            if (outps) {
                document.querySelector("#display").value = ""
            }
            
            if (!(document.querySelector("#display").value[document.querySelector("#display").value.length-1]>=0 && document.querySelector("#display").value[document.querySelector("#display").value.length-1]<=9)) {
                document.querySelector("#display").value = document.querySelector("#display").value +"0"
            }
        
            var dis = document.querySelector("#display").value
       document.querySelector("#display").value = dis + "" + value
            dot = false
            op = false
            
            
        }
        
        
    }
    
    
     else if(value == "+" || value == "-" || value == "/" || value == "*") {
    
    
        if (op) {
        
        
            if (document.querySelector("#display").value.length == 0){
                
            }
            else {
                var dis = document.querySelector("#display").value
           document.querySelector("#display").value = dis + "" + value
                dot = true
                op = false
            }
        }
        
        else {
        if (val[val.length-1]=="("||val[val.length-1]=="." || val[val.length-1]==")") {
            
        }
        else {
        var dis = document.querySelector("#display").value
       document.querySelector("#display").value = dis.substr(0, dis.length-1) + "" + value
       op = false
       }
       
    }
    
        }
        
        else {
        
            if (outps) {
            
                document.querySelector("#display").value = ""
            }
            
            var dis = document.querySelector("#display").value
          document.querySelector("#display").value = dis + "" + value
            op = true
        
    }
    
    outps = false
    
}

var equal = function equal() {
    var dis = document.querySelector("#display").value
    if (dis[dis.length-1]=="+" || dis[dis.length-1]=="-" || dis[dis.length-1]=="/" || dis[dis.length-1]=="*") {
        dis = dis.substr(0, dis.length-1)
    }
    if (para!=0) {
        for (var i = 1; i<=para; i++) {
            dis = dis + ")"
        }
        para = 0
    }
    try {
    var outp = eval(dis)
    }
    catch (e) {
        outp = "Invalid Syntax"
        err = true
    }
    if (outp == undefined && outp != "Invalid Syntax") {
        outp = 0
        }
    document.querySelector("#display").value = outp
    outps = true
    op = true
    dot = true
}

var clearx = function clearx() {
    document.querySelector("#display").value = ""
    para = 0
}

var bks = function bks() {
    var dis = document.querySelector("#display").value
    if (dis[dis.length-1]=="(") 
        para--
    document.querySelector("#display").value = dis.substr(0, dis.length-1)
}

var vib = function vib() {
    navigator.vibrate(50)
}