//your code here
function onLoad(){
    var ar=["img1","img2","img3","img4","img5"];
    var ind=Math.floor(Math.random()*5);
    for(var i=0;i<5;i++){
        document.getElementById(ar[i]).className=ar[ind%ar.length];
        ind=ind+1;
    }
	var img6=ar[Math.floor(Math.random()*ar.length)];
	document.getElementById("img6").className=img6;
}
let dom=document.querySelectorAll('.images > div');
let selected=[];
let hs=new Set();
dom.forEach(img=>{
    img.addEventListener('click',function(){
        hs.add(img);
        selected.push(img);
        img.classList.add("selected");

    if (hs.size >= 1) {
      document.getElementById("demo2").innerHTML = `<br><button id="reset">Reset</button>`;
    }
    // console.log(hs.size,selected.length);
    if (hs.size === 2) {
      document.getElementById("three").innerHTML = `<br><button id="verify">Verify</button>`;
    }
    if (hs.size > 2) {
      document.getElementById("three").innerHTML ="";
    }
    })
})
document.addEventListener('click',function(e){
    if (e.target.id === 'verify'){
        if(selected[0].className === selected[1].className){
            document.getElementById("para").textContent="You are a human. Congratulations!";
        }
        else{
            document.getElementById("para").textContent="We can't verify you as a human. You selected the non-identical tiles.";
        }
    }
    if(e.target.id === 'reset'){
        selected.forEach(tile => tile.style.outline = "none");
        selected = [];
        hs.clear();
        document.getElementById("three").innerHTML = "";
    }
})
