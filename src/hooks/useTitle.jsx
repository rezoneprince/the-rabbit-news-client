import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}- The Rabbit News`;
  }, [title]);
};

export default useTitle;
