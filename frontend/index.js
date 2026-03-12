let currentSubject = ""

function loadPapers(subject){

currentSubject = subject
    

if(subject.toLowerCase().includes("math")){
subject = "Combined Mathematics"
}
    
document.getElementById("subjectTitle").innerText = subject + " Papers"
    
fetch("http://localhost:8080/papers/subject/" + subject)
    
.then(response => response.json())
    
.then(displayPapers)
    
}

function searchPapers(){

let keyword = document.getElementById("searchInput").value.toLowerCase().trim()
    
keyword = keyword
.replace("combined maths","combined mathematics")
.replace("maths","mathematics")
.replace("math","mathematics")
.replace("bio","biology")
.replace("agri","agricultural science")

let words = keyword.split(" ")
    
fetch("http://localhost:8080/papers")
    
.then(response => response.json())
    
.then(data => {
    
let filtered = data.filter(paper => {
    
let text =
paper.subject.toLowerCase() + " " +
paper.year + " " +
paper.medium.toLowerCase() + " " +
paper.part.toLowerCase()
    
return words.every(word => text.includes(word))
    
})
    
displayPapers(filtered)
    
})
    
}

document.getElementById("searchInput").addEventListener("keypress", function(e){
if(e.key === "Enter"){ searchPapers(); }
});

function displayPapers(data){

let html = ""

if(data.length === 0){

html = "<h3>No papers found.</h3>"

}else{

data.forEach(paper => {

html += `
<div class="paper">

<h3>${paper.subject} ${paper.year} - Part ${paper.part}</h3>

<a href="${paper.fileUrl}" target="_blank">
<button>View Paper</button>
</a>

<a href="${paper.fileUrl}" download>
<button>Download</button>
</a>

</div>
`

})

}

document.getElementById("paperList").innerHTML = html

}

const quote = "Success is the sum of small efforts repeated day in and day out.";

let index = 0;

function typeQuote(){

if(index < quote.length){

document.getElementById("quoteText").innerHTML += quote.charAt(index);

index++;

setTimeout(typeQuote,40);

}

}

typeQuote();
console.log(text)