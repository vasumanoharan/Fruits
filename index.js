function saveRecord(){
  var name=document.getElementById('name')
  var age=document.getElementById('age')
  var email=document.getElementById('email')


  // Gender
  const gender=document.getElementsByName('Gender')
  var gendervalue=''
  for (let i of gender){
    if(i.checked){
    
      gendervalue=i.value
      
    }
  }

// Languyage
  const language=document.getElementsByName('Language')
  var LangAry=[]
  for (let i of language){
    if(i.checked){
      LangAry.push(i.value)
    }
  }
  
  // Name
  var table=document.getElementById('table')
  var row=document.createElement('tr')
  var nameTD=document.createElement('td')
  nameTD.textContent=name.value
  row.append(nameTD)
  table.append(row)
  

// Age
  var ageTD=document.createElement('td')
  ageTD.textContent=age.value
  row.append(ageTD)
  console.log(row);

  // Gender
  var genderTD=document.createElement('td')
  console.log(genderTD);
  genderTD.textContent=gendervalue
  row.append(genderTD)
  console.log(row);

  // Language
  var lang=document.createElement('td')
  
  lang.textContent=LangAry
  row.append(lang)



// email
  var emailTD=document.createElement('td')
  emailTD.textContent=email.value
  row.append(emailTD)

  // button
  var deletBtn = document.createElement('button')
  deletBtn.textContent = "Delete"
  deletBtn.setAttribute('onclick' , "deleteRow(event)")
  row.append(deletBtn)
  
  }

function deleteRow(event){
  event.target.parentElement.remove()
 
}