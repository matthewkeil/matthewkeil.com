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
                        v-for="({ src, name }, index) in this.project.stack"
                        :key="index"
                    >
                        <div>
                            <img :src="src" :alt="name" />
                            <p>{{ name }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
.project-container {
    display: flex;
    flex-direction: row;
}

.project-container > div {
    flex: 1 1 auto;
}

.project-container > img {
    max-width: 3rem;
    max-height: 3rem;
    margin-right: 1.5rem;
    margin-top: 0.3rem;
}

.project-container li {
    font-size: 0.8rem;
}

.stack {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-top: 0.2rem;
}

.stack li {
    width: 2.3rem;
    height: 2.2rem;
    overflow: hidden;
    margin-left: 0.6rem;
    margin-top: 0.8rem;
}

.stack img {
    display: block;
    height: 24px;
    margin: 0 auto;
    margin-bottom: 0.1rem;
}

.stack p {
    font-size: 0.5rem;
    text-align: center;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResumeProject extends Vue {
    @Prop() private project!: {
        title: string;
        description: string;
        hostedAt: string;
        hero: {
            src: string;
            alt: string;
        };
        skills: string[];
        stack: {
            scr: string;
            name: string;
        }[];
    };
}
</script>
