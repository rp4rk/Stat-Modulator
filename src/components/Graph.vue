<template>
  <div class="graph-container">
    <div class="graph">
    </div>
  </div>
</template>

<script>
  import functionPlot from 'function-plot';

  export default {
    props: ['graph'],
    mounted: function init() {
      functionPlot({
        target: this.$el.querySelector('.graph'),
        grid: true,
        disableZoom: true,
        xAxis: {
          label: this.graph.xLabel,
          domain: this.graph.xDomain,
        },
        yAxis: {
          label: this.graph.yLabel,
          domain: this.graph.yDomain,
        },
        data: this.graph.data,
      });
    },
  };
</script>

<style lang="scss">
.graph-container {
  padding: 14px;
}
</style>