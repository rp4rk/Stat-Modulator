<template>
  <div class="card">
  </div>
</template>

<script>
  import functionPlot from 'function-plot';

  export default {
    mounted: function init() {
      functionPlot({
        title: 'Value of QA in Haste',
        target: this.$el,
        disableZoom: true,
        xAxis: {
          label: 'Critical Strike %',
          domain: [0, 100],
        },
        yAxis: {
          label: 'Haste',
          domain: [0, 10000],
        },
        data: [
          {
            fn: '(1 - (1 - x / 100)^5) * 15 * 325',
          },
          {
            fn: '(1 - (1 - x / 100)^4) * 15 * 325',
          },
          {
            fn: '(1 - (1 - x / 100)^5) * 20 * 325',
          },
          {
            fn: '(1 - (1 - x / 100)^4) * 20 * 325',
          },
        ],
      });
    },
  };
</script>