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
    <button type='button' class='post-btn' id='${id}' onclick="window.open('./commits.html', '_blank')" >
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0sU0FBUyxHQUFHO0lBQ2hCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLHFDQUFxQztLQUNoRDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLHFDQUFxQztLQUNoRDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLHFDQUFxQztLQUNoRDtDQUNGLENBQUE7QUFFRCxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDOztpREFFSCxFQUFFO2tCQUNqQyxRQUFRLFNBQVMsRUFBRSxVQUFVLEtBQUs7O2NBRXRDLEtBQUs7YUFDTixJQUFJOzs7O0NBSWhCLENBQUM7QUFHRixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBRXZELElBQUksU0FBUyxFQUFFO0lBQ2IsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFBO0lBRXhCLEtBQUssTUFBTSxRQUFRLElBQUksU0FBUyxFQUFFO1FBQ2hDLGVBQWUsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7S0FDdEM7SUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQTtDQUd0QyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcG9zdHNEYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdQb3N0IDEnLFxuICAgIGJvZHk6ICdCb2R5IG9mIHBvc3QgMScsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMS8xMjAwLzgwMCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ1Bvc3QgMycsXG4gICAgYm9keTogJ0JvZHkgb2YgcG9zdCAzJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8zLzEyMDAvODAwJyxcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIHRpdGxlOiAnUG9zdCA2JyxcbiAgICBib2R5OiAnQm9keSBvZiBwb3N0IDYnLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzYvMTIwMC84MDAnLFxuICB9XG5dXG5cbmNvbnN0IHBvc3RDYXJkID0gKHsgYm9keSwgaWQsIGltYWdlVXJsLCB0aXRsZSB9KSA9PiBgXG4gIDxkaXYgY2xhc3M9J3Bvc3QnPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0ncG9zdC1idG4nIGlkPScke2lkfScgb25jbGljaz1cIndpbmRvdy5vcGVuKCcuL2NvbW1pdHMuaHRtbCcsICdfYmxhbmsnKVwiID5cbiAgICAgIDxpbWcgc3JjPScke2ltYWdlVXJsfScgaWQ9JyR7aWR9JyBhbHQ9JyR7dGl0bGV9JyB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjQwMFwiIGFsaWduOlwibWlkZGxlXCIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT4ke3RpdGxlfTwvaDE+XG4gICAgICAgIDxwPiR7Ym9keX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5gO1xuXG5cbmNvbnN0IHBvc3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0cy1saXN0JylcblxuaWYgKHBvc3RzTGlzdCkge1xuICBsZXQgcG9zdHNEYXRhVG9IVE1MID0gJydcblxuICBmb3IgKGNvbnN0IHBvc3REYXRhIG9mIHBvc3RzRGF0YSkgeyAgXG4gICAgcG9zdHNEYXRhVG9IVE1MICs9IHBvc3RDYXJkKHBvc3REYXRhKVxuICB9XG5cbiAgcG9zdHNMaXN0LmlubmVySFRNTCA9IHBvc3RzRGF0YVRvSFRNTFxuXG5cbn1cbiJdfQ==