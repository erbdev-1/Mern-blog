import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover "
          w="735"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Erbdev</Link>
          <span>on</span>
          <Link className="text-blue-800">WORLD</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
          minima recusandae. Ad a illum praesentium fuga dolorem enim, facere
          excepturi doloribus quam iusto sapiente accusamus atque
          necessitatibus. Beatae, perspiciatis cum?
        </p>
        <Link to="/test" className="text-blue-800">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
