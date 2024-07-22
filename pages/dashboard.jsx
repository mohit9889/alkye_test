import Image from "next/image";
import dynamic from "next/dynamic";
import useMobile from "~/hooks/useMobile";
import withAuth from "~/hoc/withAuth";
import { fetchArticleData } from "~/api";

const ImageCarousal = dynamic(() => import("~/components/ImageCarousal"));

const Dashboard = (props) => {
  const { data: articleData } = props;
  const isMobile = useMobile();

  const photographyArticles = articleData.filter(
    (article) => article.prompt === "Photography",
  );
  const learningArticles = articleData.filter(
    (article) => article.prompt === "Learning",
  );

  return (
    <div className="bg-black text-white lg:pb-24 pb-[66px]  pt-[60px] 2xl:pt-[100px] md:pl-[100px] 2xl:pl-[182px]">
      <div className="container flex flex-col mb-[80px]">
        <Image
          src="/assets/logo/Logo_White.png"
          alt="logo"
          height={isMobile ? 29.5 : 59}
          width={isMobile ? 68.5 : 136}
        />
        <h1 className="font-500 text-2xl !leading-[25px] lg:!leading-[50px] lg:text-5xl] mt-[80px]">
          Welcome <span className="underline">Test</span>
        </h1>
        <span className="font-600 text-xs !leading-[25px] md:text-2xl md:!leading-[50px] block mt-[23px]">
          Hope you having a good day!
        </span>
      </div>
      <div className="pl-[20px] sm:pl-[33px]">
        {photographyArticles.length > 0 && (
          <ImageCarousal data={photographyArticles} title="Photography" />
        )}
        {learningArticles.length > 0 && (
          <ImageCarousal data={learningArticles} title="Learning" />
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const token = req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const data = await fetchArticleData(token);

  return {
    props: {
      data,
    },
  };
}

export default withAuth(Dashboard);
