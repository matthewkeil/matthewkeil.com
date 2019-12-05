<template>
    <div>
        <h4>{{ this.institution.name }}</h4>
        <h5>{{ this.institution.program }}</h5>
        <h6>{{ this.institution.graduation }}</h6>
        <h6>{{ this.institution.description }}</h6>
    </div>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";

div {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Institution } from "./Institution";

@Component
export default class ResumeInstitution extends Vue {
    @Prop() private institution!: Institution;
}
</script>
