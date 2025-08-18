export type BannerItem = {
  id: string
  src: string
  alt: string
  href?: string
  priority?: boolean
  className?: string
  height?: string
  ariaLabel?: string
}

export type BannerContent = {
  title?: string
  subtitle?: string
  heroImage?: string
  rightTopImage?: string
  rightBottomImage?: string
  homeBanners?: BannerItem[]
  bannerCards?: BannerItem[]
  promoBanner?: BannerItem
}


