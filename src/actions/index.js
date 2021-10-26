import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from "./types";

import axios from "axios";

export function fetchRecentPosts() {
  return function (dispatch) {
    axios
      .get("https://api.dailysmarty.com/posts", { mode: "no-cors" })
      .then((response) => {
        dispatch({
          type: SET_RECENT_POSTS,
          payload: response.data.posts,
        });
      })
      .catch((error) => {
        console.log(error);
        const ddefault = fetch("../../dailysmarty.response.json");
        dispatch({
          type: SET_RECENT_POSTS,
          payload: ddefault.posts,
        });
      });
  };
}

export function fetchPostsWithQuery(query, callback) {
  return function (dispatch) {
    axios
      .get(`https://api.dailysmarty.com/search?q=${query}`)
      .then((response) => {
        dispatch({
          type: SET_RESULTS_POSTS,
          payload: response.data.posts,
        });
        if (callback) {
          callback();
        }
      })
      .catch((error) => {
        console.log(error);
        const ddefault = fetch("../../dailysmarty.response.json");
        dispatch({
          type: SET_RESULTS_POSTS,
          payload: ddefault.data.posts,
        });
      });
  };
}
