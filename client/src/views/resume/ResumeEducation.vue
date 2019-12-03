<template>
    <section class="aside-section">
        <h2>Education</h2>
        <ResumeInstitution
            class="aside-content"
            v-for="(institution, key) in this.institutions"
            :institution="institution"
            :key="key"
        />
    </section>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeInstitution from "./ResumeInstitution.vue";
import { institutions } from "./institutions";

@Component({
    components: { ResumeInstitution }
})
export default class ResumeEducation extends Vue {
    public institutions = institutions;
}
</script>
