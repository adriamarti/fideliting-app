// Copies of the two different types of navigation menus 

export default {
  company: {
    items: [
      {
        id: 'dashboard',
        href: '/company'
      },
      {
        id: 'settings',
        href: '/company/settings'
      },
      {
        id: 'community',
        href: '/community'
      }
    ],
    labels: ['Inicio', 'Configuración', 'Comunidad,']
  },
  client: {
    items: [
      {
        id: 'dashboard',
        href: '/client'
      },
      {
        id: 'settings',
        href: '/client/settings'
      },
      {
        id: 'community',
        href: '/community'
      }
    ],
    labels: ['Inicio', 'Configuración', 'Comunidad,']
  },
};