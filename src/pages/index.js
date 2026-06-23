import {
  HeroBanner,
} from '@/components'

import { Layout } from '@/components/layout'

export default function IndexPage() {
  return (
    <Layout
      url={`/`}
      title={'Noordzee Plastic: Waar plastic afval en wetenschap samenkomen'}
      card={
        'https://github.com/Parcels-code/noordzeeplastic.nl/blob/main/public/drifter_logo.svg?raw=true'
      }
      // enableBanner
    >
      <HeroBanner />
    </Layout>
  )
}
