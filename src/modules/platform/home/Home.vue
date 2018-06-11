<template>
    <TemplateThree/>
</template>

<script>
    import TemplateOne from '../../../components/TemplateOne'
    import TemplateTwo from '../../../components/TemplateTwo'
    import TemplateThree from '../../../components/TemplateThree'
    import TemplateFour from '../../../components/TemplateFour'

    export default {
        name: "Home",
        components: {TemplateOne,TemplateTwo,TemplateThree,TemplateFour}
    }
</script>

<style lang="scss" scoped>

</style>
