import { Dispatch } from "react";
import { AnyAction } from "redux";
import { toast } from "react-toastify";

import { GiphyDataResponse } from "../../models/giphy";
import { setGiphy, setLoading } from "../reducers/giphy";

export const searchGiphy =
  (search: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading(true));

      const response = await fetch(
        `${process.env.REACT_APP_GIHPY_API_URL}/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${search}&limit=9&offset=0&rating=g&lang=en`
      );
      if (!response.ok) {
        dispatch(setLoading(false));
        toast.error("Can not get the data!");
        return;
      }

      const responseData = (await response.json()) as GiphyDataResponse;

      dispatch(setGiphy(responseData.data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      toast.error("Can not get the data!");
      throw error;
    }
  };
