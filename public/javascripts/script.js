var stripe = Stripe('pk_test_51GyDb8BNgNMzNNfDPtKkqIXrnSE1OukGAW9ROEMfuRXPVzzkfM3qehnlIj096m3r5YpBQ6LHOBdSVNANTG5CckKE00Fo8RIgib');

document.getElementById('checkout').addEventListener("click", function(){
    stripe.redirectToCheckout({
        sessionId: sessionStripeID
      }).then(function (result) {

      });

})

var radios = document.getElementsByName('modeLivraison');

for(var i = radios.length; i--; ) {
    radios[i].addEventListener('change',function(){
      document.getElementById('formML').submit();
    })
}
