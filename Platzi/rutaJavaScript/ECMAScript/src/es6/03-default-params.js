function newUser(name, age, country) {
    var name = name || "Oscar"
    var age = age || 34
    var country = country || "MX"
    console.log(name, age, country)
}
newUser()
newUser("Ultisaer", 15, "CO")

function newAdmin(name = "Oscar", age = 32, country =  "CL"){
    console.log(name, age, country)
}
newAdmin()
newAdmin("Ultisaer", 54 , "MX")
