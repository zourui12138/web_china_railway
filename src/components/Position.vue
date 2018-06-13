<template>
    <div class="position">
        <header>所在位置</header>
        <section ref="chart"></section>
    </div>
</template>

<script>
    import 'echarts/map/js/province/sichuan'
    import 'echarts/map/js/province/beijing'
    import 'echarts/map/js/province/shanghai'

    export default {
        name: "Position",
        props: ['mapName','mapData'],
        methods: {
            mapChart() {
                let myChart, option;
                // 基于准备好的dom，初始化echarts实例
                myChart = this.$echarts.init(this.$refs.chart);
                // 图表配置项
                option = {
                    geo: {
                        map: this.mapName,
                        label: {
                            emphasis: {
                                show: false,
                                color:'#fff'
                            }
                        },
                        roam: false,
                        zoom: 1.1,
                        itemStyle: {
                            normal: {
                                areaColor: '#eeedeb',
                                borderColor: '#cdcdcd',
                                borderWidth: 2,
                                opacity: .9
                            },
                            emphasis: {
                                areaColor: '#dbdbdb'
                            }
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        backgroundColor: '#37b3f9',
                        textStyle: {
                            color: '#fff',
                            width: 130
                        },
                        formatter: function(params) {
                            return '<div style="width: 270px; white-space:normal;">' +
                                        '<p>'+ params.data.company +'</p>'+
                                        '<p>使用时间段：'+ params.data.date +'</p>'+
                                        '<p>评价：'+ params.data.evaluation +'</p>'+
                                    '</div>';
                        }
                    },
                    series: [
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,
                            rippleEffect: {
                                period: 4,
                                brushType: 'stroke',
                                scale: 4
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    offset: [5, 0],
                                    formatter: '{b}'
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            symbol: 'circle',
                            symbolSize: 20,
                            itemStyle: {normal: {show: false, color: '#fa3271'}},
                            data: this.mapData
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            }
        },
        mounted() {
            this.mapChart();
        }
    }
</script>

<style lang="scss" scoped>
    .position{
        background-color: #fff;
        width: 1050px;
        header{
            height: 60px;
            line-height: 60px;
            padding: 0 20px;
            font-size: 20px;
            border-bottom: 1px solid #ebedf3;
        }
        section{
            height: 845px;
        }
    }
</style>
