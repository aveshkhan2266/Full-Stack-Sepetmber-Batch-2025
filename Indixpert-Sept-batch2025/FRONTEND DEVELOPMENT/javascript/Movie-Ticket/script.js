function bill(){
    if(CA.checked){
        // alert("Captain america");
        movie_name="Captain america";
        movie_price=200;
    }
    else if(ST.checked){
        // alert("Sultan");
        movie_name="Sultan";
        movie_price=150;
    }
    else if(KGF.checked){
        // alert("KGF");
        movie_name="KGF";
        movie_price=250;
    }
    else if(BB.checked){
        // alert("Bajrangi Bhaijaan");
        movie_name="Bajrangi Bhaijaan";
        movie_price=100;
    }
    else if(Ag.checked){
        // alert("Avengers");
        movie_name="Avengers";
        movie_price=300;
        
    }
    else if(Aa.checked){
        // alert("Alpha");
        movie_name="Alpha";
        movie_price=150;
        
    }
    else{
        alert("Please select movie first !")
    }


    amount=movie_price*SeatNum.value;

    if(seatType.value=="silver"){
        extraCharge=0;
    }
    else if(seatType.value=="gold"){
        extraCharge=SeatNum.value*100;
    }
    else if(seatType.value=="platinum"){
        extraCharge=SeatNum.value*200;
    }
    else{
        alert("Please select Seat type");
    }



    MovieName.innerHTML="Movie name : "+movie_name;
    MoviePrice.innerHTML="Movie price : "+movie_price;
    SeatNumber.innerHTML="Seat number : "+SeatNum.value;
    SeatType.innerHTML="Seat type : "+seatType.value;
    TotalBill.innerHTML="Total Bill : "+(amount+extraCharge);
}