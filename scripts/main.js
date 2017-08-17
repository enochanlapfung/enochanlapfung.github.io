var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/no.png')
    {
        myImage.setAttribute('src', 'images/yes.jpg');
    }
    else
    {
        myImage.setAttribute('src', 'images/no.png');
    }
}

function setUserName()
{
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName;
}

if (!localStorage.getItem('name'))
{
    // name has not been stored before
    setUserName();
}
else
{
    // name has been stored before
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName;
}

myButton.onclick = function()
{
    setUserName();
}
