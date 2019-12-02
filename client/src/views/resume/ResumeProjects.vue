<template>
    <section>
        <h2>Projects</h2>
        <resume-project
            class="project"
            v-for="(project, key) in this.projects"
            :project="project"
            :key="key"
        />
    </section>
</template>

<style>
#projects article {
    padding-top: 2rem;
    padding-left: 0.5rem;
}

#projects article:first-of-type {
    padding-top: 0.5rem;
}

#projects h3 {
    display: inline-block;
    padding-bottom: 0.3rem;
}

#projects h5 {
    padding-bottom: 0.3rem;
}

#projects a {
    text-decoration: underline;
}
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
