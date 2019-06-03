function change (ID,S) {
	x=document.getElementById(ID);
	x.src=S;
}

function disable(ID){
	x=document.getElementById(ID);
	x.disabled = true ;
}

function backToOrigin() {
	for(i=0;i<36;i++){
		id= "im"+i;
		change(id,"icons/unknown.png");
	}
}