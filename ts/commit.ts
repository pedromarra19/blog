

const commitsData = [
    {
        id: 1,
        postID: 1,
        imageUrl: 'https://picsum.photos/id/1/1200/800',
        comments: [
          {
            email: 'email@email.com',
            body: 'Post Legal'
          },
          {
            email: 'email@email.com',
            body: 'Muito interessante'
          },
          {
            email: 'email@email.com',
            body: 'A melhor coisa que eu ja vi na minha vida'
          }
        ]
        
    },
    {
        id: 3,
        postID: 3,
        imageUrl: 'https://picsum.photos/id/3/1200/800',
        comments: [
          {
            email: 'email@email.com',
            body: 'Post Legal'
          },
          {
            email: 'email@email.com',
            body: 'Muito interessante'
          },
          {
            email: 'email@email.com',
            body: 'A melhor coisa que eu ja vi na minha vida'
          }
        ]
    },
    {
        id: 6,
        postID: 6,
        imageUrl: 'https://picsum.photos/id/6/1200/800',
        comments: [
          {
            email: 'email@email.com',
            body: 'Post Legal'
          },
          {
            email: 'email@email.com',
            body: 'Muito interessante'
          },
          {
            email: 'email@email.com',
            body: 'A melhor coisa que eu ja vi na minha vida'
          }
        ]
    },
  ]
  
  const commitsCard = ({ body, id, postID, comments, imageUrl }: Posts) => {
    let htmlPost =  `
    <div class='commit'>
      <p class='commit-post' type="p" id='${id}'>
        <div>
          <img src='${imageUrl}' class='commit-img id='${id}' width="500" height="400" align:"middle" />
        </div>
      </p>
    </div>
  `
  if (comments && comments.length > 0) {
    comments.forEach(({email, body}) => {
      htmlPost += `
        <div class="comment"> 
           <h2>${email}</h2>
           <p class="body-comment">${body} </p>
        </div>
      `
    })
  }

  return htmlPost;

  };
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = parseInt(urlParams.get('id') as string);

  const commitsList = document.getElementById('posts-list')

  const selectedPost = commitsData.find(c => c.id == id)
  
  if (commitsList && selectedPost) {
    let commitsDataToHTML = commitsCard(selectedPost as Posts)
  
    commitsList.innerHTML = commitsDataToHTML
  
  }
  