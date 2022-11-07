<template>
    <section class="main-section">
        <h2>{{ this.title }}</h2>
        <div class="main-content">
            <ResumeProject
                v-for="(project, key) in this.projects"
                :key="key"
                :project="project"
                class="project"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../resumeStyles";

.project {
    padding-bottom: 1rem;
}
.project:last-of-type {
    padding-bottom: 0.3rem;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeProject from "./ResumeProject.vue";
import { Project } from "./Project";

@Component({
    components: {
        ResumeProject
    }
})
export default class ResumeProjects extends Vue {
    @Prop() private title!: string;
    @Prop() private projects!: Project[];
}
</script>
