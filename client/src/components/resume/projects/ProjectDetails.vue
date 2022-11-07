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
                <a target="_blank" :href="urlForTech(tech)" class="technology">
                    <p>{{ nameOfTech(tech) }}</p>
                    <img :src="srcForTech(tech)" />
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "../resumeStyles";

.skills {
    margin-top: -0.1rem;
}

$stack-height: 1.8rem;

.stack {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: flex-start;
    margin-top: 0.6rem;
    flex-wrap: wrap;

    .technology {
        position: relative;
        margin-right: 1rem;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        width: $stack-height;
    }

    img {
        display: block;
        height: $stack-height;
        width: $stack-height;
    }

    p {
        font-size: 0.6em;
        display: block;
        text-align: center;
    }
}

@media screen and (max-width: 480px) {
    .stack {
        .technology {
            padding-bottom: 0.3rem;
        }
    }
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

    public urlForTech(tech: Technology) {
        return technologies[tech].url;
    }
}
</script>
