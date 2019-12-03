<template>
    <section class="main-section">
        <h2>Projects</h2>
        <resume-project
            class="main-content"
            v-for="(project, key) in this.projects"
            :project="project"
            :key="key"
        />
    </section>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeProject from "./ResumeProject.vue";
import { IResumeProject, projects } from "./projects";

@Component({
    components: {
        ResumeProject
    }
})
export default class ResumeProjects extends Vue {
    public projects: IResumeProject[] = projects;
}
</script>
