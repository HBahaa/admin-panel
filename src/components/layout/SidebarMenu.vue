<template>
  <ul class="sidebar-menu">
    <!-- <li class="header">TOOLS</li> -->
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <!-- <i class="fa fa-desktop"></i> -->
        <img src="/static/svg-icons/Dashboard-S.svg" class="svg-icon" alt="">
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Settings.svg" class="svg-icon" alt="">
        <span class="page">Settings</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Design.svg" class="svg-icon" alt="">
        <span class="page">Design</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Users.svg" class="svg-icon" alt="">
        <span class="page">Users</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Access and Messages.svg" class="svg-icon" alt="">
        <span class="page">Access and Messages</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Content Manager.svg" class="svg-icon" alt="">
        <span class="page">Content Manager</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Recognition Module.svg" class="svg-icon" alt="">
        <span class="page">Recognition Module</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Comms Module.svg" class="svg-icon" alt="">
        <span class="page">Comms Module</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Rewards Module.svg" class="svg-icon" alt="">
        <span class="page">Rewards Module</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Performance Module.svg" class="svg-icon" alt="">
        <span class="page">Performance Module</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/E-learning Module.svg" class="svg-icon" alt="">
        <span class="page">E-learning Module</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Languages Module.svg" class="svg-icon" alt="">
        <span class="page">Languages Module</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <img src="/static/svg-icons/Extra Features.svg" class="svg-icon" alt="">
        <span class="page">Extra Features</span>
      </a>
    </router-link>
    <!-- <li class="treeview">
      <a href="#">
        <img src="/static/svg-icons/Dashboard-S.svg" class="svg-icon" alt="">
        <span class="treeview-title">Files</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class="fa fa-file-word-o"></i> Item 1
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-picture-o"></i> Item 2
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> Item 3
          </a>
        </li>
      </ul>
    </li> -->

  </ul>
</template>
<script>
import * as $ from 'jquery'
export default {
  name: 'SidebarMenu'
}
$(document).ready(function() { $('.pageLink').click(function() { console.log('LVKvvk') }) })
</script>
<style>
/* override default */
.svg-icon{
  width: 18px !important;
  margin-right: 20px;
}
.page{
  vertical-align: middle
}
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
