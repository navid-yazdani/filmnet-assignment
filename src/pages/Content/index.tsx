import { FC, ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/type";
import { contentList } from "../../store/slices/contentSlice";
import { ContentParamsInterface } from "../../services/type";
import InfiniteScroll from "../../components/ContentList/InfiniteScroll";
import VideoCard from "../../components/ContentList/VideoCard";
import { styled } from "styled-components";
import VideoLoadingCard from "../../components/ContentList/VideoLoadingCard";

const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0;
  justify-content: end;
  direction: rtl;
`;

const LoadingSection = (
  <>
    <VideoLoadingCard />
    <VideoLoadingCard />
    <VideoLoadingCard />
    <VideoLoadingCard />
  </>
);

const Content: FC = (): ReactElement => {
  const contentData = useAppSelector((state) => state.content.list);
  const dispatch = useAppDispatch();
  const [paramsData, setParamsData] = useState<ContentParamsInterface>({
    offset: 0,
    count: 24,
  });
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    handleContentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleContentData = () => {
    setHasMore(false);
    dispatch(contentList(paramsData));
    setParamsData((prevState) => ({
      ...prevState,
      offset: paramsData.offset += 24,
    }));
    setHasMore(true);
  };

  const getInfiniteScrollProps = () => ({
    hasMore: hasMore,
    next: handleContentData,
    loader: LoadingSection,
  });

  return (
    <>
      {contentData && (
        <InfiniteScroll wrapper={ListWrapper} {...getInfiniteScrollProps()}>
          {contentData.map((item) => (
            <VideoCard key={item.id} videoProps={item} />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
};

export default Content;
