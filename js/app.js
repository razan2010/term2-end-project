const sections =document.querySelectorAll('section')
navBar = document.querySelector('ul')
sections.forEach(section=> {//function for NavBar
    const li = document.createElement('li')
    const a  = document.createElement('a')
    const sectionId = section.getAttribute('id')
    a.setAttribute('href',`#${sectionId}`)
    a.textContent = section.querySelector('h2').textContent
    //Function for smooth view and prventDefult
    a.addEventListener('click', function(e){
        e.preventDefault()
        section.scrollIntoView({ behavior: 'smooth' });
    })
    li.appendChild(a)
navBar.appendChild(li)
})
// Function  make the screen active according to the viewport
function updateScreen(){
    sections.forEach(section=>{
        const top = section.getBoundingClientRect().top
        if (top >=0 && top<= 300){
            section.classList.add('active')
        }else{
            section.classList.remove('active')
        }

    })
}
window.addEventListener('scroll',updateScreen)
const butt = document.querySelector('button')

butt.addEventListener('click' , function(){//Function for comments
    const comm = document.querySelector('textarea')
    const commentSpace = document.getElementById('comments')
    const Name =document.getElementById('name')
    const Email = document.getElementById('email')
    // For validation
    if (Name.value.length<3){
        alert('Please enter your Name')
        return
    }
     if (!Email.value.includes('@')){
        alert('Please enter a valid Email')
        return
    }
    else if (Email.value===''){
        alert('Please enter you Email')
        return
    }
    const newEle = document.createElement('p')
    newEle.innerHTML = `${comm.value}<br><strong>Name:</strong>${Name.value}<br><strong>Email</strong>:${Email.value} `
    commentSpace.appendChild(newEle)
    newEle.classList.add('comments')
    comm.value = ''
    Name.value=''
    Email.value=''
    
})
