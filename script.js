function animatedForm(){
    const arrows=document.querySelectorAll(".fa-chevron-down");
    arrows.forEach((arrow) => {
        arrow.addEventListener("click",()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
         
         
            if(input.type==="text" && UserValidation(input))
            {
                nextSlide(parent,nextForm);
            }
            else if(input.type==="email" && emailValidation(input))
            {
                nextSlide(parent,nextForm);
            }
            else if(input.type==="password" && UserValidation(input))
            {
                nextSlide(parent,nextForm);
            }
            else
            {
                parent.style.animation= "shake 0.5s ease";
            }
                parent.addEventListener('animationend',()=>{
                parent.style.animation="";
            });
        });
    });  
}
function UserValidation(user)
{
    if(user.value.length<6)
    {
        error("rgb(189,87,87)");
    }
    else
    {
        error("rgb(87,180,130)");
        return true;
    }
    return false;
}
function emailValidation(input)
{
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(input.value))
    {
        error("rgb(87,189,130)");
        return true;
    }
    else
    {
        error("rgb(189,87,87)");
    }
}
function nextSlide(parent,nextParent)
{
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextParent.classList.add('active');
}
function error(color)
{
    console.log("entered error function");
    document.body.style.backgroundColor=color;
}


animatedForm();