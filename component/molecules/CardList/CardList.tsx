import { Card, Image } from "antd";
import { GridWrapper } from "component/template/layouts/Box.styled";
import { useRouter } from "next/router";
import { IData } from "utils/type";

type ICard = {
  preview: string;
} & IData;

const CardList = ({ data }: { data: ICard[] }) => {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push(`/detail/${id}`);
  };

  return (
    <GridWrapper>
      {data.map((item: ICard) => (
        <Card
          hoverable
          onClick={() => {
            handleClick(item.nasa_id);
          }}
          key={item.nasa_id}
          cover={
            <Image
              height={300}
              preview={false}
              alt="example"
              src={item.preview}
            />
          }
        >
          <Card.Meta title={item.title} />
        </Card>
      ))}
    </GridWrapper>
  );
};

export default CardList;
