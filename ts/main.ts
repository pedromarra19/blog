
const postsData = [
  {
    id: 1,
    title: 'Post 1',
    body: 'Body of post 1',
    imageUrl: 'https://picsum.photos/id/1/1200/800',
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'Body of post 3',
    imageUrl: 'https://picsum.photos/id/3/1200/800',
  },
  {
    id: 6,
    title: 'Post 6',
    body: 'Body of post 6',
    imageUrl: 'https://picsum.photos/id/6/1200/800',
  }
]

const postCard = ({ body, id, imageUrl, title }) => `
  <div class='post'>
    <button type='button' class='post-btn' id='${id}'>
      <img src='${imageUrl}' alt='${title}' />
      <div>
        <h1>${title}</h1>
        <p>${body}</p>
      </div>
    </button>
  </div>
`;


const postsList = document.getElementById('posts-list')

if (postsList) {
  let postsDataToHTML = ''

  for (const postData of postsData) {  
    postsDataToHTML += postCard(postData)
  }

  postsList.innerHTML = postsDataToHTML

  const postButtons = document.querySelectorAll('.post-btn');
  postButtons.forEach((button) => {
    button.addEventListener('click', function () {
      console.log(+this.id);
    });
  });
}
