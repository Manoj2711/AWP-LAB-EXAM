function validate() {

    const username = document.getElementById("user").value;

    const password = document.getElementById("pass").value;

    const email = document.getElementById("email1").value;

    const newEle = document.getElementById("printvalue").cloneNode(true);



    newEle.children[0].innerHTML = username;


    newEle.children[1].innerHTML = password;

    newEle.children[2].innerHTML = email;

    newEle.visibility = "visible"
    newEle.removeAttribute("id");

    const print1 = document.getElementById("print")


    print1.insertBefore(newEle, print1.firstChild)


    document.getElementById("user").value = "";

    document.getElementById("pass").value = "";

    document.getElementById("email1").value = "";


}