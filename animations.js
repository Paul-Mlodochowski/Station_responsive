const navigation = document.querySelector('nav');
const main = document.querySelector('main');
const arrow = document.getElementById("vanishing");
const hamburger = document.getElementById('mobnav')
const list = [navigation,main]

list.forEach(element => {
    gsap.fromTo(element.children,
        {y: '+=200',opacity:0},
        {y:0, opacity:1,duration:2,stagger:0.3,ease:'easyInOut',scrollTrigger:{
            trigger:navigation,
            start:'top 70%'
            
        }});
});

gsap.fromTo(hamburger,{y: '-=200',opacity:0},
    {y:0, opacity:1,duration:1,stagger:0.3,ease:'easyInOut',scrollTrigger:{
        trigger:navigation,
        start:'top 67%'
    }});

gsap.fromTo(arrow,{y:0,opacity:1},
    {y:'-=100',opacity:0,duration:1,scrollTrigger:{
        trigger:navigation,
        start:'top 70%'
    }});
