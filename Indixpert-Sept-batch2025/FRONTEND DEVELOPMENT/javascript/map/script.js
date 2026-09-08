var users=[
    {"name":"Rohan","city":"Jaipur","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgfDMZRb2n-LnHjPhW-V_oCuVi6pKwQRmOW5XgsTvx8nlFa5Wfr6mcSFv&s=10"},
    {"name":"Mohan","city":"Jodhpur","image":"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png"},
    {"name":"Sohan","city":"Jaisalmer","image":"https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png"},
    {"name":"Tohan","city":"Pali","image":"https://png.pngtree.com/png-clipart/20241125/original/pngtree-cartoon-user-avatar-vector-png-image_17295195.png"},
    {"name":"Kohan","city":"Mumbai","image":"https://png.pngtree.com/png-clipart/20241125/original/pngtree-cartoon-user-avatar-vector-png-image_17295194.png"}
];

users.map((data,index)=>{
    table.innerHTML+=`
        <tr>
            <td>${index+1}</td>
            <td><img src="${data.image}"></td>
            <td>${data.name}</td>
            <td>${data.city}</td>
        </tr>
    `;
})