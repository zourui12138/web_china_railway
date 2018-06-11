<template>
    <div>
        <header class="header clear">
            <div class="fl">
            <span>查询条件：</span>
            <el-select placeholder="请选择">
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
                <el-button type="success">搜索</el-button>
            </div>
        </header>
        <section class="section">
            <ul>
                <li class="clear">
                    <aside class="fl"></aside>
                    <section class="fr">
                        <h1 class="clear">
                            <strong>用MidasFEA做连续刚构0#块实体分析</strong>
                            <span class="fr">所有者：中铁科研院</span>
                            <span class="fr">资源价格：20积分</span>
                        </h1>
                        <p>一种利用单个铲斗挖掘土壤或矿石的自行式挖掘机械。单斗挖掘机主要由发动机、液压系统、工作装置、行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。</p>
                        <h2 class="clear"><span class="fr">上线时间：2018年5月29日</span></h2>
                    </section>
                </li>
                <li class="clear">
                    <aside class="fl"></aside>
                    <section class="fr">
                        <h1 class="clear">
                            <strong>用MidasFEA做连续刚构0#块实体分析</strong>
                            <span class="fr">所有者：中铁科研院</span>
                            <span class="fr">资源价格：20积分</span>
                        </h1>
                        <p>一种利用单个铲斗挖掘土壤或矿石的自行式挖掘机械。单斗挖掘机主要由发动机、液压系统、工作装置、行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。</p>
                        <h2 class="clear"><span class="fr">上线时间：2018年5月29日</span></h2>
                    </section>
                </li>
                <li class="clear">
                    <aside class="fl"></aside>
                    <section class="fr">
                        <h1 class="clear">
                            <strong>用MidasFEA做连续刚构0#块实体分析</strong>
                            <span class="fr">所有者：中铁科研院</span>
                            <span class="fr">资源价格：20积分</span>
                        </h1>
                        <p>一种利用单个铲斗挖掘土壤或矿石的自行式挖掘机械。单斗挖掘机主要由发动机、液压系统、工作装置、行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。</p>
                        <h2 class="clear"><span class="fr">上线时间：2018年5月29日</span></h2>
                    </section>
                </li>
                <li class="clear">
                    <aside class="fl"></aside>
                    <section class="fr">
                        <h1 class="clear">
                            <strong>用MidasFEA做连续刚构0#块实体分析</strong>
                            <span class="fr">所有者：中铁科研院</span>
                            <span class="fr">资源价格：20积分</span>
                        </h1>
                        <p>一种利用单个铲斗挖掘土壤或矿石的自行式挖掘机械。单斗挖掘机主要由发动机、液压系统、工作装置、行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。行走装置和电气控制等部分组成。液压系统由液压汞、控制阀、液压缸、液压马达、管路、邮箱等组成。</p>
                        <h2 class="clear"><span class="fr">上线时间：2018年5月29日</span></h2>
                    </section>
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
        name: "TemplateOne"
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
            padding: 26px 20px;
            background-color: #fff;
            margin-top: 10px;
            aside{
                width: 135px;
                height: 135px;
                background-color: #edeced;
            }
            section{
                width: calc(100% - 155px);
                h1{
                    height: 35px;
                    line-height: 35px;
                    strong{
                        font-size: 20px;
                        color: #3dbb7e;
                    }
                    span{
                        margin-left: 50px;
                    }
                }
                p{
                    line-height: 26px;
                    height: 78px;
                    text-align: justify;
                    font-size: 16px;
                }
                h2{
                    font-size: 14px;
                    height: 22px;
                    line-height: 22px;
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
