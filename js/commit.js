"use strict";
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
];
const commitsCard = ({ body, id, postID, comments, imageUrl }) => {
    let htmlPost = `
    <div class='commit'>
      <p class='commit-post' type="p" id='${id}'>
        <div>
          <img src='${imageUrl}' class='commit-img id='${id}' width="500" height="400" align:"middle" />
        </div>
      </p>
    </div>
  `;
    if (comments && comments.length > 0) {
        comments.forEach(({ email, body }) => {
            htmlPost += `
        <div class="comment"> 
           <h2>${email}</h2>
           <p class="body-comment">${body} </p>
        </div>
      `;
        });
    }
    return htmlPost;
};
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));
const commitsList = document.getElementById('posts-list');
const selectedPost = commitsData.find(c => c.id == id);
if (commitsList && selectedPost) {
    let commitsDataToHTML = commitsCard(selectedPost);
    commitsList.innerHTML = commitsDataToHTML;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvY29tbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxNQUFNLFdBQVcsR0FBRztJQUNoQjtRQUNJLEVBQUUsRUFBRSxDQUFDO1FBQ0wsTUFBTSxFQUFFLENBQUM7UUFDVCxRQUFRLEVBQUUscUNBQXFDO1FBQy9DLFFBQVEsRUFBRTtZQUNSO2dCQUNFLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLElBQUksRUFBRSxZQUFZO2FBQ25CO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsSUFBSSxFQUFFLG9CQUFvQjthQUMzQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLElBQUksRUFBRSwyQ0FBMkM7YUFDbEQ7U0FDRjtLQUVKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLE1BQU0sRUFBRSxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFDQUFxQztRQUMvQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixJQUFJLEVBQUUsWUFBWTthQUNuQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLElBQUksRUFBRSxvQkFBb0I7YUFDM0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixJQUFJLEVBQUUsMkNBQTJDO2FBQ2xEO1NBQ0Y7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxNQUFNLEVBQUUsQ0FBQztRQUNULFFBQVEsRUFBRSxxQ0FBcUM7UUFDL0MsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsSUFBSSxFQUFFLFlBQVk7YUFDbkI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixJQUFJLEVBQUUsb0JBQW9CO2FBQzNCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsSUFBSSxFQUFFLDJDQUEyQzthQUNsRDtTQUNGO0tBQ0o7Q0FDRixDQUFBO0FBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVMsRUFBRSxFQUFFO0lBQ3RFLElBQUksUUFBUSxHQUFJOzs0Q0FFd0IsRUFBRTs7c0JBRXhCLFFBQVEsMkJBQTJCLEVBQUU7Ozs7R0FJeEQsQ0FBQTtJQUNELElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ25DLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFFO1lBQ2pDLFFBQVEsSUFBSTs7aUJBRUQsS0FBSztxQ0FDZSxJQUFJOztPQUVsQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7S0FDSDtJQUVELE9BQU8sUUFBUSxDQUFDO0FBRWhCLENBQUMsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQzNDLE1BQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBVyxDQUFDLENBQUM7QUFFbkQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUV6RCxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUV0RCxJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7SUFDL0IsSUFBSSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsWUFBcUIsQ0FBQyxDQUFBO0lBRTFELFdBQVcsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUE7Q0FFMUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IGNvbW1pdHNEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHBvc3RJRDogMSxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xLzEyMDAvODAwJyxcclxuICAgICAgICBjb21tZW50czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlbWFpbDogJ2VtYWlsQGVtYWlsLmNvbScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdQb3N0IExlZ2FsJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZW1haWw6ICdlbWFpbEBlbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBib2R5OiAnTXVpdG8gaW50ZXJlc3NhbnRlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZW1haWw6ICdlbWFpbEBlbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBib2R5OiAnQSBtZWxob3IgY29pc2EgcXVlIGV1IGphIHZpIG5hIG1pbmhhIHZpZGEnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBwb3N0SUQ6IDMsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMy8xMjAwLzgwMCcsXHJcbiAgICAgICAgY29tbWVudHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZW1haWw6ICdlbWFpbEBlbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBib2R5OiAnUG9zdCBMZWdhbCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAnZW1haWxAZW1haWwuY29tJyxcclxuICAgICAgICAgICAgYm9keTogJ011aXRvIGludGVyZXNzYW50ZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAnZW1haWxAZW1haWwuY29tJyxcclxuICAgICAgICAgICAgYm9keTogJ0EgbWVsaG9yIGNvaXNhIHF1ZSBldSBqYSB2aSBuYSBtaW5oYSB2aWRhJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgcG9zdElEOiA2LFxyXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzYvMTIwMC84MDAnLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAnZW1haWxAZW1haWwuY29tJyxcclxuICAgICAgICAgICAgYm9keTogJ1Bvc3QgTGVnYWwnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlbWFpbDogJ2VtYWlsQGVtYWlsLmNvbScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdNdWl0byBpbnRlcmVzc2FudGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlbWFpbDogJ2VtYWlsQGVtYWlsLmNvbScsXHJcbiAgICAgICAgICAgIGJvZHk6ICdBIG1lbGhvciBjb2lzYSBxdWUgZXUgamEgdmkgbmEgbWluaGEgdmlkYSdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gIF1cclxuICBcclxuICBjb25zdCBjb21taXRzQ2FyZCA9ICh7IGJvZHksIGlkLCBwb3N0SUQsIGNvbW1lbnRzLCBpbWFnZVVybCB9OiBQb3N0cykgPT4ge1xyXG4gICAgbGV0IGh0bWxQb3N0ID0gIGBcclxuICAgIDxkaXYgY2xhc3M9J2NvbW1pdCc+XHJcbiAgICAgIDxwIGNsYXNzPSdjb21taXQtcG9zdCcgdHlwZT1cInBcIiBpZD0nJHtpZH0nPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz0nJHtpbWFnZVVybH0nIGNsYXNzPSdjb21taXQtaW1nIGlkPScke2lkfScgd2lkdGg9XCI1MDBcIiBoZWlnaHQ9XCI0MDBcIiBhbGlnbjpcIm1pZGRsZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxuICBpZiAoY29tbWVudHMgJiYgY29tbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgY29tbWVudHMuZm9yRWFjaCgoe2VtYWlsLCBib2R5fSkgPT4ge1xyXG4gICAgICBodG1sUG9zdCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj4gXHJcbiAgICAgICAgICAgPGgyPiR7ZW1haWx9PC9oMj5cclxuICAgICAgICAgICA8cCBjbGFzcz1cImJvZHktY29tbWVudFwiPiR7Ym9keX0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGh0bWxQb3N0O1xyXG5cclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuICBjb25zdCBpZCA9IHBhcnNlSW50KHVybFBhcmFtcy5nZXQoJ2lkJykgYXMgc3RyaW5nKTtcclxuXHJcbiAgY29uc3QgY29tbWl0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zdHMtbGlzdCcpXHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkUG9zdCA9IGNvbW1pdHNEYXRhLmZpbmQoYyA9PiBjLmlkID09IGlkKVxyXG4gIFxyXG4gIGlmIChjb21taXRzTGlzdCAmJiBzZWxlY3RlZFBvc3QpIHtcclxuICAgIGxldCBjb21taXRzRGF0YVRvSFRNTCA9IGNvbW1pdHNDYXJkKHNlbGVjdGVkUG9zdCBhcyBQb3N0cylcclxuICBcclxuICAgIGNvbW1pdHNMaXN0LmlubmVySFRNTCA9IGNvbW1pdHNEYXRhVG9IVE1MXHJcbiAgXHJcbiAgfVxyXG4gICJdfQ==