<template>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item is-size-5 is-size-6-mobile" href="/">
            <logo :style="{width: '100px', height: 'auto'}"/>
          </a>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            :class="{'is-active': menuOpen}"
            @click="menuOpen = !menuOpen"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': menuOpen}">
          <div class="navbar-start">
            <nav-bar-item
              :hasChildren="linkHasChildren(link)"
              v-for="link in $static.menu.links"
              :key="link.id"
              :to="link.url"
              class="navbar-item"
              :class="{'has-dropdown': linkHasChildren(link), 'is-hoverable': linkHasChildren(link)}"
            >
              <g-link
                v-if="linkHasChildren(link)"
                class="navbar-link"
                :to="link.url"
                active-class="is-active"
              >{{link.title}}</g-link>
              <span v-else>{{link.title}}</span>
              <div v-if="linkHasChildren(link)" class="navbar-dropdown">
                <g-link
                  v-for="childLink in link.children"
                  :key="childLink.id"
                  :to="childLink.url"
                  class="navbar-item"
                  active-class="is-active"
                >{{ childLink.title }}</g-link>
              </div>
            </nav-bar-item>
          </div>
        </div>
      </nav>
</template>


<script>
import GridsomeLogo from "~/icons/GridsomeLogo";
import NavBarItem from "~/components/NavBarItem";
export default {
  components: {
    Logo: GridsomeLogo,
    NavBarItem
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    linkHasChildren: link => link.children.length > 0
  }
};
</script>

<static-query>
{
  menu(id: "main") {
    name
    links {
      id
      url
      title
      order
      children {
        url
        title
      }
    }
  }
}
</static-query>