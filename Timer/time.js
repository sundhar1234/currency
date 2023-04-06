   
 let amp= document.getElementById('amp')

     function displayTime(){
        let date=new Date()
              let hrs=date.getHours();
              let min=padZero(date.getMinutes());
              let sec=padZero( date.getSeconds());
        
              document.getElementById('hrs').innerHTML= padZero(hrs)
              document.getElementById('min').innerHTML= padZero(min)
              document.getElementById('sec').innerHTML= padZero(sec)   
              if(hrs>12){
                hrs=hrs-12
                amp.innerHTML='pm'
              }
            
function padZero(num){
     return num<10?"0"+num:num 
}
              
            
     }
        setInterval(displayTime,500)


        //currency
        let select=document.querySelectorAll('.currency ');
          let btn=document.getElementById('btn');
          let input=document.getElementById('input')
  fetch('https://api.frankfurter.app/currencies')
      .then((data)=>data.json())
      .then(data=>displayDropDown(data));
      function displayDropDown(data){
              //  console.log(Object.entries(data)[1][0])
              let curr=Object.entries(data)
              for(let i=0;i<curr.length;i++){
                let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
               select[0].innerHTML+=opt
               select[1].innerHTML+=opt
      }
    }
         btn.addEventListener('click',()=>{
                 let curr1=select[0].value
                 let curr2=select[1].value
                 let inputVal=input.value
                 if(curr1===curr2)
                         alert('choose different currency')
                else
                    convert(curr1,curr2,inputVal)

         });
         function convert(curr1,curr2,inputVal){
          const host = 'api.frankfurter.app';
          fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
            .then(resp => resp.json())
            .then((data) => {
              console.log(Object.values(data.rates))
              document.getElementById('right').value=Object.values(data.rates)[0]
            });
         }
