<template>
    <div class="storageLocation">
        <header>储存位置</header>
        <section ref="chart"></section>
    </div>
</template>

<script>
    export default {
        name: "StorageLocation",
        props: ['pointData','lineData'],
        methods: {
            mapChart() {
                let myChart, option, arr = [];
                // 基于准备好的dom，初始化echarts实例
                myChart = this.$echarts.init(this.$refs.chart);
                // 图表配置项
                option = {
                    geo: {
                        map: 'china',
                        label: {
                            emphasis: {
                                show: false,
                                color:'#fff'
                            }
                        },
                        roam: false,
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
                    series: [
                        {
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,
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
                            symbol: 'image://./static/dashboard/dialogMap_icon.png',
                            symbolSize: 40,
                            itemStyle: {normal: {show: false, color: '#fa3271'}},
                            data: this.pointData
                        },
                        {
                            type: 'lines',
                            zlevel: 1,
                            animation: false,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#64d644' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#ddbb27' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            effect: {
                                show: true,
                                period: 4,
                                trailLength: 0.02,
                                symbol: 'arrow',
                                symbolSize: 5,
                            },
                            lineStyle: {
                                normal: {
                                    width: 1,
                                    opacity: 0.6,
                                    curveness: 0.2
                                }
                            },
                            data: this.lineData
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
    .storageLocation{
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
