import { AuthRedirectWrapper, PageWrapper } from 'wrappers';
import { Transaction } from './Transaction';

export const Home = () => {
  return (
    <AuthRedirectWrapper requireAuth={false}>
      <PageWrapper>
        <div className='flex flex-col-reverse sm:flex-row items-center h-full w-full'>
          <div className='flex items-start sm:items-center h-full sm:w-2/2 sm:bg-center'>
            <div className='flex flex-col gap-2 max-w-[70sch] text-center sm:text-left text-xl font-medium md:text-2xl lg:text-3xl'>
              <div>
                <h1> </h1>
                <p className='text-gray-600'>
                  The{' '}
                  <a
                    href='http://xartists.webflow.io'
                    target='_blank'
                    className='text-blue-400 underline decoration-dotted hover:decoration-solid'
                  >
                    xArtists
                  </a>{' '}
                  Dapp coming soon.. {' '}
                  <br className='hidden xl:block' />
                  {' '}
                  <a
                    href='https://multiversx.com/'
                    target='_blank'
                    className='text-green-400 underline decoration-dotted hover:decoration-solid'
                  >
                    MultiversX
                  </a>{' '}
                  blockchain.
                </p>
              </div>
              <Transaction />
            </div>
          </div>
          <div className='h-5/6 bg-mvx-white bg-contain bg-center bg-no-repeat w-1/2 bg-center' />
        </div>
      </PageWrapper>
    </AuthRedirectWrapper>
  );
};
