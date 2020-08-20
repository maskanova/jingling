var allow = ['google','facebook','bing','yandex','yahoo','geevv', 'ducduckgo']; 
//Sumber lalu lintas yang diizinkan buat akses Blog
	var valid = false;
    if(!document.referrer ==''){
        for(var i = allow.length; i--;){
            if(document.referrer.toLowerCase().includes(allow[i].toLowerCase())){
				valid = true;
				break;
            }
        }
      if(valid==false){
		window.location = document.referrer; 
    //Arahkan ke Web Jingling jika tidak sesuai dengan sumber lalulintas diatas
      }
    }
