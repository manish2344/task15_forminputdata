var btn = document.getElementById("btn");
btn.addEventListener("click", addData)

function addData() {
    var firstname = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var food = document.getElementById("food").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    console.log(firstname + gender + food + state + lastname + address + pincode + country);
    var html = "";
    html = "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + address + "</td><td>" + pincode + "</td><td>" + gender + "</td><td>" + food + "</td><td>" + state + "</td><td>" + country + "</td></tr>"
        //html = firstname + gender + food + state + lastname + address + pincode + country
    document.getElementById("result").innerHTML += html
}