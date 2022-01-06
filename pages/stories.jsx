import Link from 'next/link';
import Footer from '@components/atoms/footer';

const Stories = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex justify-center">
        <div className="header flex gap-6 w-full max-w-screen-xl p-3 py-6">
          <div className="flex">
            <Link href="/">
              <h1 className="text-primary-900 text-2xl font-resique cursor-pointer select-none">
                Typing Guru
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center pb-32 ">
        <span className="text-primary-900 font-bold text-xl">
          This Page is under construction.
        </span>
      </div>
      <Footer />
    </div>
  );
};

Stories.SSR = true;

export default Stories;