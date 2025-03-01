function rolldice(){
   let maxvalue = parseInt(document.getElementById('maxvalue').value);
   let dicecount = parseInt(document.getElementById('dicecount').value);
   let modifilter = parseInt(document.getElementById('modifilter').value);
   let resulttext = '결과:';
   let total = 0;

   for(let i =0; i < dicecount; i++){
    let roll = Math.floor(Math.random() * maxvalue) + 1;
    total += roll;
    resulttext += `[${roll}]`;
   }
   
   total += modifilter;
   resulttext +=`+${modifilter} = ${total}`;

   document.getElementById('result').
}

