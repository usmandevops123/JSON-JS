var data=[
    {
        "student":"usman",
        age:"20",
        department:"BCIT",

    },

    {
        student:"subhan",
        age:25,
        department:"finance"
    },
        {
          student:"Adnan",
          age:21,
          department:"finance"
        },
        {
            student:"HASSAN",
            age:22, 
            department:"finance"
        },
        {
            "student":"ali",
            age:40,
            department:"BCIT",
    
        },
    
        {
            student:"zeeshan",
            age:45,
            department:"finance"
        },
            {
              student:"zohaib",
              age:48,
              department:"finance"
            },
            {
                student:"muneeb",
                age:49, 
                department:"finance"
            },
    

] 
data.filter((a,i) => { 
    if(a.student=='HASSAN'){
        
        document.write(`<div class="card" style="width: 18rem;">
             <ul class="list-group list-group-flush">
              <li class="list-group-item">The student is ${a.student}</li>
              <li class="list-group-item">The age is ${a.age}</li>
               <li class="list-group-item">The department is ${a.department}</li>
             </ul>
          </div>`)
        }

    })
//     document.write(`<div class="card" style="width: 18rem;">
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">The student is ${a.student}</li>
//       <li class="list-group-item">The age is ${a.age<=4}</li>
//       <li class="list-group-item">The department is ${a.department}</li>
//     </ul>
//   </div>`)

//})


