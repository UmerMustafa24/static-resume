var buttontoogle = document.getElementById("button") ;
var skill = document.getElementById("skills") ;


console.log('Button:', buttontoogle);
console.log('Skills Section:', skill);

buttontoogle.addEventListener('click', function(){
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }else{
        skill.style.display = 'none';

    }
}); 