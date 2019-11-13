<template>
    <article>
        <div>
            <div class="project-container">
                <img :src="hero.src" :alt="hero.alt" />
                <div>
                    <h3>
                        <a :href="hostedAt">{{ title }}</a>
                    </h3>
                    <h5>{{ description }}</h5>
                    <ul class="list-with-bullets">
                        <li v-for="(skill, index) in skills" :key="index">
                            {{ skill }}
                        </li>
                    </ul>
                </div>
                <ul class="stack">
                    <li v-for="({ src, name }, index) of stack" :key="index">
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

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResumeProjects extends Vue {
    @Prop() private hero!: { src: string; alt: string };
    @Prop() private hostedAt!: string;
    @Prop() private title!: string;
    @Prop() private description!: string;
    @Prop() private skills!: string[];
    @Prop() private stack!: { src: string; name: string }[];
}
</script>
