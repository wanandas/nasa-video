import axios from "axios";
import Nodata from "component/atom/Nodata/Nodata";
import CardList from "component/molecules/CardList/CardList";
import { Box } from "component/template/layouts/Box.styled";
import LayoutMain from "component/template/layouts/LayoutMain";
import { GetServerSidePropsContext } from "next";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { IData, ILink } from "utils/type";

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { q } = ctx.query;

  if (!q) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const {
    data: { collection },
  } = await axios.get(
    `https://images-api.nasa.gov/search?q=${q}&media_type=video`
  );

  const data = collection.items.map(
    (item: { data: IData[]; links: ILink[] }) => {
      return {
        preview: item?.links![0]?.href,
        center: item?.data![0]?.center || "",
        title: item?.data![0]?.title || "",
        photographer: item?.data![0]?.photographer || "",
        keywords: item?.data![0]?.keywords || [],
        location: item?.data![0]?.location || "",
        nasa_id: item?.data![0]?.nasa_id,
        media_type: item?.data![0]?.media_type || "",
        date_created: item?.data![0]?.date_created || "",
        description: item?.data![0]?.description || "",
      };
    }
  );
  return {
    props: {
      data: data || [],
    },
  };
};

export default function List({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <LayoutMain>
      <Box>{data.length > 0 ? <CardList data={data} /> : <Nodata />}</Box>
    </LayoutMain>
  );
}
