'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';

const RulesAndGuidelines: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <style jsx global>{`
          /* Import the Dancing Script font */
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

          /* Apply the custom font to the headings */
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Dancing Script', cursive;
          }
        `}</style>

        <h1 className='text-4xl font-bold tracking-tight text-white-900 sm:text-6xl'>
          Rules and Guidelines: HeliosMarket 📜
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground text-left'>
          <span className='ml-7'>Welcome to HeliosMarket! To ensure a safe and trustworthy environment, please adhere to the following rules and guidelines:</span>
        </p>

        <ol className='mt-4 text-lg max-w-prose text-muted-foreground list-inside list-decimal text-left'>
          <li>
            <strong>Prohibited Content:</strong> Users shall not utilize HeliosMarket services to post any content that is illegal, fraudulent, deceptive, or harmful. This includes the unauthorized reproduction, distribution, or sharing of items that do not belong to them, unless proper rights have been obtained.
          </li>
          <li>
            <strong>Cryptocurrency Sales:</strong> HeliosMarket strictly prohibits the sale of any form of cryptocurrency, including but not limited to Bitcoin, ICOs, non-icons, coins, tokens, and all digital products of a similar nature. Any attempt to list or sell cryptocurrency will result in the automatic blocking of the post, and the user&apos;s account will be unapproved. Until HeliosMarket can secure chargeback protection through Stripe, which usually takes 6 months, we will not permit users to sell crypto. Please be advised that we do plan to integrate a HIVE Blockchain payment method with HBD and HELIOS soon. Once we add a crypto payment layer we will be open to letting users trade crypto in a P2P manner.
          </li>
          <li>
            <strong>User Support:</strong> Users are entitled to support from the HeliosMarket team. Support services include assistance with buying, selling, posting, password changes, and addressing any queries that may arise during platform usage.
          </li>
          <li>
            <strong>Fee Structure:</strong> A transaction fee of $1.00 USD will be applied to every sale made through HeliosMarket. The applicable fees are clearly outlined on the HeliosMarket shopping cart.
          </li>
          <li>
            <strong>Account Approval:</strong> HeliosMarket reserves the right to review and approve user accounts. Any violation of the terms outlined herein may result in the unapproval or suspension of an account.
          </li>
          <li>
            <strong>Privacy and Security:</strong> Users are responsible for safeguarding their account credentials. Unauthorized access to accounts, as well as any attempts to compromise the security of the platform, will be treated as a violation of these terms.
          </li>
          <li>
            <strong>Content Moderation:</strong> HeliosMarket reserves the right to moderate and remove content that violates these terms. Users are encouraged to report any content that they believe infringes upon these rules.
          </li>
          <li>
            <strong>Legal Compliance:</strong> Users must comply with all applicable laws and regulations while using HeliosMarket services. Any illegal activities will be reported to the relevant authorities.
          </li>
          <li>
            <strong>Changes to Terms:</strong> HeliosMarket retains the right to update or modify these terms at any time. Users will be notified of any significant changes, and continued use of the platform implies acceptance of the updated terms.
          </li>
        </ol>

        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          By using HeliosMarket services, users agree to abide by these terms. Failure to comply may result in account actions or legal consequences.
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default RulesAndGuidelines;
