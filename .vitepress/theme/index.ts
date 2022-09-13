import './styles/index.css'
import { h, App } from 'vue'
import { VPTheme } from '@vue/theme'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
import SponsorsAside from './components/SponsorsAside.vue'
// import VueJobs from './components/VueJobs.vue'
import VueSchoolLink from './components/VueSchoolLink.vue'
// import Banner from './components/Banner.vue'
import WwAds from './components/WwAds.vue'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      // 'banner': () => h(Banner),
      // 'aside-mid': () => h(SponsorsAside),
      // 'aside-bottom': () => h(WwAds),
      'banner': () => h('div', '布局：banner'),
      'navbar-title': () => h('div', 'Tang'),
      // 'sidebar-top': () => h(PreferenceSwitch),
      'aside-top': () => h('div', '布局：aside-top'),
      'aside-mid': () => h('div', '布局：aside-mid'),
      'aside-bottom': () => h('div', '布局：aside-bottom')
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    app.component('VueSchoolLink', VueSchoolLink)
    // app.component('VueJobs', VueJobs)
  }
})
