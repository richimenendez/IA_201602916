const express = require('express')
const app = express()
const port = 3000

var og_board = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

var heuristic_board = [
    [120,-20,20,5,5,20,-20,120],
    [-20,-40,-5,-5,-5,-5,-40,-20],
    [20,-5,15,3,3,15,-5,20],
    [5,-5,3,3,3,3,-5,5],
    [5,-5,3,3,3,3,-5,5],
    [20,-5,15,3,3,15,-5,20],
    [-20,-40,-5,-5,-5,-5,-40,-20],
    [120,-20,20,5,5,20,-20,120]];

var moves = []
var enemy_moves = []
// ./ngrok http 3000

function sort_and_clean_moves(){
  
}

function find_enemy_moves(){

}

function minimax(){
  
}

function find_move(move,rival,x,y){
  var x2=0,y2=0;
  if(move==0){
    x2=x;
    for(y2=y-1;y2>0;y2--){
      x2--
        if(og_board[y2][x2]==rival && og_board[y2-1][x2-1]=='2'){
          return (y2-1)+''+(x2-1) 
        }
      
    }
  }else if(move==1){
    x2=x;
    for(y2=y-1;y2>0;y2--){
        if(og_board[y2][x2]==rival && og_board[y2-1][x2]=='2'){
          return (y2-1)+''+x2 
        }
    }
  }else if(move==2){
    x2 =x;
    for(y2=y-1;y2>0;y2--){
      x2++
        if(og_board[y2][x2]==rival && og_board[y2-1][x2+1]=='2'){
          return (y2-1)+''+(x2+1) 
        }
      
    }
  }else if(move==3){
    y2=y;
    for(x2=x+1;x2<7;x2++){
        if(og_board[y2][x2]==rival && og_board[y2][x2+1]=='2'){
          return y2+''+(x2+1) 
        }
    }
  }else if(move==4){
    x2 = x;
    for(y2=y+1;y2<7;y2++){
      x2++
        if(og_board[y2][x2]==rival && og_board[y2+1][x2+1]=='2'){
          return (y2+1)+''+(x2+1) 
        }
      
    }
  }else if(move==5){
    x2=x;
    for(y2=y+1;y2<7;y2++){
        if(og_board[y2][x2]==rival && og_board[y2+1][x2]=='2'){
          return (y2+1)+''+x2 
        }
    }
  }else if(move==6){
    x2 = x;
    for(y2=y+1;y2<7;y2++){
      x2--
        if(og_board[y2][x2]==rival && og_board[y2+1][x2-1]=='2'){
          return (y2+1)+''+(x2-1) 
        }
      
    }
  }else if(move==7){
    y2=y;
    for(x2=x-1;x2>0;x2--){
        if(og_board[y2][x2]==rival && og_board[y2][x2-1]=='2'){
          return y2+''+(x2-1) 
        }
    }
  }
  return '99'
}

function find_spots(turn){
  let rival = turn=='1'?'0':'1';
  let spot;
  for(let y = 0; y<8;y++){
    for(let x = 0; x<8; x++){
      if(og_board[y][x]==turn){
        if(y-1>0 && x-1 >0 && og_board[y-1][x-1]==rival){ // Arriba a la izq
           spot = find_move(0,rival,x,y) 
           if(spot!='99')
           moves.push({spot:spot,h:heuristic_board[parseInt(spot.split('')[0])][parseInt(spot.split('')[1])]})
        } 
        if(y-1>0  && og_board[y-1][x]==rival){ // Arriba 
           spot = find_move(1,rival,x,y)
           if(spot!='99')
            moves.push({spot:spot,h:heuristic_board[parseInt(spot.split('')[0])][parseInt(spot.split('')[1])]})
        } 
        if(y-1>0 && x+1 <7 && og_board[y-1][x+1]==rival){ // Arriba Derecha
          spot = find_move(2,rival,x,y) 
          if(spot!='99')
          moves.push({spot:spot,h:heuristic_board[parseInt(spot.split('')[0])][parseInt(spot.split('')[1])]})
       }
       if( x+1 <7 && og_board[y][x+1]==rival){ // Derecha
         spot = find_move(3,rival,x,y) 
         if(spot!='99')
         moves.push({spot:spot,h:heuristic_board[parseInt(spot.split('')[0])][parseInt(spot.split('')[1])]})
      }    
      if(y+1< 7 && x+1 <7 && og_board[y+1][x+1]==rival){ // Abajo Derecha
        spot = find_move(4,rival,x,y) 
        if(spot!='99')
        moves.push({spot:spot,h:heuristic_board[parseInt(spot.split('')[0])][parseInt(spot.split('')[1])]})
     }         
     if(y+1< 7 && og_board[y+1][x]==rival){ // Abajo 
       spot = find_move(5,rival,x,y) 
       if(spot!='99')
       moves.push({spot:spot,h:heuristic_board[parseInt(spot.split('')[0])][parseInt(spot.split('')[1])]})
    }   
    if(y+1< 7 && x-1 >0 && og_board[y+1][x-1]==rival){ // Abajo Izq
      spot = find_move(6,rival,x,y) 
      if(spot!='99')
      moves.push({spot:spot,h:heuristic_board[parseInt(spot.split('')[0])][parseInt(spot.split('')[1])]})
   }      
   if(x-1 >0 && og_board[y][x-1]==rival){ // Izquierda
     spot = find_move(7,rival,x,y) 
     if(spot!='99')
     moves.push({spot:spot,h:heuristic_board[parseInt(spot.split('')[0])][parseInt(spot.split('')[1])]})
  }   
      }
    }
  }
}

function fill_board(estado){
  var y=0,x=0;
  if(estado!=undefined){
  for(let z = 0;z<estado.length;z++){
    og_board[y][x] = estado[z];
    x++;
    if(x==8){
      x=0;
      y++;
    }
  }
  }
}

app.get('/', (req, res) => {
  //variable reset
  moves = []
  enemy_moves = []


  var {turno,estado} = req.query;
  estado = estado?.split('')
  fill_board(estado)
  find_spots(turno)
  console.log(moves)
  console.log(`El turno es: ${turno}`);
  console.log(`El spot es: ${moves[0].spot}`);
  res.send(moves[0].spot);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})