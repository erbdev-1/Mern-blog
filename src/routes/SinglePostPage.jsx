import { Link, Links } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            provident.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Erbdev</Link>
            <span>on</span>
            <Link className="text-blue-800">WORLD</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            laudantium nobis eligendi facere molestias. Error eaque aspernatur
            ea repellat fugiat.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            nesciunt repellendus perspiciatis aut corrupti labore eligendi ut,
            consequuntur asperiores, quae illo dolorem dolorum id provident
            aspernatur fuga inventore consequatur harum vero, quas fugit?
            Praesentium veniam nostrum ut laborum commodi quisquam perspiciatis
            labore nemo qui numquam vel laboriosam nesciunt hic unde rem quo aut
            accusantium dolore fuga, quibusdam autem sapiente repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            nesciunt repellendus perspiciatis aut corrupti labore eligendi ut,
            consequuntur asperiores, quae illo dolorem dolorum id provident
            aspernatur fuga inventore consequatur harum vero, quas fugit?
            Praesentium veniam nostrum ut laborum commodi quisquam perspiciatis
            labore nemo qui numquam vel laboriosam nesciunt hic unde rem quo aut
            accusantium dolore fuga, quibusdam autem sapiente repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            nesciunt repellendus perspiciatis aut corrupti labore eligendi ut,
            consequuntur asperiores, quae illo dolorem dolorum id provident
            aspernatur fuga inventore consequatur harum vero, quas fugit?
            Praesentium veniam nostrum ut laborum commodi quisquam perspiciatis
            labore nemo qui numquam vel laboriosam nesciunt hic unde rem quo aut
            accusantium dolore fuga, quibusdam autem sapiente repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            nesciunt repellendus perspiciatis aut corrupti labore eligendi ut,
            consequuntur asperiores, quae illo dolorem dolorum id provident
            aspernatur fuga inventore consequatur harum vero, quas fugit?
            Praesentium veniam nostrum ut laborum commodi quisquam perspiciatis
            labore nemo qui numquam vel laboriosam nesciunt hic unde rem quo aut
            accusantium dolore fuga, quibusdam autem sapiente repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            nesciunt repellendus perspiciatis aut corrupti labore eligendi ut,
            consequuntur asperiores, quae illo dolorem dolorum id provident
            aspernatur fuga inventore consequatur harum vero, quas fugit?
            Praesentium veniam nostrum ut laborum commodi quisquam perspiciatis
            labore nemo qui numquam vel laboriosam nesciunt hic unde rem quo aut
            accusantium dolore fuga, quibusdam autem sapiente repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            nesciunt repellendus perspiciatis aut corrupti labore eligendi ut,
            consequuntur asperiores, quae illo dolorem dolorum id provident
            aspernatur fuga inventore consequatur harum vero, quas fugit?
            Praesentium veniam nostrum ut laborum commodi quisquam perspiciatis
            labore nemo qui numquam vel laboriosam nesciunt hic unde rem quo aut
            accusantium dolore fuga, quibusdam autem sapiente repellendus.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mt-8 mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                w="48"
                h="48"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <Link>Erbdev</Link>
            </div>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">GENERAL</Link>
            <Link className="underline" to="/">
              WORLD
            </Link>
            <Link className="underline" to="/">
              BUSINESS
            </Link>
            <Link className="underline" to="/">
              TECHNOLOGY
            </Link>
            <Link className="underline" to="/">
              ENTERTAINMENT
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">
            <Search />
          </h1>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
