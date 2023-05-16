import React from 'react'
import FooterBottomList from './FooterBottomList'

const FooterBottom = () => {
  let date = new Date().getFullYear()
  const arr = [
    {
      _id: '01',
      title: 'Amazon Music',
      products: 'Stream millions of songs'
    },
    {
      _id: '02',
      title: 'Amazon Advertising',
      products: 'Find, attract, and engage customers'
    },
    {
      _id: '03',
      title: '6pm',
      products: 'Score deals on fashion brands'
    },
    {
        _id: '04',
        title: 'AbeBooks',
        products: 'Books, art & collectibles'
    },
    {
          _id: '05',
          title: 'ACX',
          products: 'Audiobook Publishing Made Easy'
    },
    {
      _id: '06',
      title: 'Sell on Amazon',
      products: 'Start a Selling Account'
    },
    {
    _id: '07',
    title: 'Amazon Business',
    products: 'Everything For Your Business'
    },
    {
      _id: '08',
      title: 'AmazonGlobal',
      products: 'Ship Orders Internationally'
    },
    {
      _id: '09',
      title: 'Home Services',
      products: 'Experienced Pros Happiness Guarantee'
    },
    {
      _id: '10',
      title: 'Amazon Ignite',
      products: 'Sale your original Digital Educational Resources'
    },
    {
      _id: '11',
      title: 'Amazon Web Services',
      products: 'Scalable Cloud Computing Services'
    },
    {
      _id: '12',
      title: 'Audible',
      products: 'Listen to Books & Original Audio Performances'
    },
    {
      _id: '13',
      title: 'Book Depository',
      products: 'Books With Free Delivery Worldwide'
    },
    {
      _id: '14',
      title: 'Box Office Mojo',
      products: 'Find Movie Box Office Data'
    },
    {
      _id: '15',
      title: 'ComiXology',
      products: 'Thousands of Digital Comics'
    },
    {
      _id: '16',
      title: 'DPReview',
      products: 'Digital Photography'
    },
    {
      _id: '17',
      title: 'Fabric',
      products: 'Sewing, Quilting & Knitting'
    },
    {
      _id: '18',
      title: 'Goodreads',
      products: 'Book reviews & recommendations'
    },
    {
      _id: '19',
      title: 'IMDb',
      products: 'Movies, TV & Celebrities'
    },
    {
      _id: '20',
      title: 'IMDbPro',
      products: 'Get Info Entertainment Professionals Need'
    },
    {
      _id: '21',
      title: 'Kindle Direct Publishing',
      products: 'Indie Digital & Print Publishing Made Easy'
    },
    {
      _id: '22',
      title: 'Prime Video Direct',
      products: 'Video Distribution Made Easy'
    },
    {
      _id: '23',
      title: 'Shopbop',
      products: 'Designer Fashion Brands'
    },
    {
      _id: '24',
      title: 'Woot!',
      products: 'Deals and Shenanigans'
    },
    {
      _id: '25',
      title: 'Zappos',
      products: 'Shoes & Clothing'
    },
    {
      _id: '26',
      title: 'Ring',
      products: 'Smart Home Security Systems'
    },
    {
      _id: '27',
      title: 'eero WiFi',
      products: 'Stream 4K Video in Every Room'
    },
    {
      _id: '28',
      title: 'Blink',
      products: 'Smart Security for Every Home'
    },
    {
      _id: '29',
      title: 'Neighbors App',
      products: 'Real-Time Crime & Safety Alerts'
    },
    {
      _id: '30',
      title: 'Amazon Subscription Boxes',
      products: 'Top subscription boxes – right to your door'
    },
    {
      _id: '31',
      title: 'PillPack',
      products: 'Pharmacy Simplified'
    },                          
  ]
  return (
    <div className='bg-[#101a22] w-full py-7'>
      <div className=' max-w-5xl w-full mx-auto text-white'>
        <div className='gridStyle grid grid-cols-7 gap-6 justify-items-start'>
          {
            arr.map((node) => (
              <FooterBottomList key={node._id} title={node.title} products={node.products} />
            ))
          }
        </div>
        <div className='flex items-center flex-col pt-[10px] justify-center text-xs text-white'>
          <p>Conditions of Use  Privacy Notice  Your Ads Privacy Choices</p>
          <p>&#169; 1996-<span>{date}</span>,Amazon.com,Inc.or it's affiliates</p>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
