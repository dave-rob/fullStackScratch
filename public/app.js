import jQuery from "jquery";

// $.get("http://localhost:3000/api/users")
//     .then(res => console.log(res));
    $.get(`http://localhost:3000/api/users`, (data) => {
        console.log(data);})