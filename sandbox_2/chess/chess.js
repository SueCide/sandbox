


document.onreadystatechange = onready;


function onready() {
if(document.readyState==="interactive"){
const board = document.getElementById("board");
const trans = document.getElementById("trans");
//setup
var y=0;


for (y ; y < 8; y++) {
  for (let x=0 ; x < 8; x++) {
    const btn = document.createElement("button");


  
    btn.dataset.x = x;
    btn.dataset.y = y;

   


    if (y=== 1||y===6) {
    	
		btn.className = 'p'; 

	} else if ((y=== 0||y===7) && (x===0||x===7)) {

   		btn.className = 'r';
	
	}else if ((y=== 0||y===7) && (x===1||x===6)) {

  	  	btn.className = 'k';}

    else if ((y=== 0||y===7) && (x===2||x===5)) {
    btn.className = 'b';}
    else if ((y=== 0||y===7)&&x===3 ) {
    btn.className = 'q';}
    else if ((y=== 0||y===7)&&x===4 ) {
    btn.className = 'king';}
    else 
    {btn.className = 'n'}
    


    if (y===0||y===1) {
      btn.classList.add('black')
    } else if (y===6||y===7) {
      btn.classList.add('white')
    } else {
      btn.classList.add('nn')
    }





    //actual shit
    btn.addEventListener("click", HANDLERS.field_click );

	

    btn.addEventListener("click",clik);

    board.appendChild(btn);
  }
}

function imag() {
  const squares = board.querySelectorAll("button");

  squares.forEach(btn => {
    const x =Number(btn.dataset.x);
    const y = Number(btn.dataset.y);
    
   
    
    const classes = [...btn.classList];

    const piece = classes.find(c =>
      ["p","r","k","b","q","king","n"].includes(c)
    );
      const color = classes.find(c =>
      ["black","white","nn"].includes(c)
    );
     
        if ((x+y)%2 === 0) {
      btn.style.backgroundColor="rgb(104, 67, 12)"
    }else{ btn.style.backgroundColor="rgba(211, 173, 102, 1)"}

    btn.style.backgroundPosition = "center";
    btn.style.backgroundImage =`url("icons/${color}_${piece}.png")`;

  });
}
imag()

let state = "0"
console.log("state:none")
let wmk=false;
let wmrd=false;
let wmrp=false;
let bmk=false;
let bmrd=false;
let bmrp=false;
let q;
let lx  ;
let ly ;
let lpiece ;
let lcolor ;
let i;
let j;
let enpass=false;
let enpassx;
let enpassy;
function clik (e)
{
  const allButtons = board.querySelectorAll("button");
 
  allButtons.forEach(btn => 
  {
    const x = btn.dataset.x;
    const y = btn.dataset.y;
    const classes = [...btn.classList];


  });



  const cbtn = e.currentTarget;
  const cx = Number(cbtn.dataset.x);
  const cy = Number(cbtn.dataset.y);
  const classes = [...cbtn.classList];
  const cpiece = classes.find(c =>["p","r","k","b","q","king","n"].includes(c)
    );
    const ccolor = classes.find(c =>["black","white","nn"].includes(c)
    );
  let a;
  let b; 
  let c;
  let d;
  let f;
  let im=false;

  
    //stav 0
  if (state === "0") {
     if (cpiece === "n") 
     {
      console.log("prazdny")
     } 
     else
    {
      if (cpiece === "p")
      {
        if (ccolor==="white") //white pawn
        {
          if(cx!==0){a = getButtonAt(cx-1,cy-1);
            if (a.classList[0]!=="n"&&a.classList[1]==="black"){i=cx-1;j=cy-1;selector(i,j)}}
          b = getButtonAt(cx,cy-1);
           if (b.classList[0]==="n"){i=cx;j=cy-1;selector(i,j)}
          if(cx!==7){c = getButtonAt(cx+1,cy-1);
           if (c.classList[0]!=="n"&&c.classList[1]==="black"){i=cx+1;j=cy-1;selector(i,j)}}
          if (cy===6&&b.classList[0]==="n") {
            d = getButtonAt(cx,cy-2);
            if (d.classList[0]==="n"){i=cx;j=cy-2;selector(i,j)}
          }
          if (enpass===true&&enpassy===cy&&enpassx===cx+1&&cy===3){
            i=cx+1;j=cy-1;selector(i,j)
          }
          if (enpass===true&&enpassy===cy&&enpassx===cx-1&&cy===3){
            i=cx-1;j=cy-1;selector(i,j)
          }
          state = "1"
          console.log("state: ",state)
        } 
        else //black pawn
        {
          if(cx!==0){a = getButtonAt(cx-1,cy+1);
          if (a.classList[0]!=="n"&&a.classList[1]==="white"){i=cx-1;j=cy+1;selector(i,j)}}
           b = getButtonAt(cx,cy+1);
           if (b.classList[0]==="n"){i=cx;j=cy+1;selector(i,j)}
          if(cx!==7){c = getButtonAt(cx+1,cy+1);
           if (c.classList[0]!=="n"&&c.classList[1]==="white"){i=cx+1;j=cy+1;selector(i,j)}}
          if (cy===1&&b.classList[0]==="n") {
            d = getButtonAt(cx,cy+2);
            if (d.classList[0]==="n"){i=cx;j=cy+2;selector(i,j)}
          }
          if (enpass===true&&enpassy===cy&&enpassx===cx+1&&cy===4){
            i=cx+1;j=cy+1;selector(i,j)
          }
          if (enpass===true&&enpassy===cy&&enpassx===cx-1&&cy===4){
            i=cx-1;j=cy+1;selector(i,j)
          }
          state = "1"
          console.log("state: ",state)
        }
      }
      else if (cpiece === "r")
      {
        let endloop = false;
        a=1;
        while (endloop!==true&&cx-a!==-1)//2
          {b=getButtonAt(cx-a,cy)//1
          if (b.classList[1]==="nn") {
            i=cx-a;j=cy;selector(i,j);a++//1-2
          } else if (b.classList[1]!==ccolor) {
            endloop=true;i=cx-a;j=cy;selector(i,j)//1-2
          } else {endloop=true}}//stejna color
          endloop = false;a=1;

        while (endloop!==true&&cx+a!==8)//2
          {b=getButtonAt(cx+a,cy)//1
          if (b.classList[1]==="nn") {
            i=cx+a;j=cy;selector(i,j);a++//1-2
          } else if (b.classList[1]!==ccolor) {
            endloop=true;i=cx+a;j=cy;selector(i,j)//1-2
          } else {endloop=true}}//stejna color
          endloop = false;a=1;

        while (endloop!==true&&cy-a!==-1)//2
          {b=getButtonAt(cx,cy-a)//1
          if (b.classList[1]==="nn") {
            i=cx;j=cy-a;selector(i,j);a++//1-2
          } else if (b.classList[1]!==ccolor) {
            endloop=true;i=cx;j=cy-a;selector(i,j)//1-2
          } else {endloop=true}}//stejna color
          endloop = false;a=1;

        while (endloop!==true&&cy+a!==8)//2
          {b=getButtonAt(cx,cy+a)//1
          if (b.classList[1]==="nn") {
            i=cx;j=cy+a;selector(i,j);a++//1-2
          } else if (b.classList[1]!==ccolor) {
            endloop=true;i=cx;j=cy+a;selector(i,j)//1-2
          } else {endloop=true}}//stejna color
          endloop = false;a=1;
          if(ccolor==="black"){
            a=getButtonAt(1,0);b=getButtonAt(2,0);c=getButtonAt(3,0);
            if (bmk===false&&bmrp===false&&a.classList[0]==="n"&&b.classList[0]==="n"&&c.classList[0]==="n")
              {i=0;j=0;selector(i,j);i=4;j=0;selector(i,j)}
            a=getButtonAt(5,0);b=getButtonAt(6,0);
            if (bmk===false&&bmrd===false&&a.classList[0]==="n"&&b.classList[0]==="n")
              {i=4;j=0;selector(i,j);i=7;j=0;selector(i,j)}}
          if(ccolor==="white"){
            a=getButtonAt(1,7);b=getButtonAt(2,7);c=getButtonAt(3,7);
            if (wmk===false&&wmrp===false&&a.classList[0]==="n"&&b.classList[0]==="n"&&c.classList[0]==="n")
              {i=0;j=7;selector(i,j);i=4;j=7;selector(i,j)}
            a=getButtonAt(5,7);b=getButtonAt(6,7);
            if (wmk===false&&wmrd===false&&a.classList[0]==="n"&&b.classList[0]==="n")
              {i=4;j=7;selector(i,j);i=7;j=7;selector(i,j)}}
        state="1"
      }
      else if (cpiece === "k")
      {
        if(cy>1&&cx!==0){b=getButtonAt(cx-1,cy-2);if(b.classList[1]!==ccolor){i=cx-1;j=cy-2;selector(i,j)}}
        if(cy>1&&cx!==7){b=getButtonAt(cx+1,cy-2);if(b.classList[1]!==ccolor){i=cx+1;j=cy-2;selector(i,j)}}
        if(cy<6&&cx!==0){b=getButtonAt(cx-1,cy+2);if(b.classList[1]!==ccolor){i=cx-1;j=cy+2;selector(i,j)}}
        if(cy<6&&cx!==7){b=getButtonAt(cx+1,cy+2);if(b.classList[1]!==ccolor){i=cx+1;j=cy+2;selector(i,j)}}
        if(cy!==0&&cx>1){b=getButtonAt(cx-2,cy-1);if(b.classList[1]!==ccolor){j=cy-1;i=cx-2;selector(i,j)}}
        if(cy!==7&&cx>1){b=getButtonAt(cx-2,cy+1);if(b.classList[1]!==ccolor){j=cy+1;i=cx-2;selector(i,j)}}
        if(cy!==0&&cx<6){b=getButtonAt(cx+2,cy-1);if(b.classList[1]!==ccolor){j=cy-1;i=cx+2;selector(i,j)}}
        if(cy!==7&&cx<6){b=getButtonAt(cx+2,cy+1);if(b.classList[1]!==ccolor){j=cy+1;i=cx+2;selector(i,j)}}
        state="1"
      }
      else if (cpiece === "b")
      {
        let endloop = false;
        a=1;
      while (endloop!==true&&cx+a!==8&&cy-a!==-1) {
       b=getButtonAt(cx+a,cy-a)
       if (b.classList[1]==="nn") 
        {i=cx+a;j=cy-a;selector(i,j);a++} 
        else if(b.classList[1]!==ccolor)
          {endloop=true;i=cx+a;j=cy-a;selector(i,j)}
        else
          {endloop=true}
      } a=1;endloop=false;
      while (endloop!==true&&cx-a!==-1&&cy-a!==-1) {
       b=getButtonAt(cx-a,cy-a)
       if (b.classList[1]==="nn") 
        {i=cx-a;j=cy-a;selector(i,j);a++} 
        else if(b.classList[1]!==ccolor)
          {endloop=true;i=cx-a;j=cy-a;selector(i,j)}
        else
          {endloop=true}
      }a=1;endloop=false;
      while (endloop!==true&&cx-a!==-1&&cy+a!==8) {
       b=getButtonAt(cx-a,cy+a)
       if (b.classList[1]==="nn") 
        {i=cx-a;j=cy+a;selector(i,j);a++} 
        else if(b.classList[1]!==ccolor)
          {endloop=true;i=cx-a;j=cy+a;selector(i,j)}
        else
          {endloop=true}
      }a=1;endloop=false;
      while (endloop!==true&&cx+a!==8&&cy+a!==8) {
       b=getButtonAt(cx+a,cy+a)
       if (b.classList[1]==="nn") 
        {i=cx+a;j=cy+a;selector(i,j);a++} 
        else if(b.classList[1]!==ccolor)
          {endloop=true;i=cx+a;j=cy+a;selector(i,j)}
        else
          {endloop=true}
      }a=1;endloop=false;
      state="1"
      }
      else if (cpiece === "q")
      {
        let endloop = false;
        a=1;
      while (endloop!==true&&cx+a!==8&&cy-a!==-1) {
       b=getButtonAt(cx+a,cy-a)
       if (b.classList[1]==="nn") 
        {i=cx+a;j=cy-a;selector(i,j);a++} 
        else if(b.classList[1]!==ccolor)
          {endloop=true;i=cx+a;j=cy-a;selector(i,j)}
        else
          {endloop=true}
      } a=1;endloop=false;
      while (endloop!==true&&cx-a!==-1&&cy-a!==-1) {
       b=getButtonAt(cx-a,cy-a)
       if (b.classList[1]==="nn") 
        {i=cx-a;j=cy-a;selector(i,j);a++} 
        else if(b.classList[1]!==ccolor)
          {endloop=true;i=cx-a;j=cy-a;selector(i,j)}
        else
          {endloop=true}
      }a=1;endloop=false;
      while (endloop!==true&&cx-a!==-1&&cy+a!==8) {
       b=getButtonAt(cx-a,cy+a)
       if (b.classList[1]==="nn") 
        {i=cx-a;j=cy+a;selector(i,j);a++} 
        else if(b.classList[1]!==ccolor)
          {endloop=true;i=cx-a;j=cy+a;selector(i,j)}
        else
          {endloop=true}
      }a=1;endloop=false;
      while (endloop!==true&&cx+a!==8&&cy+a!==8) {
       b=getButtonAt(cx+a,cy+a)
       if (b.classList[1]==="nn") 
        {i=cx+a;j=cy+a;selector(i,j);a++} 
        else if(b.classList[1]!==ccolor)
          {endloop=true;i=cx+a;j=cy+a;selector(i,j)}
        else
          {endloop=true}
      }a=1;endloop=false;
      while (endloop!==true&&cx-a!==-1)//2
          {b=getButtonAt(cx-a,cy)//1
          if (b.classList[1]==="nn") {
            i=cx-a;j=cy;selector(i,j);a++//1-2
          } else if (b.classList[1]!==ccolor) {
            endloop=true;i=cx-a;j=cy;selector(i,j)//1-2
          } else {endloop=true}}//stejna color
          endloop = false;a=1;

        while (endloop!==true&&cx+a!==8)//2
          {b=getButtonAt(cx+a,cy)//1
          if (b.classList[1]==="nn") {
            i=cx+a;j=cy;selector(i,j);a++//1-2
          } else if (b.classList[1]!==ccolor) {
            endloop=true;i=cx+a;j=cy;selector(i,j)//1-2
          } else {endloop=true}}//stejna color
          endloop = false;a=1;

        while (endloop!==true&&cy-a!==-1)//2
          {b=getButtonAt(cx,cy-a)//1
          if (b.classList[1]==="nn") {
            i=cx;j=cy-a;selector(i,j);a++//1-2
          } else if (b.classList[1]!==ccolor) {
            endloop=true;i=cx;j=cy-a;selector(i,j)//1-2
          } else {endloop=true}}//stejna color
          endloop = false;a=1;

        while (endloop!==true&&cy+a!==8)//2
          {b=getButtonAt(cx,cy+a)//1
          if (b.classList[1]==="nn") {
            i=cx;j=cy+a;selector(i,j);a++//1-2
          } else if (b.classList[1]!==ccolor) {
            endloop=true;i=cx;j=cy+a;selector(i,j)//1-2
          } else {endloop=true}}//stejna color
          endloop = false;a=1;
      state="1"
      }
      else // king
      {
        if(cy!==0){b=getButtonAt(cx,cy-1);if(b.classList[1]!==ccolor){i=cx;j=cy-1;selector(i,j)}}//8
        if(cy!==7){b=getButtonAt(cx,cy+1);if(b.classList[1]!==ccolor){i=cx;j=cy+1;selector(i,j)}}//2
        if(cx!==0){b=getButtonAt(cx-1,cy);if(b.classList[1]!==ccolor){i=cx-1;j=cy;selector(i,j)}}//4
        if(cx!==7){b=getButtonAt(cx+1,cy);if(b.classList[1]!==ccolor){i=cx+1;j=cy;selector(i,j)}}//6
        if(cx!==0&&cy!==0){b=getButtonAt(cx-1,cy-1);if(b.classList[1]!==ccolor){i=cx-1;j=cy-1;selector(i,j)}}//7
        if(cx!==7&&cy!==0){b=getButtonAt(cx+1,cy-1);if(b.classList[1]!==ccolor){i=cx+1;j=cy-1;selector(i,j)}}//9
        if(cx!==0&&cy!==7){b=getButtonAt(cx-1,cy+1);if(b.classList[1]!==ccolor){i=cx-1;j=cy+1;selector(i,j)}}//1
        if(cx!==7&&cy!==7){b=getButtonAt(cx+1,cy+1);if(b.classList[1]!==ccolor){i=cx+1;j=cy+1;selector(i,j)}}//1
        if(ccolor==="black"){
            a=getButtonAt(1,0);b=getButtonAt(2,0);c=getButtonAt(3,0);
            if (bmk===false&&bmrp===false&&a.classList[0]==="n"&&b.classList[0]==="n"&&c.classList[0]==="n")
              {i=0;j=0;selector(i,j);i=4;j=0;selector(i,j)}
            a=getButtonAt(5,0);b=getButtonAt(6,0);
            if (bmk===false&&bmrd===false&&a.classList[0]==="n"&&b.classList[0]==="n")
              {i=4;j=0;selector(i,j);i=7;j=0;selector(i,j)}}
          if(ccolor==="white"){
            a=getButtonAt(1,7);b=getButtonAt(2,7);c=getButtonAt(3,7);
            if (wmk===false&&wmrp===false&&a.classList[0]==="n"&&b.classList[0]==="n"&&c.classList[0]==="n")
              {i=0;j=7;selector(i,j);i=4;j=7;selector(i,j)}
            a=getButtonAt(5,7);b=getButtonAt(6,7);
            if (wmk===false&&wmrd===false&&a.classList[0]==="n"&&b.classList[0]==="n")
              {i=4;j=7;selector(i,j);i=7;j=7;selector(i,j)}}
        state="1"

      }
      lx = cx;
      ly = cy;
      lpiece = cpiece;
      lcolor = ccolor;
      i=cx;j=cy;selector(i,j)
    }
    //stav 1
  } else {

     if (lpiece === "n") 
     {
      console.log("wtf how did u get here")
     } 
     else if (lpiece === "p")
     {
        if (cx===lx&&cy===ly){state="0";imag();console.log("state: ",state);im=true}
        else{
          if (lcolor==="white") //white pawn
          {
            if ((lx===cx&&ly===(cy+1))&&(cpiece==="n"))
              {motion(cx,cy);state="0"}
            else if ((((lx===(cx+1)||lx===(cx-1))&&ly===(cy+1))&&(cpiece!=="n"))&&(ccolor==="black"))
              {motion(cx,cy);state="0"}
            else if ((((lx===cx&&ly===(cy+2))&&(cpiece==="n")))&&(ly===6))
              {
                b = getButtonAt(lx,ly-1)
                if(b.classList[0]==="n"){motion(cx,cy);state="0";enpass=true;enpassx=cx;enpassy=cy}
                else{console.log("invalid move")}
                im=true
              }
            else if (enpass===true&&enpassy===ly&&(enpassx===lx+1||enpassx===lx-1)&&ly===3&&cx===enpassx&&cy===enpassy-1)
              {
                enpass="executew"
                motion(cx,cy);
                state="0"
              }
            else if (cx===lx&&cy===ly){state="0";imag();console.log("state: ",state)}
            else
              {console.log("invalid move");im=true}
          } 
          else //black pawn
          {
            if ((lx===cx&&ly===(cy-1))&&(cpiece==="n"))
              {motion(cx,cy);state="0"}
            else if ((((lx===(cx+1)||lx===(cx-1))&&ly===(cy-1))&&(cpiece!=="n"))&&(ccolor==="white"))
              {motion(cx,cy);state="0"}
            else if ((((lx===cx&&ly===(cy-2))&&(cpiece==="n")))&&(ly===1))
              {
                b = getButtonAt(lx,ly+1)
                if(b.classList[0]==="n"){motion(cx,cy);state="0";enpass=true;enpassx=cx;enpassy=cy}
                else{console.log("invalid move");}
                im=true
              }
            else if (enpass===true&&enpassy===ly&&(enpassx===lx+1||enpassx===lx-1)&&ly===4&&cx===enpassx&&cy===enpassy+1)
              {
                enpass="executeb"
                motion(cx,cy);
                state="0"
              }
            else{console.log("invalid move");im=true}
          }
        }
     }
     else if (lpiece === "r")
     {
      if (cx===lx&&cy===ly){state="0";imag();console.log("state: ",state);im=true}
        else
        {
          for (a=0;a<8;a++){if((lx===cx+a&&ly===cy)||(lx===cx-a&&ly===cy)||(ly===cy+a&&lx===cx)||(ly===cy-a&&lx===cx)){b=true}}
          if(cy===0&&cx===4&&lx===0&&ly===0&&bmk===false&&bmrp===false&&lcolor==="black"){a=getButtonAt(1,0);b=getButtonAt(2,0);c=getButtonAt(3,0);if(a.classList[0]==="n"&&b.classList[0]==="n"&&c.classList[0]==="n")
            {a=1;castle(a)}else{console.log("invalid move");im=true}}
            else if(cy===0&&cx===4&&lx===7&&ly===0&&bmk===false&&bmrp===false&&lcolor==="black"){a=getButtonAt(5,0);b=getButtonAt(6,0);if(a.classList[0]==="n"&&b.classList[0]==="n")
            {a=2;castle(a)}else{console.log("invalid move");im=true}}
            else if(cy===7&&cx===4&&lx===0&&ly===7&&bmk===false&&bmrp===false&&lcolor==="white"){a=getButtonAt(1,7);b=getButtonAt(2,7);c=getButtonAt(3,7);if(a.classList[0]==="n"&&b.classList[0]==="n"&&c.classList[0]==="n")
            {a=3;castle(a)}else{console.log("invalid move");im=true}}
            else if(cy===7&&cx===4&&lx===7&&ly===7&&bmk===false&&bmrp===false&&lcolor==="white"){a=getButtonAt(5,7);b=getButtonAt(6,7);if(a.classList[0]==="n"&&b.classList[0]==="n")
            {a=4;castle(a)}else{console.log("invalid move");im=true}}  
            

            
            else if (b===true) {
            c=0;d=0
            if(cx-lx<0){c="+"}//vlevo
            else if(cx-lx>0){c="-"}
            else if(cy-ly<0){d="+"}//nad
            else {d="-"}
            
          checkr(cx,cy,c,d).then(value =>{
            f=value
            console.log(f)
            if (f==="ok") {
              if (ccolor!==lcolor) {
              motion(cx,cy);state="0"
            } else {
              {console.log("invalid move");im=true}
            }
          } else {
            {console.log("invalid move");im=true}
          }

          });

          }else{console.log("invalid move");im=true}
        }

     }
     else if (lpiece === "k")
     {
      if (cx===lx&&cy===ly){state="0";imag();console.log("state: ",state);im=true}
        else{
          if(cy===ly-2&&cx===lx-1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//884
          else if(cy===ly-2&&cx===lx+1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//886
          else if(cy===ly+2&&cx===lx-1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//224
          else if(cy===ly+2&&cx===lx+1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//226
          else if(cy===ly-1&&cx===lx-2){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//448
          else if(cy===ly+1&&cx===lx-2){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//442
          else if(cy===ly-1&&cx===lx+2){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//668
          else if(cy===ly+1&&cx===lx+2){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//662
          else {console.log("invalid move");im=true}
        }
     }
     else if (lpiece === "b")
     {
      if (cx===lx&&cy===ly){state="0";imag();console.log("state: ",state);im=true}
      else
      {
        for (a=0;a<8;a++){if (((lx===cx+a)&&(ly===cy+a))||((lx===cx+a)&&(ly===cy-a))||((lx===cx-a)&&(ly===cy+a))||((lx===cx-a)&&(ly===cy-a))) {b=true}}
        if (b===true) 
        {
          if ((lx-cx>0)){c="+"}//cx je vlevo od lx
          else {c="-"}//cx je vpravo od lx
          if ((ly-cy>0)){d="+"}//cy je pod ly
          else {d="-"}//cy je nad ly
          console.log("y-relative position: ",d);
          console.log("x-relative position: ",c);
          checkb(cx,cy,c,d).then(value =>{
            f=value
            if (f==="ok") {
            if (ccolor!==lcolor) {
              motion(cx,cy);state="0"
            } else {
              {console.log("invalid move");im=true}
            }
          } else {
            {console.log("invalid move");im=true}
          }

          });
          
          
        } 
        else {console.log("invalid move");im=true}
      }
     }
     else if (lpiece === "q")
     {
      if (cx===lx&&cy===ly){state="0";imag();console.log("state: ",state);im=true}
        else
        {
          for (a=0;a<8;a++){if((lx===cx+a&&ly===cy)||(lx===cx-a&&ly===cy)||(ly===cy+a&&lx===cx)||(ly===cy-a&&lx===cx))
          {b=true}}
          for (a=0;a<8;a++){if (((lx===cx+a)&&(ly===cy+a))||((lx===cx+a)&&(ly===cy-a))||((lx===cx-a)&&(ly===cy+a))||((lx===cx-a)&&(ly===cy-a))) {c=true}}
          if (b===true) {
            c=0;d=0
            if(cx-lx<0){c="+"}//vlevo
            else if(cx-lx>0){c="-"}
            else if(cy-ly<0){d="+"}//nad
            else {d="-"}
            
          checkr(cx,cy,c,d).then(value =>{
            f=value
            console.log(f)
            if (f==="ok") {
              if (ccolor!==lcolor) {
              motion(cx,cy);state="0"
            } else {
              {console.log("invalid move");im=true}
            }
          } else {
            {console.log("invalid move");im=true}
          }

          });

          }else if (c===true) 
        {
          if ((lx-cx>0)){c="+"}//cx je vlevo od lx
          else {c="-"}//cx je vpravo od lx
          if ((ly-cy>0)){d="+"}//cy je pod ly
          else {d="-"}//cy je nad ly
          console.log("y-relative position: ",d);
          console.log("x-relative position: ",c);
          checkb(cx,cy,c,d).then(value =>{
            f=value
            if (f==="ok") {
            if (ccolor!==lcolor) {
              motion(cx,cy);state="0"
            } else {
              {console.log("invalid move");im=true}
            }
          } else {
            {console.log("invalid move");im=true}
          }

          });
          
          
        } else{console.log("invalid move");im=true}


        }
     }
     else // king
     {
      if (cx===lx&&cy===ly){state="0";imag();console.log("state: ",state);im=true}
        else{ 
          if(cy===ly-1&&cx===lx){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//8
          else if(cy===ly+1&&cx===lx){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//2
          else if(cy===ly&&cx===lx-1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//4
          else if(cy===ly&&cx===lx+1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//6
          else if(cy===ly-1&&cx===lx-1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//7
          else if(cy===ly-1&&cx===lx+1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//9
          else if(cy===ly+1&&cx===lx-1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//1
          else if(cy===ly+1&&cx===lx+1){if(lcolor===ccolor){console.log("invalid move");im=true}else{motion(cx,cy);state="0"}}//3
          else
          {
                 if(cx===0&&cy===0&&bmk===false&&bmrp===false&&lcolor==="black"){a=getButtonAt(1,0);b=getButtonAt(2,0);c=getButtonAt(3,0);if(a.classList[0]==="n"&&b.classList[0]==="n"&&c.classList[0]==="n")
              {a=1;castle(a)}else{console.log("invalid move");im=true}}
            else if(cx===7&&cy===0&&bmk===false&&bmrp===false&&lcolor==="black"){a=getButtonAt(5,0);b=getButtonAt(6,0);if(a.classList[0]==="n"&&b.classList[0]==="n")
              {a=2;castle(a)}else{console.log("invalid move");im=true}}
            else if(cx===0&&cy===7&&bmk===false&&bmrp===false&&lcolor==="white"){a=getButtonAt(1,7);b=getButtonAt(2,7);c=getButtonAt(3,7);if(a.classList[0]==="n"&&b.classList[0]==="n"&&c.classList[0]==="n")
              {a=3;castle(a)}else{console.log("invalid move");im=true}}
            else if(cx===7&&cy===7&&bmk===false&&bmrp===false&&lcolor==="white"){a=getButtonAt(5,7);b=getButtonAt(6,7);if(a.classList[0]==="n"&&b.classList[0]==="n")
              {a=4;castle(a)}else{console.log("invalid move");im=true}}  
            else  {console.log("invalid move");im=true}
          }


        }
     }
    if (im!==true) {
      enpass = false
    }
  }
  console.log(state)

  q=getButtonAt(0,0);if(q.classList[0]!=="r"){bmrp=true}
  q=getButtonAt(7,0);if(q.classList[0]!=="r"){bmrd=true}
  q=getButtonAt(0,7);if(q.classList[0]!=="r"){wmrp=true}
  q=getButtonAt(7,7);if(q.classList[0]!=="r"){wmrd=true}
  q=getButtonAt(4,0);if(q.classList[0]!=="king"){bmk=true}
  q=getButtonAt(4,7);if(q.classList[0]!=="king"){wmk=true}
  console.log(wmk,bmk,wmrp,wmrd,bmrp,bmrd)


}

function selector(cx,cy){
const square = getButtonAt(i,j)
square.style.backgroundColor="red"
}

function getButtonAt(x,y){
  return board.querySelector(
    `button[data-x="${x}"][data-y="${y}"]`
  );
}
function motion(cx, cy) {
  const fromBtn = getButtonAt(lx, ly);
  const toBtn = getButtonAt(cx, cy);

  if (!fromBtn || !toBtn) return;

  //deletele
  toBtn.classList.remove("p","r","k","b","q","king","n","black","white","nn");

  // move
  if ((lpiece==="p")&&(cy===0||cy===7))
  {
    newpiece().then(i=>{
    toBtn.classList.add(i, lcolor);
    imag()
    });
    
  }
  else
  {
    toBtn.classList.add(lpiece, lcolor);
  }
  // clear da first une
  fromBtn.classList.remove("p","r","k","b","q","king","black","white");
  fromBtn.classList.add("n", "nn");
  //if enpass
  if (enpass==="executew")
  {
    const enpassBtn = getButtonAt(cx, cy+1);
    enpassBtn.classList.remove("p","r","k","b","q","king","n","black","white","nn");
    enpassBtn.classList.add("n", "nn");
  }
  else if (enpass==="executeb")
  {
    const enpassBtn = getButtonAt(cx, cy-1);
    enpassBtn.classList.remove("p","r","k","b","q","king","n","black","white","nn");
    enpassBtn.classList.add("n", "nn");
  }
  //ridraw
  imag()
}

function newpiece()
{
  return new Promise((resolve)=>
  {
    
    const pieces = ["r", "k", "b", "q"];
    for (let z = 0; z < 4; z++) 
    { 
      const U_R_L_P = pieces[z];
      const tbtn = document.createElement("button");
      tbtn.style.backgroundColor = "red"
      if (lcolor==="white") {
        tbtn.style.backgroundImage =`url("icons/white_${U_R_L_P}.png")`;
        
      } else {
        tbtn.style.backgroundImage =`url("icons/black_${U_R_L_P}.png")`;
      }
      tbtn.addEventListener("click",()=>
      {
        rem_ove()
        resolve(U_R_L_P) ; 
      });
     trans.appendChild(tbtn)
    }
  });
}
function rem_ove() {
  const tra = trans.querySelectorAll("button");
   tra.forEach(tbtn => {
    trans.removeChild(tbtn)
});
}
function checkb(cx,cy,c,d) {
  return new Promise((resolve)=>
  {const ops = {
  "+": (x, y) => y - x,
  "-": (x, y) => x - y};
    let v=false;
  const calc = {
  "+": (x, y) => x - y,
  "-": (x, y) => x + y};

  let result = ops[c](cx,lx);
    for (let index = 1; index < result; index++) 
    {
      const but = getButtonAt(calc[c](lx,index),calc[d](ly,index))
      if (but.classList[0]!=="n"){v=true}}
    if (v===false) {
      resolve("ok")
    } else {
      resolve("err")
    }
    
  });
}
function checkr(cx,cy,c,d) {
  return new Promise((resolve)=>
  {const ops = {
  "+": (x, y) => y - x,
  "-": (x, y) => x - y};
  
  let w=false;
  const calc = {
  "-": (x, y) => x - y,
  "+": (x, y) => x + y};
  if (c!==0)
  {
    let result = ops[c](cx,lx);
    console.log(result);
    for (let index = 1; index < result; index++) {
    const v = getButtonAt((calc[c](cx,index)),cy)
      if(v.classList[1]!=="nn"){w=true}
      console.log (v)
    }
    
  } 
  if(d!==0)
  {
    let result = ops[d](cy,ly);
    console.log(result);
    for (let index = 1; index < result; index++) {
     const v = getButtonAt(cx,(calc[d](cy,index)))
      if(v.classList[1]!=="nn"){w=true}
      console.log (v)
    }
    console.log(c,d)
  }
  if (w===true) {
    resolve("err")
  } else {
    resolve("ok")
  }
  });
} 
function castle(a) {
  if(a===1){
    let b=getButtonAt(0,0);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
        b=getButtonAt(1,0);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
        b=getButtonAt(2,0);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("king", "black");
        b=getButtonAt(3,0);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("r", "black");
        b=getButtonAt(4,0);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
  }//7
  else if (a===2){
    let b=getButtonAt(4,0);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
        b=getButtonAt(5,0);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("r", "black");
        b=getButtonAt(6,0);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("king", "black");
        b=getButtonAt(7,0);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
  }//9
  else if (a===3){
    let b=getButtonAt(0,7);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
        b=getButtonAt(1,7);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
        b=getButtonAt(2,7);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("king", "white")
        b=getButtonAt(3,7);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("r", "white");
        b=getButtonAt(4,7);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
  }//1
  else if (a===4){
    let b=getButtonAt(4,7);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
        b=getButtonAt(5,7);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("r", "white");
        b=getButtonAt(6,7);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("king", "white");
        b=getButtonAt(7,7);b.classList.remove("p","r","k","b","q","king","n","black","white","nn");b.classList.add("n", "nn");
  }//3
  imag()
  state="0"
}
}
}