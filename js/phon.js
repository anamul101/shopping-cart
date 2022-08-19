



document.getElementById('btn-phon-plus').addEventListener('click', function(){
    const priceUbdate = ubdatePhone(true);

    ubdatePhonePrice(priceUbdate);

    // calculet
    subTotalPrice();
    

})
document.getElementById('btn-phon-minus').addEventListener('click', function(){
   const priceUbdate = ubdatePhone(false);

   ubdatePhonePrice(priceUbdate);
   subTotalPrice();
})