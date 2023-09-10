import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ContentService } from "../../services/index";
import ContentDataInterface from "../../pages/Content/type";
import { ContentParamsInterface } from "../../services/type";

interface ListInterface {
  list: ContentDataInterface[] | null;
}
const initialState: ListInterface = {
  list: null,
};

export const contentList = createAsyncThunk('video-contents', async (params: ContentParamsInterface) => {
  const response = await ContentService.getContentList(params);
  return response?.data;
});

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(
      contentList.fulfilled,
      (state, action: PayloadAction<ContentDataInterface[]>) => {
        state.list = state.list
          ? [...state.list, ...action.payload]
          : action.payload;
      }
    );
  },
});

export default contentSlice.reducer;
