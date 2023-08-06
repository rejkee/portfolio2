export default defineAppConfig({
  alpine: {
    title: 'Portfolio',
    description: ' Portfolio',
    theme: 'dark',
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
      message: 'Thank you for visiting my portfolio.'
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
      successMessage: 'Message sent. Thank you!',
    }
  }
})
