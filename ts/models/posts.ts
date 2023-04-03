interface Comments {
    email: string;
    body: string;
}

interface Posts {
    id: number;
    postID: number;
    body: string;
    title: string;
    imageUrl: string;
    comments: Comments[] | undefined
  }
