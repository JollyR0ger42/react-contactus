export const getLayoutData = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        ok: true,
        json: () => {
          return {
            navbar: [
              {
                label: 'Home',
                link: '/home'
              },
              {
                label: 'Features',
                links: [
                  {
                    label: 'Feature 1',
                    link: '/feature1'
                  },
                  {
                    label: 'Feature 2',
                    link: '/feature2'
                  },
                  {
                    label: 'Feature 3',
                    link: '/feature3'
                  }
                ]
              },
              {
                label: 'Blog',
                link: '/blog'
              },
              {
                label: 'Shop',
                link: '/shop'
              },
              {
                label: 'About',
                link: '/about'
              },
              {
                label: 'Contact',
                link: '/contact'
              }
            ]
          }
        }
      })
    }, 300)
  })
}