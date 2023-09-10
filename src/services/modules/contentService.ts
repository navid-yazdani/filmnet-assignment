import { request } from "../config/publicRequest";
import { ContentParamsInterface } from "../type";

const ContentService = {
  getContentList(params: ContentParamsInterface) {
    return request.get(
      `/video-contents?offset=${params.offset}&count=${params.count}&order=latest&types=single_video&types=series&types=video_content_list`
    );
  },
};

export default ContentService;
