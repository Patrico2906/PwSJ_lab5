//Wykorzystaj zdarzenie onblur oraz onchange oraz wiedzę z przykładów powyżej i
//napisz funkcje pomocnicze, które będą sprawdzały wartości w polach formularza
//od razu po ich wypełnieniu (a nie podczas wysyłania formularza) i stosowały
//właściwe podświetlenie oraz komunikat o błędzie. 


function checkForm()
{
    var error=false; 
    var contactName = document.getElementById("contactName");  //imie
    var contactSur = document.getElementById("contactSur");  //nazwisko
    var contactEmail = document.getElementById("contactEmail");  //email
    var contactInfo = document.getElementById("contactInfo");    //kontakt   odder by namwe

    if (contactName.value == "")//war do imienia
    {
        document.getElementById("name").className="form-group has-error";
        document.getElementById("errorName").className="alert alert-danger";
        error=true;
    }
    else //powtorz by gropu
    {
        document.getElementById("name").className="form-group has-success";
    }

    if (contactSur.value == "")  //nazwisko
    {
        document.getElementById("sur").className="form-group has-error";
        document.getElementById("errorSur").className="alert alert-danger"; 
        error=true;
    }
    else  //dalszy rozwiniecie nazwiska
    {
        document.getElementById("sur").className="form-group has-success";
    }

    if(contactEmail.value == "")  //email - zdanki 
    {
        document.getElementById("mail").className="form-group has-error";
        document.getElementById("errorEmail").className="alert alert-danger"; 
        error=true;
    } 
    else   //co musi zawierac
    {
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;  //zczytywanie znakow
        if(regex.test(email)==false)
        {
            document.getElementById("mail").className="form-group has-error";
            document.getElementById("errorEmail").innerHTML="Zły format!";   //komunikat
            document.getElementById("errorEmail").className="alert alert-danger"; 
            error=true;
        }
        else
        {
         document.getElementById("mail").className="form-group has-success";
        }
    }

    if (contactInfo.value == "")  //kontakt - pole dowolne
    {
        document.getElementById("info").className="form-group has-error";
        document.getElementById("errorInfo").className="alert alert-danger"; 
        error=true;
    }
    else
    {
        document.getElementById("info").className="form-group has-success";
    }

    if (!error) return true; 
    else return false;
}

