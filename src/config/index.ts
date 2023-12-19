export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=ui_kits`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=icons',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Digital Art',
    value: 'digital-art' as const,
    featured: [
      {
        name: 'Favorite Digital Art Picks',
        href: `/products?category=digital-art`,
        imageSrc: '/nav/digital-art/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=digital-art&sort=desc',
        imageSrc: '/nav/digital-art/new.jpg',
      },
      {
        name: 'Bestselling Digital Art',
        href: '/products?category=digital-art',
        imageSrc: '/nav/digital-art/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Courses',
    value: 'courses' as const,
    featured: [
      {
        name: 'Favorite Courses',
        href: `/products?category=courses`,
        imageSrc: '/nav/courses/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=courses&sort=desc',
        imageSrc: '/nav/courses/new.jpg',
      },
      {
        name: 'Bestselling',
        href: '/products?category=courses',
        imageSrc: '/nav/courses/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Other',
    value: 'other' as const,
    featured: [
      {
        name: 'Ai Inspirations',
        href: `/products?category=other`,
        imageSrc: '/nav/other/picks.jpg',
      },
      {
        name: 'Neverending',
        href: '/products?category=other&sort=desc',
        imageSrc: '/nav/other/new.jpg',
      },
      {
        name: 'Everything Else',
        href: '/products?category=other',
        imageSrc: '/nav/other/bestsellers.jpg',
      },
    ],
  },
]
