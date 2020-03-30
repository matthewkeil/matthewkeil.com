<template>
    <div class="project-container">
        <img :src="this.project.hero.src" :alt="this.project.hero.alt" />
        <div>
            <h3>
                <a :href="this.project.hostedAt">{{ this.project.title }}</a>
            </h3>
            <div v-if="this.project.multiRepo">
                <ul
                    v-if="this.project.skills"
                    :class="this.project.skills ? 'list-with-bullets' : ''"
                >
                    <li v-for="(skill, key) in this.project.skills" :key="key">
                        {{ skill }}
                    </li>
                </ul>
                <ul class="repos">
                    <li
                        v-for="(repo, key) in this.project.multiRepo"
                        :key="key"
                    >
                        <ProjectDetails
                            :description="repo.description"
                            :skills="repo.skills"
                            :stack="repo.stack"
                            class="details"
                        />
                    </li>
                </ul>
            </div>
            <ProjectDetails
                v-else
                :description="this.project.description"
                :skills="this.project.skills"
                :stack="this.project.stack"
                class="details"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../resumeStyles";

.project-container {
    display: flex;
    flex-direction: row;

    > img {
        max-width: 3rem;
        max-height: 3rem;
        margin-right: 1.5rem;
        margin-top: 0.3rem;
    }

    > div {
        flex-direction: column;

        h3 {
            display: inline-block;
        }
    }

    li {
        font-size: 0.8rem;
    }
}

.repos {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    li {
        width: 100%;
        overflow: hidden;
        padding-bottom: 0.5rem;

        &:last-of-type {
            padding-bottom: 0;
        }
    }
}

.details {
    padding-top: 0.3rem;
}

@media print {
    a::after {
        display: inline;
        content: attr(href);
        font-size: 0.7rem;
        padding-left: 1rem;
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
import { Project } from "./Project";
import ProjectDetails from "./ProjectDetails.vue";

@Component({
    components: { ProjectDetails }
})
export default class ResumeProject extends Vue {
    @Prop() private project!: Project;
}
</script>
