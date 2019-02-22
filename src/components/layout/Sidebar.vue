<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img :src="user.avatar" />
        </div>
        <div class="pull-left info">
          <div>
            <p class="white">{{user.displayName}}</p>
          </div>
          <a href="javascript:;">
            <i class="fa fa-circle text-success"></i> Online
          </a>
        </div>
      </div>

      <div class="user-status">
        <h5>Status</h5>
        <p>Staging <i class="fa fa-circle text-yellow"></i></p>
        <h5>Primary Domain</h5>
        <p>http://www.google.com</p>
      </div>

      <!-- Sidebar Menu -->
      <sidebar-menu />
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import SidebarMenu from './SidebarMenu'

export default {
  name: 'Sidebar',
  props: ['user'],
  components: { SidebarMenu },
  mounted: function() {
    window
      .jQuery('[data-toggle="hideseek"]')
      .off()
      .hideseek()
  }
}
</script>
<style scope="local">
.user-panel .image img {
  border-radius: 50%;
}
.user-status{
  min-height: 7em;
  border-bottom:2px solid #f8f8f8;
  margin-bottom: 10px;
  padding: 5px 10px 10px;
}
.user-status h5{
  color: #b2b2b2;
  margin-bottom: 0;
}
.user-status p{
  margin-bottom: 0;
  font-size: 16px;
}
.user-status .fa{
  font-size: 10px;
  vertical-align: middle;
  margin-left: 5px;
}
</style>
