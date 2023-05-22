import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Animal Toys | ${title}`;
  }, [title]);
};

export default useTitle;
