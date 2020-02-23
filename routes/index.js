import about from "../src/components/about.vue"
import home from "../src/components/home.vue"
export default [
  {path:"/about",component:about},
  {path:"/home",component:home},
  {path:"/",redirect:"/home"}
]