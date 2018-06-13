<template>
    <VuePerfectScrollbar id="dashboard">
        <div class="container">
            <header class="header">中铁资源共享区块链平台</header>
            <section class="section clear">
                <div class="fl">
                    <div class="left_top">
                        <header>交易状态跟踪</header>
                        <ol class="clear">
                            <li class="fl">文件名</li>
                            <li class="fl">所有者</li>
                            <li class="fl">状态</li>
                            <li class="fl">交易方</li>
                        </ol>
                        <div class="left_top_table">
                            <div ref="leftTop">
                                <ul class="clear" v-for="i in tradeData">
                                    <li class="fl">{{i.fileName}}</li>
                                    <li class="fl">{{i.owner}}</li>
                                    <li class="fl">{{i.state}}</li>
                                    <li class="fl">{{i.trader}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="left_bottom">
                        <header>资源数据统计</header>
                        <div ref="bar"></div>
                        <div ref="pie"></div>
                    </div>
                </div>
                <div class="fl">
                    <div class="center_top" ref="chart"></div>
                    <div class="center_bottom"></div>
                </div>
                <div class="fr">
                    <div class="right_top">
                        <header>交易上链数</header>
                        <ol class="clear">
                            <li class="fl">本周上链数</li>
                            <li class="fl">累计上链总数</li>
                        </ol>
                        <ul class="clear">
                            <li class="fl">8733.39</li>
                            <li class="fl">8733.39</li>
                        </ul>
                    </div>
                    <div class="right_bottom">
                        <header>链上交易记录</header>
                        <section>
                            <ul ref="rightBottom">
                                <li :class="i.type" v-for="i in blockChainTrade">
                                    <p>哈希值：<span>{{i.hash}}</span></p>
                                    <p>交易名称：<span>{{i.name}}</span></p>
                                    <p>操作时间：<span>{{i.date}}</span></p>
                                    <p>操作类型：<span>{{getType(i.type)}}</span></p>
                                </li>
                                <li class="contract">
                                    <p>哈希值：<span>faggggghhhhghhhjhgfjjjkkhkl</span></p>
                                    <p>交易名称：<span>30mt梁计算书</span></p>
                                    <p>操作时间：<span>2018-06-06 23:59:59</span></p>
                                    <p>操作类型：<span>合同签订</span></p>
                                </li>
                                <li class="pay">
                                    <p>哈希值：<span>faggggghhhhghhhjhgfjjjkkhkl</span></p>
                                    <p>交易名称：<span>30mt梁计算书</span></p>
                                    <p>操作时间：<span>2018-06-06 23:59:59</span></p>
                                    <p>操作类型：<span>合同签订</span></p>
                                </li>
                                <li class="finish">
                                    <p>哈希值：<span>faggggghhhhghhhjhgfjjjkkhkl</span></p>
                                    <p>交易名称：<span>30mt梁计算书</span></p>
                                    <p>操作时间：<span>2018-06-06 23:59:59</span></p>
                                    <p>操作类型：<span>合同签订</span></p>
                                </li>
                                <li class="contract">
                                    <p>哈希值：<span>faggggghhhhghhhjhgfjjjkkhkl</span></p>
                                    <p>交易名称：<span>30mt梁计算书</span></p>
                                    <p>操作时间：<span>2018-06-06 23:59:59</span></p>
                                    <p>操作类型：<span>合同签订</span></p>
                                </li>
                                <li class="pay">
                                    <p>哈希值：<span>faggggghhhhghhhjhgfjjjkkhkl</span></p>
                                    <p>交易名称：<span>30mt梁计算书</span></p>
                                    <p>操作时间：<span>2018-06-06 23:59:59</span></p>
                                    <p>操作类型：<span>合同签订</span></p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
            <div class="tipBox" v-show="tipShow" @click.prevent="hiddenTip">
                <div class="tip">
                    <header><img src="../../assets/img/dashboard/process_icon.png" alt="">交易流程</header>
                    <section><div></div></section>
                    <div class="twinkle">
                        <div>
                            <h1></h1>
                            <h2></h2>
                        </div>
                    </div>
                    <footer>
                        <div>
                            <ul class="clear" ref="tipBlock">
                                <li class="fl" v-for="i in tipBlockData" :style="{color: i.color}">{{i.value}}</li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </VuePerfectScrollbar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import 'echarts/map/js/china.js';
    import $ from 'jquery'

    export default {
        name: "Dashboard",
        components: {VuePerfectScrollbar},
        data() {
            return{
                timer: null,
                tradeData: [
                    {
                        fileName: '30mt梁计算书',
                        owner: '中铁科研院',
                        state: '结算',
                        trader: '中铁一局'
                    },
                    {
                        fileName: '30mt梁计算书',
                        owner: '中铁科研院',
                        state: '结算',
                        trader: '中铁一局'
                    },
                    {
                        fileName: '30mt梁计算书',
                        owner: '中铁科研院',
                        state: '结算',
                        trader: '中铁一局'
                    },
                    {
                        fileName: '30mt梁计算书',
                        owner: '中铁科研院',
                        state: '结算',
                        trader: '中铁一局'
                    },
                    {
                        fileName: '30mt梁计算书',
                        owner: '中铁科研院',
                        state: '结算',
                        trader: '中铁一局'
                    },
                    {
                        fileName: '30mt梁计算书',
                        owner: '中铁科研院',
                        state: '结算',
                        trader: '中铁一局'
                    },
                    {
                        fileName: '30mt梁计算书',
                        owner: '中铁科研院',
                        state: '结算',
                        trader: '中铁一局'
                    }
                ],
                blockChainTrade: [
                    {
                        hash: 'faggggghhhhghhhjhgfjjjkkhk',
                        name: '30mt梁计算书',
                        date: '2018-06-08 23:59:59',
                        type: 'contract'
                    },
                    {
                        hash: 'faggggghhhhghhhjhgfjjjkkhk',
                        name: '30mt梁计算书',
                        date: '2018-06-08 23:59:59',
                        type: 'pay'
                    },
                    {
                        hash: 'faggggghhhhghhhjhgfjjjkkhk',
                        name: '30mt梁计算书',
                        date: '2018-06-08 23:59:59',
                        type: 'finish'
                    },
                    {
                        hash: 'faggggghhhhghhhjhgfjjjkkhk',
                        name: '30mt梁计算书',
                        date: '2018-06-08 23:59:59',
                        type: 'contract'
                    },
                    {
                        hash: 'faggggghhhhghhhjhgfjjjkkhk',
                        name: '30mt梁计算书',
                        date: '2018-06-08 23:59:59',
                        type: 'pay'
                    },
                    {
                        hash: 'faggggghhhhghhhjhgfjjjkkhk',
                        name: '30mt梁计算书',
                        date: '2018-06-08 23:59:59',
                        type: 'finish'
                    },
                    {
                        hash: 'faggggghhhhghhhjhgfjjjkkhk',
                        name: '30mt梁计算书',
                        date: '2018-06-08 23:59:59',
                        type: 'contract'
                    },
                    {
                        hash: 'faggggghhhhghhhjhgfjjjkkhk',
                        name: '30mt梁计算书',
                        date: '2018-06-08 23:59:59',
                        type: 'pay'
                    },
                    {
                        hash: 'faggggghhhhghhhjhgfjjjkkhk',
                        name: '30mt梁计算书',
                        date: '2018-06-08 23:59:59',
                        type: 'finish'
                    }
                ],
                tipBlockData: [
                    {value: 35361,color: '#00dfff'},
                    {value: 35362,color: '#f2c14d'},
                    {value: 35363,color: '#ff3373'},
                    {value: 35364,color: '#01ed8c'},
                    {value: 35365,color: '#00dfff'},
                    {value: 35366,color: '#f2c14d'},
                    {value: 35367,color: '#ff3373'},
                    {value: 35368,color: '#01ed8c'},
                    {value: 35369,color: '#00dfff'},
                    {value: 35370,color: '#f2c14d'},
                    {value: 35371,color: '#ff3373'},
                    {value: 35372,color: '#01ed8c'},
                    {value: 35373,color: '#00dfff'},
                    {value: 35374,color: '#f2c14d'},
                    {value: 35375,color: '#ff3373'},
                    {value: 35376,color: '#01ed8c'},
                ],
                coordinates: [
                    {company:'合肥——中铁四局集团有限公司',color:'#01c273',name: '合肥',value: [117.29, 32.0581]},
                    {company:'贵阳——中铁五局集团有限公司',color:'#faab42',name: '贵阳',value: [106.6992, 26.7682]},
                    {company:'太原——中铁三局集团有限公司',color:'#0d5fff',name: '太原',value: [112.3352, 37.9413]},
                    {company:'上海——中铁上海工程局有限公司',color:'#01c273',name: '上海',value: [121.4648, 31.2891]},
                    {company:'拉萨——中铁四局集团有限公司(异常)',color:'#fa3271',name: '拉萨',value: [91.1865, 30.1465]},
                    {company:'武汉——中铁大桥勘测设计院集团有限公司',color:'#01c273',name: '武汉',value: [114.3896, 30.6628]},
                    {company:'西安——中铁一局集团有限公司',color:'#faab42',name: '西安',value: [109.1162, 34.2004]},
                    {company:'广州——中铁隧道局集团有限公司',color:'#01c273',name: '广州',value: [113.5107, 23.2196]},
                    {company:'武汉——中铁大桥局集团有限公司',color:'#0d5fff',name: '武汉',value: [114.3896, 30.6628]},
                    {company:'昆明——中铁二局集团有限公司(异常)',color:'#fa3271',name: '昆明',value: [102.9199, 25.4663]},
                    {company:'成都——中铁二局集团有限公司',color:'#01c273',name: '成都',value: [103.9526, 30.7617]},
                    {company:'郑州——中铁七局集团有限公司',color:'#0d5fff',name: '郑州',value: [113.4668, 34.6234]},
                    {company:'北京——中铁投资集团有限公司',color:'#faab42',name: '北京',value: [116.4551, 40.2539]},
                    {company:'西宁——中铁二院工程集团有限责任公司(异常)',color:'#fa3271',name: '西宁',value: [101.4038, 36.8207]},
                    {company:'宝鸡——中铁宝桥集团有限公司',color:'#01c273',name: '宝鸡',value: [107.1826, 34.3433]},
                    {company:'南宁——中铁交通投资集团有限公司',color:'#faab42',name: '南宁',value: [108.479, 23.1152]},
                    {company:'南昌——中铁五局集团有限公司(异常)',color:'#fa3271',name: '南昌',value: [116.0046, 28.6633]}
                ],
                mapSeries: [
                    // 连线
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
                        data: [
                            [
                                {coord: [117.29, 32.0581]},
                                {coord: [109.1162, 34.2004]}
                            ],
                            [
                                {coord: [106.6992, 26.7682]},
                                {coord: [103.9526, 30.7617]}
                            ],
                            [
                                {coord: [91.1865, 30.1465]},
                                {coord: [112.3352, 37.9413]}
                            ],
                            [
                                {coord: [113.4668, 34.6234]},
                                {coord: [108.479, 23.1152]}
                            ]
                        ]
                    }
                ],
                tipShow: false
            }
        },
        methods: {
            mapChart() {
                let myChart, option, legendData = [], arr = [];
                this.mapSeries = this.mapSeries.splice(0,1);
                this.coordinates.map((item) => {
                    this.mapSeries.push({
                        name: item.company,
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
                        symbolSize: 15,
                        itemStyle: {normal: {show: false, color: item.color}},
                        data: [{name: item.name, value: item.value}]
                    });
                    legendData.push(item.company);
                });
                this.mapSeries[0].data.splice(0,1);
                for (let i = 0; i < 2; i++) {
                    let x = Math.floor(Math.random()*(this.coordinates.length-1)+1);
                    let same = false;//判断是否有相同的数字
                    for (let j = 0; j < arr.length; j++) {
                        if (arr[j] === x) {
                            same=true;
                            i--;
                            break;
                        }
                    }
                    !same && arr.push(x);
                }
                this.mapSeries[0].data.push([
                        {coord: this.coordinates[arr[0]].value},
                        {coord: this.coordinates[arr[1]].value}
                ]);
                // 基于准备好的dom，初始化echarts实例
                myChart = this.$echarts.init(this.$refs.chart);
                // 图表配置项
                option = {
                    geo: {
                        map: 'china',
                        top: 20,
                        label: {
                            emphasis: {
                                show: false,
                                color:'#fff'
                            }
                        },
                        roam: false,
                        itemStyle: {
                            normal: {
                                areaColor: '#092435',
                                borderColor: '#34cbe7',
                                borderWidth: 2,
                                opacity: .9
                            },
                            emphasis: {
                                areaColor: '#2a333d'
                            }
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 50,
                        x: 'center',
                        height: 150,
                        data:legendData,
                        textStyle: {
                            color: '#fff'
                        },
                        selectedMode: 'multiple',
                    },
                    series: this.mapSeries
                };
                // 绘制图表
                myChart.setOption(option);
                let me = this;
                myChart.on('click', function (params) {
                    params.componentSubType === 'effectScatter' && (me.tipShow = true);
                });
            },
            barChart() {
                let myChart, option;
                // 基于准备好的dom，初始化echarts实例
                myChart = this.$echarts.init(this.$refs.bar);
                // 图表配置项
                option = {
                    title : {
                        text: '当月资源统计',
                        x:'center',
                        textStyle:{
                            color: '#4cc7ff',
                            fontSize: 14
                        }
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: 20,
                        top: 30,
                        containLabel: true,
                        show: false
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['科创产品', '文档资料', '软件服务', '三维组件', '教育服务', '器材设备'],
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: "#fff",
                                    fontSize: 9
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: "#fff",
                                    width: 1,
                                    type: "solid"
                                },
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "#063374",
                                }
                            }
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '50%',
                            data:[152, 200, 334, 390, 330, 220],
                            itemStyle: {
                                //通常情况下：
                                normal:{
                                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                    color: function (params){
                                        let colorList = ['#23d2f4','#22b17b','#0cc9b0','#de5e4b','#95ab39','#e3d91f'];
                                        return colorList[params.dataIndex];
                                    }
                                }
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            pieChart() {
                let myChart, option;
                // 基于准备好的dom，初始化echarts实例
                myChart = this.$echarts.init(this.$refs.pie);
                // 图表配置项
                option = {
                    title : {
                        text: '当月资源交易情况',
                        x:'center',
                        textStyle:{
                            color: '#4cc7ff',
                            fontSize: 14
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color: ['#23d2f4','#22b17b','#0cc9b0','#de5e4b','#95ab39','#e3d91f'],
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:152, name:'科创产品'},
                                {value:200, name:'文档资料'},
                                {value:334, name:'软件服务'},
                                {value:390, name:'三维组件'},
                                {value:330, name:'教育服务'},
                                {value:220, name:'器材设备'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            getType(type){
                let str;
                type === 'contract' && (str ='合同签订');
                type === 'pay' && (str ='积分支付');
                type === 'finish' && (str ='交易完成');
                return str;
            },
            moveTip() {
                $(this.$refs.tipBlock).stop().animate({left:'-66px'},() => {
                    this.tipBlockData = this.tipBlockData.concat(this.tipBlockData.splice(0,1));
                    $(this.$refs.tipBlock).css('left',0);
                });
            },
            moveLeftTop() {
                $(this.$refs.leftTop).stop().animate({top:'-54px'},() => {
                    this.tradeData = this.tradeData.concat(this.tradeData.splice(0,1));
                    $(this.$refs.leftTop).css('top',0);
                });
            },
            moveRightBottom() {
                $(this.$refs.rightBottom).stop().animate({top:'-134px'},() => {
                    this.blockChainTrade = this.blockChainTrade.concat(this.blockChainTrade.splice(0,1));
                    $(this.$refs.rightBottom).css('top',0);
                });
            },
            hiddenTip() {
                this.tipShow = false;
            }
        },
        mounted() {
            this.mapChart();
            this.barChart();
            this.pieChart();
            this.timer = setInterval(() => {
                this.moveTip();
                this.moveLeftTop();
                this.moveRightBottom();
                this.mapChart();
            },3000);
        },
        beforeDestroy() {
            this.timer && clearInterval(this.timer);
        }
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($name){
        @return '../../assets/img/dashboard/'+$name;
    };
    @keyframes animationWidth{
        from{
            width: 0;
        }
        to{
            width: 100%;
        }
    };
    @keyframes animationTwinkle{
        0%{
            box-shadow: 0 0 6px 10px rgba(250,50,113,.5);
        }
        50%{
            box-shadow: 0 0 6px 10px rgba(250,50,113,.2);
        }
        100%{
            box-shadow: 0 0 6px 10px rgba(250,50,113,.5);
        }
    };
    @keyframes test{
        0%,17.8%{
            left: 110px;
        }
        17.9%,46.5%{
            left: 345px;
        }
        46.6%,76.4%{
            left: 594px;
        }
        76.5%,100%{
            left: 838px;
        }
    };
    @keyframes test2 {
        0%{
            height: 0;
        }
        100%{
            height: 70px;
        }
    }
    #dashboard{
        height: 100%;
        width: 1920px;
        .container{
            background: url(imgUrl('bg.png')) no-repeat center top;
            .header{
                height: 92px;
                padding-top: 25px;
                background: url(imgUrl('header_bg.png')) no-repeat center bottom;
                text-align: center;
                line-height: 65px;
                color: #fff;
                font-size: 30px;
            }
            .section{
                width: 1800px;
                margin: auto;
                padding-bottom: 20px;
                .left_top{
                    height: 390px;
                    width: 410px;
                    padding: 4px;
                    background: url(imgUrl('left_top_border.png')) no-repeat center;
                    margin-bottom: 12px;
                    color: #fff;
                    header{
                        height: 70px;
                        line-height: 70px;
                        font-size: 18px;
                        padding: 0 30px;
                        color: #fff;
                    }
                    ol{
                        box-shadow: 0 0 100px #0e4d7f inset;
                        height: 44px;
                        line-height: 44px;
                        padding: 0 20px;
                        li:nth-child(1){width: 30%;}
                        li:nth-child(2){width: 30%;}
                        li:nth-child(3){width: 20%;}
                        li:nth-child(4){width: 20%;}
                    }
                    .left_top_table{
                        position: relative;
                        height: 270px;
                        overflow: hidden;
                        div{
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            ul{
                                box-shadow: 0 0 50px #0e4d7f inset;
                                height: 44px;
                                line-height: 44px;
                                padding: 0 20px;
                                font-size: 14px;
                                margin-top: 10px;
                                li:nth-child(1){width: 30%;}
                                li:nth-child(2){width: 30%;}
                                li:nth-child(3){width: 20%;}
                                li:nth-child(4){width: 20%;}
                            }
                        }
                    }
                }
                .left_bottom{
                    height: 518px;
                    width: 410px;
                    padding: 4px;
                    background: url(imgUrl('left_bottom_border.png')) no-repeat center;
                    header{
                        height: 60px;
                        line-height: 60px;
                        font-size: 18px;
                        padding: 0 30px;
                        color: #fff;
                    }
                    div{
                        height: 229px;
                    }
                }
                .center_top{
                    width: 963px;
                    height: 855px;
                }
                .center_bottom{
                    height: 88px;
                    background: url(imgUrl('center_bottom_bg.png')) no-repeat center;
                }
                .right_top{
                    height: 157px;
                    width: 411px;
                    padding: 4px;
                    background: url(imgUrl('right_top_border.png')) no-repeat center;
                    margin-bottom: 15px;
                    header{
                        height: 50px;
                        line-height: 50px;
                        font-size: 18px;
                        padding: 0 30px;
                        color: #fff;
                    }
                    ol{
                        padding: 0 20px;
                        color: #4cc7ff;
                        font-size: 16px;
                        li{
                            width: 50%;
                            text-shadow: 0 0 30px #4cc7ff;
                        }
                    }
                    ul{
                        padding: 0 20px;
                        color: #e7d91e;
                        font-size: 16px;
                        height: 70px;
                        line-height: 70px;
                        li{
                            width: 50%;
                            font-size: 40px;
                            font-style: italic;
                        }
                    }
                }
                .right_bottom{
                    height: 748px;
                    width: 411px;
                    padding: 4px;
                    background: url(imgUrl('right_bottom_border.png')) no-repeat center;
                    color: #fff;
                    header{
                        height: 70px;
                        line-height: 70px;
                        font-size: 18px;
                        padding: 0 30px;
                    }
                    section{
                        position: relative;
                        height: 660px;
                        width: 379px;
                        margin: auto;
                        overflow: hidden;
                        ul{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 379px;
                            li{
                                line-height: 26px;
                                font-size: 14px;
                                box-shadow: 0 0 50px #0e4d7f inset;
                                padding: 10px;
                                margin-bottom: 10px;
                                &.contract{
                                    background: url(imgUrl('contract.png')) no-repeat 300px center;
                                }
                                &.pay{
                                    background: url(imgUrl('pay.png')) no-repeat 300px center;
                                }
                                &.finish{
                                    background: url(imgUrl('finish.png')) no-repeat 300px center;
                                }
                            }
                        }
                    }
                }
            }
            .tipBox{
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0,0,0,.5);
                .tip{
                    width: 962px;
                    height: 560px;
                    position: absolute;
                    top: calc(50% - 280px);
                    left: 0;
                    right: 0;
                    margin: auto;
                    background: url(imgUrl('tipBox_border.png')) no-repeat center;
                    padding: 0 48px;
                    header{
                        height: 130px;
                        line-height: 130px;
                        font-size: 30px;
                        color: #00dfff;
                        img{
                            margin-top: 47px;
                            margin-right: 20px;
                        }
                    }
                    section{
                        width: 807px;
                        height: 119px;
                        margin: auto;
                        background: url(imgUrl('process.png')) no-repeat center;
                        div{
                            height: 119px;
                            width: 0;
                            background: url(imgUrl('process_.png')) no-repeat 0 center;
                            animation: animationWidth 16s;
                            animation-timing-function: linear;
                            animation-iteration-count: infinite;
                        }
                    }
                    div.twinkle{
                        height: 76px;
                        padding-top: 20px;
                        position: relative;
                        div{
                            position: absolute;
                            top: 20px;
                            left: 0;
                            width: 26px;
                            animation: test 16s;
                            animation-timing-function: linear;
                            animation-iteration-count: infinite;
                            h1{
                                margin: auto;
                                width: 16px;
                                height: 16px;
                                border-radius: 50%;
                                background-color: #fa3271;
                                box-shadow: 0 0 6px 10px #672649;
                                animation: animationTwinkle 1s;
                                animation-timing-function: linear;
                                animation-iteration-count: infinite;
                            }
                            h2{
                                width: 13px;
                                height: 60px;
                                margin: 10px auto 0;
                                background: url(imgUrl('dashed.png')) no-repeat center bottom;
                                animation: test2 1s;
                                animation-timing-function: linear;
                                animation-iteration-count: infinite;
                            }
                        }
                    }
                    footer{
                        width: 962px;
                        height: 121px;
                        background: url(imgUrl('tip_blockBox.png')) no-repeat center;
                        div{
                            width: 858px;
                            margin: auto;
                            height: 121px;
                            overflow: hidden;
                            position: relative;
                            ul{
                                width: 1386px;
                                position: absolute;
                                top: 41px;
                                left: 0;
                                li{
                                    width: 56px;
                                    height: 39px;
                                    line-height: 39px;
                                    background: url(imgUrl('tip_block_bg.png')) no-repeat center;
                                    text-align: center;
                                    margin: 0 5px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
