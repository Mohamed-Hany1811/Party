let left = $('.navItems').innerWidth();
$('window').scroll((e=>{
    e.ease(500)
}))
// windows ready 
$(window).ready(()=>{
    $('.NavMainContainer').css({left: `-${left}`},)
    $('#singerTwoData').slideUp()
    $('#singerThreeData').slideUp()
    $('#singerFourData').slideUp()
    DeadlineCount()
    let root= document.querySelector(':root')
    let rootStyles= getComputedStyle(root)
    let scrollValue = rootStyles.getPropertyValue('--scrollTheme')
    root.style.setProperty('--scrollTheme', 'block')
    $(".landingLayer").fadeOut(2000)
})

// to adjust the navBar when the winow is resized
window.addEventListener('resize', (e=>{
    left = $('.navItems').innerWidth()
        $('.NavMainContainer').css({left: `-${left}`})


}))

// open Nav
$('.navOpen').click(()=>{
    $('.NavMainContainer').animate({ left: `0` }, 750)
    $('#openIcons').removeClass('d-flex')
    $('#openIcons').addClass('d-none')
    $('#closeIcons').removeClass('d-none')
    $('#closeIcons').addClass('d-flex')
})
// close Nav
$('.navClose').click(()=>{
    $('.NavMainContainer').css({ left: `0` })
    $('#openIcons').removeClass('d-none')
    $('#openIcons').addClass('d-flex')
    $('#closeIcons').removeClass('d-flex')
    $('#closeIcons').addClass('d-none')
    $('.NavMainContainer').animate({left: `-${left}`},500)

})

// the counter function
function DeadlineCount() {
    let currentDate = new Date()
    let deadline = new Date("2023-04-15T00:00:00")
    if (deadline > currentDate) {

        let timeLeft = deadline - currentDate
        let s = timeLeft / 1000
        let m = s / 60
        let h = m / 60
        let d = h / 24
        s = Math.floor(s) % 60
        m = Math.floor(m) % 60
        h = Math.floor(h) % 24
        d = Math.floor(d)

        document.getElementById('day').innerHTML = d + " D"
        document.getElementById('hour').innerHTML = h + " H"
        document.getElementById('minutes').innerHTML = m + " M"
        document.getElementById('second').innerHTML = s + " S"

    } else {
        $('#deadline').removeClass('d-none')
        $('.remTime').addClass('d-none')
        $('#durationImg').attr('src', 'imgs/White Recruitment Agency.png')
    }

    setInterval(function () {
        DeadlineCount()


    }, 1000);

}




// about functions
$('#singerOne').click(()=>{
    $('#singerOneData').slideToggle(200)


})
$('#singerTwo').click(()=>{
    $('#singerTwoData').slideToggle(200)


})
$('#singerThree').click(()=>{
    $('#singerThreeData').slideToggle(200)


})
$('#singerFour').click(()=>{
    $('#singerFourData').slideToggle(200)


})




// regular expression
// name validation
function validateName() {
    let name = /^[a-zA-z ]*?$/
   let nameValue = document.getElementById('Name')
  nameValue.addEventListener('keyup', (e=>{
  nameValue = document.getElementById('Name').value
    if(name.test(nameValue)!=true){
       $('#nameError').removeClass('d-none')
    }else{
       $('#nameError').addClass('d-none')        
    }
}))
}

validateName()



// mail validation 
function validateMail(){

    let mail = /^[a-zA-Z0-9-_#$!.]*@(gmail|hotmail|GMAIL|HOTMAIL|YAHOO|yahoo|[a-zA-Z]*6?).(com|net|[a-zA-Z]*3)/
   let mailValue = document.getElementById('mail')
  mailValue.addEventListener('blur', (e=>{
  mailValue = document.getElementById('mail').value
    if(mail.test(mailValue)!=true){
       $('#mailError').removeClass('d-none')
    }else{
       $('#mailError').addClass('d-none')        
    }
}))
}
validateMail()

function validateMessage() {
    let message= /^[a-zA-z0-9-_@,/\! ]{0,100}$/
   let messageValue = document.getElementById('message')
  messageValue.addEventListener('keyup', (e=>{
  messageValue = document.getElementById('message').value
 let numOfChar=(messageValue.toString().length);
 const charEnabled= 100;
 if(charEnabled>=numOfChar){
            $('#messageError').addClass('d-none')

    $("#lettersRem").html(charEnabled-numOfChar)
 }else{
        $('#messageError').removeClass('d-none')
        $('#messageError').html(' No Available Charachters!')        
 }
    if(message.test(messageValue)!=true){
        $('#messageError').html(' please enter a valid message!')        
       $('#messageError').removeClass('d-none')
    }else{
       $('#messageError').addClass('d-none')        
    }
}))
}

validateMessage()




// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });