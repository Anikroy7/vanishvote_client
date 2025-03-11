import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const useUserId = () => {
  useEffect(() => {
    let userId = localStorage.getItem("vanishvote_user_id");
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("vanishvote_user_id", `user-${userId}`);
    }
  }, []);
};

export default useUserId;
