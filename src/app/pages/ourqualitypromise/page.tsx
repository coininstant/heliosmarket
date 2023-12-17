import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';

const OurQualityPromisePage: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-white-900 sm:text-6xl'>
          Elevating Standards: Our{' '}
          <span className='text-purple-600'>Quality Promise 🤝</span>
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground text-left'>
          <span className='ml-7'>At HeliosMarket, we are dedicated to delivering an unparalleled standard of quality.
          Our commitment goes beyond words – it's embedded in every asset featured on our platform.
          Here's what you can expect from our Quality Promise:</span>
        </p>

        <ul className='mt-4 text-lg max-w-prose text-muted-foreground list-inside list-disc text-left'>
          <li>
            <strong>Verification Process:</strong> Each asset undergoes a meticulous verification
            process conducted by our expert team to ensure accuracy, authenticity, and compliance
            with our stringent quality standards.
          </li>
          <li>
            <strong>Transparency:</strong> We believe in transparency. Detailed information and
            attributes of each asset are provided, empowering you to make informed decisions based
            on your unique requirements.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> Our commitment to quality extends beyond
            the initial verification. We actively seek feedback, monitor industry trends, and
            implement continuous improvements to elevate the quality of our offerings.
          </li>
          <li>
            <strong>Dedicated Support:</strong> Should you have any questions or concerns about
            the quality of an asset, our support team is here to assist you. Your satisfaction is
            our top priority.
          </li>
        </ul>

        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Choose HeliosMarket with confidence, knowing that our Quality Promise is a testament
          to our unwavering commitment to excellence.
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default OurQualityPromisePage;