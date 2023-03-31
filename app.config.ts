export default defineAppConfig({
  alpine: {
    title: 'Portfolio',
    description: ' Portfolio',
    theme: 'dark',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right',
      logo: false,
    },
    footer: {
      credits: {
        enabled: false,
        repository: 'https://github.com/rejkee'
      },
      navigation: true,
      alignment: 'center',
      message: ''
    },
    socials: {
      mail: {
        icon: 'uil:envelope',
        label: 'Email',
        href: 'mailto:rejkee@gmail.com',
      },
      github: 'rejkee',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/stepan-vinokurov-7b8377202/'
      }
    },
    form: {
      action: 'submit',
      href: 'mailto:rejkee@gmail.com',
      successMessage: 'Message sent. Thank you!',
    }
  }
})
