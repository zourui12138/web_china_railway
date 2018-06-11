<template>
    <div>
        <header class="header clear">
        <div class="fl">
            <span>查询条件：</span>
            <el-select placeholder="请选择" v-model="selectData">
                <el-option label="选项1" value="选项1"></el-option>
                <el-option label="选项2" value="选项2"></el-option>
                <el-option label="选项3" value="选项3"></el-option>
                <el-option label="选项4" value="选项4"></el-option>
                <el-option label="选项5" value="选项5"></el-option>
            </el-select>
        </div>
        <div class="fl">
            <span>查询条件：</span>
            <el-input class="searchInput" placeholder="请输入内容" clearable></el-input>
            <el-button type="primary">搜索</el-button>
        </div>
    </header>
        <section class="section">
            <ul>
                <li>
                    <header>
                        <img src="../assets/img/platform/templateThree/success.png" alt="">
                        <strong>状态：已完成交易</strong>
                        <span class="fr">上线时间：2018年5月29日</span>
                        <span class="fr">积分：20积分</span>
                    </header>
                    <header style="display: none"><img src="../assets/img/platform/templateThree/running.png" alt=""><span>状态：进行中</span></header>
                    <header style="display: none"><img src="../assets/img/platform/templateThree/cancel.png" alt=""><span>状态：已撤销</span></header>
                    <div class="clear">
                        <aside class="fl"></aside>
                        <section class="fr">
                            <h1 class="clear"><strong>用MidasFEA做连续刚构0#块实体分析</strong></h1>
                            <p>控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。</p>
                            <h2 class="clear"><span class="fr">服务分类：科创产品</span><span class="fr">所有者：中铁科研院</span></h2>
                        </section>
                    </div>
                </li>
            </ul>
        </section>
        <footer class="footer clear">
        <el-pagination
            class="fr"
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </footer>
    </div>
</template>

<script>
    export default {
        name: "TemplateThree",
        data() {
            return{
                selectData: '选项1'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        padding: 22px 40px;
        >div{
            margin-right: 50px;
        }
        .searchInput{
            width: 215px;
            margin-right: 10px;
        }
    }
    .section{
        li{
            background-color: #fff;
            margin-top: 10px;
            header{
                height: 36px;
                line-height: 36px;
                padding: 0 20px;
                border-bottom: 1px solid #ebedf3;
                font-size: 14px;
                img{
                    margin-top: 8px;
                    margin-right: 20px;
                }
                span{
                    margin-left: 50px;
                }
                strong{
                    font-weight: normal;
                }
            }
            >div{
                padding: 26px 20px;
                aside{
                    width: 83px;
                    height: 83px;
                    background-color: #edeced;
                }
                section{
                    width: calc(100% - 103px);
                    h1{
                        height: 35px;
                        line-height: 35px;
                        font-size: 20px;
                        color: #37b3f9;
                    }
                    p{
                        line-height: 26px;
                        height: 26px;
                        text-align: justify;
                        font-size: 16px;
                    }
                    h2{
                        font-size: 14px;
                        height: 22px;
                        line-height: 22px;
                        span{
                            margin-left: 50px;
                        }
                    }
                }
            }
        }
    }
    .footer{
        height: 32px;
        padding: 19px;
        background-color: #fff;
        margin-top: 10px;
    }
</style>
