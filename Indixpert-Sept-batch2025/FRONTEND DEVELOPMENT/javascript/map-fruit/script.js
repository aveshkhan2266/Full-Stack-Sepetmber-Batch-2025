fruits = [
    {
        name:"Apple",
        Price: 120,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
    },
    {
        name:"Orange",
        Price: 80,
        image: "https://media.istockphoto.com/id/477836156/photo/orange-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=NQYciPqF0kRqnDMx7Vy96Qhtx2c37OiKPXtjMR3Oy-Y="
    },
    {
        name:"Mango",
        Price: 100,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyA9WcBMuTjLYXo9bKZBRYAqv5eB7uybi50UHYnNlrUFo_w0OXvjLFhO7K&s=10"
    },
    {
        name:"Grapes",
        Price: 50,
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg"
    },
    {
        name:"Banana",
        Price: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVU37kkNfYVSfdXnLMvRIxV2lSo_0jR6LWgPrIYYIEMQ&s=10"
    },
    {
        name:"Watermalon",
        Price: 70,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVY0SlXwO05qhiOfacT59tHYmugwuMW0yeaIiiEO7cVEXPtpIvGqfaaWQ&s=10"
    }
];

row = document.getElementById("fruitrow")

fruits.map((data, index) => {
    row.innerHTML += `
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${data.image}" class="card-img-top" height="320">
                <div class="card-body">
                    <h5>${data.name}</h5>
                    <p>Price : ₹${data.Price}</p>
                    <button class="btn btn-success">Add To Cart</button>
                </div>
            </div>
        </div>
    `;
});