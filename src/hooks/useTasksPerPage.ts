import { useState, useEffect } from "react";

export function useTasksPerPage() {
  const [tasksPerPage, setTasksPerPage] = useState(7);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width <= 480) {
        setTasksPerPage(10);
      } else if (width >= 2560) {
        setTasksPerPage(15);
      } else {
        setTasksPerPage(7);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return tasksPerPage;
}
