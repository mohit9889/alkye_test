import Image from 'next/image';
import dynamic from 'next/dynamic';
import useMobile from '~/hooks/useMobile';
import withAuth from '~/hoc/withAuth';
import { fetchArticleData } from '~/api';

const ImageCarousal = dynamic(() => import('~/components/ImageCarousal'));

const Dashboard = (props) => {
  const { data: articleData } = props;
  const isMobile = useMobile();

  const photographyArticles = articleData.filter((article) => article.prompt === 'Photography');
  const learningArticles = articleData.filter((article) => article.prompt === 'Learning');

  return (
    <div className="bg-black pb-[66px] pt-[60px] text-white md:pl-[100px] lg:pb-24 2xl:pl-[182px] 2xl:pt-[100px]">
      <div className="container mb-[80px] flex flex-col">
        <Image
          src="/assets/logo/Logo_White.png"
          alt="logo"
          height={isMobile ? 29.5 : 59}
          width={isMobile ? 68.5 : 136}
        />
        <h1 className="lg:text-5xl] mt-[80px] text-2xl font-500 !leading-[25px] lg:!leading-[50px]">
          Welcome <span className="underline">Test</span>
        </h1>
        <span className="mt-[23px] block text-xs font-600 !leading-[25px] md:text-2xl md:!leading-[50px]">
          Hope you having a good day!
        </span>
      </div>
      <div className="pl-[20px] sm:pl-[33px]">
        {photographyArticles.length > 0 && (
          <ImageCarousal data={photographyArticles} title="Photography" />
        )}
        {learningArticles.length > 0 && <ImageCarousal data={learningArticles} title="Learning" />}
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
        destination: '/',
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
