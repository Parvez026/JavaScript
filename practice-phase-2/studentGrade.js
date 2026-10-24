let students=[
    { name: "Aman", marks: [80, 90, 75] },
    { name: "Priya", marks: [95, 85, 92] },
    { name: "Raj", marks: [60, 55, 70] }
]

function getAvg(marks){
  return marks.reduce((sum,m)=>sum+m,0)/marks.length
}

function getGrade(avg){
  if(avg>=90) return "A"
  if(avg>=70) return "B"
  if(avg>=60) return "C"
  return "Fail"
}

students.forEach((s)=>{
    let avg=getAvg(s.marks)
    console.log(`${s.name}:Avg=${avg.toFixed(2)},Grade=${getGrade(avg)}`);
    
})