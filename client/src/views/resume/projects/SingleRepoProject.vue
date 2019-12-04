<template>
    <div class="container">
        <img :src="this.project.hero.src" :alt="this.project.hero.alt" />
        <div>
            <h3>
                <a :href="this.project.hostedAt">{{ this.project.title }}</a>
            </h3>
            <ProjectDetails
                :description="this.project.description"
                :skills="this.project.skills"
                :stack="this.project.stack"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../resumeStyles";

h3 {
    display: inline-block;
    padding-bottom: 0.3rem;
}

a {
    text-decoration: underline;
}

.container {
    display: flex;
    flex-direction: row;
    > img {
        max-width: 3rem;
        max-height: 3rem;
        margin-right: 1.5rem;
        margin-top: 0.3rem;
    }
}

@media print {
    a::after {
        display: inline;
        content: attr(href);
        font-size: 0.7rem;
        padding-left: 0.5rem;
        text-decoration: none;
    }
}

@media screen and (max-width: 480px) {
    article {
        padding-left: 0.1rem !important;
        padding-top: 1.5rem;
    }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Project, Technology } from "./projects";
import ProjectDetails from "./ProjectDetails.vue";

@Component({
    components: {
        ProjectDetails
    }
})
export default class SingleRepoProject extends Vue {
    @Prop() private project!: Project;
}
</script>
