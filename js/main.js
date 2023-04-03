"use strict";
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
];
const postCard = ({ body, id, imageUrl, title }) => `
  <div class='post'>
    <button type='button' class='post-btn' id='${id}' 
      onclick="window.open('./commits.html?id=${id}', '_blank')" >
      <img src='${imageUrl}' id='${id}' alt='${title}' width="500" height="400" align:"middle" />
      <div>
        <h1>${title}</h1>
        <p>${body}</p>
      </div>
    </button>
  </div>
`;
const postsList = document.getElementById('posts-list');
if (postsList) {
    let postsDataToHTML = '';
    for (const postData of postsData) {
        postsDataToHTML += postCard(postData);
    }
    postsList.innerHTML = postsDataToHTML;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0sU0FBUyxHQUFHO0lBQ2hCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLHFDQUFxQztLQUNoRDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLHFDQUFxQztLQUNoRDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLHFDQUFxQztLQUNoRDtDQUNGLENBQUE7QUFFRCxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFTLEVBQU8sRUFBRSxDQUFDOztpREFFZixFQUFFO2dEQUNILEVBQUU7a0JBQ2hDLFFBQVEsU0FBUyxFQUFFLFVBQVUsS0FBSzs7Y0FFdEMsS0FBSzthQUNOLElBQUk7Ozs7Q0FJaEIsQ0FBQztBQUdGLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUE7QUFFdkQsSUFBSSxTQUFTLEVBQUU7SUFDYixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUE7SUFFeEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUU7UUFDaEMsZUFBZSxJQUFJLFFBQVEsQ0FBQyxRQUFpQixDQUFDLENBQUE7S0FDL0M7SUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQTtDQUd0QyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcG9zdHNEYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdQb3N0IDEnLFxuICAgIGJvZHk6ICdCb2R5IG9mIHBvc3QgMScsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMS8xMjAwLzgwMCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ1Bvc3QgMycsXG4gICAgYm9keTogJ0JvZHkgb2YgcG9zdCAzJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8zLzEyMDAvODAwJyxcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIHRpdGxlOiAnUG9zdCA2JyxcbiAgICBib2R5OiAnQm9keSBvZiBwb3N0IDYnLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzYvMTIwMC84MDAnLFxuICB9XG5dXG5cbmNvbnN0IHBvc3RDYXJkID0gKHsgYm9keSwgaWQsIGltYWdlVXJsLCB0aXRsZSB9OiBQb3N0cyk6IGFueSA9PiBgXG4gIDxkaXYgY2xhc3M9J3Bvc3QnPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0ncG9zdC1idG4nIGlkPScke2lkfScgXG4gICAgICBvbmNsaWNrPVwid2luZG93Lm9wZW4oJy4vY29tbWl0cy5odG1sP2lkPSR7aWR9JywgJ19ibGFuaycpXCIgPlxuICAgICAgPGltZyBzcmM9JyR7aW1hZ2VVcmx9JyBpZD0nJHtpZH0nIGFsdD0nJHt0aXRsZX0nIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgYWxpZ246XCJtaWRkbGVcIiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPiR7dGl0bGV9PC9oMT5cbiAgICAgICAgPHA+JHtib2R5fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbmA7XG5cblxuY29uc3QgcG9zdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3RzLWxpc3QnKVxuXG5pZiAocG9zdHNMaXN0KSB7XG4gIGxldCBwb3N0c0RhdGFUb0hUTUwgPSAnJ1xuXG4gIGZvciAoY29uc3QgcG9zdERhdGEgb2YgcG9zdHNEYXRhKSB7ICBcbiAgICBwb3N0c0RhdGFUb0hUTUwgKz0gcG9zdENhcmQocG9zdERhdGEgYXMgUG9zdHMpXG4gIH1cblxuICBwb3N0c0xpc3QuaW5uZXJIVE1MID0gcG9zdHNEYXRhVG9IVE1MXG5cblxufVxuIl19