'use client'
import { Footer } from '../components';
import Form from '../components/Form/Form';
import { WalletButton } from 'web3easekit';

const createcampaign = () => {
  return (
    <div className='bg-primary-black '>
    <div className='bg-primary-black flex flex-col items-center pb-6'>
      <Form />
    </div>
    
    <Footer />
    </div>
  )
}

export default createcampaign