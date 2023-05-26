import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./VideoSection.css";
import VideoItem from "./VideoItem";
import VideoContext from "../Context/VideoContext";
import { NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const VideoSection = () => {
  const videoCtx = useContext(VideoContext);

  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState();
  const [loading, setIsLoading] = useState(false);
  const ref = useRef();
  videoCtx.list = videos;

  const fetchVideosHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://internship-service.onrender.com/videos?page=${page}`
      ); // "response" is a promise
      if (!response.ok) {
        // or we can also use response.status>=200 && <=300
        throw new Error("Something went wrong!");
      }
      const result = await response.json();
      console.log(result);
      console.log(result.data.posts);
      if (videos) {
        setVideos((prev) => {
          return prev.concat(result.data.posts);
        });
      } else {
        setVideos(result.data.posts);
      }

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  useEffect(() => {
    fetchVideosHandler();
  }, [fetchVideosHandler]);

  const changePageHandler = () => {
    setPage((prev) => {
      return prev + 1;
    });
    console.log(page);
  };

  // (THIS IS INFINITE SCROLLING IMPLEMENTATION)
  // Due to the IntersectionObserver API , as soon as the div containing the spinner/loader gets into visual Viewport, we apply "PAGINATION" and fetch the api again with a different page Number
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("visible+`");
          changePageHandler();
        }
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
  let content;

  // adding spinner/loader
  content = <a href="/">No More Pages. Reload.</a>;
  if (loading) {
    content = (
      <ClipLoader
        color="red"
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div className="videos">
      <h1 style={{ marginTop: "70px" }}>recommended</h1>
      <div className="videos_container">
        {/* single video starts */}
        {videos &&
          videos.map((item) => {
            return (
              <NavLink to={`video/${item.postId}`} key={item.postId}>
                <VideoItem item={item} key={item.postId} />
              </NavLink>
            );
          })}
      </div>
      {
        <div
          style={{ textAlign: "center" }}
          ref={ref}
          onClick={changePageHandler}>
          {content}
        </div>
      }
    </div>
  );
};

export default VideoSection;
