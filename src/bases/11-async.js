const  getImagen = async() => {
   try{
      const apiKey = 'jcsM8EOWCtadtKhyY15J8VTypUj3XdmZ';
      const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      const {data} = await peticion.json();
      const { url } = data.images.original;
   
      const img = document.createElement('img');
         img.src = url
   
         document.body.append(img);
   } catch(error){
      console.error(error);
   }
}

getImagen().then(console.log);