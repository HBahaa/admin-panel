<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <p class="text-center">
          <strong>Language Overview</strong>
        </p>
        <canvas id="pieChart"></canvas>

        <div class="c100 p2-0 orange">
								<span>test</span>
								<div class="slice">
									<div class="bar"></div>
									<div class="fill"></div>
								</div>
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
import Chart from 'chart.js'

export default {
  name: 'Sidebar',
  props: ['user'],
  components: { SidebarMenu },
  mounted() {
    window.jQuery('[data-toggle="hideseek"]').off().hideseek()
    this.$nextTick(() => {
      var pieChartCanvas1 = document.getElementById('pieChart').getContext('2d')
      var pieConfig1 = {
        type: 'doughnut',
        data: {
          labels: ['HTML', 'JavaScript', 'CSS'],
          datasets: [{
            data: [56.6, 37.7, 4.1],
            backgroundColor: ['#00a65a', '#f39c12', '#00c0ef'],
            hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          }
        }
      }
      new Chart(pieChartCanvas1, pieConfig1) // eslint-disable-line no-new
    })
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
