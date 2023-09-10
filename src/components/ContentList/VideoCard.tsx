import ContentDataInterface, {
  CategoryInterface,
} from "../../pages/Content/type";
import { relativeTime } from "../../utiles";
import { styled } from "styled-components";

const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  padding-block: 10px;
  direction: rtl;

  .card-body {
    position: relative;
    height: 226px;
    width: 162px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #e0e0e0;
  }

  .details-bg {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 226px;
    width: 162px;
    top: 0;
    right: 0;
    background-color: rgba(28, 28, 28, 0.8);
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }

    div {
      margin-bottom: 1rem;
      padding: 0 12px;
    }
  }

  img {
    object-fit: cover;
  }

  .text-truncate {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

interface CategoryDetailsInterface {
  categories: CategoryInterface[];
  year: number;
}

const Categories = ({ categories, year }: CategoryDetailsInterface) => {
  return categories.map((category) =>
    category.type === "genre" || category.type === "territory" ? (
      <div key={category.type} className="text-truncate">
        {category.type === "territory" && year + " / "}
        {category.items.map((item, itemIndex) => (
          <span key={itemIndex}>
            {itemIndex > 0 && "، "}
            {item.title}
          </span>
        ))}
      </div>
    ) : null
  );
};

const VideoCard = ({ videoProps }: { videoProps: ContentDataInterface }) => {
  return (
    <CustomCard>
      <div className="card-body">
        <img
          src={videoProps.poster_image?.path}
          alt={videoProps.title}
          loading="lazy"
          width="100%"
          height="auto"
        />

        <div className="details-bg">
          <Categories
            categories={videoProps.categories}
            year={videoProps.year}
          />

          {videoProps.duration && (
            <div>{relativeTime(videoProps.duration)}</div>
          )}

          {videoProps.imdb_rank_percent > 0 && (
            <div>IMDB {videoProps.imdb_rank_percent / 10}</div>
          )}
        </div>
      </div>
      <div className="text-truncate">{videoProps.title}</div>
    </CustomCard>
  );
};

export default VideoCard;
