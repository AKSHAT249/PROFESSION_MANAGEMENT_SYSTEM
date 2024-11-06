let users = [];
let employeeCol = document.getElementById("employee");
let message = document.getElementById("message");



function renderUsers(){
    employeeCol.innerHTML  = ""
    if(users.length==0){
        employeeCol.innerHTML = "You have 0 Employees."
    }
    else{
    users.map( (item,index)=> {
        employeeCol.innerHTML +=   `
                <div class="card">
                    <div style="border: 1px solid white; padding: 16px; border-radius: 6px">${index+1}.  Name:${item.name}  Profession: ${item.profession}   Age:${item.age}</div>
                    <div>
                        <button class="" style="background-color:white; color:black; padding:8px; border-radius:6px;" onclick=deleted(${index})>Delete User</button>
                    </div>

                </div>

        `

        } )
    }
}



function deleted(i){
    users = users.filter( (item,index)=>i!=index);
    renderUsers();
}





function submitted(event){
    event.preventDefault();
    console.log("form submitted");


    let name=document.getElementsByName("name")[0].value;
    let profession=document.getElementsByName("profession")[0].value;
    let age=document.getElementsByName("age")[0].value;

    if(name.length==0 && profession.length==0 && age.length==0){
        message.innerHTML  =""
        message.innerHTML += `<p style="color:red">Error : Please Make sure All the fields are filled before adding in an employee !</p>`

    }else{
        let new_user = {
            "name": name,
            "profession": profession,
            "age": age
        }

        users.push(new_user)
        message.innerHTML  =""
        message.innerHTML += `<p style="color:green">Success : Employee Added!</p>`
        console.log(users);
        

    }
    renderUsers();

    


}











