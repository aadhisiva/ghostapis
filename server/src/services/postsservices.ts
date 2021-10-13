import { Service } from 'typedi';
import { PostsRepo } from '../repository/postsrepo';

@Service()
export class PostsService {
    constructor(public PostsRepo: PostsRepo) { }

    async InsertAllPosts(){
        return await this.PostsRepo.InsertAllPosts();
    }

    async FetchWithOutMeta(){
        return await this.PostsRepo.FetchWithOutMeta();
    }

    async FetchWithMeta(){
        return await this.PostsRepo.FetchWithMeta();
    }

    async FetchUrlPosts(){
      let urlRes: any =  await this.PostsRepo.FetchUrlPosts();
      console.log("urlRes:::",urlRes)
      return (urlRes.length == 0) ? "morethan 100 char url is not in posts!!" : urlRes;
    }

    async FetchWithOutImage(){
        let feature_image: any =  await this.PostsRepo.FetchWithOutImage();
        // console.log("featured-image",feature_image)
        return (feature_image.length == 0) ? "without feature_image is not in posts!!" : feature_image;
    }

    async FetchShortPosts(){
       let resShortPosts: any =   await this.PostsRepo.FetchShortPosts();
       return (resShortPosts.length == 0) ? "below 250 word post is not in posts!!" : resShortPosts;
    }

    async FetchLongPosts(){
        let resLongPosts: any = await this.PostsRepo.FetchLongPosts();
        return (resLongPosts.length == 0) ? "morethan 1500 word post is not in posts!!" : resLongPosts;
    }

}