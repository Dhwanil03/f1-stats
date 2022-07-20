const chartdata='Data2020.csv';

d3.csv(chartdata).then(function(datapoints) {
    console.log(datapoints)
    const Points =[];
    const Wins =[];
    const LapsLead =[];
    
 
 
       for (i=0;i<datapoints.length;i++){
          Points.push(datapoints[i].Points)
          Wins.push(datapoints[i].Wins)
          LapsLead.push(datapoints[i].LapsLead)
          
       }

const myChart= document.getElementById('myChart').getContext('2d');
      
const StandingsChart = new Chart(myChart,{
    type:'bar',
    data:{
        labels:['Lewis Hamilton',
                'Valtteri Bottas',
                'Max Verstappen',
                'Sergio Perez',
                'Daniel Riccardo',
                'Carlos Sainz',
                'Alexander Albon',
                'Charles Leclerc',
                'Lando Norris',
                'Pierre Gasly',
                'Lance Stroll',
                'Esteban Ocon',
                'Sebastian Vettel',
                'Daniil Kvyat',
                'Nico Hulkenberg',
                'Kimi Räikkönen',
                'Antonio Giovinazzi',
                'George Russell',
                'Romain Grosjean',
                'Kevin Magnussen',
                'Nicholas Latifi',
                'Jack Aitken',
                'Pietro Fittipaldi'],
        datasets:[{
            label:'Points',
            data:[ 347,223,214,125,119,105,105,98,97,75,75,62,33,32,10,4,4,3,2,1,0,0,0 ],
                    backgroundColor:[
                    'rgba(6, 229, 254, 0.8)',
                    'rgba(6, 229, 254, 0.8)',
                    'rgba(6, 0, 254, 0.98)',
                    'rgba(255, 37, 163, 0.71)',
                    'rgba(255, 234, 0, 1)',
                    'rgba(255, 169, 0, 0.98)',
                    'rgba(6, 0, 254, 0.98)',
                    'rgba(247, 0, 0, 0.8)',
                    'rgba(255, 169, 0, 0.98)',
                    'rgba(0, 0, 148, 0.39)',
                    'rgba(255, 37, 163, 0.71)',
                    'rgba(255, 234, 0, 1)',
                    'rgba(247, 0, 0, 0.8)',
                    'rgba(0, 0, 148, 0.39)',
                    'rgba(255, 37, 163, 0.71)',
                    'rgba(146, 0, 0, 1)',
                    'rgba(146, 0, 0, 1)',
                    'rgba(46, 164, 210, 0.75)',
                    'rgba(175, 0, 66, 0.75)',
                    'rgba(175, 0, 66, 0.75)',
                    'rgba(46, 164, 210, 0.75)',
                    'rgba(46, 164, 210, 0.75)',
                    'rgba(175, 0, 66, 0.75)'
                    
                    ]
        }]
    },
    options: {

        scales:{
         x:{ ticks:{
                 color:'white'
             
             }

         },
         y:{
             ticks:{
                 color:'white'
             
             }
           
         }
     },
       
        
    plugins: {
        
    title: {
        display: true,
        text: 'Drivers Points Scored',
        color:'white'
    },
  
    legend: {
        display: false
        

    }
}
}
    
});   
const ctx1= document.getElementById('myChart1').getContext('2d');
      
const myChart1 = new Chart(ctx1,{
    type:'bar',
    data:{
        labels:['Lewis Hamilton',
                'Valtteri Bottas',
                'Max Verstappen',
                'Sergio Perez',
                'Daniel Riccardo',
                'Carlos Sainz',
                'Alexander Albon',
                'Charles Leclerc',
                'Lando Norris',
                'Pierre Gasly',
                'Lance Stroll',],
        datasets:[{
            label:'Laps Led',
            data:LapsLead,
                    backgroundColor:[
                    'rgba(6, 229, 254, 0.8)',
                    'rgba(6, 229, 254, 0.8)',
                    'rgba(6, 0, 254, 0.98)',
                    'rgba(255, 37, 163, 0.71)',
                    'rgba(255, 234, 0, 1)',
                    'rgba(255, 169, 0, 0.98)',
                    'rgba(6, 0, 254, 0.98)',
                    'rgba(247, 0, 0, 0.8)',
                    'rgba(255, 169, 0, 0.98)',
                    'rgba(0, 0, 148, 0.39)'
                  
                    
                    ]
        }]
    },
    options: {

        scales:{
         x:{ ticks:{
                 color:'white'
             
             }

         },
         y:{
             ticks:{
                 color:'white'
             
             }
           
         }
     },
       
     indexAxis:'y',   
    plugins: {
        
    title: {
        display: true,
        text: 'Drivers Points Scored',
        color:'white'
    },
  
    legend: {
        display: false
        

    }
}
}
    
});  
const ctx2= document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2,{
    type:'line',
    data :{
        labels:[ 'Valtteri Bottas','Lewis Hamilton','Max Verstappen','Sergio Perez','Pierre Gasly'],
        datasets :[{
            label:'Wins',
            data:[2,11,2,1,1],
            backgroundColor:'rgba(6, 0, 254, 0.2',
            borderColor:'rgba(6, 0, 254, 1)',
            tension:0.4,
            fill:true
           
        }]
        
    },
    options:{
     scales:{
         x:{ ticks:{
                 color:'white'
             
             }

         },
         y:{
             ticks:{
                 color:'white'
             
             },
             beginAtZero:true
           
         }
     },
     
        plugins: {
    title: {
        display: true,
        text: 'Total Number of Wins',
        color:'white'
    },
    legend: {
        display: false

    }
}
    }

});
});