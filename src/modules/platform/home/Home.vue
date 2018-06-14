<template>
    <div>
        <Position map-name="四川" :map-data="mapData"/>
        <StorageLocation :point-data="pointData" :line-data="lineData"/>
    </div>
</template>

<script>
    import TemplateOne from '../../../components/TemplateOne'
    import TemplateTwo from '../../../components/TemplateTwo'
    import TemplateThree from '../../../components/TemplateThree'
    import TemplateFour from '../../../components/TemplateFour'
    import StorageLocation from '../../../components/StorageLocation'
    import Position from '../../../components/Position'

    export default {
        name: "Home",
        components: {TemplateOne,TemplateTwo,TemplateThree,TemplateFour,StorageLocation,Position},
        myOption: 'hello!',
        data() {
            return{
                mapData: [
                    {name: '成都1',value: [103.9526, 30.7617],company:'迅鳐成都科技有限公司',date:'2018/06/13 至 2018/06/13',evaluation:'非常好，非常棒。非常好，非常棒。非常好，非常棒。非常好，非常棒。'},
                    {name: '成都2',value: [101.9526, 28.7617],company:'迅鳐成都科技有限公司',date:'2018/06/13 至 2018/06/13',evaluation:'大家好才是真的好'},
                    {name: '成都3',value: [101.9526, 32.7617],company:'迅鳐成都科技有限公司',date:'2018/06/13 至 2018/06/13',evaluation:'广州好迪是真的好'}
                ],
                pointData: [
                    {name: '北京', value: [116.4551, 40.2539]},
                    {name: '合肥',value: [117.29, 32.0581]},
                    {name: '贵阳',value: [106.6992, 26.7682]}
                ],
                lineData: [
                    [
                        {coord: [116.4551, 40.2539]},
                        {coord: [117.29, 32.0581]}
                    ],
                    [
                        {coord: [117.29, 32.0581]},
                        {coord: [106.6992, 26.7682]}
                    ],
                    [
                        {coord: [106.6992, 26.7682]},
                        {coord: [116.4551, 40.2539]}
                    ]
                ]
            }
        },
        mounted() {
            let symbolProperty = Symbol("abc");
            let obj1 = {a:'1',b:'2',c:'3'};
            obj1[symbolProperty] = 4;
            let obj2 = {d:'4',e:'5'};
            // 遍历对象的属性--且仅遍历私有属性(hasOwnProperty)
            console.log(Object.keys(obj1));
            // 将所有可枚举属性的值从一个或多个源对象复制到目标对象
            // 第一个参数是目标对象，后面的是源对象
            // 1、返回一个新对象，可以用于对象复制（缺点：假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值）
            // 2、合并对象，并且相同的属性且该属性的value为最后一个包含该属性的源对象的value
            // 3、继承属性和不可枚举属性是不能拷贝的
            // 4、异常会打断后续拷贝任务
            let obj3 = Object.assign(obj2, obj1);
            console.log(obj3);
            // Symbol()不能使用new
            // 对象的key只有两种，字符串和symbol，并且每一个symbol都是独一无二的
            let firstName = Symbol("first name");
            let firstName1 = Symbol("first name");
            let person = {};
            person[firstName] = "huochai";
            person[firstName1] = "huochai1";
            // 返回一个给定对象自身可枚举属性的键值对数组
            console.log(Object.entries(obj1));
            // 方法可以冻结一个对象，
            // 冻结指的是不能向这个对象添加新的属性，
            // 不能修改其已有属性的值，
            // 不能删除已有属性，
            // 以及不能修改该对象已有属性的可枚举性、可配置性、可写性。
            // 也就是说，这个对象永远是不可变的。该方法返回被冻结的对象
            let freeObj = {a:'1',b:'2',c:'3'};
            Object.freeze(freeObj);
            // 查看指定对象的属性的描述
            console.log(Object.getOwnPropertyDescriptor(obj1, 'a'));
            // 查看指定对象的所有属性的描述
            console.log(Object.getOwnPropertyDescriptors(obj1));
            // 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
            console.log(Object.getOwnPropertyNames(obj1));
            // 返回一个给定对象自身的所有 Symbol 属性的数组。
            console.log(Object.getOwnPropertySymbols(obj1));
            // 返回指定对象的原型（内部[[Prototype]]属性的值）
            console.log(Object.getPrototypeOf(obj1));
            // 判断两个值是否是相同的值。
            console.log(Object.is(1, '1'));
            // 判断指定对象是否是可以扩展的--即是否可以添加新的属性
            console.log(Object.isExtensible(obj1));
            console.log(Object.isExtensible(freeObj));
            // 判断一个对象是否被冻结。
            console.log(Object.isFrozen(freeObj));
            // 判断一个对象是否被密封。
            console.log(Object.isSealed(obj1));
            // 返回一个由一个给定对象的自身可枚举属性组成的数组
            console.log(Object.keys(obj1));
            // 让一个对象变的不可扩展，也就是永远不能再添加新的属性。
            let extendsObj = {a:1,b:2};
            Object.preventExtensions(extendsObj);
            // 指示对象自身属性中是否具有指定的属性
            obj1.hasOwnProperty('a');
            // 返回值为该对象的原始值。
            console.log(obj1.valueOf());
            // 封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变
            let sealObj = {a:1,b:2};
            console.log(Object.seal(sealObj));
            // 返回一个给定对象自己的所有可枚举属性值的数组
            console.log(Object.values(obj1));

            // Function
            let module = {
                x: 42,
                getX: function() {
                    return this.x;
                }
            };
            console.log(module.getX());
            let func = module.getX;
            // console.log(func());// 报错
            // 因为this的指向为全局
            // bind提前绑定this指向，并且返回绑定过后的函数，且原函数不会发生绑定，即指定的this值和初始化参数改造的原函数拷贝
            let func1 = func.bind(module);
            //console.log(func());
            console.log(func.bind(module)());
        }
    }
</script>

<style lang="scss" scoped>

</style>
