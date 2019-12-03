<template>
    <article>
        <div>
            <div class="project-container">
                <img
                    :src="this.project.hero.src"
                    :alt="this.project.hero.alt"
                />
                <div>
                    <h3>
                        <a :href="this.project.hostedAt">{{
                            this.project.title
                        }}</a>
                    </h3>
                    <h5>{{ this.project.description }}</h5>
                    <ul class="list-with-bullets">
                        <li
                            v-for="(skill, index) in this.project.skills"
                            :key="index"
                        >
                            {{ skill }}
                        </li>
                    </ul>
                </div>
                <ul class="stack">
                    <li
                        v-for="(name, index) in this.project.stack"
                        :key="index"
                    >
                        <div>
                            <img :src="srcFromName(name)" :alt="name" />
                            <p>{{ name }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";

article {
    padding-top: 2rem;
    padding-left: 0.5rem;
}

article:first-of-type {
    padding-top: 0.5rem;
}

h3 {
    display: inline-block;
    padding-bottom: 0.3rem;
}

h5 {
    padding-bottom: 0.3rem;
}

a {
    text-decoration: underline;
}

.project-container {
    display: flex;
    flex-direction: row;

    > div {
        flex: 1 1 auto;
    }

    > img {
        max-width: 3rem;
        max-height: 3rem;
        margin-right: 1.5rem;
        margin-top: 0.3rem;
    }

    li {
        font-size: 0.8rem;
    }
}

.stack {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-top: 0.2rem;

    li {
        width: 2.3rem;
        height: 2.2rem;
        overflow: hidden;
        margin-left: 0.6rem;
        margin-top: 0.8rem;
    }

    img {
        display: block;
        height: 24px;
        margin: 0 auto;
        margin-bottom: 0.1rem;
    }

    p {
        font-size: 0.5rem;
        text-align: center;
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
import { IResumeProject, Technology } from "./projects";
import htmlSource from "../../assets/technologies/html.png";

@Component
export default class ResumeProject extends Vue {
    @Prop() private project!: IResumeProject;

    public srcFromName(name: Technology) {
        switch (name) {
            case Technology.HTML:
                return htmlSource;
            default:
                return `/technologies/${name
                    .toLowerCase()
                    .replace(" ", "-")}.png`;
        }
    }
}
</script>
