let btn = document.getElementById("btn");
let output = document.getElementById("output");


let promise1 = function () {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      fetch("https://dummyjson.com/posts")
        .then((response) => response.json())
        .then((data) => {

          output.innerHTML += `
            <div id="posts">
              <h2>Posts</h2>

              <table border="1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Tags</th>
                    <th>Likes</th>
                    <th>Dislikes</th>
                    <th>Views</th>
                    <th>User ID</th>
                  </tr>
                </thead>

                <tbody id="posts-body"></tbody>
              </table>
            </div>
          `;

          let postsBody = document.getElementById("posts-body");

          data.posts.map((post) => {

            postsBody.innerHTML += `
              <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
                <td>${post.tags.join(", ")}</td>
                <td>${post.reactions.likes}</td>
                <td>${post.reactions.dislikes}</td>
                <td>${post.views}</td>
                <td>${post.userId}</td>
              </tr>
            `;

          });
          resolve(true);

        })
        .catch((error) => {
          reject(error);
        });

    }, 1000);

  });
};


let promise2 = function () {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {

          output.innerHTML += `
            <div id="products">
              <h2>Products</h2>

              <table border="1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Stock</th>
                    <th>Brand</th>
                  </tr>
                </thead>

                <tbody id="products-body"></tbody>
              </table>
            </div>
          `;

          let productsBody = document.getElementById("products-body");

          data.products.map((product) => {

            productsBody.innerHTML += `
              <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
                <td>${product.rating}</td>
                <td>${product.stock}</td>
                <td>${product.brand}</td>
              </tr>
            `;

          });

          resolve(true);

        })
        .catch((error) => {
          reject(error);
        });

    }, 2000);

  });
};


let promise3 = function () {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      fetch("https://dummyjson.com/todos")
        .then((response) => response.json())
        .then((data) => {

          output.innerHTML += `
            <div id="todo">
              <h2>Todos</h2>

              <table border="1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Todo</th>
                    <th>Completed</th>
                    <th>User ID</th>
                  </tr>
                </thead>

                <tbody id="todos-body"></tbody>
              </table>
            </div>
          `;

          let todosBody = document.getElementById("todos-body");

          data.todos.map((todo) => {

            todosBody.innerHTML += `
              <tr>
                <td>${todo.id}</td>
                <td>${todo.todo}</td>
                <td>${todo.completed}</td>
                <td>${todo.userId}</td>
              </tr>
            `;

          });

          resolve(true);

        })
        .catch((error) => {
          reject(error);
        });

    }, 3000);

  });
};


btn.addEventListener("click", function () {

  output.innerHTML = "";

  promise1()
    .then((success) => {

      if (success) {
        return promise2();
      }

    })
    .then((success) => {

      if (success) {
        return promise3();
      }

    })
    .then(() => {

      console.log("All APIs completed");

    })
    .catch((error) => {

      console.log(error);

    });

});