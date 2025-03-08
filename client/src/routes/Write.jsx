import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Sign in to write</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a new Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white ">
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="Title"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-md bg-white shadow-md"
          >
            <option value="general">GENERAL</option>
            <option value="world">WORLD</option>
            <option value="business">BUSINESS</option>
            <option value="technology">TECHNOLOGY</option>
            <option value="entertainment">ENTERTAINMENT</option>
            <option value="sports">SPORTS</option>
            <option value="science">SCIENCE</option>
            <option value="health">HEALTH</option>
            <option value="nation">NATION</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-md bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
