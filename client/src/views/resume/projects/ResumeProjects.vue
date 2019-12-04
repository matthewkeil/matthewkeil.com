<template>
    <section class="main-section">
        <h2>Projects</h2>
        <ResumeProject
            v-for="(project, key) in this.projects"
            :key="key"
            class="main-content resume-project"
            :project="project"
        />
    </section>
</template>

<style lang="scss" scoped>
@import "../resumeStyles";

.resume-project {
    padding-bottom: 1.3rem;
}

.resume-project:last-of-type {
    padding-bottom: 0.7rem;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeProject from "./ResumeProject.vue";
import { projects } from "./projects";

@Component({
    components: {
        ResumeProject
    }
})
export default class ResumeProjects extends Vue {
    public projects = projects;
}
</script>
