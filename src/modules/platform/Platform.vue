<template>
    <div id="platform" class="clear">
        <aside class="aside fl">
            <div class="logo"><img src="../../assets/img/platform/logo.png" alt=""></div>
            <VuePerfectScrollbar v-scroll class="nav">
                <el-menu
                    class="navMenu"
                    background-color="#1670b9"
                    text-color="#fff"
                    unique-opened="true"
                    default-active="2-1">
                    <el-menu-item-group>
                        <template slot="title">最新资源</template>
                        <el-menu-item index="1"><i class="el-icon-location"></i><span>最新发布</span></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">资源交易</template>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-location"></i><span>科创产品</span></template>
                            <el-menu-item index="2-1">需求市场</el-menu-item>
                            <el-menu-item index="2-2">成功交易</el-menu-item>
                            <el-menu-item index="2-3">产品交易</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-location"></i><span>文档资料</span></template>
                            <el-menu-item index="3-1">需求市场</el-menu-item>
                            <el-menu-item index="3-2">成功交易</el-menu-item>
                            <el-menu-item index="3-3">产品交易</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title"><i class="el-icon-location"></i><span>软件服务</span></template>
                            <el-menu-item index="4-1">需求市场</el-menu-item>
                            <el-menu-item index="4-2">成功交易</el-menu-item>
                            <el-menu-item index="4-3">产品交易</el-menu-item>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title"><i class="el-icon-location"></i><span>三维组件</span></template>
                            <el-menu-item index="5-1">需求市场</el-menu-item>
                            <el-menu-item index="5-2">成功交易</el-menu-item>
                            <el-menu-item index="5-3">产品交易</el-menu-item>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title"><i class="el-icon-location"></i><span>教育培训</span></template>
                            <el-menu-item index="6-1">需求市场</el-menu-item>
                            <el-menu-item index="6-2">成功交易</el-menu-item>
                            <el-menu-item index="6-3">产品交易</el-menu-item>
                        </el-submenu>
                        <el-submenu index="7">
                            <template slot="title"><i class="el-icon-location"></i><span>器材设备</span></template>
                            <el-menu-item index="7-1">需求市场</el-menu-item>
                            <el-menu-item index="7-2">成功交易</el-menu-item>
                            <el-menu-item index="7-3">产品交易</el-menu-item>
                        </el-submenu>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">资源管理</template>
                        <el-submenu index="8">
                            <template slot="title"><i class="el-icon-location"></i><span>科创产品</span></template>
                            <el-menu-item index="8-1">需求市场</el-menu-item>
                            <el-menu-item index="8-2">成功交易</el-menu-item>
                            <el-menu-item index="8-3">产品交易</el-menu-item>
                        </el-submenu>
                        <el-submenu index="9">
                            <template slot="title"><i class="el-icon-location"></i><span>文档资料</span></template>
                            <el-menu-item index="9-1">需求市场</el-menu-item>
                            <el-menu-item index="9-2">成功交易</el-menu-item>
                            <el-menu-item index="9-3">产品交易</el-menu-item>
                        </el-submenu>
                    </el-menu-item-group>
                </el-menu>
                <div class="sourceBtn"><button type="button">已购买资源</button></div>
            </VuePerfectScrollbar>
        </aside>
        <section class="section fl">
            <header class="header">
                <router-link to="/platform/home">Go Home</router-link>
                <router-link to="/platform/newRelease">Go NewRelease</router-link>
            </header>
            <VuePerfectScrollbar v-scroll class="main">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </VuePerfectScrollbar>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "Platform",
        components: {VuePerfectScrollbar}
    }
</script>

<style lang="scss">
    .el-menu-item-group__title{
        color: #fff;
    }
    .el-menu-item.is-active{
        color: #fff;
        background-color: #37b3f9!important;
    }
    .el-submenu__title i,.el-menu-item i{
        color: #fff;
    }
</style>

<style lang="scss" scoped>
    #platform{
        height: 100%;
        .aside{
            width: 320px;
            height: 100%;
            background-color: #1670b9;
            .logo{
                height: 80px;
                text-align: center;
                border-bottom: 1px solid #fff;
                img{
                    margin-top: 18px;
                }
            }
            .nav{
                height: calc(100% - 82px);
                .navMenu{
                    border: none;
                }
                .sourceBtn{
                    padding: 30px 0 122px;
                    text-align: center;
                    width: 280px;
                    margin: 20px auto 0;
                    border-top: 1px solid #fff;
                    button{
                        height: 40px;
                        width: 220px;
                        border-radius: 20px;
                        background-color: #30a6ec;
                        color: #fff;
                    }
                }
            }
        }
        .section{
            width: calc(100% - 320px);
            height: 100%;
            .header{
                height: 80px;
                background-color: #fff;
            }
            .main{
                height: calc(100% - 106px);
                padding: 13px 10px;
            }
        }
    }
</style>
