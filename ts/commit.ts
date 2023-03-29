const commitsData = [
    {
        id: 1,
        postID: 1,
        email: 'email@email.com',
        body: 'commit about post',
    },
    {
        id: 2,
        postID: 1,
        email: 'email@email.com',
        body: 'commit about post',
    },
    {
        id: 3,
        postID: 1,
        email: 'email@email.com',
        body: 'commit about post',
    },
  ]
  
  const commitsCard = ({ body, id, email, postID }) => `
    <div class='commit'>
      <p class='commit-post' type="p" id='${id}'>
        <div>
          <h1>${id} ${email}</h1>
          <p>${body}</p>
        </div>
      </p>
    </div>
  `;
  
  
  const commitsList = document.getElementById('commits-list')
  
  if (commitsList) {
    let commitsDataToHTML = ''
  
    for (const commitData of commitsData) {  
      commitsDataToHTML += commitsCard(commitData)
    }
  
    commitsList.innerHTML = commitsDataToHTML
  
  }
  