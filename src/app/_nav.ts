import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-home',
  },
  {
    name: 'Cadastros',
    url: '/base',
    icon: 'icon-doc',
    children: [
      {
        name: 'Emitente',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Usuários',
        url: '/base/carousels',
        icon: 'icon-user'
      },
      {
        name: 'Cidades',
        url: '/base/collapses',
        icon: 'icon-pin'
      },
      {
        name: 'Ruas',
        url: '/base/forms',
        icon: 'icon-location-pin'
      },
      {
        name: 'Bairros',
        url: '/base/navbars',
        icon: 'icon-map'

      },
    ]
  },
  {
    name: 'Parametrização',
    url: '/buttons',
    icon: 'icon-settings',
    children: [
      {
        name: 'Terrenos',
        url: '/buttons/buttons',
        icon: 'icon-crop'
      }
    ]
  },
  {
    name: 'Contribuintes',
    url: '/icons',
    icon: 'icon-people',
    children: [
      {
        name: 'Imoveis',
        url: '/icons/coreui-icons',
        icon: 'icon-star'
      }
    ]
  }
];
