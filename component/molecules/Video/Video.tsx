import { Badge, Typography } from "antd";
import { IVideoMeta } from "utils/type";
import {
  BadgeWrapper,
  VideoDetailWrapper,
  VideoStyledCustom,
  VideoWrapper,
} from "./Video.styled";

const Video = ({ data }: { data: IVideoMeta }) => {
  return (
    <VideoWrapper>
      <VideoStyledCustom>
        <video muted controls autoPlay>
          <source
            src={`https://images-assets.nasa.gov/video/${data["AVAIL:NASAID"]}/${data["AVAIL:NASAID"]}~medium.mp4`}
            type="video/mp4"
          />
        </video>
      </VideoStyledCustom>

      <BadgeWrapper>
        {data["AVAIL:Keywords"].map((item) => (
          <Badge
            key={item}
            count={item}
            style={{ backgroundColor: "#52c41a" }}
          />
        ))}
      </BadgeWrapper>
      <VideoDetailWrapper>
        <Typography.Title level={2} style={{ marginBottom: "1rem" }}>
          {data["AVAIL:Title"]}
        </Typography.Title>
        {data["AVAIL:DateCreated"] && (
          <Typography.Paragraph>
            {`Date Created: ${data["AVAIL:DateCreated"]}`}
          </Typography.Paragraph>
        )}
        {data["AVAIL:Location"] && (
          <Typography.Paragraph>
            {`Location: ${data["AVAIL:Location"]}`}
          </Typography.Paragraph>
        )}
        {data["AVAIL:Photographer"] && (
          <Typography.Paragraph>
            {`Photographer: ${data["AVAIL:Photographer"]}`}
          </Typography.Paragraph>
        )}
        {data["AVAIL:Center"] && (
          <Typography.Paragraph>
            {`Center: ${data["AVAIL:Center"]}`}
          </Typography.Paragraph>
        )}
        {data["AVAIL:Description"] && (
          <Typography.Paragraph>
            {`Description: ${data["AVAIL:Description"]}`}
          </Typography.Paragraph>
        )}
      </VideoDetailWrapper>
    </VideoWrapper>
  );
};

export default Video;
