<template>
    <div>
        <h5 v-if="this.description">
            {{ this.description }}
        </h5>
        <ul v-if="this.skills" class="skills list-with-bullets">
            <li v-for="(skill, key) in this.skills" :key="key">
                {{ skill }}
            </li>
        </ul>
        <ul v-if="this.stack" class="stack">
            <li v-for="(tech, key) in this.stack" :key="key">
                <p>{{ nameOfTech(tech) }}</p>
                <img :src="srcForTech(tech)" :alt="name" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "../resumeStyles";

.skills {
    margin-top: -0.1rem;
}

.stack {
    $stack-height: 1.8rem;

    display: flex;
    flex-direction: row;
    overflow: hidden;
    height: $stack-height;
    justify-content: flex-start;
    margin-top: 0.3rem;
    flex-wrap: wrap;

    li {
        position: relative;
        margin-right: 1rem;
        display: flex;
        flex-direction: row;
    }

    img {
        display: block;
        height: $stack-height;
        width: $stack-height;
    }

    p {
        writing-mode: vertical-rl;
        text-orientation: sideways;
        font-size: 0.6em;
    }
}

.stack-square {
    max-width: 100px;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { technologies, Technology } from "./Technology";

@Component
export default class ProjectDetails extends Vue {
    @Prop() description?: string;
    @Prop() skills?: string[];
    @Prop() stack?: Technology;

    get flexRow() {
        return this.skills && this.stack;
    }

    public nameOfTech(tech: Technology) {
        return technologies[tech].name;
    }

    public srcForTech(tech: Technology) {
        return technologies[tech].src;
    }
}
</script>
