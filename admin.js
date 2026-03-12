const API = "http://localhost:8080/papers"

if(localStorage.getItem("adminLoggedIn") !== "true"){
window.location.href = "login.html"
}

let editingId = null

document.getElementById("paperForm").addEventListener("submit", async function(e){

e.preventDefault()

const paper = {

subject: document.getElementById("subject").value,
year: document.getElementById("year").value,
medium: document.getElementById("medium").value,
part: document.getElementById("part").value,
type: document.getElementById("type").value,
fileUrl: document.getElementById("fileUrl").value

}

if(editingId == null){

await fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(paper)
})

}else{

await fetch(API + "/" + editingId,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(paper)
})

editingId = null

}

document.getElementById("paperForm").reset()

loadPapers()

})

async function loadPapers(){

const res = await fetch(API)
const papers = await res.json()

const table = document.getElementById("paperTable")

table.innerHTML=""

papers.forEach(paper => {

table.innerHTML += `

<tr>

<td>${paper.id}</td>
<td>${paper.subject}</td>
<td>${paper.year}</td>
<td>${paper.medium}</td>
<td>${paper.part}</td>
<td>${paper.type}</td>

<td>

<button onclick="editPaper(${paper.id},
'${paper.subject}',
${paper.year},
'${paper.medium}',
'${paper.part}',
'${paper.type}',
'${paper.fileUrl}')">Edit</button>

<button onclick="deletePaper(${paper.id})">Delete</button>

</td>

</tr>

`

})

}

function editPaper(id,subject,year,medium,part,type,fileUrl){

editingId = id

document.getElementById("subject").value = subject
document.getElementById("year").value = year
document.getElementById("medium").value = medium
document.getElementById("part").value = part
document.getElementById("type").value = type
document.getElementById("fileUrl").value = fileUrl

}

async function deletePaper(id){

await fetch(API + "/" + id,{
method:"DELETE"
})

loadPapers()

}

if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href = "login.html"
    
}

function logout(){

localStorage.removeItem("adminLoggedIn")
    
window.location.href="index.html"
    
}

loadPapers()