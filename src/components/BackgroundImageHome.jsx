import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
const HomeBackgroundImage = () => {
  return (
    <div style={{ display: 'grid' }}>
      <StaticImage
        style={{
          gridArea: '1/1',
        }}
        layout="fullWidth"
        aspectRatio={3 / 1}
        alt=""
        src={'../images/transparentNetwork.png'}
        formats={['auto', 'webp', 'avif']}
      />
      <div
        style={{
          gridArea: '1/1',
          position: 'relative',
          placeItems: 'center',
          display: 'grid',
        }}
      >
        <h1>Hero text</h1>
      </div>
    </div>
  )
}

export default HomeBackgroundImage
