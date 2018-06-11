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
                <el-button type="primary">搜索</el-button>
            </div>
        </header>
        <section class="section clear">
            <div class="tableList fl">
                <ul>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">传感器名称</strong>
                            <span class="fr">工作状态：正常</span>
                        </h1>
                        <p class="clear">
                            <span class="fl">项目名称：平镇高速公路项目</span>
                            <span class="fl">地点：佛殿山2号隧道右线YK9+791处A测点</span>
                        </p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">传感器名称</strong>
                            <span class="fr">工作状态：正常</span>
                        </h1>
                        <p class="clear">
                            <span class="fl">项目名称：平镇高速公路项目</span>
                            <span class="fl">地点：佛殿山2号隧道右线YK9+791处A测点</span>
                        </p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">传感器名称</strong>
                            <span class="fr">工作状态：正常</span>
                        </h1>
                        <p class="clear">
                            <span class="fl">项目名称：平镇高速公路项目</span>
                            <span class="fl">地点：佛殿山2号隧道右线YK9+791处A测点</span>
                        </p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">传感器名称</strong>
                            <span class="fr">工作状态：正常</span>
                        </h1>
                        <p class="clear">
                            <span class="fl">项目名称：平镇高速公路项目</span>
                            <span class="fl">地点：佛殿山2号隧道右线YK9+791处A测点</span>
                        </p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">传感器名称</strong>
                            <span class="fr">工作状态：正常</span>
                        </h1>
                        <p class="clear">
                            <span class="fl">项目名称：平镇高速公路项目</span>
                            <span class="fl">地点：佛殿山2号隧道右线YK9+791处A测点</span>
                        </p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">传感器名称</strong>
                            <span class="fr">工作状态：正常</span>
                        </h1>
                        <p class="clear">
                            <span class="fl">项目名称：平镇高速公路项目</span>
                            <span class="fl">地点：佛殿山2号隧道右线YK9+791处A测点</span>
                        </p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">传感器名称</strong>
                            <span class="fr">工作状态：正常</span>
                        </h1>
                        <p class="clear">
                            <span class="fl">项目名称：平镇高速公路项目</span>
                            <span class="fl">地点：佛殿山2号隧道右线YK9+791处A测点</span>
                        </p>
                    </li>
                </ul>
                <footer class="footer clear">
                    <el-pagination
                        class="fr"
                        background
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </footer>
            </div>
            <div class="newData fr">
                <header>最新传入数据</header>
                <ul>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                    <li>
                        <h1 class="clear">
                            <strong class="fl">平镇高速公路项目</strong>
                            <span class="fr">佛殿山2号隧道右线 YK9+791处A测点</span>
                        </h1>
                        <p>2018年6月5日12:35:20完成地表沉降数据采样</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "TemplateFour"
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        padding: 22px 40px;
        margin-bottom: 10px;
        >div{
            margin-right: 50px;
        }
        .searchInput{
            width: 215px;
            margin-right: 10px;
        }
    }
    .section{
        .tableList{
            width: 1080px;
            li{
                background-color: #fff;
                padding: 10px 24px;
                &:not(:last-child){
                    margin-bottom: 10px;
                }
                h1{
                    height: 40px;
                    line-height: 40px;
                    strong{
                        font-size: 20px;
                        color: #37b3f9;
                    }
                    span{
                        color: #3dbb7e;
                    }
                }
                p{
                    height: 30px;
                    line-height: 30px;
                    span{
                        width: 50%;
                    }
                }
            }
            .footer{
                margin-top: 10px;
                height: 32px;
                padding: 19px;
                background-color: #fff;
            }
        }
        .newData{
            padding-bottom: 10px;
            width: 490px;
            background-color: #fff;
            header{
                font-size: 20px;
                font-weight: bold;
                color: #37b3f9;
                height: 70px;
                line-height: 70px;
                text-align: center;
            }
            ul{
                padding: 0 26px;
                li{
                    background-color: #f3f6fb;
                    line-height: 30px;
                    padding: 0 14px;
                    &:not(:last-child){
                        margin-bottom: 10px;
                    }
                    h1{
                        strong{
                            color: #37b3f9;
                        }
                    }
                    p{
                        text-align: right;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>
