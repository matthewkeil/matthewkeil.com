<template>
    <section class="main-section">
        <h2>Projects</h2>
        <ResumeProject
            v-for="(project, key) in this.projects"
            :key="key"
            class="main-content"
            :project="project"
        />
    </section>
</template>

<style lang="scss" scoped>
@import "../resumeStyles";

.main-content:last-of-type {
    padding-bottom: 1rem;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeProject from "./ResumeProject.vue";
import { resumeService } from "../resumeService";

@Component({
    components: {
        ResumeProject
    }
})
export default class ResumeProjects extends Vue {
    public projects = resumeService.projects;
}
</script>
