import axios from "axios";
import Video from "component/molecules/Video/Video";
import { Box } from "component/template/layouts/Box.styled";
import LayoutMain from "component/template/layouts/LayoutMain";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;
  try {
    const { data: matadata } = await axios.get(
      `https://images-assets.nasa.gov/video/${id}/metadata.json`
    );

    return {
      props: {
        data: {
          ...matadata,
        },
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};

const Details = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <LayoutMain>
      <Box>
        <Video data={data} />
      </Box>
    </LayoutMain>
  );
};

export default Details;
