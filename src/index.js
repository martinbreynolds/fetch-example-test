function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // for (var i = 0; i<data.length; i++){
      // var title = (data[i].title);
      // var body = (data[i].body)
      // }

      const html = data
        .map((post) => {
          return `
        <div class="holder">
          <h1 class="ipost">${post.title}</h1>
          
        <p>${post.body}</p>
        
        </div>`;
        })
        .join("");

      //   const title = data.map(post =>{
      //   return (post.title)
      // })

      // document.querySelector('#title').innerHTML = title
      document.querySelector("#allData").innerHTML = html;
    });
}

getData();
