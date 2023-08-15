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

export const getContactPageData = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        ok: true,
        json: () => {
          return {
            page: {
              title: 'Contact Us',
              parag: 'Any question or remarks? Just write us a message!',
              card: {
                info: {
                  title: 'Contact Information',
                  parag: 'Say something to start a live chat!',
                  contacts: [
                    {
                      icon: 'phone',
                      text: '+1012 3456 789',
                    },
                    {
                      icon: 'email',
                      text: 'demo@gmail.com',
                    },
                    {
                      icon: 'location',
                      text: '132 Dartmouth Street Boston,<br>Massachusetts 02156 United States',
                    }
                  ],
                  socials: [
                    {
                      icon: 'twitter',
                      link: 'https://twitter.com/'
                    },
                    {
                      icon: 'instagram',
                      link: 'https://www.instagram.com/'
                    },
                    {
                      icon: 'discord',
                      link: 'https://discord.com/'
                    },
                  ]
                }
              }
            }
          }
        }
      })
    }, 300)
  })
}