var navRoot = document.getElementById("menu").getElementsByTagName("a");

for(var i=0,l=navRoot.length;i<l;i++){
    navRoot[i].onmouseover=function(){this.lastChild.style.display="block"}
    navRoot[i].onmouseout=function(){this.lastChild.style.display="none"}
}
